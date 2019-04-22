import { useState } from 'react';

export function useImageUpload() : any {
  const [ imageUrl, setImageUrl ] = useState('');
  const [ isUploading, setIsUploading ] = useState(false);

  function uploadImage(info: any): any {
    if (info.file.status === 'uploading') {
      setIsUploading(true);

      return;
    }

    if (info.file.status === 'done') {
      setImageUrl(info.file.response);
      setIsUploading(false);
    }
  }

  return [ imageUrl, isUploading, uploadImage ];
}
