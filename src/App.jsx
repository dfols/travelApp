import Searchbar from "./components/Searchbar"
import Result from "./Result"
import ResultsList from "./components/ResultsList"

function App() {
  return (
    <>
      <div className="App">
        <Searchbar />
        <Result name= "Cosi" description= "Science Center" address= " 333 W Broad St" types= "places to go" photoReference= "image"/>
        <ResultsList />
      </div>

    </>
  )
}

export default App