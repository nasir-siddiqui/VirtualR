import react from "react"
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
    return (
        <div className="">

            <div className="flex justify-center flex-col space-y-8"> <h1 className="text-center text-4xl sm:text-6xl lg:text7xl tracking-wide">VirtualR build tools <span className="bg-gradient-to-r from-orange-500 to-orange-800 inline text-transparent bg-clip-text">for <br />developers</span></h1>
                <p className="text-neutral-400 text-center">we transform learners into skilled developers by providing an innovative, interactive coding environment. Whether you're a beginner just stepping into the coding world or an experienced developer looking to sharpen your skills, VirtualR is your ultimate partner in coding success.</p>
                <div className="flex justify-center space-x-5">
                    <a href="" className="bg-gradient-to-r from-orange-500 to-orange-800  py-2 px-3 border rounded-md">Start for Free</a>
                    <a href="" className="py-2 px-3 border rounded-md">Documentation</a>
                </div>

                <div className="flex justify-center space-x-5">
                    <video className="w-1/2 border border-neutral-400 rounded shadow-orange-400 mx-2 my-4" autoPlay muted loop src={video1}>Your browser does not support video tag. </video>
                    <video className="w-1/2 border border-neutral-400 rounded shadow-orange-400 mx-2 my-4" autoPlay muted loop src={video2}>Your browser does not support video tag. </video>
                </div>
            </div>
        </div>
    )
}

export default Hero;
