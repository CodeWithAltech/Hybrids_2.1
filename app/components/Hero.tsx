import React from 'react'
import ApiDownloadBtn from './api'
import WidgetComponent from './api'

function Hero() {
    return (
        // <div className=' m-2 flex flex-col justify-center place-items-center'>
        <section className=" bg-black section text-white ">
            <div className=" flex flex-col justify-center place-items-center gap-4 mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                    <h1
                        className="bg-gradient-to-l from-green-300 via-blue-500 to-white bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                    >
                        Download Your Favorite

                        <span className="sm:block text-red-800">  YouTube Videos. </span>
                    </h1>

                    <p className="mx-auto  mb-4  mt-4 max-w-xl sm:text-xl/relaxed">
                        Paste the YouTube Link to Download, Fast, Easy, and High-Quality Downloads in Multiple Formats.
                    </p>
                </div>
                <div className="flex justify-center place-items-center w-full">
                    <WidgetComponent />
                </div>
            </div>
        </section>
        // </div>
    )
}

export default Hero
