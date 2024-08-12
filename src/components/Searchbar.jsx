import { useState } from 'react'
function SearchBar({ onSearch }) {

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm)
    }

    return (
        <div className="flex justify-center mb-8 pt-8">
            <input type="text" placeholder="Type search term here ..."
                className="input input-bordered w-full max-w-xs"
                value={searchTerm}
                onChange={handleInputChange} />
            <button onClick={handleSearch} className="btn btn-primary ml-8">Search</button>
        </div>
    )
}


export default SearchBar




