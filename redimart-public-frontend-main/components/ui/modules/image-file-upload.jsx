import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Controller } from "react-hook-form";

export const ImageFileUpload = ({ name, value, control, ...rest }) => {
  return (
    <Controller
      render={({ field: { onChange } }) => (
        <Dropzone onChange={(e) => onChange(e.target.files[0])} {...rest} />
      )}
      name={name}
      control={control}
      defaultValue={value}
    />
  );
};

const Dropzone = ({ onChange, ...rest }) => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log({ acceptedFiles });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/jpeg, image/png",
    onDrop,
    ...rest,
  });

  return (
    <div {...getRootProps()}>
      <input
        className="form-control d-block"
        {...getInputProps({ onChange })}
      />
      {/*{isDragActive ? (*/}
      {/*  <p>Drop the files here ...</p>*/}
      {/*) : (*/}
      {/*  <p>Drag 'n' drop some files here, or click to select files</p>*/}
      {/*)}*/}
    </div>
  );
};
