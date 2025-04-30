import React from 'react';

const FileUploader = ({ handleUpload, uploadFile }) => {
  return (
    <div className="mb-4">
      <input
        type="file"
        onChange={handleUpload}
        className="border rounded px-4 py-2 w-full"
      />
      {uploadFile && <p className="text-sm mt-2">Uploaded: {uploadFile.name}</p>}
    </div>
  );
};

export default FileUploader;
