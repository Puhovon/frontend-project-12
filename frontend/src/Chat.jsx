import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Chat = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem('token')) {
            navigate('/login')
        }
    })
    return (<><p>this is chat</p></>);
}

export default Chat;