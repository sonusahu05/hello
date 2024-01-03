import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import AdminNavbar from "../AdminNavbar";
import BottomNavbar from "../AdminBottomNavBar";
import imageCompression from 'browser-image-compression'; // Import the library

const AdminFactory = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = async (e) => {
    if (e.target.files[0]) {
      try {
        const compressedImage = await imageCompression(e.target.files[0], {
          maxSizeMB: 0.5, // Set your desired maximum file size in MB
          maxWidthOrHeight: 1920, // Set your desired maximum width or height
        });
        setImage(compressedImage);
        setImageUrl(URL.createObjectURL(compressedImage));
      } catch (error) {
        console.error('Error compressing image:', error);
        setError('Error compressing image. Please try again.');
      }
    }
  };

  const handleUpload = async () => {
    setError(null);
    try {
      if (!title || !description || !image) {
        setError("Please fill all fields and select an image.");
        return;
      }

      setUploading(true);

      const timestamp = new Date().getTime().toString(); // Generate timestamp string

      // Create a unique filename using timestamp and file extension
      const fileExtension = image.name.split('.').pop();
      const filename = `${timestamp}.${fileExtension}`;

      // Upload image to Firebase Storage with the timestamp string as filename
      const storage = getStorage();
      const storageRef = ref(storage, `factory/${filename}`);
      await uploadBytes(storageRef, image);

      // Get image download URL
      const downloadURL = await getDownloadURL(storageRef);
      setImageUrl(downloadURL);

      // Store document in Firestore with title, description, and image URL
      const db = getFirestore();
      await addDoc(collection(db, "factory"), {
        title,
        description,
        imageUrl: downloadURL,
      });

      // Clear form after successful upload
      setTitle("");
      setDescription("");
      setImage(null);
      setImageUrl("");
    } catch (error) {
      setError("Error uploading image and creating document. Please try again.");
      console.error("Error uploading image and creating document:", error);
    } finally {
      setUploading(false);
    }
  };
  return (
    <>
      <AdminNavbar />
      <div className="max-w-lg mx-auto my-10 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Add Factory</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring focus:border-red_color_op"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring focus:border-red_color_op"
        />
        <div className="mb-4">
          <input type="file" onChange={handleImageChange} className="hidden" id="image-upload" />
          <label htmlFor="image-upload" className="cursor-pointer bg-red_color_op text-white rounded-md py-2 px-4 hover:bg-red_color">
            Select Image
          </label>
          {imageUrl && <img src={imageUrl} alt="Selected" className="mt-2 rounded-md shadow-md" style={{ maxWidth: "300px" }} />}
        </div>
        <button onClick={handleUpload} disabled={uploading} className="bg-red_color_op text-white rounded-md py-2 px-4 hover:bg-red_color">
          {uploading ? "Uploading..." : "Upload"}
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        
      </div>
      <BottomNavbar />
    </>
  );
};

export default AdminFactory;
