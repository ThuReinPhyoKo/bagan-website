'use client'

import { motion } from "framer-motion"
import { useState } from "react"
import Modal from "./modal"

export default function Gallery () {
const [ selected, setSelected ] = useState<string | null>(null)

    return (
        <>
            <div className="w-3/4 grid grid-cols-2 md:grid-cols-4 gap-3 rounded-lg mx-auto">
                <motion.div className="flex flex-col">
                    <motion.img src="/assets/gallery/1.jpg" alt="gallery" className="m-2 h-auto w-full rounded-lg transition duration-300 hover:scale-105" onClick={() => setSelected("/assets/gallery/1.jpg")}/>
                    <motion.img src="/assets/gallery/2.jpg" alt="gallery" className="m-2 h-auto w-full rounded-lg transition duration-300 hover:scale-105" onClick={() => setSelected("/assets/gallery/2.jpg")}/>
                    <motion.img src="/assets/gallery/3.jpg" alt="gallery" className="m-2 h-auto w-full rounded-lg transition duration-300 hover:scale-105" onClick={() => setSelected("/assets/gallery/3.jpg")}/>
                    <motion.img src="/assets/gallery/f-1.jpg" alt="gallery" className="m-2 h-auto w-full rounded-lg transition duration-300 hover:scale-105" onClick={() => setSelected("/assets/gallery/f-1.jpg")}/>
                </motion.div>
                <motion.div className="flex flex-col">
                    <motion.img src="/assets/gallery/4.jpg" alt="gallery" className="m-2 h-auto w-full rounded-lg transition duration-300 hover:scale-105" onClick={() => setSelected("/assets/gallery/4.jpg")}/>
                    <motion.img src="/assets/gallery/5.jpg" alt="gallery" className="m-2 h-auto w-full rounded-lg transition duration-300 hover:scale-105" onClick={() => setSelected("/assets/gallery/5.jpg")}/>
                    <motion.img src="/assets/gallery/6.jpg" alt="gallery" className="m-2 h-auto w-full rounded-lg transition duration-300 hover:scale-105" onClick={() => setSelected("/assets/gallery/6.jpg")}/>
                    <motion.img src="/assets/gallery/f-2.jpg" alt="gallery" className="m-2 h-auto w-full rounded-lg transition duration-300 hover:scale-105" onClick={() => setSelected("/assets/gallery/f-2.jpg")}/>
                </motion.div>
                <motion.div className="flex flex-col">
                    <motion.img src="/assets/gallery/7.jpg" alt="gallery" className="m-2 h-auto w-full rounded-lg transition duration-300 hover:scale-105" onClick={() => setSelected("/assets/gallery/7.jpg")}/>
                    <motion.img src="/assets/gallery/8.jpg" alt="gallery" className="m-2 h-auto w-full rounded-lg transition duration-300 hover:scale-105" onClick={() => setSelected("/assets/gallery/8.jpg")}/>
                    <motion.img src="/assets/gallery/9.jpg" alt="gallery" className="m-2 h-auto w-full rounded-lg transition duration-300 hover:scale-105" onClick={() => setSelected("/assets/gallery/9.jpg")}/>
                </motion.div>
                <motion.div className="flex flex-col">
                    <motion.img src="/assets/gallery/10.jpg" alt="gallery" className="m-2 h-auto w-full rounded-lg transition duration-300 hover:scale-105" onClick={() => setSelected("/assets/gallery/10.jpg")}/>
                    <motion.img src="/assets/gallery/11.jpg" alt="gallery" className="m-2 h-auto w-full rounded-lg transition duration-300 hover:scale-105" onClick={() => setSelected("/assets/gallery/11.jpg")}/>
                    <motion.img src="/assets/gallery/12.jpg" alt="gallery" className="m-2 h-auto w-full rounded-lg transition duration-300 hover:scale-105" onClick={() => setSelected("/assets/gallery/12.jpg")}/>
                    <motion.img src="/assets/gallery/f-3.jpg" alt="gallery" className="m-2 h-auto w-full rounded-lg transition duration-300 hover:scale-105" onClick={() => setSelected("/assets/gallery/f-3.jpg")}/>
                </motion.div>
                {selected && <Modal image={selected} onClose={()=> setSelected(null)} />}
            </div>
        </>
    )
}