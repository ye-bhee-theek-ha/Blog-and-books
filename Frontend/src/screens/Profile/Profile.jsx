import React from "react";
import { IconUser, IconBooks, IconHeart, IconEdit } from "@tabler/icons-react";
import Navbar from "../../components/navbar/navbar";
import Button from "../../components/button/button"; 
import BookShelf from "../../components/bookshelf/bookshelf";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";


const Profile = () => {

    const navigate = useNavigate()

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
        "https://picsum.photos/200/200",
        "https://picsum.photos/200/250",
        "https://picsum.photos/200/150",
      ],
    };
  
    const handleUpdateProfile = () => {
      alert("Update profile functionality will be implemented here.");
    };

    const handleUploadBook = () => {
      navigate("uploadBook")
    };

    const handleUploadBlog = () => {
      alert("Update profile functionality will be implemented here.");
    };
  
    return (
      <div className="min-h-screen w-full">
        <Navbar />
        <div className="py-8">
          {/* Profile Header */}
          <div className="bg-orange bg-opacity-75 border-2 border-mehroon text-mehroon font-Display px-4 mx-8 py-6 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  src={profileData.profilePic}
                  alt="Profile"
                  className="h-30 w-30 rounded-full"
                />
              </div>
              <div className="h-3/4 flex flex-col flex-1 items-start pl-4">
                <h2 className="text-2xl font-bold text-profilehead">
                  {profileData.name}
                </h2>
                <p className="text-text mt-2 text-opacity-65">
                  {profileData.email}
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

          <div className="my-8 bg-pink border-y-2 border-mehroon">
            <BookShelf
              title={"saved books"}
              books={[
                "https://picsum.photos/130/150",
                "https://picsum.photos/170/180",
                "https://picsum.photos/190/180",
              ]}
            />
          </div>

          <div>
            <div className="text-cardtitle text-mehroon justify-start flex mx-14 my-4">
              Liked Blogs
            </div>
            <div>
              {profileData.likedBlogs.map((blog, index) => (
                <Card key={index} src={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Profile;
  