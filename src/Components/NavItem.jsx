import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function NavItemMenu({title ,titleIcon ,itemsMenu ,subName}) {
    const [isClicked,setIsClicked] = useState(false);
    const isIconsOn = useSelector(state=>state.app.isIconOn);
  return (
    <div className={`nav-item-container  ${isClicked?"active":""}`} >
        <div className='nav-item' onClick={()=>{setIsClicked(!isClicked)}}>
           <span className='nav-item-icon'>{titleIcon}</span> 
        <span className='nav-item-text'>{title}</span>
        </div>
        <div className={`nav-item-menu ${isClicked?"show":""} `}>
          {
            itemsMenu.map((item)=>{
              return(
                    <Link className="nav-item child" to={`${item.link}`} state={{itemName:title , pageName:item.title, subName: item.subName}} key={item.title}>
                      <span className='nav-item-icon'>
                      {item.icon}
                      </span>
                      <span className='nav-item-text'>{item.title}</span> 
                    </Link>
              )
            })
          }
          
        </div>
    </div>
  )
}
