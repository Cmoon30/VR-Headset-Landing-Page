import React from 'react'
import { logo } from "../img/IndexImg"

export const SmallLogo = () => <img className="select-none h-4" src={logo} alt="logo" />;

export const HeaderTitle = ({ title }) => (
   <div className="flex gap-1 items-center">
      <img className="select-none h-4" src={logo} alt="logo" />
      <span className="w-full">{title}</span>
   </div>
);

export const HeaderLogo = () => <img className="select-none h-10" src={logo} alt="logo" />;
