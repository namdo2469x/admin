import { Layout } from "antd";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";

import Navbar from "../component/Navbar";

const { Content } = Layout;
const Footer = () => (
  <footer>
    <hr className="h-px border-t-0 bg-neutral-300 w-full" />
    <div className="px-4 md:px-64 py-16 flex flex-wrap justify-between  text-base text-stone-500">
      <div className="w-1/5 gap-y-3.5 flex flex-col">
        <h5 className="text-slate-900 font-semibold ">Categories</h5>
        <p>Graphics & Design</p>
        <p>Digital Marketing</p>
        <p>Writing & Translation</p>
      </div>
      <div className="w-1/5 gap-y-3.5 flex flex-col">
        <h5 className="text-slate-900 font-semibold">About</h5>
        <p>Careers Press & News</p>
        <p>Press & News</p>
        <p>Partnerships</p>
      </div>
      <div className="w-1/5 gap-y-3.5 flex flex-col">
        <h5 className="text-slate-900 font-semibold">Support and Education</h5>
        <p>Help & Support Trust & Safety</p>
        <p>Trust & Safety</p>
        <p>Selling on Fiverr</p>
      </div>
      <div className="w-1/5 gap-y-3.5 flex flex-col">
        <h5 className="text-slate-900 font-semibold">Community</h5>
        <span>Customer Success Stories</span>
        <span>Community Hub</span>
        <span>Forum</span>
      </div>
      <div className="w-1/5 gap-y-3.5 flex flex-col">
        <h5 className="text-slate-900 font-semibold">Business Solutions</h5>
        <p>About Business Solutions</p>
        <p>Fiverr Pro</p>
        <p>Fiverr Certified</p>
      </div>
    </div>
  </footer>
);

const LayoutCustom = () => {
  const isNonMobile = useMediaQuery({ minWidth: 600 });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Navbar />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </>
  );
};

export default LayoutCustom;
