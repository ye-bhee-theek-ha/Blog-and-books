import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button/button'
import {
    IconSearch,
    IconBooks
} from "@tabler/icons-react";

const Navbar = (props) => {

    return(
        <div className={"flex flex-row flex-wrap content-center justify-between w-full min-h-12 border-b-2 px-8 border-pink" 
                        + " " 
                        + props.containerclassName}>

            <div className='flex title text-mehroon text-btn font-semibold items-center'>
                <IconBooks className='h-6 w-6 mr-1'/>
                Blog N Books
            </div>

            <div className='btns flex flex-row'>
                <Button
                    name= "Home"
                />
                <Button
                    name= "Library"
                />
                <Button
                    name= "Search"
                >
                    <IconSearch className='h-4 w-4 mr-1'/>
                </Button>
            </div>

            <div className='contact'>
                <Button
                    containerclassName = "bg-transparent border text-mehroon hover:text-offwhite hover:bg-mehroon"
                    name= "Contact"
                />
            </div>

        </div>
    )
}

Navbar.prototypes = {
    onclick: PropTypes.func,
    title: PropTypes.string,
}

Navbar.defaultProps = {
    onClick: () => {console.log("btn pressed.")},
    title: "Title",
}

export default Navbar;