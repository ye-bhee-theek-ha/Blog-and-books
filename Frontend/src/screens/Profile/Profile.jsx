import React from "react";
import { IconUser, IconBooks, IconHeart, IconEdit } from "@tabler/icons-react";
import Navbar from "../../components/navbar/navbar";
import Button from "../../components/button/button"; // Example import for button, adjust as needed


const Profile = () => {
    // Placeholder data
    const profileData = {
      name: "John Doe",
      email: "john.doe@example.com",
      profilePic: "https://via.placeholder.com/150", // Example URL for profile picture
      savedBooks: [
        { id: 1, title: "Book 1", author: "Author 1" },
        { id: 2, title: "Book 2", author: "Author 2" },
        { id: 3, title: "Book 3", author: "Author 3" },
      ],
      likedBlogs: [
        "https://picsum.photos/200/150",
        "https://picsum.photos/200/150",
        "https://picsum.photos/200/150",
      ],
    };
  
    const handleUpdateProfile = () => {
      // Placeholder function for updating profile
      alert("Update profile functionality will be implemented here.");
    };
  
    return (
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <div className="container mx-auto py-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Profile Header */}
            <div className="bg-gray-800 text-white px-4 py-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={profileData.profilePic}
                    alt="Profile"
                    className="h-20 w-20 rounded-full"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{profileData.name}</h2>
                  <p className="text-gray-300">{profileData.email}</p>
                </div>
                <div className="ml-auto">
                  <Button onClick={handleUpdateProfile}>
                    <IconEdit className="inline-block w-5 h-5 -mt-1 mr-1" />
                    Update Profile
                  </Button>
                </div>
              </div>
            </div>
  
            {/* Profile Body */}
            <div className="p-6">
              {/* Saved Books */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Saved Books</h2>
                <div className="grid grid-cols-3 gap-4">
                  {profileData.savedBooks.map((book) => (
                    <div key={book.id} className="bg-white rounded-lg shadow p-4">
                      <h3 className="text-lg font-semibold">{book.title}</h3>
                      <p className="text-gray-600">By {book.author}</p>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Liked Blogs */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Liked Blogs</h2>
                <div className="grid grid-cols-3 gap-4">
                  {profileData.likedBlogs.map((blog, index) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                      <img src={blog} alt={`Liked Blog ${index + 1}`} className="w-full" />
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Personal Information (Placeholder) */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                <div className="bg-white rounded-lg shadow p-4">
                  <p className="text-gray-600">Placeholder for personal information.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Profile;
  