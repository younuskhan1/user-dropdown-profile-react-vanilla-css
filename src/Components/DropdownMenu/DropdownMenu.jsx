import "./DropdownMenu.css";
import edit from '../../assets/edit.png';
import inbox from '../../assets/envelope-letter.png';
import settings from '../../assets/settings.png';
import help from '../../assets/question.png';
import logout from '../../assets/log-out-50.png';
import user from "../../assets/Cla_r_Mc_Weeney.png";
import user1 from "../../assets/user.png";


import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
// import PropTypes from 'prop-types'; // ES6


const DropdownMenu = () => {
    const [open, setOpen] = useState(false);

    let menuRef = useRef();
  
    useEffect(() => {
      let handler = (e)=>{
        if(!menuRef.current.contains(e.target)){
          setOpen(false);
          console.log(menuRef.current);
        }      
      };
  
      document.addEventListener("mousedown", handler);
      
      return() =>{
        document.removeEventListener("mousedown", handler);
      }
  
    });


    return (
        
        <div className='menu-container' ref={menuRef}>
            <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
               <img src={user}></img>
            </div>
            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
                <h3>The Kiet</h3>
                <h4>Website Designer</h4>
                <ul>
                    <li className="dropdownItem"><img src={user1} alt="" /><a href="#">My Profile</a></li>
                    <li className="dropdownItem"><img src={edit} alt="" /><a href="#">Edit Profile</a></li>
                    <li className="dropdownItem"><img src={inbox} alt="" /><a href="">My Inbox</a></li>
                    <li className="dropdownItem"><img src={settings} alt="" /><a href="">Setting</a></li>
                    <li className="dropdownItem"><img src={help} alt="" /><a href="">Helps</a></li>
                    <li className="dropdownItem"><img src={logout} alt="" /><a href="">Logout</a></li>
                </ul>
            </div>
      </div>
    );
};

export default DropdownMenu;


