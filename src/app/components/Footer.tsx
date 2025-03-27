export default function Footer () {
    return (
        <>
            <div id="footer" className="relative w-full h-auto pt-7 pr-7 pl-7 pb-0 font-zain text-white rounded-t-3xl">
                <div id="footer-head-text" className="w-3/4 mx-auto text-center">
                    <p className="pb-2 text-lg md:text-xl text-center">Welcome to Bagan, a content-driven site showcasing the beauty and history of Bagan, Myanmar. This portfolio project highlights my web development skills. Note: This is not a business or commercial site. Credits for all images, information, and graphics are listed below.</p>
                </div>
                <hr className="bg-black h-1 rounded-full m-3" />
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center">
                    <div id="resources" className="flex justify-evenly flex-wrap gap-2">
                        <div id="resource-svg">
                            <h5 className="tex-lg sm:text-xl lg:text-2xl">Graphics by:</h5>
                            <ul>
                                <li><a href="https://www.svgrepo.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-base sm:text-lg lg:text-xl">SVG Repo</a></li>
                                <li><a href="https://worldvectorlogo.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-base sm:text-lg lg:text-xl">World Vector Logo</a></li>
                                <li><a href="https://pngtree.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-base sm:text-lg lg:text-xl">Pngtree</a></li>
                            </ul>
                        </div>
                        <div id="resource-img">
                            <h5 className="tex-lg sm:text-xl lg:text-2xl">Images Credits:</h5>
                            <ul>
                                <li><a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-base sm:text-lg lg:text-xl">Pexels</a></li>
                                <li><a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-base sm:text-lg lg:text-xl">Pinterest</a></li>
                                <li><a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-base sm:text-lg lg:text-xl">Unsplash</a></li>
                            </ul>
                        </div>
                        <div id="resource-infos">
                            <h5 className="tex-lg sm:text-xl lg:text-2xl">Data sourced from:</h5>
                            <ul>
                                <li><a href="https://www.wikipedia.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-base sm:text-lg lg:text-xl">Wikipedia</a></li>
                                <li><a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-base sm:text-lg lg:text-xl">ChatGPT</a></li>
                            </ul>
                        </div>
                    </div>
                    <div id="social-platforms" className="flex flex-col justify-around items-center">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Let's connect . . .</h3>
                        <p className="w-3/4 p-2 text-lg md:text-xl text-center">I'm always open to new connections, collaborations, and projects. Reach out to me through any of the platforms below!</p>
                        <div className="flex gap-6 mb-3">
                            <a href="https://www.linkedin.com/in/thurein-phyoko-ryandev/" title="LinkedIn" target="_blank" rel="noopener noreferrer"><img src="/assets/svg/linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-9 h-9 transition duration-75 ease-in-out hover:scale-125" /></a>
                            <a href="https://github.com/ThuReinPhyoKo" title="GitHub" target="_blank" rel="noopener noreferrer"><img src="/assets/svg/github-color-svgrepo-com.svg" alt="GitHub" className="w-9 h-9 transition duration-75 ease-in-out hover:scale-125"/></a>
                            <a href="https://www.upwork.com/freelancers/~01c21453c4520bdfbc" title="Upwork" target="_blank" rel="noopener noreferrer"><img src="/assets/svg/upwork-svgrepo-round-com.svg" alt="Upwork" className="w-9 h-9 transition duration-75 ease-in-out hover:scale-125"/></a>
                            <a href="mailto:mr.thureinphyoko@gmail.com?subject=Hello&body=Hi, I'd like to connect" title="Email"><img src="/assets/svg/email-svgrepo-com.svg" alt="Email" className="w-9 h-9 transition duration-75 ease-in-out hover:scale-125"/></a>
                        </div>
                        <div id="techs-logos" className="flex gap-3 w-full items-end justify-end p-2">
                            <img src="/assets/svg/nextjs-2.svg" title="Next.js" alt="Next.js" className="w-12" />
                            <img src="/assets/svg/tailwind-css-svgrepo-com.svg" title="Tailwind CSS" alt="Tailwind" className="w-7" />
                            <img src="/assets/svg/typescript-svgrepo-com.svg" title="TypeScript" alt="TypeScript" className="w-6" />
                            <img src="/assets/svg/framer-motion.svg" alt="Framer-Motion" title="Framer Motion" className="w-6" />
                            <img src="/assets/svg/leaflet-1.svg" title="Leaflet" alt="Leaflet" className="w-16" />
                        </div>
                    </div>
                </div>
                <div className="absolute left-2 bottom-0 font-zain"><p className="text-lg md:tex-xl">tomryan.dev</p></div>
            </div>
            
        </>
    )
}
