import React from 'react'
import PropTypes from 'prop-types'
import Button from './../button/button';

import {
    IconHeart,
    IconHeartFilled
} from "@tabler/icons-react";

const BlogCard = (props) => {

    return(
        <div className='flex flex-row mx-10 my-6 h-44 rounded-3xl bg-grey border-pink border-2 overflow-hidden text-mehroon'>
            <div className={"flex flex-wrap content-center h-full w-36 rounded-2xl border-pink overflow-hidden shadow-pink shadow-lg" 
                            + " " 
                            + props.containerclassName}>
                <img src={props.src} alt="img" className="h-full w-full object-cover" />
            </div>
            <div className='flex flex-1 flex-col'>
                <div className='flex flex-row mx-8 mr-14 text-subheading justify-between'>
                    <h3>{props.title}</h3>
                    <button className='flex h-8 w-8 my-3 rounded-md border-mehroon bg-lorange border justify-center items-center'
                    >
                        <IconHeartFilled className=''/>
                    </button>
                </div>
                <div className='flex mx-4 text-text text-start'>
                    <p>{props.discription}</p>
                </div>
                <div className='mt-3 flex flex-row justify-around'>
                    <div className='flex flex-row'>
                        <Button
                            name = "Read Time 8 mins"
                            btnclassName = "text-sm"
                            containerclassName = "bg-offwhite border-mehroon border bg-opacity-50"
                        />
                        <Button
                            name = "likes: 8 "
                            btnclassName = "text-sm"
                            containerclassName = "bg-offwhite border-mehroon border bg-opacity-50"
                        />
                    </div>
                    <div>
                        <Button
                            name = "Read Now"
                            btnclassName = "text-sm"
                            containerclassName = "bg-lorange border-mehroon border"
                            onclick = {() => {return("read blog")}} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

BlogCard.prototypes = {
    title: PropTypes.string,
    discription: PropTypes.string,
    containerclassName: PropTypes.string,
    onclick: PropTypes.func,
    src: PropTypes.string,
}

BlogCard.defaultProps = {
    title: "Title",
    discription: "lorem ipsium dala dolorese, okay done the lazy brown foz jumps over the lazy goats",
    containerclassName: "",
    onClick: () => {console.log("btn pressed.")},
    src: "none",
}

export default BlogCard;