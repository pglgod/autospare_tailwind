import React, { Fragment, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { nav_links } from '../lib/navigations';
import { HiOutlineLogin, HiOutlineLogout, HiOutlineMenu,  HiOutlineShoppingCart } from 'react-icons/hi';
import { FaRegHeart, FaRegUser,  } from "react-icons/fa";
import { CgSearch } from 'react-icons/cg';
import { useCollapse } from 'react-collapsed';
import { Menu, Transition } from '@headlessui/react';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { FiUserPlus } from "react-icons/fi";



export default function Navbar() {

  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [isExpanded, setExpanded] = useState(false);

  const { getCollapseProps, getToggleProps,  } = useCollapse({ isExpanded })

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return ( 
    <>
        <nav className='  w-screen bg-main-color  sticky z-20 top-0'>
            <div className="py-3 px-6 sm:px-12  xl:px-20 w-full flex items-center justify-between">
              <div className=" w-32 sm:w-40 lg:w-48 h-auto relative ">
                  <Link to="/" ><img className='w-full h-full' src={require('../img/logo.png')} alt="Auto Spares" /></Link>    
              </div>    
              <div className=" hidden  flex-1 lg:flex items-center justify-center">
                <ul className='flex items-center gap-5 xl:gap-8'>
                  {
                    nav_links.map((e)=>{
                      return <li className={`text-[16px] xl:text-lg font-poppins font-normal  hover:text-btn-0 cursor-pointer ${ location.pathname === e.path ? " text-btn-0" : "text-second-color" } `}  key={e.key} >
                              <Link to={e.path} >{e.label}</Link>
                          </li>
                    })
                  }
                </ul>
              </div>    
              {/* <div className=" flex items-center gap-4 sm:gap-5 text-2xl text-btn-0"> */}
              <div className=" flex items-center gap-4 sm:gap-5  text-btn-0">

                  <div className=" cursor-pointer outline-none text-2xl ">
                    {/* Search */}
                      <CgSearch  { ...getToggleProps({ onClick: () => setExpanded(( prevExpanded) => !prevExpanded ) }) } className='outline-none' />
                  </div>

                  <div className="hidden md:flex items-center gap-5">
                      <div className="cursor-pointer text-2xl">
                        {/* Wishlist */}
                          <FaRegHeart/>
                      </div>
                      <div className="cursor-pointer">
                        {/* Cart */}
                        <Menu as="div" className="relative inline-block " >
                          <div className="">
                            <Menu.Button className=" text-2xl text-btn-0 cursor-pointer outline-none bg-none " >
                              <HiOutlineShoppingCart/>
                            </Menu.Button>
                          </div>
                          <Transition as={Fragment} enter="transition ease-out duration-100"  enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95" >
                            <Menu.Items className="absolute right-0 mt-2  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none" >
                              <div className="  w-96 relative ">
                                <p className=' my-1 text-md text-center text-btn-3 font-poppins' >Items added to your cart</p>
                                <div className=" min-h-48">
                                  {/* Cart item */}

                                  <div className=" py-2 px-3 border-t border-gray-200 flex gap-2 ">
                                    <div className="">
                                      <img src="https://via.placeholder.com/80x80" alt="" />
                                    </div>
                                    <div className=" flex-1 ">
                                      <p className="text-xl text-btn-0 font-poppins font-semibold ">Rs.3800.68</p>
                                      <p className="text-lg text-btn-0 font-poppins  ">Mersedes Maybach GLS...</p>
                                      <div className="flex items-center ">
                                        <p className='flex-1 text-md font-poppins text-btn-0'>Size</p>
                                        <p className='flex-1 text-md font-poppins text-btn-0 font-medium'>21"</p>
                                      </div>
                                      <div className="flex items-center ">
                                        <p className='flex-1 text-md font-poppins text-btn-0'>Quantity</p>
                                        <p className='flex-1 text-md font-poppins text-btn-0 font-medium'>2</p>
                                      </div>
                                    </div>
                                  </div>

                                  <p className=' my-4 text-center font-poppins font-medium text-lg ' >Your  cart is empty!!</p>

                                </div>
                                <div className=" px-3 w-full   bottom-0  left-0">
                                  <p className='my-3 text-right font-poppins text-xl' >Total <span className='font-semibold' >Rs.3800.68</span></p>
                                  <button className=' w-full h-9  text-xl font-light bg-btn-3 text-white hover:text-btn-2 rounded-sm uppercase font-poppins ' >Checkout</button>
                                  <p className=' my-5 text-center text-sm text-second-color capitalize font-poppins font-light '>Free shipping & retutns and 100% handpicked assured quality </p>
                                </div>
                              </div>
                            </Menu.Items>
                          </Transition>
                          
                        </Menu>
                      </div>
                  </div>

                <div className=" hidden sm:inline-block">
                  {/* User Icon */}
                    {/* <FaRegUser /> */}
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className=" text-xl text-btn-0 cursor-pointer outline-none bg-none ">
                          <FaRegUser />
                        </Menu.Button>
                      </div>
                      <Transition as={Fragment} enter="transition ease-out duration-100"  enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95" >
                        <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                          <div className=" py-2 px-1 ">
                            <ul className='text-lg text-btn-0' >
                              <li className=' cursor-pointer hover:bg-btn-1 py-1 px-3 rounded-sm' ><Link to='/buyer/account' className='flex items-center gap-3' >   <MdOutlineAccountCircle/>  <span>Profile</span></Link></li>
                              <li className=' cursor-pointer hover:bg-btn-1 py-1 px-3 rounded-sm' ><Link to='/signUp' className='flex items-center gap-3 ' > <FiUserPlus/>  SignUp</Link></li>
                              <li className=' cursor-pointer hover:bg-btn-1 py-1 px-3 rounded-sm' ><Link to='/login' className='flex items-center gap-3 ' > <HiOutlineLogin/> <span>Login</span></Link></li>
                              <li className=' cursor-pointer hover:bg-btn-1 py-1 px-3 rounded-sm flex items-center gap-3 ' ><HiOutlineLogout/> <span>LogOut</span> </li>
                            </ul>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                </div>

                <div className=" block lg:hidden  cursor-pointer">
                  {/* Menu Icon */}
                    <HiOutlineMenu className='outline-none border-none text-4xl bg-none'  type="button" aria-disabled={open} disabled={open} onClick={toggle} />
                </div>

              </div>
            </div>
            
            {/* Search bar */}
            <section className='w-screen  bg-main-color  ' {...getCollapseProps()} >
                <div className="py-3  flex items-center justify-center">
                  <form onSubmit={(e)=>{ e.preventDefault();}}
                    className=' w-[90%] md:w-[600px] relative flex items-center ' >
                        <input className=' w-full  px-4 py-2 text-md text-btn-0 placeholder:text-md placeholder:text-second-color  outline-none '
                         type="text" placeholder='Search'  />
                         <button { ...getToggleProps({ onClick: () => setExpanded(( prevExpanded) => !prevExpanded ) }) }
                            type="submit" className=' absolute right-4 text-xl text-btn-0 cursor-pointer outline-none focus:outline-none bg-none ' >
                          <CgSearch  />
                        </button>
                  </form>
                </div>
            </section> 
            

              

        </nav>

        
        {/* side nav */}
        <Sidenav open={open} toggle={toggle}>
          <div className="px-6 py-3 flex items-center justify-around text-2xl text-btn-0">
              <FaRegHeart/>
              <HiOutlineShoppingCart/>
              <FaRegUser/>
          </div>
          <div className="">
            <ul className='' >
              {
                nav_links.map((e)=>{
                  return <li className={`px-6 py-2 text-lg font-poppins font-normal text-left  hover:bg-second-color hover:text-main-color cursor-pointer ${ location.pathname === e.path ? "bg-second-color text-main-color" : "text-second-color" } `} key={e.key} >
                          <Link className='flex items-center gap-2' to={e.path} > {e.icon}  {e.label}</Link>
                      </li>
                })
              }
            </ul>
          </div>
        </Sidenav>

    </>
  )
}


  /* Sidenav logic */
  
  const style = {
    item: `flex justify-start cursor-pointer font-medium hover:text-gray-400 ml-8 mb-10`,
    closeIcon: `absolute top-1 focus:outline-none right-5 text-3xl text-btn-0 cursor-pointer`,
    sidenav: {
      open: `w-9/12 md:w-72 bg-main-color overflow-x-hidden`,
      close: `w-0 bg-main-color overflow-x-hidden`,
      default: `h-screen fixed z-20 top-0 right-0 transition-all ease duration-200`,
    },
  };
  
  function Sidenav({ open, toggle, children }) {
    const ref = React.useRef(null);
  
    //close on click outside
    React.useEffect(() => {
      const handleOutsideClick = (event) => {
        if (!ref.current?.contains(event.target)) {
          if (!open) return;
          toggle(false);
        }
      };
      window.addEventListener('mousedown', handleOutsideClick);
      return () => window.removeEventListener('mousedown', handleOutsideClick);
    }, [open, ref, toggle]);
  
    return (
      <aside ref={ref} className={`${style.sidenav.default} ${open ? style.sidenav.open : style.sidenav.close}`}>
        <button aria-label="Close" className={style.closeIcon} onClick={toggle}>
          &times;
        </button>
        <div className="mt-12" onClick={toggle} >
          {children}
        </div>
      </aside>
    );
  }
  