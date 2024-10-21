import { NavLink } from "react-router-dom";
import logo1 from "/assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { TbMedicalCrossFilled } from "react-icons/tb";
import { useState } from "react";
import Canvas from "./Canvas";


const navLinks = [
    {
      name:'Home',
      path:'/'
    },
    {
        name:'Beat Rooms',
        path:'/beat-rooms'
      },
      {
        name:'Live Battle',
        path:'/live-battle'
      },
      {
        name:'About',
        path:'/about'
      },
      {
        name:'Register',
        path:'/register'
      }, 

];

const Header = () => {


  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="parent bg-blue-600 text-white font-medium">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="logo">
              <NavLink to="/">
                <img className="w-32" src={logo1} alt="Logo" />
              </NavLink>
            </div>
            <div className="menu">
              <nav className=" p-[2px] hidden lg:flex lg:gap-8">
              {navLinks.map((item,index) =>(
                <NavLink key={index} to={item.path} className={({ isActive }) => isActive ? "active-menu" : "hover-effect"}>
                  {item.name}
                </NavLink>
              ))}
              </nav>
            </div>
            <div className="btn1 hidden lg:inline-block">
              <button className="rounded-[9999px] text-black px-4 py-2 w-[146px] h-[50px] bg-[#FFD400] hover:bg-amber-400 duration-300">
                Login
              </button>
            </div>
            <div className="lg:hidden flex">
              {!isOpen ? (
                <button onClick={() => setIsOpen(true)}>
                  <GiHamburgerMenu size={30} />
                </button>
              ) : (
                <button onClick={() => setIsOpen(false)}>
                  <RxCross2 size={30} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Canvas isOpen={isOpen} setIsOpen={setIsOpen}>
     <div className="px-4 flex flex-col gap-7  mt-4">

     {navLinks.map((item,index) => (   
    <NavLink key={index} to={item.path}>
    {({ isActive }) => (
    <li className="list-none inline-flex text-start items-center gap-4">
        <span>
        <TbMedicalCrossFilled color={isActive ? '#FFC107' : ''} />
        </span>
        <span className={isActive ?'active-menu':'hover-effect'}>{item.name}</span>
    </li>
    )}
    </NavLink>
     ))}

        </div>    
</Canvas>
    </>
  );
};

export default Header;
