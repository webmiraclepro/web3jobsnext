import { useState, useEffect } from 'react';
import React from 'react';
import ListModal from '../ListModal';
import CountdownTimer from './CountdownTimer';
import { useAddress } from '../AddressProvider';
import { CHAIN_ID } from '../../config';
import Link from 'next/link';

const TokenInfo = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const FOUR_DAYS_IN_MS = 4 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const startTime =  NOW_IN_MS + THREE_DAYS_IN_MS;
  const endTime = NOW_IN_MS + FOUR_DAYS_IN_MS;
  const curTime =  new Date().getTime();

  const calTargetDate = () => {
    if(curTime < startTime) {
      setActiveTitle("starts");
      setTargetDate(startTime);
    } else if(curTime >= startTime) {
      setActiveTitle("ends");
      setTargetDate(endTime);
    }
    
  }
  const { address } = useAddress();
  const [isBuyBtn, setIsBuyBtn] = useState(false);
  const [activeTitle, setActiveTitle] = useState("");
  const [targetDate, setTargetDate] = useState<number>();
  const [buyValue, setBuyValue] = useState<string>("0");

  function openModal() {
    if (address && window.ethereum.chainId === CHAIN_ID) {
      console.log("buyBtn clicked");
    }
    setIsBuyBtn(true);
  }

  function closeModal() {
    setIsBuyBtn(false);
  }

  useEffect(() => {
    if (address && window.ethereum.chainId === CHAIN_ID) {
    }
  }, [address])

  useEffect(() => {
    calTargetDate();
  },[])

  return (
    <div id="tokenInfo-body" className='flex justify-center items-center pt-1 pb-5'>
      <div className="container flex flex-col justify-center items-center w-[90%] lg:w-[79%] max-w-[1000px] mx-auto mt-12">
        <div className='flex flex-col lg:flex-row justify-between'>

          <div className="flex flex-col basis-1/4 grow-0 shrink justify-start items-center pb-4 pt-2 mr-0 lg:mr-4">
            <div className="text-center font-bold text-xxl mb-2">Presale {activeTitle} in</div>
            <CountdownTimer targetDate={targetDate} />
            <div className="bg-[#f7f6ff] p-3.5 rounded-[14px] w-full h-[50px] flex justify-between items-center font-bold mt-6">
              <span>Min:0.1 BNB</span>
              <span>Max:2.0 BNB</span>
            </div>
            <div className="w-full mt-4">
              <span>Amount</span>
              <div>
                <div className="relative flex flex-row w-full">
                  <input className="w-full py-1 px-3 relative h-[50px] rounded-[33px] bg-white mb-6 font-bold text-fsl shadow-[0px_0px_34px_0px_#0000001c] text-black hover:borer-r border-[#5a34ba]"
                   placeholder="0.0" type="text" value={buyValue} 
                   onChange={(e)=>{setBuyValue(e.target.value)}}/>
                  <div className="absolute top-[9.6px] right-[13px] bg-[#3914ad] w-[88px] h-[29px] rounded-[66px] justify-center items-center flex cursor-pointer " onClick={() => {console.log("clicked maximum")}}>
                    <span className="text-white text-fsl">Maximum</span>
                  </div>
                </div>
                <p className="text-center -mt-2.5 font-bold"></p>
              </div>
            </div>
            <div className="h-[50px] rounded-[66px] flex w-full justify-center items-center cursor-pointer mb-4 bg-[#3914ad]" onClick={openModal}>
              <span className="text-center text-white font-bold text-xxxxl">BUY</span>
            </div>
            <div className="flex items-center mt-6">
              <div>
                <label className="flex items-center" >
                  <span>
                    <input className="relative bg-[#3914ad] w-[18px] h-[18px] bottom-[9px] rounded items-center justify-center" type="checkbox" name="my-input" value="" />
                  </span>
                  <span className="text-[9px] ml-1" >
                    By proceeding, you agree that CookieSale accepts no liability for any actions/losses from investments made by you or the project owner. Read more.
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className='flex shrink-1 flex-col justify-between rounded-[48px] p-8 bg-[#f8f8f9]'>
            <div className='flex flex-col'>
              <div className="flex font-bold text-xxxl p-2">
                VoidToken
              </div>
              <div className='flex '>
                Catbread is an NFT-driven competitive P2E retro arcade and NFT marketplace. The digital revolution meets nostalgia to create an ecosystem that's rewarding to all players, collectors, and holders.
              </div>
            </div>
            <div className='flex justify-end cursor-pointer mt-32'>
              <Link href="#staking">
                <a className="flex text-xl font-body transition-all font-bold hover:text-navhover">
                  DOWNLOAD AUDIT
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ListModal isBuyBtn={isBuyBtn} isWhiteBtn={false} closeModal={closeModal} />
    </div>
  )
}

export default TokenInfo;