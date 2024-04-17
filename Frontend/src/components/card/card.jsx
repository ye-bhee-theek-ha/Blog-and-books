import React from 'react'
import PropTypes from 'prop-types'

const Card = (props) => {

    return(
        <div className={"flex flex-col m-2 min-h-60 min-w-60 w-fit rounded-3xl bg-lgreen text-mehroon border-pink border-2" 
                        + " " 
                        + props.containerclassName}>
            <div className='w-full h-fit min-h-8 px-6 border-b-2 border-pink'>
                <div className='flex text-text justify-start'>
                    {props.title}
                </div>
            </div>
            <div className={'flex flex-1 flex-col flex-wrap justify-center content-start w-full p-6'}>
                {props.children}
            </div>
        </div>
    )
}

Card.prototypes = {
    onclick: PropTypes.func,
    title: PropTypes.string,
}

Card.defaultProps = {
    onClick: () => {console.log("btn pressed.")},
    title: "Title",
}

export default Card;