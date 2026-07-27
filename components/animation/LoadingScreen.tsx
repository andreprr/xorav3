"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);


    return () => clearTimeout(timer);

  }, []);


  return (

    <AnimatePresence>

      {loading && (

        <motion.div

          initial={{
            opacity: 1,
          }}

          exit={{
            opacity: 0,
          }}

          transition={{
            duration: 0.5,
          }}

          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950"

        >

          <div className="flex flex-col items-center">


            {/* Logo */}

            <motion.h1

              initial={{
                opacity: 0,
                scale: 0.8,
              }}

              animate={{
                opacity: 1,
                scale: 1,
              }}

              transition={{
                duration: 0.8,
              }}

              className="text-6xl font-black tracking-tight text-white"

            >
              XORA

            </motion.h1>


            <motion.p

              initial={{
                opacity: 0,
              }}

              animate={{
                opacity: 1,
              }}

              transition={{
                delay:0.4,
              }}

              className="mt-4 text-sm tracking-[0.4em] text-slate-400"

            >
              DIGITAL EXPERIENCE

            </motion.p>


            {/* Loading Bar */}

            <div className="mt-10 h-1 w-48 overflow-hidden rounded-full bg-slate-800">

              <motion.div

                initial={{
                  width:"0%",
                }}

                animate={{
                  width:"100%",
                }}

                transition={{
                  duration:1.5,
                  ease:"easeInOut",
                }}

                className="h-full bg-blue-500"

              />

            </div>


          </div>


        </motion.div>

      )}

    </AnimatePresence>

  );
}