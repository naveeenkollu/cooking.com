import React, { Component } from 'react';
import { SearchIcon } from '@heroicons/react/outline'
import { MenuIcon } from '@heroicons/react/outline'
import './styles/Navbar.css'
import './styles/common.css'

class Navbar extends Component {

    render() {

        return(
            <div className="w-full h-16 bg-orange-50 flex justify-center backdrop-blur-sm border-b-2 border-red-100 font-sans-murecho sticky top-0 z-40">

                <div className="w-3/4 h-16 flex flex-row justify-between">
                    <div className="flex flex-row">
                    <h1 className="flex flex-row text-xl font-bold h-8 mt-3.5 text-gray-800 hover:text-gray-700 noselect tracking-tight">
                        c
                        <img className="mt-1.5 mr-0 ml-0 w-5 h-5" alt="o-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABDklEQVRIie2SvUoDQRRGzx3XgKAgNhZKBsTCIdju4k+eRWx8AWsRX8DSSkHwTUw0rG2KTWEzgmm2sBKLkBkbkSRGN5vdQolfOXPvOZe5AzOVqolibaJWnp4gT7FAmG8kkJ8u12s7K4HrH3hUHfw2sPlx9QjSFlzDBZXrp3bzJa9AaRMeg5wBCxlDvuE5sZ34HPCTCERvRVcIhxngkfhLmzwcjZP87Xw+kTbhHchuSdymTeI6gBpwuZLgyMAehpZcrUX74mgUonu1Zzut+7ECAG2iQr/AJvEQU31XWFb+Bb9T0C3Ae84UCP5mWroXvvTOjR6srS7f9vx8BWQDWJqQ3RX8xaJ6PU3TtD/tgDOad0b4QeeJ3DWQAAAAAElFTkSuQmCC" />
                        oking
                    </h1>
                    </div>

                    <div className="flex flex-row">
                        <SearchIcon className="ml-5 mr-5 mt-3 h-6 w-6 text-gray-700 hover:text-gray-500"/>
                        <MenuIcon className="ml-5 mr-5 mt-3 h-6 w-6 text-gray-700 hover:text-gray-500"/>    
                    </div>
                </div>

            </div>
            
        )
    }
}


export default Navbar