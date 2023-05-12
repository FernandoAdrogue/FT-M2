import React from "react";
import { connect } from "react-redux";
import User from "../User/User";
import {getUsers} from "../../redux/actions"

class Users extends React.Component {
    constructor(props){
        super(props)
        console.log(props);
    }

    //conponent
componentDidMount(){
    this.props.getUsers()
}
    render(){
        return <>
            {
            this.props.users.map((user)=> {
                return(
                    <User
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        username={user.username}
                        email={user.email}
                    />
                )
            }
            )}
        </>
    }
}

const mapStateToProps = (state)=> {
    return{
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getUsers: ()=> dispatch(getUsers())
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(Users)
