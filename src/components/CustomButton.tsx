
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CustomButtonProps {
  to: string;
  label: string;
  className?: string;
}

const CustomButton = ({ to, label, className }: CustomButtonProps) => {
  return (
    <Link to={to} className={cn("block", className)}>
      <button className="button w-full">
        <div className="wrap">{label}</div>
      </button>
    </Link>
  );
};

export default CustomButton;
