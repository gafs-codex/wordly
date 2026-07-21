import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
function Navbar() {
    const location = useLocation()
    const savedStyle = {

    }
    return (
        <nav>
            <div className="logo">
                <IoBookOutline className="book-icon" />
                <h1>Wordly</h1>
            </div>

            <div className="mode">
                {location.pathname !== "/saved" &&
                    (
                        <NavLink className="link" to="/saved">
                            <button className="save-btn" >
                                <CiBookmark className="bookmark" />
                                saved
                            </button>
                        </NavLink>
                    )
                }
                <button className="bg-mode">
                    <MdOutlineLightMode />
                </button>
            </div>
        </nav>
    )
}
export default Navbar;