import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';

import { useCountdown } from '../../hook/useCountdown';

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Expired!!!</span>
            <p>Please select a future date and time.</p>
        </div>
    );
};

const ShowCounter = ({ days, hours, minutes, seconds }:any) => {
    return (
      <div className="rounded-[16px] w-full p-2 flex justify-center items-center text-[#8880a6] font-bold text-xxl">
       
          <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
          <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
          <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
          <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </div>
    );
  };
  
const CountdownTimer = ({ targetDate }: any) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};

export default CountdownTimer;
