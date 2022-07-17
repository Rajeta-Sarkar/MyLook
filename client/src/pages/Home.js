import React from "react"
import HeroImg from '../assets/hero.svg'
import FeatImg from '../assets/feat.svg'
import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <div className='md:mx-28 mx-4 text-white py-10'>

            <div className='md:grid md:grid-cols-2 items-center'>
                <div className=''>
                    <h1 className='text-3xl md:text-6xl'>Who we are</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>The idea behind this application is to give people the opportunity to customise their clothes according to their own fasion sense. The design of the cloth can be purchased by any user who comes to purchase from the app.</p>

                    <Link to="/create">
                        <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>Create</button>
                    </Link>

                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={HeroImg} alt="img" width="450" height="450" />
                </div>
            </div>

            <div className='md:grid md:grid-cols-2 pt-12 items-center'>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={FeatImg} alt="img" width="300" height="300" />
                </div>
                <div className=''>
                    <h1 className='text-5xl'>What else do we have</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider'>MyLook is a web app where you can:
                    </p>
                    <ul className="text-2xl">
                        <li className="list-disc">Customize your coths.</li>
                        <li className="list-disc">Design your wn cloths.</li>
                        <li className="list-disc">Purchase other design.</li>
                        <li className="list-disc">Browse the fashion gallery.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
