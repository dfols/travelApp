function Result({ name, types, photoReference }) {

  const handleFavorite = () => {
    const favoriteItem = { name, types, photoReference };
    const existingFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    localStorage.setItem("favorites", JSON.stringify([...existingFavorites, favoriteItem]));
  };

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl mb-8">
        <figure className="px-10 pt-10">
          <img className="rounded-xl" src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=250&photo_reference=${photoReference}&key=AIzaSyBMBhOhkCQTNAIIntag10-_wqX-Ym08e1s`} alt="" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            {name}
          </h2>
          <div className="card-actions justify-end">
            {types.map((type, index) => {
              return <div className="badge badge-outline" key={index}>{type}</div>
            })}
            <button className="btn btn-primary" onClick={handleFavorite}>Add to Favorites</button>
          </div>
        </div>
      </div>
    </>
  )
};


export default Result