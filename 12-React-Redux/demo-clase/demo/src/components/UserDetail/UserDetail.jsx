import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserDetail } from "../../redux/actions";

const UserDetail = () => {

    const {id} = useParams()

    const dispatch = useDispatch()

    const {userDetail} = useSelector((state)=> state)

    useEffect(()=>{
        dispatch(getUserDetail(id))
    },[dispatch,id])
    return<>
        <h3>{userDetail.name}</h3>
        <h3>{userDetail.username}</h3>
        <h3>{userDetail.email}</h3>
    </>
}

export default UserDetail