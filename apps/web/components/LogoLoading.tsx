"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function Logoloading() {
    const reduceMotion = useReducedMotion();

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-[#05070b]">
            <motion.div
                animate={
                    reduceMotion
                        ? { opacity: 1 }
                        : { opacity: [0.4, 1, 0.4] }
                }
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            >
                <Image
                    src="/yodmayom_logo_no_bg.png"
                    alt="Yodmayom"
                    width={120}
                    height={120}
                    priority
                    className="h-42 w-42 object-contain"
                />
            </motion.div>
        </div>
    );
}
