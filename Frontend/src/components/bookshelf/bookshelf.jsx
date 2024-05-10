import React from "react";
import PropTypes from "prop-types";
import { IconSearch, IconBooks } from "@tabler/icons-react";
import Button from "../../components/button/button";
import BookCard from "../../components/bookCard/bookCard";
import Card from "../Card/Card";
import NotificationCard from "../NotificationCard/NotificationCard";
import Navbar from "../../components/navbar/navbar";
import './bookshelf.css';

const BookShelf = (props) => {
    const books = [
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
    ]
    return (
        <div className="">
            <div className="text-cardtitle text-mehroon justify-start flex mx-14">
                Books by the Author
            </div>
            <div className="Book Shelf flex flex-row mx-5 overflow-x-auto justify-normal mask">
                {books.map((book, index) => (
                    <BookCard key={index} src={book} />
                ))}
            </div>
        </div>
    )
};

BookShelf.propTypes = {};

BookShelf.defaultProps = {};

export default BookShelf;
