import React, { Component } from 'react';
import './styles/Navbar.css'
import './styles/common.css'

class Footer extends React.Component {
    
    render() { 
        return(

            <div className="bg-gray-900">
                <div className="w-full bg-gray-900 flex flex-row justify-center">
                    <div className="w-3/4 h-16 bg-gray-900 flex flex-row">
                        <div className="flex flex-row noselect w-3/4">
                            <h1 className="flex flex-row text-3xl font-medium h-8 mt-3.5 text-white tracking-tight hover:text-gray-700 font-sans-murecho">
                                c
                                <img className="mt-2.5 w-6 h-6 " alt="o-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAsklEQVRIie2TwQkCMRQF319kC7APGxCtxSLEHuxBEMFSFhHPHj3Hq7c9Ol4U4sqSxI2grHMM+W9eEiL1CuAA7D8pACBlZhAIHEqaSZpKGnnrJ0lHSZWkjZldUpsWwAKoCVMDc8Biww1YRwQ3WUVLfhNg98a1tFE9cgvPcc3Zt+0Ukwztx37my6tD2kdqYmZPmUXbxlz8Bd8pOHfIczGCbQdBeBYogSXgEj6Xu8+UHcr1lRvanGdHAvVu2AAAAABJRU5ErkJggg==" />
                                oking
                            </h1>
                        </div>

                        <div className="w-1/4 mt-4">
                            <p className="flex justify-end text-white font-sans-custom">Find us on 
                            <img className="ml-2" alt="fb-icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTg2LDE0LjMzMzMzYy0zOS41ODE1LDAgLTcxLjY2NjY3LDMyLjA4NTE3IC03MS42NjY2Nyw3MS42NjY2N2MwLDM4LjY2NDE3IDMwLjYzNzUsNzAuMDkgNjguOTUwNSw3MS41MzA1di00OS43NTFoLTE2Ljc5MTV2LTE5LjUyOTE3aDE2Ljc5MTV2LTE0LjM2OTE3YzAsLTE2LjY1NTMzIDEwLjE4MzgzLC0yNS43MzU1IDI1LjA0NzUsLTI1LjczNTVjNS4wMDk1LC0wLjAxNDMzIDEwLjAxMTgzLDAuMjQzNjcgMTQuOTkyNjcsMC43NTI1djE3LjQxNWgtMTAuMjM0Yy04LjA5ODMzLDAgLTkuNjc1LDMuODI3IC05LjY3NSw5LjQ3NDMzdjEyLjQzNDE3aDE5LjM1bC0yLjUxNTUsMTkuNTI5MTdoLTE2Ljk0OTE3djQ3LjcyMjgzYzMxLjIwMzY3LC03Ljc0NzE3IDU0LjM2NjMzLC0zNS44NjkxNyA1NC4zNjYzMywtNjkuNDczNjdjMCwtMzkuNTgxNSAtMzIuMDg1MTcsLTcxLjY2NjY3IC03MS42NjY2NywtNzEuNjY2Njd6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/>
                            </p>
                        </div>
                    </div>

                </div>

                <div className="flex justify-center pt-6">
                    <div className="flex flex-col justify-center w-3/4 h-1 bg-orange-800">
                    </div>
                </div>

                <div className="flex w-1/2 justify-center">
                    <div className="w-96 flex flex-row pt-3"> 
                        <div className="w-full p-2 text-white flex justify-start font-sans-custom text-sm">
                            <p className="m-0 pr-5">About Us</p>
                            <p className="m-0 pr-5">Terms&Conditions</p>
                            <p className="m-0 pr-5">Privacy Policy</p>
                        </div>
                    </div>
                        
                </div>
                
                
            </div>

        )
    }
}
 
export default Footer;