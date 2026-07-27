"use client";

import { ReactNode } from "react";
import PageTransition from "./PageTransition";

interface Props {
  children: ReactNode;
}

export default function MotionWrapper({
  children,
}: Props) {

  return (

    <PageTransition>

      {children}

    </PageTransition>

  );

}