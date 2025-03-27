"use client"

import { motion } from "framer-motion"

const archiData = [
    {
      image: "/assets/pagoda/ananda.jpg",
      name: "Ananda Temple",
      description:
        "Ananda Temple, built in 1105 AD by King Kyansittha, is one of Bagan's most iconic temples. It blends Mon and Indian architectural styles and houses four standing Buddha statues, each facing a cardinal direction.",
      date: "1105 AD",
    },
    {
      image: "/assets/pagoda/shwezigon.jpg",
      name: "Shwezigon Pagoda",
      description:
        "Shwezigon Pagoda, constructed in the late 11th century by King Anawrahta and completed by King Kyansittha, is a gilded stupa that served as a prototype for later Myanmar stupas. It enshrines sacred relics, including a tooth of the Buddha.",
      date: "Late 11th century AD",
    },
  ];

export default function Temple () {


    return (
        <>
            <div className="w-full flex flex-col items-center gap-5">
                
                <div id="archi-bg1" className="w-3/4 flex lg:gap-6 lg:flex-row flex-col gap-3 p-6 rounded-lg transition duration-100 hover:border-2 border-blue-700 dark:border-white hover:scale-[1.03]">
                    <motion.img 
                        key={archiData[0].image}
                        src={archiData[0].image}
                        alt={archiData[0].name}
                        className="w-2/3 sm:w-1/3 rounded-lg object-cover"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                    />
                    <motion.div key={archiData[0].date}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-2/3 w-full">
                        <h1 className="font-semibold text-white lg:text-xl md:text-lg sm:text-base text-sm mb-1 lg:mb-2">{archiData[0].name}</h1>
                        <p className="text-white text-xs sm:text-sm">{archiData[0].date}</p>
                        <p className="text-white text-xs sm:text-sm md:text-base">{archiData[0].description}</p>
                    </motion.div>
                </div>
                <div id="archi-bg2" className="w-3/4  flex lg:gap-6 lg:flex-row flex-col gap-3 p-6 rounded-lg transition duration-100 hover:border-2 border-blue-700 dark:border-white hover:scale-[1.03]">
                    <motion.div key={archiData[1].date}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-2/3 w-full">
                        <h1 className="font-semibold text-white lg:text-xl md:text-lg sm:text-base text-sm mb-1 lg:mb-2">{archiData[1].name}</h1>
                        <p className="text-white text-xs sm:text-sm">{archiData[1].date}</p>
                        <p className="text-white text-xs sm:text-sm md:text-base">{archiData[1].description}</p>
                    </motion.div>
                    <motion.img 
                        key={archiData[1].image}
                        src={archiData[1].image}
                        alt={archiData[1].name}
                        className="w-2/3 sm:w-1/3 rounded-lg object-cover"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                    />
                </div>

            </div>
        </>
    )
}
  