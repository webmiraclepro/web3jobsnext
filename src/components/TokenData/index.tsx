import DataItem from "./DataItem";
import StatusItem from "./StatusItem";

const TokenData = () => {

  return (
    <div className="flex flex-col lg:flex-row flex-nowrap gap-0 justify-between container w-[90%] lg:w-[79%] max-w-[1000px] mx-auto" >
      <div className="flex flex-col basis-3/5 grow-0 shrink mr-0 lg:mr-12">
        <DataItem itemTitle="Presale Address" itemValue="0x6DeacbADCF1Cb6A0B23C97667110D9226DfDa5d2" isLink={true} hrefPath="https://bscscan.com/address/0x6DeacbADCF1Cb6A0B23C97667110D9226DfDa5d2" />
        <DataItem itemTitle="Token Name" itemValue="Void" isLink={false} hrefPath="" />
        <DataItem itemTitle="Token Symbol" itemValue="Void" isLink={false} hrefPath="" />
        <DataItem itemTitle="Decimal" itemValue="9" isLink={false} hrefPath="" />
        <DataItem itemTitle="Token Address" itemValue="0x80976310B15043e746ef3e0Bfb47584bcdCd35f0" isLink={true} hrefPath="https://bscscan.com/address//0x80976310B15043e746ef3e0Bfb47584bcdCd35f0" />
        <DataItem itemTitle="Total Supply" itemValue="100,000,000,000 VOID" isLink={false} hrefPath="" />
        <DataItem itemTitle="Token For Presale" itemValue="100,000,000 VOID" isLink={false} hrefPath="" />
        <DataItem itemTitle="Token For Liquidity" itemValue="10,000,000,000 VOID" isLink={false} hrefPath="" />
        <DataItem itemTitle="Presale Rate" itemValue="30,000 VOID" isLink={false} hrefPath="" />
        <DataItem itemTitle="Listing Rate Data" itemValue="25,000 VOID" isLink={false} hrefPath="" />
        <DataItem itemTitle="Soft Cap" itemValue="100.0 BNB" isLink={false} hrefPath="" />
        <DataItem itemTitle="Hard Cap" itemValue="200.0 BNB" isLink={false} hrefPath="" />
        <DataItem itemTitle="Unsold Tokens" itemValue="Burn" isLink={false} hrefPath="" />
        <DataItem itemTitle="Presale Start Time" itemValue="2022-06-02 20:00:00UTC" isLink={false} hrefPath="" />
        <DataItem itemTitle="Presale End Time" itemValue="2022-06-03 20:00:00 UTC" isLink={false} hrefPath="" />
        <DataItem itemTitle="Listing On" itemValue="PhantomSwap" isLink={false} hrefPath="" />
        <DataItem itemTitle="Liquidity Percent" itemValue="51%" isLink={false} hrefPath="" />
        <DataItem itemTitle="Liquidity Lockup Time" itemValue="30 days" isLink={false} hrefPath="" />
      </div>
      <div className="flex flex-col basis-[30%] grow-0 shrink items-center max-w-full">
        <button type="button" className="border border-[#5a34ba] mt-4 w-full h-[50px] rounded-[66px] text-[#5a34ba] flex justify-center cursor-pointer items-center" ant-click-animating-without-extra-node="false">
          <span>Whitelisted Wallets</span>
        </button>
        <div className="w-full">
          <div className="flex flex-col justify-center items-center mt-8">
            <div className="rounded-[50%] w-[188px]">
              <svg viewBox="0 0 100 100" data-test-id="CircularProgressbar">
                <path d="
      M 50,50
      m 0,-46
      a 46,46 0 1 1 0,92
      a 46,46 0 1 1 0,-92
    " stroke-width="8" fill-opacity="0" style={{ stroke: "rgb(244, 244, 244)", strokeLinecap: "round", transform: "rotate(0.25turn)", transformOrigin: "center center", strokeDasharray: "289.027px, 289.027px", strokeDashoffset: "0px" }}>
                </path>
                <path d="
      M 50,50
      m 0,-46
      a 46,46 0 1 1 0,92
      a 46,46 0 1 1 0,-92
    " stroke-width="8" fill-opacity="0" style={{ stroke: "rgb(89, 192, 76)", strokeLinecap: "round", transition: "stroke-dashoffset 0.5s ease 0s", transform: "rotate(0.99turn)", transformOrigin: "center center", strokeDasharray: "289.027px, 289.027px", strokeDashoffset: "289.027px" }}>
                </path>
                <text x="50" y="50" style={{ fontFamily: "Manrope", fontSize: "21.6px", fontWeight: "800", letterSpacing: "-1.36px", fill: "rgb(89, 192, 76)", dominantBaseline: "middle", textAnchor: "middle" }}>
                  0.0 %
                </text>
              </svg>
            </div>
            <span className="text-center mt-8 text-xxxl font-bold text-[#4a3b6e]">0.0 BNB</span>
            <span className="text-center mb-9 text-xxxl font-bold text-[#8880a6]">
              <div className="p-2">Soft Cap 100.0&nbsp;BNB</div>
              <div className="p-2">Hard Cap: 200.0 BNB</div>
            </span>
          </div>
          <StatusItem statusTitle="Status" statusValue="incoming" isYou={false} />
          <StatusItem statusTitle="Sale Type" statusValue="White List" isYou={false} />
          <StatusItem statusTitle="Minimum buy" statusValue="0.1 BNB" isYou={false} />
          <StatusItem statusTitle="Maximum buy" statusValue="3.0 BNB" isYou={false} />
          <StatusItem statusTitle="Total contributors" statusValue="0" isYou={false} />
          <StatusItem statusTitle="Your Contribution" statusValue="0&nbsp;BNB" isYou={true} />
        </div>
        <div className="flex flex-col mt-8 w-full">
          <h3 className="font-extrabold text-[#483c6b] mb-4 text-xl">Token metrics</h3>
          <div className="flex justify-between mb-12">
            <div className="flex flex-col w-[30%] justify-center items-center">
              <div className="rotate-[4deg]">
                <svg className="w-full " viewBox="0 0 100 100" data-test-id="CircularProgressbar">
                  <circle fill="#d6d6d6" cx="50" cy="50" r="50"></circle>
                  <path className="CircularProgressbar-trail" d="
      M 50,50
      m 0,-25
      a 25,25 0 1 1 0,50
      a 25,25 0 1 1 0,-50
    " stroke-width="50" fill-opacity="0" style={{ stroke: "rgb(248, 248, 249)", strokeLinecap: "round", transform: "rotate(0.25turn)", transformOrigin: "center center", strokeDasharray: "157.08px, 157.08px", strokeDashoffset: "0px" }}></path><path className="CircularProgressbar-path" d="
      M 50,50
      m 0,-25
      a 25,25 0 1 1 0,50
      a 25,25 0 1 1 0,-50
    " stroke-width="50" fill-opacity="0" style={{ stroke: "rgb(74, 20, 191)", strokeLinecap: "butt", transition: "stroke-dashoffset 0.5s ease 0s", transform: "rotate(0.99turn)", transformOrigin: "center center", strokeDasharray: "157.08px, 157.08px", strokeDashoffset: "157.08px" }}>
                  </path>
                </svg>
              </div>
              <span className="font-bold">0.00%</span>
              <span className="font-bold">Burnt</span>
            </div>
            <div className="flex flex-col w-[30%] justify-center items-center">
              <div className="rotate-[4deg]">
                <svg className="w-full " viewBox="0 0 100 100" data-test-id="CircularProgressbar">
                  <circle fill="#d6d6d6" cx="50" cy="50" r="50"></circle>
                  <path className="CircularProgressbar-trail" d="
      M 50,50
      m 0,-25
      a 25,25 0 1 1 0,50
      a 25,25 0 1 1 0,-50
    " stroke-width="50" fill-opacity="0" style={{ stroke: "rgb(248, 248, 249)", strokeLinecap: "round", transform: "rotate(0.25turn)", transformOrigin: "center center", strokeDasharray: "157.08px, 157.08px", strokeDashoffset: "0px" }}>
                  </path>
                  <path className="CircularProgressbar-path" d="
      M 50,50
      m 0,-25
      a 25,25 0 1 1 0,50
      a 25,25 0 1 1 0,-50
    " stroke-width="50" fill-opacity="0" style={{ stroke: "rgb(74, 20, 191)", strokeLinecap: "butt", transition: "stroke-dashoffset 0.5s ease 0s", transform: "rotate(0.99turn)", transformOrigin: "center center", strokeDasharray: "157.08px, 157.08px", strokeDashoffset: "131.722px" }}>
                  </path>
                </svg>
              </div>
              <span className="font-bold">16.14%</span>
              <span className="font-bold">Unlocked</span>
            </div>
            <div className="flex flex-col w-[30%] justify-center items-center">
              <div className="rotate-[4deg]">
                <svg className="w-full " viewBox="0 0 100 100" data-test-id="CircularProgressbar">
                  <circle fill="#d6d6d6" cx="50" cy="50" r="50"></circle>
                  <path className="CircularProgressbar-trail" d="
      M 50,50
      m 0,-25
      a 25,25 0 1 1 0,50
      a 25,25 0 1 1 0,-50
    " stroke-width="50" fill-opacity="0" style={{ stroke: "rgb(248, 248, 249)", strokeLinecap: "round", transform: "rotate(0.25turn)", transformOrigin: "center center", strokeDasharray: "157.08px, 157.08px", strokeDashoffset: " 0px" }}>
                  </path>
                  <path className="CircularProgressbar-path" d="
      M 50,50
      m 0,-25
      a 25,25 0 1 1 0,50
      a 25,25 0 1 1 0,-50
    " stroke-width="50" fill-opacity="0" style={{ stroke: "rgb(74, 20, 191)", strokeLinecap: "butt", transition: " stroke-dashoffset 0.5s ease 0s", transform: "rotate(0.99turn)", transformOrigin: "center center", strokeDasharray: "157.08px, 157.08px", strokeDashoffset: "115.192px" }}>
                  </path>
                </svg>
              </div>
              <span className="font-bold">26.67%</span>
              <span className="font-bold">Presale</span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col w-[30%] justify-center items-center">
              <div className="rotate-[4deg]">
                <svg className="w-full " viewBox="0 0 100 100" data-test-id="CircularProgressbar">
                  <circle fill="#d6d6d6" cx="50" cy="50" r="50"></circle>
                  <path className="CircularProgressbar-trail" d="
      M 50,50
      m 0,-25
      a 25,25 0 1 1 0,50
      a 25,25 0 1 1 0,-50
    " stroke-width="50" fill-opacity="0" style={{ stroke: "rgb(248, 248, 249)", strokeLinecap: "round", transform: "rotate(0.25turn)", transformOrigin: "center center", strokeDasharray: "157.08px, 157.08px", strokeDashoffset: "0px" }}>
                  </path>
                  <path className="CircularProgressbar-path" d="
      M 50,50
      m 0,-25
      a 25,25 0 1 1 0,50
      a 25,25 0 1 1 0,-50
    " stroke-width="50" fill-opacity="0" style={{ stroke: "rgb(74, 20, 191)", strokeLinecap: "butt", transition: "stroke-dashoffset 0.5s ease 0s", transform: "rotate(0.99turn)", transformOrigin: "center center", strokeDasharray: "157.08px, 157.08px", strokeDashoffset: "76.969px" }}>
                  </path>
                </svg>
              </div>
              <span className="font-bold">51%</span>
              <span className="font-bold">Liquidity(%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TokenData;