import React from "react"
import SearchIcon from "../../icons/search.svg"
function SearchBar() {
    return (
        <div className="flex items-center relative">
            <input type="text" placeholder="Search By..." className="flex-1 bg-[#313131] text-white rounded-md focus:outline-none focus:ring focus:ring-blue-400 px-4 py-2" />
            <button className="absolute right-0 mr-3 focus:outline-none flex items-center">
                <img src={SearchIcon} alt="searchIcon" />
            </button>
        </div>
    )
}
export default SearchBar