"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Button({ 
  children, 
  href, 
  variant = "primary", 
  className = "", 
  onClick,
  type = "button"
}) {
  const baseStyles = "relative inline-flex items-center justify-center rounded-full font-semibold transition-all overflow-hidden group";
  
  const variants = {
    primary: "bg-primary-600 text-white shadow-[0_0_20px_rgba(109,76,255,0.4)] hover:shadow-[0_0_40px_rgba(109,76,255,0.8)] hover:bg-primary-500 hover:-translate-y-1",
    secondary: "glass text-primary-600 hover:bg-white hover:text-primary-700 hover:-translate-y-1",
    outline: "border border-primary-500 text-primary-400 hover:bg-primary-500/10 hover:-translate-y-1",
  };
  
  // Only apply default padding if no custom px/py classes are passed in className
  const defaultPadding = className?.includes('px-') ? '' : 'px-8 py-4';

  const Content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary-700 via-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${defaultPadding} ${className}`}>
        {Content}
      </Link>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${defaultPadding} ${className}`}
    >
      {Content}
    </motion.button>
  );
}
