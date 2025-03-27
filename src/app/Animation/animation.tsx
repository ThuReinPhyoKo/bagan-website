'use client'

import {motion, useInView} from 'framer-motion'
import {useRef} from "react"

export function AnimateFromLeft ({children, }: Readonly <{children: React.ReactNode}>) {
    return (
       
        <motion.div initial={{x: -130, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 2, ease: 'easeOut' }}>
            {children}
        </motion.div>
    
    )
}

export function AnimateFromBottom ({children, }: Readonly <{children: React.ReactNode}>) {
    return (
        <>
            <motion.div initial={{y: 130, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 2, ease: 'easeOut' }}>
                {children}
            </motion.div>
        </>
    )
}

export function AutoShow ({children, }: Readonly <{children: React.ReactNode}>) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-50px"})

    return (
        <>
            <motion.div ref={ref}
                initial={{y: 100, opacity: 0, scale: 0.3}}
                animate={ isInView? {y: 0, opacity: 1, scale: 1} : {}}
                transition={{duration: 0.7, ease: 'easeOut' }}>
                    {children}
            </motion.div>
        </>
    )
}