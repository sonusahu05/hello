import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import AdminNavbar from "../AdminNavbar";
import BottomNavbar from "../AdminBottomNavBar";
import imageCompression from "browser-image-compression";

const Projects = () => {
  const [projectName, setProjectName] = useState("");
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = async (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const compressedImages = [];
      const compressedImageUrls = [];
  
      try {
        for (const file of filesArray) {
          const compressedImage = await imageCompression(file, {
            maxSizeMB: 0.5, // Set your desired maximum file size in MB
            maxWidthOrHeight: 1920, // Set your desired maximum width or height
          });
          compressedImages.push(compressedImage);
          compressedImageUrls.push(URL.createObjectURL(compressedImage));
        }
  
        setImages(compressedImages);
        setImageUrls(compressedImageUrls);
      } catch (error) {
        console.error('Error compressing images:', error);
        setError('Error compressing images. Please try again.');
      }
    }
  };

  const handleUpload = async () => {
    setError(null);
    try {
      if (!projectName || categories.length === 0 || images.length === 0) {
        setError("Please fill all fields and select images.");
        return;
      }

      setUploading(true);

      // Upload images to Firebase Storage
      const storage = getStorage();
      const imagesPromises = images.map(async (image) => {
        const storageRef = ref(storage, `projects/${projectName}/${image.name}`);
        await uploadBytes(storageRef, image);
        return getDownloadURL(storageRef);
      });

      const urls = await Promise.all(imagesPromises);
      setImageUrls(urls);

      // Store document in Firestore with project information
      const db = getFirestore();
      await addDoc(collection(db, "projects"), {
        projectName,
        categories,
        imageUrls: urls,
      });

      // Clear form after successful upload
      setProjectName("");
      setCategories([]);
      setImages([]);
      setImageUrls([]);
    } catch (error) {
      setError(
        "Error uploading images and creating document. Please try again."
      );
      console.error("Error uploading images and creating document:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
        <AdminNavbar />
      <div className="container mx-auto px-4 my-6 mt-10">
        <div className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Add Project</h2>
          <input
            type="text"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring focus:border-red_color_op"
          />
          <input
            type="text"
            placeholder="Categories (comma-separated)"
            value={categories}
            onChange={(e) => setCategories(e.target.value.split(","))}
            className="w-full border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring focus:border-red_color_op"
          />
           <div className="mb-4">
            <input
              type="file"
              onChange={handleImageChange}
              className="hidden"
              id="image-upload"
              multiple
            />
            <label
              htmlFor="image-upload"
              className="cursor-pointer bg-red_color_op text-white rounded-md py-2 px-4 hover:bg-red_color"
            >
              Select Image(s)
            </label>
            {imageUrls.length > 0 && (
              <div className="mt-4">
                <p className="font-semibold">Selected Image(s):</p>
                <div className="flex flex-wrap">
                  {imageUrls.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt={`Selected ${index}`}
                      className="mt-2 rounded-md shadow-md mr-4 mb-4"
                      style={{ maxWidth: "150px" }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <button
            onClick={handleUpload}
            disabled={uploading}
            className="bg-red_color_op text-white rounded-md py-2 px-4 hover:bg-red_color"
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
      <BottomNavbar />
    </>
  );
};

export default Projects;
