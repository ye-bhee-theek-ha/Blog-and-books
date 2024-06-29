import React from "react";
import PropTypes from "prop-types";
import { IconSearch, IconBooks } from "@tabler/icons-react";
import Button from "../../components/button/button";
import BookCard from "../../components/bookCard/bookCard";
import Card from "../card/Card";
import NotificationCard from "../NotificationCard/NotificationCard";
import Navbar from "../../components/navbar/navbar";
import './bookshelf.css';

const BookShelf = (props) => {
    
    return (
        <div className="">
            <div className="text-cardtitle text-mehroon justify-start flex mx-14">
                {props.title}
            </div>
            <div className="Book Shelf flex flex-row mx-5 overflow-x-auto justify-evenly mask">
                {props.books.map((book, index) => (
                    <BookCard key={index} src={book} />
                ))}
            </div>
        </div>
    )
};

BookShelf.propTypes = {
    title: PropTypes.string,
    books: PropTypes.array
};

BookShelf.defaultProps = {
    title: "Books by the Author",
    books: [
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
};

export default BookShelf;