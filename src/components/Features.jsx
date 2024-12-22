import react from "react";
import { features } from "../constants"

const Features = () => {
    return (
        <div className="min-h-[800px] relative mt-20 border-b border-neutral-800">
            <div className="text-center">
                <span className="uppercase text-center text-orange-500 bg-neutral-800 h-6 text-sm font-medium px-2 py-1 rounded-full inline">features</span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide mt-4">Easy build <span className="bg-gradient-to-r from-orange-500 to-orange-800 inline text-transparent bg-clip-text">your Code</span></h2>
            </div>

            <div className="flex flex-wrap mt-10 lg:mt-20">
                {features.map((features, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3" >
                        <div className="flex mt-10">
                            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                                {features.icon}
                            </div>
                            <div>
                                <h3 className="mt-1 mb-6 text-xl">{features.text}</h3>
                                <p className="text-neutral-500 text-md">{features.description}</p>
                            </div>
                        </div>

                    </div>

                ))}

            </div>
        </div>

    )
}
export default Features;