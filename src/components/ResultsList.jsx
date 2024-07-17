import Result from "./Result";

function ResultsList({ results }) {

    return (<div className="flex flex-col items-center">
        {results.length > 0 ? (
            results.map((result, index) => (
                <Result
                    key={index}
                    name={result.name}
                    types={result.types}
                    photoReference={result.photos[0].photo_reference}
                />
            ))
        ) : (
            <p>no results...</p>
        )}
    </div>
    );
}
export default ResultsList