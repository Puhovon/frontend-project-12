import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./slices/chatsSlice.js";

const Chats = () => {
    const selector = useSelector((state) => state.chats);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login')
        }
        else {
            dispatch(actions.fetchData(localStorage.getItem('token')))
        }
    })
    return (<><p>this is chat</p></>);
}

export default Chats;