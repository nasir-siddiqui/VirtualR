import { testimonials } from "../constants";

const Testimonials = () => {
    return (
        <div className="mt-16">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide mt-6 text-center mb-10">What People are Saying</h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonials, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                        <div className="bg-neutral-700 rounded-md p-6 text-md border border-neutral-800 font-thin">
                            <p>{testimonials.text}</p>
                            <div className="flex mt-8 items-start">
                                <img className="w-12 h-12 mr-6 rounded-full border border-neutral-300" src={testimonials.image} alt={testimonials.user} />
                                <div className="">
                                    <p className="text-orange-500 font-semibold">{testimonials.user}</p>
                                    <span className="text-sm font-normal italic text-neutral-400">{testimonials.company}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Testimonials