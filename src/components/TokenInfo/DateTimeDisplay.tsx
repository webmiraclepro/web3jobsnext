import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }: any) => {
    return (
            <span className="font-semibold text-center text-[#8880a6] mr-2.5 flex flex-col w-[65px] h-[60px] rounded-[14px] items-center justify-center bg-[#f7f6ff] ">
                <span className='text-xl'>{value}</span>
                <span className="text-center text-fsm pb-px">{type}</span>
            </span>
    );
};

export default DateTimeDisplay;