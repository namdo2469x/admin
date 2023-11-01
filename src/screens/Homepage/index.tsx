import { CheckCircleOutlined } from "@ant-design/icons";
import { Button, Image } from "antd";
import { useState } from "react";
import Header from "./header";

import CommonCarousel from "../../component/CommonCarousel";

function Homepage() {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const handleMouseOver = (value: number) => {
    setIsHovered(value);
  };

  const handleMouseLeave = (value: number) => {
    setIsHovered(null);
  };

  const value = [
    {
      list: ["/images/img1.png", "/images/img2.png", "/images/img3.png", "/images/img4.png", "/images/img4.png"],
    },
    {
      list: ["/images/img1.png", "/images/img2.png", "/images/img3.png", "/images/img4.png", "/images/img4.png"],
    },
  ];
  const listIcon = [
    {
      text: "Graphics & Design",
      icon: "/icon/camera.svg",
    },
    {
      text: "Digital Marketing",
      icon: "/icon/camera.svg",
    },
    {
      text: "Writing & Translation",
      icon: "/icon/camera.svg",
    },
    {
      text: "Video & Animation",
      icon: "/icon/camera.svg",
    },
    {
      text: "Music & Audio",
      icon: "/icon/camera.svg",
    },
    {
      text: "Programming & Tech",
      icon: "/icon/camera.svg",
    },
    {
      text: "Business",
      icon: "/icon/camera.svg",
    },
    {
      text: "Lifestyle",
      icon: "/icon/camera.svg",
    },
    {
      text: "Data",
      icon: "/icon/camera.svg",
    },
    {
      text: "Photography",
      icon: "/icon/camera.svg",
    },
  ];
  return (
    <>
      <Header />

      <div className=" px-4 md:px-64 py-20">
        <h1 className="font-semibold text-3xl mb-8 ml-2">Popular services</h1>
        <CommonCarousel data={value} height={345} width={280} />
      </div>

      <div className="bg-teal-50 px-4 md:px-64 py-20 flex gap-x-16">
        <div className="flex-auto w-2/5 ">
          <h1 className="text-3xl mb-8  font-bold">The best part? Everything.</h1>
          <div className="text-lg">
            <span className="font-bold">
              {" "}
              <CheckCircleOutlined className="mr-0.5" /> Stick to your budget
            </span>
            <p className="text-stone-500 mb-4">
              Find the right service for every price point. No hourly rates, just project-based pricing.
            </p>
            <span className=" font-bold">
              {" "}
              <CheckCircleOutlined className="mr-0.5" /> Get quality work done quickly
            </span>
            <p className="text-stone-500  mb-4">
              Hand your project over to a talented freelancer in minutes, get long-lasting results.
            </p>
            <span className=" font-bold">
              {" "}
              <CheckCircleOutlined className="mr-0.5" /> Pay when you're happy
            </span>
            <p className="text-stone-500  mb-4">
              Upfront quotes mean no surprises. Payments only get released when you approve.
            </p>
            <span className=" font-bold">
              {" "}
              <CheckCircleOutlined className="mr-1" />
              Count on 24/7 support
            </span>
            <p className="text-stone-500  mb-4">
              Our round-the-clock support team is available to help anytime, anywhere.
            </p>
          </div>
        </div>
        <div className="flex-auto w-3/5">
          <Image src="/images/img5.png" />
        </div>
      </div>
      <div className="px-4 md:px-64 py-20">
        <h1 className="text-3xl mb-8  font-bold">You need it, we've got it</h1>
        <div className="flex flex-wrap gap-y-16">
          {listIcon.map((value: any, i: any) => (
            <div
              className="flex justify-center items-center flex-col lg:w-1/5 md:w-1/2 "
              key={i}
              onMouseOver={() => handleMouseOver(i)}
              onMouseLeave={() => handleMouseLeave(i)}
            >
              <img src={value.icon} />

              <hr
                className={
                  isHovered === i
                    ? "h-0.5 border-t-0 w-24 bg-green-500 transition-all"
                    : "h-0.5 border-t-0 bg-neutral-300 w-12"
                }
              />
              <p className=" ">{value.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 bg-blue-600 flex font-bold text-white">
          <div className="w-2/5 pl-20 py-8 gap-y-2 flex flex-col">
            <h4 className="text-lg">Fiverr Logo maker</h4>
            <h2 className="text-3xl">Make an incredible logo</h2>
            <i className="text-3xl">in minutes</i>
            <p className="text-sm">Pre-designed by top talent. Just add your touch.</p>
            <Button className="bg-white border-none hover:bg-stone-300 text-blue-600 font-bold mt-2 w-fit">
              Try Fiverr Logo Maker
            </Button>
          </div>
          <div className="w-3/5">
            <img className="w-full" src="./images/img6.png" />
          </div>
        </div>
      </div>
      <div className="bg-teal-50 px-4 md:px-64 py-20 flex gap-x-16">
        <div className="flex-auto w-2/5 ">
          <h1 className="text-3xl mb-8  font-bold">The best part? Everything.</h1>
          <div className="text-lg">
            <span className="font-bold">
              {" "}
              <CheckCircleOutlined className="mr-0.5" /> Stick to your budget
            </span>
            <p className="text-stone-500 mb-4">
              Find the right service for every price point. No hourly rates, just project-based pricing.
            </p>
            <span className=" font-bold">
              {" "}
              <CheckCircleOutlined className="mr-0.5" /> Get quality work done quickly
            </span>
            <p className="text-stone-500  mb-4">
              Hand your project over to a talented freelancer in minutes, get long-lasting results.
            </p>
            <span className=" font-bold">
              {" "}
              <CheckCircleOutlined className="mr-0.5" /> Pay when you're happy
            </span>
            <p className="text-stone-500  mb-4">
              Upfront quotes mean no surprises. Payments only get released when you approve.
            </p>
            <span className=" font-bold">
              {" "}
              <CheckCircleOutlined className="mr-1" />
              Count on 24/7 support
            </span>
            <p className="text-stone-500  mb-4">
              Our round-the-clock support team is available to help anytime, anywhere.
            </p>
          </div>
        </div>
        <div className="flex-auto w-3/5">
          <Image src="/images/img5.png" />
        </div>
      </div>
      <div className="px-4 md:px-64 py-20">
        <div className="mt-20 bg-[url('https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png')] flex font-bold text-white">
          <div className="pl-20 py-28 gap-y-2 flex flex-col justify-center">
            <h1 className="text-5xl">Suddenly it's all so doable.</h1>
            <Button className="bg-green-500 border-none hover:bg-green-600 text-white font-bold mt-10 w-fit text-lg pt-0.5">
              Join Fiverr
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
