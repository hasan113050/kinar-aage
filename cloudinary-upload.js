const CLOUDINARY_CLOUD_NAME =
  "kphwdeeh";

const CLOUDINARY_UPLOAD_PRESET =
  "kinar_aage_unsigned";


export async function uploadImageToCloudinary(
  file
) {

  if (!file) {
    throw new Error(
      "No image file selected."
    );
  }


  const formData =
    new FormData();


  formData.append(
    "file",
    file
  );


  formData.append(
    "upload_preset",
    CLOUDINARY_UPLOAD_PRESET
  );


  const response =
    await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData
      }
    );


  if (!response.ok) {

    const errorData =
      await response.json()
        .catch(
          () => ({})
        );


    throw new Error(
      errorData?.error?.message ||
      "Cloudinary upload failed."
    );

  }


  const data =
    await response.json();


  return {

    url:
      data.secure_url,

    publicId:
      data.public_id,

    width:
      data.width,

    height:
      data.height,

    format:
      data.format

  };

}