import React from 'react'
import Shoe from "../assets/shoes.jpg"
import Outfit from "../assets/Outfit.png"
import { Link } from 'react-router-dom'

export default function Create() {
    return (
        <div>
            <div className="grid place-items-center py-5">
                <h1 className="text-5xl font-bold text-white">Design Fashion Cloths</h1>
                <div className='bg-blue-500 h-1 w-52 my-4 rounded-lg'></div>
            </div>

            <div className="flex flex-wrap justify-around w-full px-16">

                <Link to="/create/shoe">
                    <div className="m-8">
                        <div className="cursor-pointer transition duration-500 transform hover:scale-105 border-4 bg-gray-200 border-secondary rounded-lg">
                            <img src={Shoe} height="450" width="450" alt="TicTacToe" />
                            <div className="grid place-content-center mx-1 text-2xl font-semibold text-gray-900">Shoe</div>
                        </div>
                    </div>
                </Link>

                <Link to="/create/outfit">
                    <div className="m-8">
                        <div className="cursor-pointer transition duration-500 transform hover:scale-105 border-4 bg-gray-200 border-secondary rounded-lg">
                            <img src={Outfit} height="450" width="450" alt="TicTacToe" />
                            <div className="grid place-content-center mx-1 text-2xl font-semibold text-gray-900">Outfit</div>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )
}
