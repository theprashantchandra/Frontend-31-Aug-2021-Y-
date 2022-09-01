import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux";

const Protected = (props) => {
  const { token } = useSelector(state => state.auth)
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(()=>{
        let loggedin = localStorage.getItem('logged')
        if(!loggedin){
            navigate('/login')
        }
    })
  return (
    <div>
      <Component/>
    </div>
  )
}

export default Protected
