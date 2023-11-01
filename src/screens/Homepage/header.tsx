import { Button, Input } from "antd";
const { Search } = Input;

function Header() {
  return (
    <>
      <div className="bg-green-800 font-semibold text-white flex flex-wrap">
        <div className=" px-4 lg:px-64  sm:px-12 flex justify-center flex-col flex-1 " style={{ height: "550px" }}>
          <div className="text-5xl leading-loose">Find the right freelance service, right away</div>
          <div className="flex py-6 ">
            <Search
              placeholder="What service are you looking for today?"
              className="w-96 md:w-full"
              enterButton
              size="large"
            />
          </div>
          <div className="flex gap-x-3 content-center ">
            <span className="text-sm"> Popular:</span>
            <Button size="small" shape="round">
              Website Design
            </Button>
            <Button size="small" shape="round">
              WordPress
            </Button>
            <Button size="small" shape="round">
              Logo Design
            </Button>
            <Button size="small" shape="round">
              AI Services
            </Button>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="h-24 flex items-center justify-center bg-stone-200 flex-wrap text-stone-400 gap-x-16">
        <span>Trusted by :</span>
        <img src="./icon/meta.svg" />
        <img src="./icon/google.svg" />
        <img src="./icon/netflic.svg" />
        <img src="./icon/pg.svg" />
        <img src="./icon/paypal.svg" />
      </div>
    </>
  );
}

export default Header;
