import react from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
    return (
        <div className="mt-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide mt-6 text-center mb-10">Pricing</h2>
            <div className="flex flex-wrap" >
                {pricingOptions.map((option, index) => (
                    <div key={index} className=" w-full sm:w-1/2 lg:w-1/3">
                        <div className=" m-3 p-10 border border-neutral-400 rounded-lg">
                            <h3 className="text-3xl mb-8 ">
                                {option.title}
                                {option.title === "Pro" &&
                                    <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-xl mb-4 ml-2">(Most Popular)</span>}
                            </h3>
                            <p className="mb-8 ">
                                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                                <span className="text-neutral-400 tracking-tight"
                                >/Month</span>
                            </p>
                            <ul>
                                {option.features.map((features, index) => (
                                    <li key={index} className="mt-8 flex items-center">
                                        <CheckCircle2 />
                                        <span className="ml-2">{features}</span>
                                    </li>
                                ))}
                            </ul>
                            {/* <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-800 rounded-lg transition duration-200" >Subscribe</a> */}
                            <a href="#" className={`inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl border rounded-lg transition duration-200 ${option.title === "Pro"
                                ?  "bg-gradient-to-r from-orange-500 to-orange-900 text-white hover:bg-gradient-to-r hover:from-orange-700 hover:to-orange-900 border-orange-800"
                                : "hover:bg-orange-900 border-orange-800"
                                }`} >Subscribe</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing;