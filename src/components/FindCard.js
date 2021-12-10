import React, { Component } from 'react';
import { SearchIcon } from '@heroicons/react/outline'
import './styles/FindCard.css'
import './styles/Navbar.css'

class FindCard extends Component {

    render() {
        return(
            <div className="flex justify-center pt-5 pb-5 bg-orange-200">
                <div className="flex shadow-md w-1/2 p-3 bg-white max-w-screen-md">
                <div className="flex flex-col justify-center">
                <img alt="garlic-pepper" className="w-44 h-44 absolute inset-y-8 right-96 z-20" src="https://assets.i-scmp.com/cdn-cgi/image/fit=contain,quality=50,format=auto/cooking/cooking-deco_garlic_pepper.png"/>
                    <h1 className="p-2 font-serif-custom text-gray-700 flex justify-start mb-0">Find recipes & more</h1>
                    <p className="p-2  pt-0 text-sm font-regular text-gray-700 flex justify-start mb-0  font-sans-murecho">Now you can use the search and filter function to look for recipes and articles.</p>
                    <div className="flex text-sm w-36 p-2 ml-2 bg-orange-800 justify-center rounded-md text-gray-50 font-sans-murecho">Search & filters
                        <SearchIcon className="h-4 w-4 m-1 flex justify-around"/>
                    </div>
                </div>
                 
            </div>    
            </div>
            
        )
    }
}

export default FindCard