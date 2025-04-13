import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export default function Container(props: ContainerProps) {
  return (
    <div
      className={`mx-auto px-4 sm:px-6 w-full lg:px-8 sm:max-w-screen-${props.size}`}
    >
      {props.children}
    </div>
  );
}
