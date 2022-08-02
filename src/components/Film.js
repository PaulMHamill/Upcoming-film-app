import React from "react";

const Film = ({name, children}) => {

    return(
        <>
        <li><a href={children}>{name}</a></li>
        </>
    )
}

export default Film;