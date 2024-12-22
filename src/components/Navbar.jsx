import REACT from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png"
// import navItems from "../constants"

const Navbar = () => {
    const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setmobileDrawerOpen(!mobileDrawerOpen);
    }

    return (
        <nav className="sticky py-3 border-b top-0 z-50 backdrop-blur-lg border-neutral-700/80">

            <div className="container px-4 mx-auto relative text-sm flex justify-between items-center">

                <div className="flex items-center flex-shrink-0">
                    <img className="h-10 w-10" src={logo} alt="Logo" />
                    <span className="text-xl tracking-tight">VirtualR</span>
                </div>


                <ul className="hidden lg:flex ml-14 space-x-12">

                    <li className="">
                        <a href="#">Home</a>
                    </li>
                    <li className="">
                        <a href="#">About</a>
                    </li>
                    <li className="">
                        <a href="#">Contact</a>
                    </li>
                    <li className="">
                        <a href="#">Guide</a>
                    </li>
                </ul>


                <div className="hidden lg:flex justify-center items-center space-x-12">
                    <a href="" className="py-2 px-3 border rounded-md">Sign in</a>
                    <a href="" className="bg-gradient-to-r from-orange-500 to-orange-800  py-2 px-3 border rounded-md">Create account</a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {mobileDrawerOpen && (
                    <div className="  ">
                        <ul className="lg:hidden fixed flex flex-col justify-center items-center right-0 z-20 bg-neutral-900 w-full p-12 mt-8 space-y-6">

                            <li className="">
                                <a href="#">Home</a>
                            </li>
                            <li className="">
                                <a href="#">About</a>
                            </li>
                            <li className="">
                                <a href="#">Contact</a>
                            </li>
                            <li className="">
                                <a href="#">Guide</a>
                            </li>
                            <div className="space-x-4"> <a href="" className="py-2 px-3 border rounded-md">Sign in</a>
                                <a href="" className="bg-gradient-to-r from-orange-500 to-orange-800  py-2 px-3 border rounded-md">Create account</a></div>
                        </ul>
                    </div>
                )}
            </div>

        </nav>

    )
}

export default Navbar;