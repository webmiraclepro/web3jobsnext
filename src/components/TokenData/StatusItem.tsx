interface StatusItemProps {
    statusTitle: string,
    statusValue: string,
    isYou: boolean
}

const StatusItem = ({statusTitle, statusValue, isYou}:  StatusItemProps) => {
    const NotYou = "flex justify-between items-center rounded-[48px] bg-[#f8f8f9] mt-2.5 px-12 py-8 h-[61px] font-medium";
    const You = "flex justify-between items-center rounded-[48px] bg-[#e3e3e4] mt-2.5 px-12 py-8 h-[61px] font-extrabold";
    return (
        <div id="tokenInfo-statusItem" className={isYou ? You : NotYou}>
            <span className="text-[#483c6b] text-fsl">{statusTitle}</span>
            <span className="tracking-tighter text-[#3914ad] text-fsm">{statusValue}</span>

        </div>
    )
}

export default StatusItem;