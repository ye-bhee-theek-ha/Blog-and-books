import React from "react";
import PropTypes from "prop-types";
import { IconSearch, IconBooks } from "@tabler/icons-react";
import Button from "../../components/button/button";
import BookCard from "../../components/bookCard/bookCard";
import Card from "../../components/Card/Card";
import NotificationCard from "../../components/NotificationCard/NotificationCard";
import Navbar from "../../components/navbar/navbar";
import BookShelf from "../../components/bookshelf/bookshelf";
import { useNavigate } from "react-router-dom";


const Home = (props) => {

  const navigate = useNavigate()

  const blogs = [
    "https://picsum.photos/100/180",
    "https://picsum.photos/120/180",
    "https://picsum.photos/130/190",
    "https://picsum.photos/130/150",
    "https://picsum.photos/170/180",
    "https://picsum.photos/190/180",
    "https://picsum.photos/100/180",
    "https://picsum.photos/120/180",
    "https://picsum.photos/130/190",
    "https://picsum.photos/130/150",
    "https://picsum.photos/170/180",
    "https://picsum.photos/190/180",
  ];

  return (
    <div>
      <Navbar />

      <div className="h-80 flex flex-row justify-between mx-10 items-center">
        <h1 className="text-hero text-mehroon w-1/2 md:w-full justify-start flex">
          heading
        </h1>
        <div className="w-1/2 hidden md:flex">
          <NotificationCard title="Top Today" containerclassName="w-full" />
        </div>
      </div>

      <div className="my-8 bg-pink border-y-2 border-mehroon">
        <BookShelf />
      </div>
      <div>
        <div className="text-cardtitle text-mehroon justify-start flex mx-14 my-4">
          Blogs by the Author
        </div>
        <div>
          {blogs.map((blog, index) => (
            <Card key={index} src={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
