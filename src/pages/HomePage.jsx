import Navbar from "../components/Navbar";
import Main from "../components/Main";
function HomePage({ savedWords, toggleSave }) {
    return (
        <div className="">
            <Main savedWords={savedWords} toggleSave={toggleSave} />
        </div>
    )
}
export default HomePage;