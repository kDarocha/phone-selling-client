import React, {
  // types
  FormEvent,

  // hooks
  useState
} from 'react';
import { Form, Input, Icon, Button, Alert } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { withRouter, RouteComponentProps } from 'react-router-dom';

/**
 * Styles imports
 */
import styles from './styles.module.scss';

/**
 * Helpers imports
 */
import Auth from 'Helpers/Auth';

interface LoginProps extends FormComponentProps, RouteComponentProps {
}

function Login({ form, history }: LoginProps) {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isCredentialsInvalid, setIsCredentialsInvalid ] = useState(false);
  const { getFieldDecorator } = form;

  function submitHandler(event: FormEvent) {
    event.preventDefault();
    
    // Disabled submit button
    setIsLoading(true);

    const auth = new Auth();

    auth.login(email, password)
      .then(() => {
        history.push('/admin');
      })
      .catch(() => {
        setIsCredentialsInvalid(true);
        setIsLoading(false);
      })
  }

  return (
    <div className={styles['Login']}>
      <Form className={styles['login-form']} onSubmit={submitHandler}>
        <h1>Login</h1>

        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles['login-form-button']} loading={isLoading}>
            Log in
          </Button>
        </Form.Item>

        {isCredentialsInvalid && <Alert message="Your credentials are not valid" type="error" />}
      </Form>
    </div>
  );
}

export default withRouter(Form.create<FormComponentProps>({ name: 'normal_login' })(Login));
