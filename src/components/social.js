import React, { Component } from 'react';
import './styles/FindCard.css'
import './styles/common.css'
import { InboxInIcon } from '@heroicons/react/outline'
import { ThumbUpIcon } from '@heroicons/react/solid'

class Social extends Component {

    render() {
        return(

            <div className="flex flex-row justify-center">
                
                {/* <img className="absolute inset-x-3/4 inset-y-3/4" alt="garlic-pepper" src="https://www.scmp.com/cooking/static/img/bg_garlic_mobile.png"/>
                <img className="absolute top-3/4 left-10" alt="cloves" src="https://www.scmp.com/cooking/static/img/bg_anise_mobile.png"/> */}
                <div className="flex flex-row w-1/2">

                    <div className="w-96 pt-10 pb-10">
                        <InboxInIcon className="h-8 w-8 text-gray-800"/>
                        <h1 className="font-serif-custom text-gray-800 text-3xl font-bold m-0 pt-2 pb-3 ">Sign up to our newsletter</h1>
                        <p className="text-gray-700 font-sans-custom m-0 leading-5 tracking-normal">Fresh recipes straight to your inbox. A curated collection of Asian dishes to make at home.</p>
                        <div className="pt-4 font-sans-custom flex flex-row">
                            <input className="p-3 text-sm rounded-l-md border-1 bg-gray-100" type="search" placeholder="Your email here" />
                            <button className="p-3 bg-orange-800  mt-font-medium text-white rounded-r-md">Sign up</button>
                        </div>

                    </div>
                        
                    <div className="w-96 pt-10 pb-10">
                        <img className="h-8 w-8" src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt="fb-logo"/>
                        <h1 className="font-serif-custom text-gray-800 text-3xl font-bold m-0 pt-2 pb-3">Find us on facebook</h1>
                        <p className="text-gray-700 font-sans-custom m-0 leading-5 tracking-normal">Join our community and get the latest recipes from all over Asia for you to make at home.</p>
                        <div className="bg-blue-900 text-white w-16 flex flex-row p-1 rounded-md mt-2">
                            <ThumbUpIcon className="mt-1 mr-1 ml-1 h-4 w-4"/>Like
                        </div>
                        
                    </div>

                    

                </div>
            </div>
        )
    }
}

export default Social