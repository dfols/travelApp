import React, { useState } from 'react'
function SearchBar() {


    const [searchTerm, setSearchTerm] = useState('');
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        console.log(searchTerm)
    };
    const handleSearch = () => {
        console.log(searchTerm);

    }




    return (
        <>
            <div>
                <input type="text" placeholder="Type search term here ..."
                    className="input input-bordered w-full max-w-xs"
                    value={searchTerm}
                    onChange={handleInputChange} />
            </div>
            <button onClick={handleSearch} className="btn">Search</button>

        </>


    )
}


export default SearchBar




