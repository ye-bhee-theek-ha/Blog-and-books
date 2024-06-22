import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import axios from "axios";

const UploadBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let image_as_base64 = URL.createObjectURL(e.target.files[0])

    ("title", title);
    ("author", author);
    ("description", description);
    ("coverImage", coverImage);

    try { 
      const response = await axios.post("/api/books/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Book uploaded successfully!");
    } catch (error) {
      console.error("There was an error uploading the book!", error);
      setMessage("Failed to upload book.");
    }
  };

  return (
    <div className="min-h-screen h-full w-full">
      <Navbar />
      <div className="w-full flex justify-center">
        <div className="max-w-[1200px] w-full justify-self-center my-12 bg-orange bg-opacity-75 border-2 border-mehroon text-mehroon font-Display px-4 mx-8 py-6 rounded-lg">
          <div className="overflow-hidden p-6 flex flex-col">
 
            <h2 className="text-profilehead font-bold mb-4">
              Upload a New Book
            </h2>

            {message && <p className="mb-4 border bg-offwhite bg-opacity-50 py-2 px-4 w-fit rounded-md self-end mr-20">{message}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 space-x-2">
                <div>
                  <label className="text-text">Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-1 border border-mehroon bg-orange rounded-lg ring-lorange text-offwhite font-Display text-btn focus:outline-none focus:ring focus:border-orange"
                    required
                  />
                </div>
                <div>
                  <label className="text-text">Author</label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full px-4 py-1 border border-mehroon bg-orange rounded-lg ring-lorange text-offwhite font-Display text-btn focus:outline-none focus:ring focus:border-orange"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-text">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full h-28 px-4 py-1 border border-mehroon bg-orange rounded-lg ring-lorange text-offwhite font-Display text-btn focus:outline-none focus:ring focus:border-orange"
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 justify-center ">
                <label class="block mx-auto">
                  <input t gbo9ype="file" class="block w-full text-sm text-offwhite
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-mehroon file:bg-opacity-90
                    hover:file:bg-opacity-100
                  "/>
                  hi
                </label>

                <button
                  type="submit"
                  className="w-fit mx-auto shadow bg-offwhite bg-opacity-25 border-2 text-mehroon font-medium hover:text-offwhite hover:bg-mehroon rounded-lg px-2"
                >
                  Upload Book
                </button>
              </div>
              

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadBook;
