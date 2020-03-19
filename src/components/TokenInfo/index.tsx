import { useState, useEffect } from 'react';
import React from 'react';
import StakingContract from '../Web3/StakingContract';
import NftContract from '../Web3/NftContract';
import StakeModal from '../StakeModal';
import { useAddress } from '../AddressProvider';
import { CHAIN_ID } from '../../config';
import Link from 'next/link';

const stakeCardImg = '/images/Mike.png'
const GoopIcon = '/svg/Goop.svg';
const clockIcon = '/svg/clock.svg';
const unStakeImg = '/images/Quad1.png';
const downArrowIcon = '/svg/downarrow.svg';

const TokenInfo = () => {
  const { address } = useAddress();
  const [isStake, setIsStake] = useState(false);
  const [isUnStake, setIsUnStake] = useState(false);
  const [tokenPerBlock, setTokenPerBlock] = useState<String | undefined>(undefined);
  const [amountNft, setAmountNft] = useState<String | undefined>(undefined);
  const [tokenIds, setTokenIds] = useState<Array<{}> | undefined>(undefined);

  function openModal() {

  }

  function closeModal() {
    setIsUnStake(false);
    setIsStake(false);
  }

  const getTokenPerBlock = async () => {
    const tokensPerBlock = await StakingContract.methods.tokensPerBlock.call().call();
    // setTokenPerBlock(tokensPerBlock);
  }

  const getTokenIdsofWallet = async (account: String | undefined) => {
    if (!account) {
      return;
    }
    try {
      const tokenIds = await NftContract.methods.walletOfOwner(account).call();
      setTokenIds(tokenIds);
      setAmountNft(tokenIds.length);
      console.log(tokenIds);
    } catch (e: any) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (address && window.ethereum.chainId === CHAIN_ID) {
      getTokenPerBlock();
      getTokenIdsofWallet(address);
    }
  }, [address])

  return (
    <div id="tokenInfo-body" className='flex justify-center items-center pt-1 pb-5'>
      <div className="container flex flex-col lg:justify-center items-center w-[79%] max-w-[1000px] mx-auto my-12">
        <div className='flex justify-between'>

          <div className="flex flex-col basis-1/4 grow-0 shrink justify-start items-center pb-4 pt-2 mr-4">
            <div className="text-center font-medium font-xxxl mb-2">Presale ends in</div>
            <div className="rounded-[16px] w-full p-2 flex justify-center items-center text-[#8880a6] font-bold text-xxxl">
              <span className="font-bold text-center text-[#8880a6] mr-2.5 flex flex-col w-[65px] h-[60px] rounded-[14px] items-center justify-center bg-[#f7f6ff] text-xxl">
                <span>11</span>
                <span className="text-center text-fsm pb-px">days</span>
              </span>
              <span className="font-bold text-center text-[#8880a6] mr-2.5 flex flex-col w-[65px] h-[60px] rounded-[14px] items-center justify-center bg-[#f7f6ff] text-xxl">
                <span>07</span>
                <span className="text-center text-fsm pb-px">hrs</span>
              </span>
              <div className="font-bold text-center text-[#8880a6] mr-2.5 flex flex-col w-[65px] h-[60px] rounded-[14px] items-center justify-center bg-[#f7f6ff] text-xxl">
                <span>41</span>
                <span className="text-center text-fsm pb-px">mnts</span>
              </div>
              <div className="font-bold text-center text-[#8880a6] mr-2.5 flex flex-col w-[65px] h-[60px] rounded-[14px] items-center justify-center bg-[#f7f6ff] text-xxl">
                <span>35</span>
                <span className="text-center text-fsm pb-px">seconds</span>
              </div>
            </div>
            <div className="bg-[#f7f6ff] p-3.5 rounded-[14px] w-full h-[50px] flex justify-between items-center font-bold mt-6">
              <span>Min:0.1 BNB</span>
              <span>Max:2.0 BNB</span>
            </div>
            <div className="w-full mt-4">
              <span>Amount</span>
              <div>
                <div className="relative flex flex-row w-full">
                  <input className="w-full py-1 px-3 relative h-[50px] rounded-[33px] bg-white mb-6 font-bold text-fsl shadow-[0px_0px_34px_0px_#0000001c] text-black hover:borer-r border-[#5a34ba]" placeholder="0.0" type="text" value="0" />
                  <div className="absolute top-[9.6px] right-[13px] bg-[#3914ad] w-[88px] h-[29px] rounded-[66px] justify-center items-center flex cursor-pointer " >
                    <span className="text-white text-fsl">Maximum</span>
                  </div>
                </div>
                <p className="text-center -mt-2.5 font-bold"></p>
              </div>
            </div>
            <div className="h-[50px] rounded-[66px] flex w-full justify-center items-center cursor-pointer mb-4 bg-[[#3914ad]" >
              <i className="fa-solid fa-circle-check"></i>
              <span className="text-center font-bold text-xxxxl">BUY</span>
            </div>
            <div className="infoToken_contractCheck__2ZM-I">
              <div>
                <label className="" >
                  <span>
                    <div className="" >
                      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" color="#ffffff" height="14" width="14" xmlns="http://www.w3.org/2000/svg" ><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <input type="checkbox" name="my-input" value="" />
                    </div>
                  </span>]
                  <span className="" >
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
      <StakeModal tokenIds={tokenIds} isClaim={false} isStake={isStake} isUnStake={isUnStake} closeModal={closeModal} />
    </div>
  )
}

export default TokenInfo;