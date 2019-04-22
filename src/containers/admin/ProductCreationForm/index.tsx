import React, {
  // hooks
  useEffect,
  useState,

  // types
  FormEvent
} from 'react';
import { connect } from 'react-redux';
import { Form, Input, Upload, Select, Icon, Modal } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

/**
 * Hooks import
 */
import { useImageUpload } from 'hooks/useImageUpload';

/**
 * Store imports
 */
import { AppState } from 'store';
import { BrandState } from 'store/Brand/types';
import { createProduct } from 'store/Product/actions';
import { fetchBrands } from 'store/Brand/actions';

interface ProductCreationFormProps extends FormComponentProps {
  brand: BrandState;
  dispatch: any;
  isModalVisible: boolean;
  onCloseModal: any;
}

const { REACT_APP_API_URL } = process.env;
const { REACT_APP_IMAGE_URL } = process.env;

function ProductCreationForm({ dispatch, brand, form, isModalVisible, onCloseModal }: ProductCreationFormProps) {
  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ brandId, setBrandId ] = useState('');
  const [ imageUrl, isUploading, uploadImage ] = useImageUpload();
  const { getFieldDecorator } = form;

  useEffect(() => {
    if (brand.list.length === 0) {
      dispatch(fetchBrands());
    }
  }, []);

  const uploadButton = (
    <div>
      <Icon type={isUploading ? 'loading' : 'plus'} />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  function submitHandler(event: FormEvent) {
    event.preventDefault();

    dispatch(createProduct(
      name,
      description,
      brandId,
      imageUrl,
      25
    ));

    onCloseModal();
  }

  return (
    <Modal
      title="Create a new product"
      visible={isModalVisible}
      onOk={submitHandler}
      onCancel={onCloseModal}
    >
      <Form onSubmit={submitHandler}>
        <Form.Item>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input the name of yout product!' }],
          })(
            <Input
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('description', {
            rules: [{ required: true, message: 'Please input the description of yout product!' }],
          })(
            <Input.TextArea
              placeholder="Description"
              onChange={(event) => setDescription(event.target.value)}
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('brandId', {
            rules: [{ required: true, message: 'Please choose a brand!' }],
          })(
            <Select placeholder="Choose a brand" onChange={(value: string) => setBrandId(value)}>
              {brand.list.map((brand) => (
                <Select.Option key={brand.id} value={brand.id}>
                  {brand.name}
                </Select.Option>
              ))}
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          <Upload
            name="Product image"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action={`${REACT_APP_API_URL}/upload-image-product`}
            onChange={uploadImage}
          >
            {imageUrl ? <img src={`${REACT_APP_IMAGE_URL}/storage/${imageUrl}`} alt="avatar" width="100%" /> : uploadButton}
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
}

const mapStateToProps = ({ brand }: AppState) => ({
  brand: brand
});

export default connect(mapStateToProps)(Form.create<FormComponentProps>({ name: 'create_product' })(ProductCreationForm));
