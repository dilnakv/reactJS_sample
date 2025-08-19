import {  NavLink } from "react-router-dom";

export const Navbar = () =>{

    const navLinkStyle = ({ isActive }: { isActive: boolean }) => {
        return{
            fontWeight : isActive ? 'bold': 'normal'
        }
    }
    return(
        <nav>
            <NavLink style={navLinkStyle} to = '/dashboard'>Product List</NavLink>
            <NavLink style={navLinkStyle} to = '/technician'>Technician</NavLink>
        </nav>
    );
}