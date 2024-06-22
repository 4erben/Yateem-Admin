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
            {icon}
        {isIconsOn?
        <span>{title}</span>
        :null}
        </div>
        <div className={`nav-item-menu ${isClicked?"show":""} `}>
          <Link className="nav-item" to="/banner">
          <GrArticle/>
            {isIconsOn?
            <span>البانر الرئيسي</span> :
            null 
          }
          </Link>
          
        </div>
    </div>
  )
}
