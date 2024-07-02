import React, { useEffect, useState } from "react";
import { IconUser, IconBooks, IconHeart, IconEdit } from "@tabler/icons-react";
import Navbar from "../../components/navbar/navbar";
import Button from "../../components/button/button"; 
import BookShelf from "../../components/bookshelf/bookshelf";
import Card from "../../components/card/Card";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Auth/Auth";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const { getToken, logout } = useAuth();
  const [profileData, setProfileData] = useState(null);

  const fetchProfileData = async () => {
    const token = getToken();
    try {
      const response = await axios.get("http://localhost:5000/api/users/getInfo", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfileData(response.data);
    } catch (error) {
      console.error("Error fetching info:", error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const handleUpdateProfile = () => {
    alert("Update profile functionality will be implemented here.");
  };

  console.log((profileData))

  const handleUploadBook = () => {
    navigate("uploadBook");
  };

  const handleUploadBlog = () => {
    navigate("uploadBlog");
  };

  const convertBase64ToUrl = (base64String) => {
    return `data:image/jpeg;base64,${base64String}`;
  };

  if (!profileData) {
    return (
    <div className="h-full w-full flex items-center justify-center">
      Loading...
    </div>
    );
  }

  return (
    <div className="min-h-screen w-full">
      <Navbar 
        title="Logout"
        onClick={logout}
      />
      <div className="py-8">
        {/* Profile Header */}
        <div className="bg-orange bg-opacity-75 border-2 border-mehroon text-mehroon font-Display px-4 mx-8 py-6 rounded-lg">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                src={convertBase64ToUrl(profileData.user.profilePic)}
                alt="Profile"
                className="h-28 w-28 rounded-full"
              />
            </div>
            <div className="h-3/4 flex flex-col flex-1 items-start pl-4">
              <h2 className="text-2xl font-bold text-profilehead">
                {profileData.user.name}
              </h2>
              <p className="text-text mt-2 text-opacity-65">
                {profileData.user.email}
              </p>
            </div>
            <div className="flex flex-col font-light">
              <div className="ml-auto">
                <Button
                  onClick={handleUpdateProfile}
                  name={"Update Profile"}
                  containerclassName={"hover:ring-2 ring-orange"}
                  btnclassName={"flex-nowrap"}
                >
                  <IconEdit className="min-w-5 min-h-5 h-5 w-5 mr-1" />
                </Button>
              </div>
              <div className="ml-auto">
                <Button
                  onClick={handleUploadBook}
                  name={"Upload Book"}
                  containerclassName={"hover:ring-2 ring-orange"}
                  btnclassName={"flex-nowrap"}
                >
                  <IconEdit className="min-w-5 min-h-5 h-5 w-5 mr-1" />
                </Button>
              </div>
              <div className="ml-auto">
                <Button
                  onClick={handleUploadBlog}
                  name={"Upload Blog"}
                  containerclassName={"hover:ring-2 ring-orange"}
                  btnclassName={"flex-nowrap"}
                >
                  <IconEdit className="min-w-5 min-h-5 h-5 w-5 mr-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Books Uploaded */}
        <div className="my-8 bg-pink border-y-2 border-mehroon">
          <BookShelf
            title="Books Uploaded"
            books={profileData.booksUploaded.map(book => ({
              id: book._id,
              title: book.title,
              author: book.author,
              cover: book.featuredImage, // Assuming the cover image is in 'featuredImage'
            }))}
          />
        </div>

        {/* Liked Books */}
        <div className="my-8 bg-pink border-y-2 border-mehroon">
          <BookShelf
            title="Liked Books"
            books={profileData.booksLiked.map(book => ({
              id: book._id,
              title: book.title,
              author: book.author,
              cover: book.featuredImage, // Assuming the cover image is in 'featuredImage'
            }))}
          />
        </div>

        {/* Liked Blogs */}
        <div>
          <div className="text-cardtitle text-mehroon justify-start flex mx-14 my-4">
            Liked Blogs
          </div>
          <div className="flex flex-wrap">
            {profileData.blogsLiked.map((blog, index) => (
              <Card key={index} src={blog.featuredImage} />
            ))}
          </div>
        </div>

        {/* Blogs Uploaded */}
        <div>
          <div className="text-cardtitle text-mehroon justify-start flex mx-14 my-4">
            Blogs Uploaded
          </div>
          <div className="flex flex-wrap">
            {profileData.blogsUploaded.map((blog, index) => (
              <Card key={index} src={blog.featuredImage} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
