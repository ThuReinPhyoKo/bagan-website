'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const cultureData = [
    {
        name: "Buddhism",
        img: "/assets/culture/buddhism.jpg",
        description: "Buddhism is a spiritual tradition founded by Siddhartha Gautama, the Buddha, in the 5th–4th century BCE. It teaches the Four Noble Truths, explaining suffering and the path to liberation through the Noble Eightfold Path. Key beliefs include karma, rebirth, and Nirvana—a state of ultimate peace. Practices like meditation, chanting, and generosity help cultivate wisdom, compassion, and inner peace."
    },
    {
        name: "Merit making",
        img: "/assets/culture/merit-making.jpg",
        description: "Merit-making is an important Buddhist practice where devotees earn good karma through acts of generosity, virtue, and meditation. Common ways include offering food to monks, donating to temples, and preserving religious sites. Buddhists believe merit brings spiritual rewards in this life and future rebirths."
    },
    {
        name: "Monks",
        img: "/assets/culture/monk.jpg",
        description: "Monks live a disciplined life dedicated to study, meditation, and teaching Buddhism. They follow strict rules, wear simple robes, and rely on alms for food. Each morning, they walk barefoot through villages collecting offerings, symbolizing humility and the connection between monastics and the lay community."
    },
    {
        name: "Horse drawn carts",
        img: "/assets/culture/cart.jpg",
        description: "Horse-drawn carts are a traditional way to explore Bagan’s ancient temples. Once a common mode of transport, they now offer visitors a slow, scenic journey through the ruins. The gentle rhythm of hooves and the open-air ride provide a nostalgic glimpse into Bagan’s past."
    }
]

export default function CultureSection () {
    const [ selected, setSelected ] = useState<number>(0)

    return (
        <>
            <div className="w-3/4 m-1 flex flex-col mx-auto items-center justify-center gap-6">
                <div className="w-full flex flex-wrap justify-evenly">
                        {cultureData.map((event, index) => (
                            <button key={index} onClick={() => setSelected(index)} className={`w-[134px] sm:w-40 md:w-44 lg:w-48 font-semibold text-xs sm:text-sm md:text-base lg:text-lg p-4 rounded-full transition duration-100 ${selected === index ? "text-black bg-slate-300": "text-slate-700"}`}>{event.name}</button>
                        ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <motion.img
                        key={cultureData[selected].img}
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.7}}
                        className="w-full sm:w-2/3 rounded-xl object-cover" 
                        src={cultureData[selected].img}
                        alt={cultureData[selected].name}
                    />
                    <motion.div
                        key={cultureData[selected].description}
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.7}}
                    >
                        <p className="text-xs sm:text-sm md:text-base">{cultureData[selected].description}</p>
                    </motion.div>
                </div>
            </div>
        </>
    )
}