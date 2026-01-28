"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className = "", hover = false, onClick }: CardProps) {
  const baseStyles = "bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100";
  const hoverStyles = hover ? "transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer" : "";
  
  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
