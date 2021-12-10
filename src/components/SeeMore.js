import React, { Component } from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline'
import './styles/FindCard.css'
import './styles/common.css'

class SeeMore extends React.Component {
    
    render() { 
        return (
            <div className=" flex flex-row justify-center bg-orange-200 font-sans-custom font-semibold text-lg pt-3 pb-2">
               <p>See more</p>
               <ChevronDownIcon className="h-4 w-4 mt-2 ml-2 text-red-600"/>
            </div>
        )
    }
}
 
export default SeeMore;