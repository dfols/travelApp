import ResultFavorite from "./ResultFavorite";

function ResultsList({ results }) {

    return (<div className="flex flex-col items-center">
        {results.length > 0 ? (
            results.map((result, index) => (
                <ResultFavorite
                    key={index}
                    name={result.name}
                    types={result.types}
                    photoReference={result.photoReference}
                />
            ))
        ) : (
            <p>no results...</p>
        )}
    </div>
    );
}
export default ResultsList