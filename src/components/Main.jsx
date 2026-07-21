import { IoSearch } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";
import { useState, useEffect } from "react";
import DictionaryWord from "./DictionaryWord";
import LoadingSkeleton from "./LoadingSkeleton";
import ErrorMessage from "./ErrorMessage";


function Main() {
    const [input, setInput] = useState("")
    const [word, setWord] = useState("")
    const [result, setResult] = useState(null)
    const [focused, setFocused] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [recentSearch, setRecentSearch] = useState(() => {
        const saved = localStorage.getItem("recentSearches");
        return saved ? JSON.parse(saved) : []
    }
    )

    useEffect(() => {
        if (!word) return
        setLoading(true)
        setResult(null)
        setError(null)

        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Word not found");
                }

                return response.json();
            })
            .then(data => {
                setResult(data);
                setError(null);
                setLoading(false);
            })
            .catch(error => {
                if (error.message === "Word not found") {
                    setError("Word not found");
                    console.log("Setting error to Word not found");
                } else {
                    setError("No Internet");
                    console.log("Setting error to No Internet");
                }

                setLoading(false);
            })
    }, [word])


    useEffect(() => {
        localStorage.setItem("recentSearches", JSON.stringify(recentSearch))
    }, [recentSearch])


    function handleSubmit(e) {
        e.preventDefault();
        if (!input.trim()) return
        setWord(input)

        setRecentSearch((prev) => {
            const filtered = prev.filter((item) => {
                return item.toLowerCase() !== input.toLocaleLowerCase()
            })
            return [input, ...filtered].slice(0, 5)
        })
    }

    function handleSound() {
        const audioUrl = result[0].phonetics.find(
            (phonetic) => phonetic.audio
        )?.audio

        if (!audioUrl) return

        const audio = new Audio(audioUrl)
        audio.play()
    }

    function clearRecentSearches() {
        setRecentSearch([]);
        localStorage.setItem("recentSearch", JSON.stringify([]));
    }
    return (
        <div className="form-box">
            <form action=""
                className={`forms ${focused ? "focused" : ""}`}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onSubmit={handleSubmit}
            >
                <div className="search-input">
                    <IoSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search a word"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />

                </div>

                <button className="search-btn" type="submit">
                    search
                </button>
            </form>




            <div className="word-container">
                {loading && (<LoadingSkeleton />)}

                {error && <ErrorMessage error={error} word={word} />}

                {recentSearch.length > 0 && (
                    <div className="recent-search">
                        <div className="recent">
                            <span>Recent</span>

                            {recentSearch.map((word) => (
                                <button
                                    key={word}
                                    onClick={() => {
                                        setInput(word);
                                        setWord(word);
                                    }}
                                >
                                    {word}
                                </button>
                            ))}
                        </div>

                        <button
                            className="cancel"
                            onClick={clearRecentSearches}
                        >
                            <MdOutlineClear />
                        </button>
                    </div>
                )}

                {result && (
                    <>
                        <header className="word-cover">
                            <div className="word-header">
                                <h2>{result[0].word}</h2>
                                <p> {result[0].phonetic
                                    ? result[0].phonetic
                                    : result[0].phonetics && result[0].phonetics[0]
                                        ? result[0].phonetics[0].text
                                        : "No phonetic available"} </p>
                            </div>
                            <div className="button-container">
                                <button className="word-btn save" type="button" aria-label="save word" aria-pressed="false"> <CiBookmark height={30} width={30} /> </button>
                                <button className="word-btn play" onClick={handleSound}> <FaPlay /> </button>
                            </div>
                        </header>
                        <DictionaryWord result={result} searchWord={(word) => {
                            setInput(word)
                            setWord(word)
                        }} />
                    </>
                )}
            </div>
        </div>
    )
}
export default Main;