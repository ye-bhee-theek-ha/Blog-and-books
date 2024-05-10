import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button/button';
import { useNavigate } from 'react-router-dom';

import {
    IconHeart,
    IconHeartFilled
} from "@tabler/icons-react";

const Card = (props) => {

    const navigate = useNavigate();

    return(
        <div className='flex flex-row mx-10 my-6 rounded-3xl bg-grey border-pink border-2 overflow-hidden text-mehroon col-span-1'>
            <div className={"flex flex-wrap content-center h-full w-36 rounded-2xl border-pink overflow-hidden shadow-pink shadow-lg self-center" 
                            + " " 
                            + props.containerclassName}>
                <img src={props.src} alt="img" className="h-full w-full object-cover self-center" />
            </div>
            <div className='flex flex-1 flex-col justify-around'>
                <div className='flex flex-row mx-8 mr-14 text-subheading justify-between'>
                    <h3>{props.title}</h3>
                    <button className='flex h-8 w-8 my-3 rounded-md border-mehroon bg-lorange border justify-center items-center ring-lpink hover:ring-2'
                    >
                        <IconHeartFilled className=''/>
                    </button>
                </div>
                <div className='flex mx-4 text-text text-start'>
                    <p>{props.discription}</p>
                </div>
                <div className='mt-3 flex flex-row justify-between mx-12'>
                    <div className='flex flex-row'>
                        <Button
                            name = "Read Time: 8 mins"
                            btnclassName = "text-blog_btn py-1"
                            containerclassName = "bg-offwhite border-mehroon border bg-opacity-50"
                        />
                        <Button
                            name = "likes: 8"
                            btnclassName = "text-blog_btn py-1"
                            containerclassName = "bg-offwhite border-mehroon border bg-opacity-50"
                        />
                    </div>
                    <div>
                        <Button
                            name = "Read Now"
                            btnclassName = "text-blog_btn py-1"
                            containerclassName = "bg-lorange border-mehroon border ring-lpink hover:ring-2"
                            onClick = {() => {navigate("/blog/" + props.id)}} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

Card.prototypes = {
    title: PropTypes.string,
    discription: PropTypes.string,
    containerclassName: PropTypes.string,
    onclick: PropTypes.func,
    src: PropTypes.string,
    id: PropTypes.string,
}

Card.defaultProps = {
    title: "Title",
    discription: "lorem ipsium dala dolorese, okay done the lazy brown foz jumps over the lazy goats, the lazy brown foz jumps over the, the lazy brown foz jumps over the",
    containerclassName: "",
    onClick: () => {console.log("btn pressed.")},
    src: "none",
    id: "0",

}

export default Card;