import axios from "axios";

const uploadImages = async (images: any) => {
  const responseUrls = [];

  for (const image of images) {
    const formData = new FormData();
    formData.append("file", image.file);
    formData.append("upload_preset", "my-uploads");

    try {
      const response = await axios.post(
      `https://api.cloudinary.com/v1_1/dlrbkffta/image/upload`,
        formData
      );

      responseUrls.push(response.data.secure_url);
    } catch (error: any) {
      console.error("Error uploading image:", error.message);
    }
  }

  return responseUrls;
};

export default uploadImages;
