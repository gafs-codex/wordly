import { RiErrorWarningLine } from "react-icons/ri";;

export default function ErrorMessage({ error, word }) {
    return (
        <>
            {
                error === "Word not found" && (
                    <div className="error">
                        <div className="error-icon">
                            <RiErrorWarningLine />
                        </div>
                        <h2>Word not found</h2>
                        <p>
                            We couldn't find <strong>"{word}"</strong> in the dictionary.
                            Check the spelling and try again.
                        </p>
                    </div>
                )
            }
            {
                error === "No Internet" && (
                    <div className="error">
                        <div className="error-icon">
                            <RiErrorWarningLine />
                        </div>
                        <h2>No internet connect</h2>
                        <p>
                            Please check your connection and try again.
                        </p>
                    </div>
                )
            }
        </>
    )
}