"use client"

import { useState } from "react";
import { motion } from "framer-motion"
import { div } from "framer-motion/client";

const timelineData = [
    { 
      date: "849 AD", 
      title: "Foundation of Bagan",
      img: "/assets/timeline/foundation.jpg", 
      description: "King Pyinbya, a ruler of the early Pagan Kingdom, relocated the capital to Bagan and fortified the city. This marked the beginning of Bagan as a political and cultural center in Myanmar. Over time, Bagan became a prosperous kingdom, fostering trade, agriculture, and early Buddhist influences."
    },
    { 
      date: "1044 AD", 
      title: "Anawrahta's Rise to Power",
      img: "/assets/timeline/anawrahta.jpg", 
      description: "King Anawrahta established the Pagan Empire, unifying the Burmese people for the first time. He introduced Theravāda Buddhism, replacing animist and Mahayana practices. Under his reign, numerous temples were built, including Shwezigon Pagoda, a prototype for later Burmese stupas."
    },
    { 
      date: "1084 AD", 
      title: "Kyansittha’s Golden Age",
      img: "/assets/timeline/kyansitthar.jpg", 
      description: "After Anawrahta, King Kyansittha continued his religious and cultural policies, leading to a golden age of temple construction. One of his greatest achievements was the Ananda Temple, a masterpiece of Mon and Indian architectural styles. Buddhism flourished, and Bagan became a pilgrimage site."
    },
    { 
      date: "1211 AD", 
      title: "Peak of Temple Construction",
      img: "/assets/timeline/peak.jpg", 
      description: "During the reign of King Narapatisithu, Bagan reached its architectural peak. Over 10,000 temples, pagodas, and monasteries were constructed across the region, showcasing advanced Burmese engineering and artistry. Key structures like Dhammayangyi Temple, the largest temple in Bagan, were built during this period."
    },
    { 
      date: "1287 AD", 
      title: "Mongol Invasion & Decline",
      img: "/assets/timeline/invasion.jpg", 
      description: "Bagan’s decline began with the invasion of Kublai Khan's Mongol Empire. After a long period of internal conflicts and weak rulers, the Mongols seized control in 1287, causing widespread destruction. Although Bagan remained a religious center, its political dominance ended, and many temples fell into ruin."
    },
    { 
      date: "1990s", 
      title: "Restoration & UNESCO Consideration",
      img: "/assets/timeline/restoration.jpg", 
      description: "In the late 20th century, efforts to restore Bagan’s historic temples began. Despite criticisms of reconstruction methods, Bagan gained global recognition for its cultural and historical significance. In 2019, Bagan was officially declared a UNESCO World Heritage Site, securing its place as one of Myanmar’s most treasured landmarks."
    }
  ];

export default function TimeLine () {
    const [ selected , setSelected ] = useState<number>(0);


    return (
        <>
            <div className="w-full flex flex-col items-center">
                <div id="timeline-bg" className="w-3/4 lg:h-72 h-[360px] sm:justify-center lg:justify-normal flex md:gap-6 md:flex-row flex-col gap-3 p-6 rounded-lg">
                    <motion.img 
                        key={timelineData[selected].img}
                        src={timelineData[selected].img}
                        alt={timelineData[selected].title}
                        className="w-[150px] sm:w-1/3 md:w-[241px] md:object-contain md:self-start lg:1/3 rounded-lg"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                    />
                    <motion.div key={timelineData[selected].date}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-2/3 w-full">
                        <h1 className="font-semibold text-white lg:text-xl md:text-lg sm:text-base text-sm mb-1 lg:mb-2">{timelineData[selected].title}</h1>
                        <p className="text-xs text-white sm:text-sm md:text-base">{timelineData[selected].description}</p>
                    </motion.div>
                </div>

                <div className="w-3/4 mt-8 relative">
                    <div className="absolute mt-[-15px] bg-gray-400 dark:bg-white w-full h-1 rounded-full top-1/2 z-0 left-0 transform -translate-y-1/2"></div>
                    <div className="flex items-center justify-around">
                      {timelineData.map((event, index) => (
                        <div key={index}  className="flex flex-col items-center">
                          <button onClick={() => setSelected(index)} className={`lg:w-5 lg:h-5 md:w-4 md:h-4 w-3 h-3 border-2 border-white z-10 rounded-full cursor-pointer transition ${selected === index ? "bg-blue-600 scale-125" : "bg-gray-600"}`}></button>
                          <h4 className="mt-3 md:mt-2 lg:mt-1 text-xs sm:text-sm md:text-base">{event.date}</h4>
                        </div>
                      ))}
                    </div> 
                </div>
            </div>
        </>
    )
}
  