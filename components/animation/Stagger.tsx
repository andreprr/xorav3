"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";


interface Props {
  children: ReactNode;
  delay?: number;
}


export function StaggerContainer({
  children,
}: Props) {

  return (

    <motion.div

      initial="hidden"

      whileInView="show"

      viewport={{
        once:true,
        amount:0.2,
      }}

      variants={{
        hidden:{},

        show:{
          transition:{
            staggerChildren:0.15,
          },
        },

      }}

    >

      {children}

    </motion.div>

  );
}



export function StaggerItem({
  children,
  delay=0,
}: Props) {

  return (

    <motion.div

      variants={{

        hidden:{
          opacity:0,
          y:40,
        },


        show:{
          opacity:1,
          y:0,
        },

      }}

      transition={{
        duration:0.5,
        delay,
      }}

    >

      {children}

    </motion.div>

  );

}