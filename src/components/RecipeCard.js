import React, { Component } from 'react';
import { DISHES } from './shared/dishes'
import { ClockIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/outline';
import './styles/FindCard.css'
import './styles/common.css'


class RecipeCard extends Component{

    constructor(props) {
        super(props);

        this.state = {
            recipes: DISHES
        }
    }

    render() {

        const dishes = this.state.recipes.map(recipe => {
            return(
                <div className="w-44 h-56 m-2 bg-white shadow-sm font-sans-custom" key={recipe.id}>
                    <img className="h-32" src={recipe.image} alt={recipe.name} />
                    <div className="pl-2 pr-2 text-gray-600">
                        <p className="font-regular text-s m-0 mt-1 pb-10 custom-head-size">{recipe.name}</p>
                        <div className="flex flex-row text-xs">
                            <p className="m-0 w-24">{recipe.level}</p>
                            <p className="m-0 w-2"></p>
                            <ClockIcon className="w-4 h-4 flex justify-end"/>
                            <p className="m-0 w-12 flex justify-end font-semibold align-middle">{recipe.cooktime}</p>
                        </div>
                    </div>
                </div>
            )
        })
        return(
            <div className="flex justify-around bg-orange-50">
                <div className="bg-orange-50 h-full grid grid-cols-4">
                    {dishes}
                 </div>
            </div>
            
        )
    }
}

export default RecipeCard