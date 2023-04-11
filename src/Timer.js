import React, { useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = React.useState(0);

  useEffect(() => {
    // Use setTimeout to update the seconds state after 1 second
    const timer = setTimeout(() => {
      setSeconds(seconds + 1);
    }, 1000);

    // Cleanup the timer on component unmount or when seconds state changes
    return () => {
      clearTimeout(timer);
    };
  }, [seconds]); // Include seconds state as a dependency

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
    </div>
  );
};

export default Timer;