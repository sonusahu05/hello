import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import AdminNavbar from '../AdminNavbar';
import BottomNavbar from '../AdminBottomNavBar';
import imageCompression from 'browser-image-compression'; // Import the library

const Client = () => {
  const [image, setImage] = useState(null);
  const [preference, setPreference] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
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
      if (!preference || !image) {
        setError('Please select an image and specify a preference number.');
        return;
      }

      setUploading(true);

      // Upload image to Firebase Storage
      const storage = getStorage();
      const storageRef = ref(storage, `client/${image.name}`);
      await uploadBytes(storageRef, image);

      // Get image download URL
      const downloadURL = await getDownloadURL(storageRef);
      setImageUrl(downloadURL);

      // Store document in Firestore with client preference and image URL
      const db = getFirestore();
      await addDoc(collection(db, 'client'), {
        preference,
        imageUrl: downloadURL,
      });

      // Clear form after successful upload
      setPreference(0);
      setImage(null);
      setImageUrl('');
    } catch (error) {
      setError('Error uploading image and creating document. Please try again.');
      console.error('Error uploading image and creating document:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
        <AdminNavbar />
        
      <div className="container mx-auto px-4 my-6 mt-10">
        <div className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Add Client Image</h2>
      <input
        type="number"
        placeholder="Preference Number"
        value={preference}
        onChange={(e) => setPreference(e.target.value)}
        className="w-full border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring focus:border-red_color_op"
        />
      <div className="mb-4">
        <input type="file" onChange={handleImageChange} className="hidden" id="image-upload" />
        <label htmlFor="image-upload" className="cursor-pointer bg-red_color_op text-white rounded-md py-2 px-4 hover:bg-red_color">
          Select Image
        </label>
        {imageUrl && (
            <div className="mt-4">
              <p className="font-semibold">Selected Image:</p>
              <img src={imageUrl} alt="Selected" className="mt-2 rounded-md shadow-md" style={{ maxWidth: "300px" }} />
            </div>
          )}
      </div>
      <button onClick={handleUpload} disabled={uploading} className="bg-red_color_op text-white rounded-md py-2 px-4 hover:bg-red_color">
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
    <BottomNavbar />
      </>
  );
};

export default Client;
