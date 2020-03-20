interface DataItemProps  {
    itemTitle: string,
    itemValue: string,
    isLink: boolean,
    hrefPath: string
}

const DataItem = ({itemTitle, itemValue, isLink, hrefPath}: DataItemProps)=>{
    const NotLink = "flex justify-between items-center rounded-[48px] bg-[#f8f8f9] mt-2.5 px-6 lg:px-12 py-8 h-[61px]"
    const Link = "flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center rounded-[48px] bg-[#f8f8f9] mt-2.5 px-6 lg:px-12 py-8 h-[61px]"
    
    return (
        <div id="tokenInfo-dataItem" className={isLink ? Link : NotLink}>
            <div className="text-[#483c6b] font-bold text-fsl">
                {itemTitle}
            </div>
            <div className="text-[#483c6b] font-normal text-[12px] lg:text-sm">
                {isLink ? <a href={hrefPath} target="_blank"  className="text-[#3914ad] cursor-pointer justify-end"><span>{itemValue}</span></a> : itemValue}
            </div>

        </div>
    )
}

export default DataItem;