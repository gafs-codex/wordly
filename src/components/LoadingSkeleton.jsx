export default function LoadingSkeleton() {
    return (
        <div className="skeleton-container">


            <div className="skeleton skeleton-word"></div>


            <div className="skeleton skeleton-phonetic"></div>

            <div className="skeleton-section-header">
                <div className="skeleton skeleton-part-of-speech"></div>
                <div className="skeleton skeleton-divider"></div>
            </div>


            <div className="skeleton skeleton-meaning-title"></div>


            <div className="skeleton skeleton-definition"></div>
            <div className="skeleton skeleton-definition"></div>
            <div className="skeleton skeleton-definition short"></div>


            <div className="skeleton-section-header second-section">
                <div className="skeleton skeleton-part-of-speech"></div>
                <div className="skeleton skeleton-divider"></div>
            </div>

            <div className="skeleton skeleton-meaning-title"></div>

            <div className="skeleton skeleton-definition"></div>
            <div className="skeleton skeleton-definition"></div>
            <div className="skeleton skeleton-definition short"></div>

            <div className="skeleton skeleton-synonyms-title"></div>

            <div className="skeleton-synonyms">
                <div className="skeleton skeleton-synonym"></div>
                <div className="skeleton skeleton-synonym"></div>
                <div className="skeleton skeleton-synonym"></div>
            </div>

        </div>
    )
}