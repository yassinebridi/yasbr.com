import { CheckCircleIcon, CloudIcon } from '@heroicons/react/outline';
import { CreateContactData } from '@utils';
import axios from 'axios';
import clsx from 'clsx';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import { UseFormSetValue } from 'react-hook-form';

let cancelTokenSource = axios.CancelToken.source();

export interface FileDropProps {
  setValue: UseFormSetValue<CreateContactData>;
  field: keyof CreateContactData;
}
const FileDrop: React.FC<FileDropProps> = ({ setValue, field }) => {
  const [progress, setProgress] = React.useState(0);
  const [isUploaded, setIsUploaded] = React.useState(false);

  const onDrop = React.useCallback(
    async (files) => {
      try {
        const data = new FormData();
        data.append('file', files[0]);
        data.append('folder', 'contact');
        data.append('upload_preset', 'contact');
        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/yasbr/image/upload`,
          data,
          {
            cancelToken: cancelTokenSource.token,
            onUploadProgress: (pe) => {
              const progress = Math.round((pe.loaded / pe.total) * 100);
              setProgress(progress);
            },
          }
        );

        const file = await res.data;

        setValue(field, `https://media.yasbr.com/upload/${file.public_id}`);
        setIsUploaded(true);
        setProgress(0);
      } catch (error) {
        console.log('error: ', error);
      }
    },
    [setValue, field]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={clsx(
        'p-8 cursor-pointer ringify transition',
        isDragActive
          ? 'bg-primary-300 dark:bg-primary-700'
          : 'dark:bg-primary-800 bg-primary-200'
      )}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <div className="flex flex-col items-center justify-center text-center">
          <CloudIcon className="w-16 h-16 text-primary-700 dark:text-primary-400" />
          <p color="text-primary-700 dark:text-primary-400">
            Drop the file here ...
          </p>
        </div>
      ) : progress > 0 ? (
        <div className="flex flex-col items-center text-center">
          <CloudIcon className="w-16 h-16 text-primary-700 dark:text-primary-400" />
          <p className="text-primary-700 dark:text-primary-400">
            The file is being uploaded, wait a bit ...
          </p>
          <div className="w-full my-4">
            <div className="relative pt-1">
              <div className="flex h-2 mb-4 overflow-hidden text-xs bg-primary-300">
                <div
                  style={{
                    width: `${progress}%`,
                  }}
                  className="flex flex-col justify-center text-center text-white shadow-none bg-primary-500 whitespace-nowrap"
                ></div>
              </div>
            </div>
          </div>
          {/* <button */}
          {/*   type="button" */}
          {/*   className="px-4 py-2 text-sm uppercase border-2 border-dashed rounded-none transition-all border-primary-900 hover:bg-primary-900 hover:text-white ring-black focus:outline-none focus:ring-2 ring-offset-white focus:ring-offset-4" */}
          {/*   onClick={(e) => { */}
          {/*     e.stopPropagation(); */}
          {/*     cancelTokenSource.cancel('Upload cancelled'); */}
          {/*     setIsUploaded(false); */}
          {/*     setProgress(0); */}
          {/*     console.log('cancel'); */}
          {/*   }} */}
          {/* > */}
          {/*   Cancel */}
          {/* </button> */}
        </div>
      ) : isUploaded ? (
        <div className="flex flex-col items-center text-center">
          <CheckCircleIcon className="w-16 h-16 text-primary-700 dark:text-primary-400" />
          <p className="text-primary-700 dark:text-primary-400">
            The brief file has been uploaded successfully.
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center text-center">
          <CloudIcon className="w-16 h-16 text-primary-700 dark:text-primary-400" />
          <p className="text-primary-700 dark:text-primary-400">
            Drag & drop the file here, or click to select a file
          </p>
        </div>
      )}
    </div>
  );
};

export default FileDrop;
