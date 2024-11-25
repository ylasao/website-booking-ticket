import React from "react";
import clsx from "clsx";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"] // Include the weights you need
});
const WrapContainer = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx("max-w-screen-xl m-auto", roboto.className, className)}
    >
      {children}
    </div>
  );
};

export default WrapContainer;
