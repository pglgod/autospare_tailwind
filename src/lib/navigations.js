import { HiOutlineHome, HiOutlineShoppingBag } from 'react-icons/hi';
import {  MdContactSupport, MdOutlineDashboard, MdOutlineElectricCar } from 'react-icons/md';
import { FaTools } from 'react-icons/fa';

export const nav_links = [
    {
        key: "home",
        label: "Home",
        path: "/",
        icon: <HiOutlineHome/>
    },
    {
        key: "shop",
        label: "Shop",
        path: "/shop",
        icon: <HiOutlineShoppingBag/>
    },
    {
        key: "electric",
        label: "EV",
        path: "/evs",
        icon: <MdOutlineElectricCar/>
    },
    {
        key: "tool",
        label: "Tool",
        path: "/tool",
        // icon: <LiaToolsSolid/>
        icon: <FaTools/>
    },
    {
        key: "contact",
        label: "Contact",
        path: "/contact",
        icon: <MdContactSupport/>
    },
    {
        key: "seller_dash",
        label: "Seller Dashboard",
        path: "/dashboard.seller",
        icon: <MdOutlineDashboard/>
    }
    
];




