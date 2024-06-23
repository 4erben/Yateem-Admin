import React, { useState } from 'react'
import { CgWebsite } from 'react-icons/cg';
import { GrArticle } from "react-icons/gr";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function NavItem({title ,icon}) {
    const [isClicked,setIsClicked] = useState(false);
    const isIconsOn = useSelector(state=>state.app.isIconOn);
  return (
    <div className={`nav-item-container  ${isClicked?"active":""}`} >
        <div className='nav-item' onClick={()=>{setIsClicked(!isClicked)}}>
           <span className='nav-item-icon'>{icon}</span> 
        <span className='nav-item-text'>{title}</span>
        </div>
        <div className={`nav-item-menu ${isClicked?"show":""} `}>
          <Link className="nav-item" to="/banner">
          <span className='nav-item-icon'>
          <GrArticle/>
          </span>
          <span className='nav-item-text'>البانر الرئيسي</span> 
          </Link>
        </div>
    </div>
  )
}
