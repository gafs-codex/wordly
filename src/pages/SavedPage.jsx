import { NavLink } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
// import '../save.css'

export default function SavedPage() {
    return (
        <div className="saved-cover">
            <div className="saved-container">
                <div className="saved-header">
                    <h1>
                        <CiBookmark strokeWidth={0.5} />
                        Saved
                    </h1>

                    <p>0 words bookmarked</p>
                </div>

                <NavLink to="/">
                    <button className="back-btn">
                        <FaArrowLeftLong />
                        Back to Search
                    </button>
                </NavLink>
            </div>

            <div className="saved-word">
                <CiBookmark className="saved-icon" strokeWidth={1} />
                <h2>No saved words yet</h2>
                <p>search a word and tap the bookmark icon to keep it here</p>

                <NavLink to="/" className="link">
                    <button>
                        Start searching
                    </button>
                </NavLink>
            </div>
        </div>
    )
}