import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
function Navbar({ darkMode, toggleTheme }) {
    // const [theme, setTheme] = useState(true)
    const location = useLocation()

    return (
        <nav>
            <div className="logo">
                <IoBookOutline className="book-icon" />
                <h1>Wordly</h1>
            </div>

            <div className="mode">
                {location.pathname !== "/saved" &&
                    (
                        <>
                            <NavLink className="link" to="/saved">
                                <button className="save-btn" >
                                    <CiBookmark className="bookmark" />
                                    saved
                                </button>
                            </NavLink>

                            <NavLink className="link" to="/saved">
                                <button className="save-btn-sm" >
                                    <CiBookmark className="bookmark" />
                                </button>
                            </NavLink>
                        </>
                    )
                }
                <button className="bg-mode" onClick={toggleTheme}>
                    {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                </button>
            </div>
        </nav>
    )
}
export default Navbar;