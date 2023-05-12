import React from "react";
import { Link } from "react-router-dom";



const User = ({id, name, username, email}) => {
    console.log({id, name, username, email});
    return<>
        <Link to={`/detail/${id}`}>
            <h3>{name}</h3>
        </Link>
        <h3>{username}</h3>
        <h3>{email}</h3>
    </>
}

export default User