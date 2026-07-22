import { NavLink } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
// import '../save.css'

export default function SavedPage({ savedWords, toggleSave }) {
    const navigate = useNavigate();



    function openWord(word) {
        navigate("/", {
            state: {
                searchWord: word.word
            }
        })
    }

    return (
        <div className="saved-cover">
            <div className="saved-container">
                <div className="saved-header">
                    <h1>
                        <CiBookmark strokeWidth={0.5} />
                        Saved
                    </h1>

                    <p>{savedWords.length} words bookmarked</p>
                </div>

                <NavLink to="/">
                    <button className="back-btn">
                        <FaArrowLeftLong />
                        Back to Search
                    </button>
                </NavLink>
            </div>

            {savedWords.length === 0 ? (

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
            ) :
                (
                    <div className="saved-list">
                        {savedWords.map((word, index) => {
                            return <div key={index} className="saved-item">
                                <div>
                                    <h3>{word.word}</h3>
                                    <p>{word.meanings[0].definitions[0].definition}</p>
                                </div>

                                <button
                                    onClick={() => toggleSave(word)}
                                >
                                    <RiDeleteBin6Line />
                                </button>
                            </div>
                        })}
                    </div>
                )
            }
        </div >
    )
}