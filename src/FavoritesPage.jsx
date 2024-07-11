import myImage from './images/favoritesicon.png';

function FavoritesPage() {
    return (
    <>
    <center><h1>Travel Favorites</h1></center>
     <img src={myImage} alt="favorites icon" />
    <ul> 
        <li>item1</li> 
        <li>item2</li> 
        <li>item3</li> 
        </ul>
    </>
    )
    }
    export default FavoritesPage