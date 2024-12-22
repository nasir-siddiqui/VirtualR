import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
    return (
        <footer className="mt-20 border-t py-10 border-neutral-600">

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="">
                    <h3 className="textmd font-semibold mb-4">Resource</h3>
                    <ul className="space-y-2 ">
                        {resourcesLinks.map((link, index) => (
                            <li key="index">
                                <a className="text-neutral-300 hover:text-white" href={link.href}>
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="">
                    <h3 className="textmd font-semibold mb-4">Resource</h3>
                    <ul className="space-y-2 ">
                        {platformLinks.map((link, index) => (
                            <li key="index">
                                <a className="text-neutral-300 hover:text-white" href={link.href}>
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="">
                    <h3 className="textmd font-semibold mb-4">Resource</h3>
                    <ul className="space-y-2 ">
                        {communityLinks.map((link, index) => (
                            <li key="index">
                                <a className="text-neutral-300 hover:text-white" href={link.href}>
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <p className="text-center mt-10 border-t border-neutral-700">&copy; 2024 <a className="bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text" href="https://nasir.pro/">Nasir</a> - <a className="bg-gradient-to-r from-red-400 to-red-700 text-transparent bg-clip-text italic" href="https://www.youtube.com/watch?v=EwzWg-Joxq0" target="_blank">Source</a>
            </p>
        </footer>
    )
}

export default Footer;