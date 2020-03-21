import { useState, useCallback, useEffect } from 'react'
import ReactModal from 'react-modal';
import { CHAIN_ID } from '../../config';

const close_icon = '/svg/close_icon.svg';

interface ModalProps {
  isBuyBtn: boolean,
  isWhiteBtn: boolean,
  closeModal: () => void,
}

const customStyles = {
  overlay: {
    // position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(126,98,155,.2)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    border: '1px solid #ccc',
    background: 'hsla(0,0%,100%,.4)',
    overflow: 'auto',
    borderRadius: '30px',
    backdropFilter: "blur(10px)",
    outline: 'none',
    padding: '20px',
    transform: 'translate(-50%, -50%)',
  },
};

// ReactModal.setAppElement('#yourAppElement');

const ListModal = ({ isBuyBtn, isWhiteBtn, closeModal }: ModalProps) => {

  const handleStakeCard = useCallback((action: string, tokenId: string) => {
    console.log("handleStakeCard");
    if (window.ethereum.chainId !== CHAIN_ID) {
      closeModal();
      return;
    }
    closeModal();
  }, [])

  return (
    <ReactModal
      isOpen={isBuyBtn ? isBuyBtn : isWhiteBtn ? isWhiteBtn : false}
      // onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
    >
      {
        isBuyBtn &&
        <div className='flex flex-row items-center justify-between my-2.5'>
          <div className='flex font-bold text-fsl'>You are not connected!</div>
          <button onClick={closeModal}>
            <img className="w-[20px] h-auto cursor-pointer" src={close_icon} alt="closeIcon" />
          </button>
        </div>
      }
      {
        isWhiteBtn &&
        <div className='flex flex-col items-center justify-between my-2.5'>
          <div className="flex items-center justify-between p-2 rounded-[60px] w-[800px]">

            <form className="text-fsl">
              <span className="text-[#483c6b] font-semibold">Search in whitelist wallets</span>
            </form>
            <button onClick={closeModal}>
              <img className="w-[20px] h-auto cursor-pointer" src={close_icon} alt="closeIcon" />
            </button>
          </div>
          <div className="container mb-4">
            <div className="flex flex-col justify-center">
              <div className="p-3">
                <div className="w-full flex items-center">
                    <input type="text" className="w-full rounded-[48px] px-4 h-[52px] text-[#360cae] bg-[#f0f0f0]" placeholder="Search" value="" />
                </div>
              </div>
              <div className="w-full p-0">
                <div className="h-[300px] overflow-y-scroll">
                  <table className="flex flex-col justify-center items-center text-sm mb-0" >
                    <thead className='flex w-full'>
                      <tr className="w-full flex justify-center space-x-8"><th className='w-[10%]'>No</th><th className='w-[90%]'>Address (0) </th></tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
                <a download="Report.csv" className="cursor-pointer flex justify-center items-center mt-4" target="_self" href="blob:https://cookiesale.io/92a6b76a-f4e8-4d9f-959c-d7d1bc9a50ef">
                  <button type="button" className="w-[30%] h-[35px] bg-[#3914ad] text-white rounded-[66px] font-semibold flex justify-center items-center">
                    <span>Export as CSV</span>
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      }

    </ReactModal>
  )
}

export default ListModal;