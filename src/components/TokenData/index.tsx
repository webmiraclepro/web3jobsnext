
import { useState, useEffect } from 'react';
import React from 'react';
import { DonutChart } from 'react-circle-chart'
import { PieChart } from 'react-minimal-pie-chart';
import ListModal from '../ListModal';
import { useAddress } from '../AddressProvider';
import { CHAIN_ID } from '../../config';
import DataItem from "./DataItem";
import StatusItem from "./StatusItem";
import RadialChart from './RadialChart';

const TokenData = () => {
  const { address } = useAddress();
  const [isWhiteBtn, setIsWhiteBtn] = useState(false);
  const [liquidity, setLiquidity] = useState(0);
  const [burnt, setBurnt] = useState(0);
  const [unlocked, setUnlocked] = useState(0);
  const [presale, setPresale] = useState(0);
  const [bnb, setBnb] = useState(0);

  const chartLiquidity = [
    { title: 'liquidity', value: liquidity, color: 'rgb(74, 20, 191)' }

  ]

  const chartBurnt = [
    { title: 'burnt', value: burnt, color: 'rgb(74, 20, 191)' },

  ]

  const chartUnlocked = [
    { title: 'unlocked', value: unlocked, color: 'rgb(74, 20, 191)' },

  ]

  const chartPresale = [
    { title: 'presale', value: presale, color: 'rgb(74, 20, 191)' },

  ]

  const myValue = 90;
  const myDonutData = [{
    value: bnb,
    label: "BNB",
    color: "rgb(89, 192, 76)",
  }]

  function openModal() {
    if (address && window.ethereum.chainId === CHAIN_ID) {
      console.log("whiteBtn clicked");
    }
    setIsWhiteBtn(true);
  }

  function closeModal() {
    setIsWhiteBtn(false);
  }

  useEffect(() => {
    setLiquidity(51);
    setBnb(60);
    setBurnt(0.00);
    setUnlocked(16.14);
    setPresale(26.67);
  }, [])


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
        <button type="button" className="border border-[#5a34ba] mt-4 w-full h-[50px] rounded-[66px] text-[#5a34ba] flex justify-center cursor-pointer items-center"
          onClick={openModal}>
          <span>Whitelisted Wallets</span>
        </button>
        <div className="w-full">
          <div className="flex flex-col justify-center items-center mt-8">
            <div className="rounded-[50%] w-[188px]">
              <DonutChart roundedCaps={true} items={myDonutData} size={200} trackWidth={"sm"} trackColor={"rgb(244, 244, 244)"} totalFontSize={"22px"} />
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
            <RadialChart data={chartBurnt} value={burnt} title={"Burnt"}/>
            <RadialChart data={chartUnlocked} value={unlocked} title={"Unlocked"}/>
            <RadialChart data={chartPresale} value={presale} title={"Presale"}/>
          </div>
          <div className="flex justify-center items-center">
            <RadialChart data={chartLiquidity} value={liquidity} title={"Liquidity(%)"}/>
          </div>
        </div>
      </div>
      <ListModal isBuyBtn={false} isWhiteBtn={isWhiteBtn} closeModal={closeModal} />
    </div>
  )
}

export default TokenData;