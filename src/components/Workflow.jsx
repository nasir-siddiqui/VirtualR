import react from "react";
import { CheckCircle2 } from "lucide-react"
import codeimg from "../assets/code.jpg"
import { checklistItems } from "../constants";

const Workflow = () => {
    return (
        <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide mt-6">Accelerate your <span className="bg-gradient-to-r from-orange-500 to-orange-800 inline text-transparent bg-clip-text">coding Workflow.</span></h2>
            <div className="flex flex-wrap justify-center ">
                <div className="w-full lg:w-1/2">
                    <img className="w-[600px]" src={codeimg} alt="Codes" />
                </div>
                <div className="pt-12 w-full lg:w-1/2">
                    {checklistItems.map((item, index) => (
                        <div key={index} className="flex mb-12">
                            <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                <CheckCircle2 />
                            </div>
                            <div className="">
                                <h3 className="mt-1 mb-2 text-xl">{item.title}</h3>
                                <p className="text-neutral-500 text-md">{item.description}</p>
                            </div>
                        </div>

                    ))}

                </div>

            </div>

        </div>
    )
}

export default Workflow;
