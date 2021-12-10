import React, { Component } from 'react';
import './styles/FindCard.css'

class LatestRecipes extends Component {

    render() {
        return(
            <div className="flex flex-row justify-evenly bg-orange-200">
                <div className="flex pb-4 w-1/2">
                <img alt="chillies-img" src="https://www.scmp.com/cooking/static/img/bg_2chili_mobile.png" className='absolute inset-y-72 right-96' />
                    <div className="flex">
                        <h1 className="font-serif-custom text-4xl pt-3 text-gray-700">Latest recipes</h1>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default LatestRecipes