export default function DictionaryWord({ result }) {
    const allMeanings = result.map((word, index) => {
        return (
            word.meanings.map((meaning, index) => {
                return (
                    <section key={index} className="dictinary-body">
                        <div className="speech-part">
                            <h3>{meaning.partOfSpeech}</h3>
                            <div className="line"></div>
                        </div>

                        <div className="speech-meaning">
                            <p className="title-meaning">Meaning</p>

                            <ul className="definition-list">
                                {meaning.definitions.map((definition, index) => {
                                    return (
                                        <li key={index}>
                                            {definition.definition}


                                            {definition.example && (
                                                <p className="example">
                                                    "{definition.example}"
                                                </p>
                                            )}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        {meaning.synonyms.length > 0 &&
                            (
                                <div className="syno-container">
                                    <span>Synonyms</span>

                                    <div className="syno-cover">
                                        {meaning.synonyms.map((synom, index) => {
                                            return (
                                                <button key={index} className="syno-word" type="button">
                                                    {synom}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        }

                        {meaning.antonyms.length > 0 && (
                            <div className="syno-container">
                                <span>Antonyms</span>

                                <div className="syno-cover">
                                    {meaning.antonyms.map((anton, index) => {
                                        return (
                                            <button key={index} className="anto-word" type="button">
                                                {anton}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        )}
                    </section>
                )
            })
        )
    })
    return (
        <>
            {allMeanings}
        </>
    )
}