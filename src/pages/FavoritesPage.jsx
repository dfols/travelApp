import ResultsListFavorites from "../components/ResultsListFavorites";
import NavbarFavorite from "../components/NavbarFavorite";
function FavoritesPage() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return (
        <>
            <NavbarFavorite />
            <div className="min-h-screen bg-base-200 p-4">

                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-bold mb-4">Travel Favorites</h1>
                    <img
                        src="https://icons.iconarchive.com/icons/designbolts/free-valentine-heart/256/Heart-icon.png"
                        alt="favorites icon"
                        className="w-16 h-16 mb-4"
                    />
                    <ResultsListFavorites results={favorites} />
                </div>
            </div>
        </>
    )
}

export default FavoritesPage;