/* import axios from 'axios';

 const uploadToCloudinary = async (file) => {
   const form = new FormData();
   form.append('file', file);
   form.append('upload_preset', 'products');

   try {
     const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
       form
     );
     if (response.status === 200 && response.data.url) {
       return response.data.url;
     } else {
       throw new Error('Failed to upload image to Cloudinary');
     }
   } catch (error) {
     throw new Error('Error during image upload: ' + error.message);
   }
 };

 export default uploadToCloudinary;*/

//vanessa
/*import axios from 'axios';
import FormData from 'form-data';


const uploadToCloudinary = async (file) => {
  const form = new FormData();
  form.append('file', file);
  //form.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET); // Make sure this env variable exists
  form.append('upload_preset', 'default'); 

  try {
    const response = await axios.post(
      'https://api.cloudinary.com/v1_1/dcvp8ix2l/image/upload',
      form,
      {
        headers: {
          ...form.getHeaders(),
        },
      }
    );

    if (response.status === 200 && response.data.secure_url) {
      return response.data.secure_url; // Return secure_url for better security
    } else {
      throw new Error('Failed to upload image to Cloudinary');
    }
  } catch (error) {
    throw new Error('Error during image upload: ' + error.message);
  }
};

export default uploadToCloudinary;*/


import axios from 'axios';

const uploadToCloudinary = async (file) => {
  const form = new FormData();
  form.append('file', file);
  form.append('upload_preset', 'default'); // Replace 'default' with your actual upload preset if needed

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
      form
    );

    if (response.status === 200 && response.data.secure_url) {
      return response.data.secure_url; // Return secure_url for better security
    } else {
      throw new Error('Failed to upload image to Cloudinary');
    }
  } catch (error) {
    throw new Error('Error during image upload: ' + error.message);
  }
};

export default uploadToCloudinary;