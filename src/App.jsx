import Searchbar from "./components/Searchbar"
import Result from "./Result"

function App() {
  return (
    <>
      <div className="App">
        <Searchbar />
        <Result name= "Cosi" description= "Science Center" address= " 333 W Broad St" types= "places to go" photoReference= "image"/>
      </div>

    </>
  )
}

export default App