import React from "react";

export const Button = ({ children, className, ...rest }) => {
  return (
    <button
      className={`'text-white bg-violet-700 px-6 py-3 rounded md:rounded-md ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
