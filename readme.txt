# For every pages

import { useSelector,useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {check} from '../stores/HideMenu'
import {save} from '../stores/user/UserStatusStore'

let location = useLocation()
const dispatch = useDispatch()
const user = useSelector((state:any)=>state.UserStatusStore)

//check path
dispatch(check(location.pathname))

//check status user for login
axios.get(`http://localhost:3000/status/${user.user}`).then((doc)=>dispatch(save(doc.data)))

----------------------------------------------------------------------------------------------------

# Add for user login
import {Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const user = useSelector((state:any)=>state.UserStatusStore)
{user.status?null:<Navigate to='/'/>}