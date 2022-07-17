import React from 'react'
import Icon1 from "../assets/gallery1.jpg";

export default function MyPurchase() {
    return (
        <div>

            <div className="grid place-items-center py-5">
                <h1 className="text-5xl font-bold text-white">My Purchase</h1>
                <div className="bg-blue-500 h-1 w-36 my-2"></div>
            </div>

            <div className="flex flex-wrap justify-around w-full px-16">
                <div className="m-8">
                    <div className="rounded-xl bg-gray-200">
                        <img src={Icon1} height="300" width="300" alt="TicTbeachacToe" className="rounded-t-xl" />
                        <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
                            <button
                                className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-blue-500">
                                Re-sell
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
