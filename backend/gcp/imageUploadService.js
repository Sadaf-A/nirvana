const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
  keyFilename: './gcp/google-key.json', 
});

const bucketName = 'car_connect';

const uploadFile = async (buffer, destFileName, mimeType) => {
  try {
    const bucket = storage.bucket(bucketName);
    const file = bucket.file(destFileName);

    await file.save(buffer, {
      contentType: mimeType,
      resumable: false,
    });

    console.log(`File uploaded to ${bucketName}/${destFileName}`);
    return `https://storage.googleapis.com/${bucketName}/${destFileName}`;
  } catch (err) {
    console.error('Error uploading file:', err);
    throw err;
  }
};

module.exports = { uploadFile };
