/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { ComponentPropsWithoutRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline" | "secondary";

type BaseProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  glow?: boolean;
  size?: number | string;
  offset?: number;
  hoverOffset?: number;
};

type ButtonProps = BaseProps &
  ComponentPropsWithoutRef<typeof motion.button> & {
    as?: "button";
    href?: never;
  };

type AnchorProps = BaseProps &
  Omit<ComponentPropsWithoutRef<typeof motion.a>, "href"> & {
    as: "link";
    href: string;
  };

type FrameButtonProps = ButtonProps | AnchorProps;

export function FrameButton({
  children,
  className,
  variant = "default",
  glow = false,
  size = 18,
  offset = 7,
  hoverOffset = 4,
  ...props
}: FrameButtonProps) {
  const commonStyles = cn(
    "group relative inline-flex items-center justify-center overflow-visible",

    "border",

    "px-7 py-3.5",

    "text-sm font-medium",

    "tracking-[0.12em]",

    "transition-all duration-300",

    "select-none",

    "cursor-pointer",

    "no-underline",

    variant === "default" && [
      "bg-black",
      "text-white",
      "border-black",
      "hover:bg-neutral-900",
    ],

    variant === "secondary" && [
      "bg-white",
      "text-black",
      "border-neutral-300",
      "hover:bg-neutral-100",
    ],

    variant === "outline" && [
      "bg-transparent",
      "text-neutral-900",
      "border-neutral-300",
      "hover:bg-neutral-100",
    ],

    className
  );

  const glowLayer = glow ? (
    <div
      className={cn(
        "absolute inset-0 -z-10 opacity-0 blur-2xl",
        "group-hover:opacity-40",
        "group-hover:scale-110",
        "transition-all duration-300"
      )}
      style={{
        background: "currentColor",
      }}
    />
  ) : null;

  const content = (
    <>
      {glowLayer}

      {children}

      <FrameMarkers
        size={size}
        offset={offset}
        hoverOffset={hoverOffset}
      />
    </>
  );

  if (props.as === "link") {
    const { as, href, ...anchorProps } = props;

    return (
      <motion.a
        href={href}
        className={commonStyles}
        whileTap={{ scale: 0.98 }}
        {...anchorProps}
      >
        {content}
      </motion.a>
    );
  }

  const { as, ...buttonProps } = props;

  return (
    <motion.button
      className={commonStyles}
      whileTap={{ scale: 0.98 }}
      {...buttonProps}
    >
      {content}
    </motion.button>
  );
}

type IconProps = React.SVGProps<SVGSVGElement>;

function ChevronUpLeft(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M8 16V8h8" />
    </svg>
  );
}

function ChevronUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M16 16V8H8" />
    </svg>
  );
}

function ChevronDownLeft(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M8 8v8h8" />
    </svg>
  );
}

function ChevronDownRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M16 8v8H8" />
    </svg>
  );
}

interface FrameMarkersProps {
  className?: string;
  size?: number | string;
  offset?: number;
  hoverOffset?: number;
}

function FrameMarkers({
  className,
  size = 18,
  offset = 7,
  hoverOffset = 4,
}: FrameMarkersProps) {
  const isString = typeof size === "string";

  const baseClass = cn(
    "absolute",
    "pointer-events-none",
    "text-neutral-400",
    "transition-all",
    "duration-300",
    "group-hover:text-black",
    className
  );

  const styleBase = isString ? {} : { width: size, height: size };

  return (
    <>
      <ChevronUpLeft
        className={baseClass}
        style={{
          ...styleBase,
          top: -offset,
          left: -offset,
          transform: `translate(-${hoverOffset}px,-${hoverOffset}px)`,
        }}
      />

      <ChevronUpRight
        className={baseClass}
        style={{
          ...styleBase,
          top: -offset,
          right: -offset,
          transform: `translate(${hoverOffset}px,-${hoverOffset}px)`,
        }}
      />

      <ChevronDownLeft
        className={baseClass}
        style={{
          ...styleBase,
          bottom: -offset,
          left: -offset,
          transform: `translate(-${hoverOffset}px,${hoverOffset}px)`,
        }}
      />

      <ChevronDownRight
        className={baseClass}
        style={{
          ...styleBase,
          bottom: -offset,
          right: -offset,
          transform: `translate(${hoverOffset}px,${hoverOffset}px)`,
        }}
      />
    </>
  );
}

export default FrameButton;