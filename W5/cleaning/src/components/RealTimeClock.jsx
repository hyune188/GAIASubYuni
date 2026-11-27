import { useState, useEffect } from 'react';

function RealTimeClock() {
    const [time, setTime] = useState(new Date());
    const [isRunning, setIsRunning] = useState(true);
    const [format24Hour, setFormatHour] = useState(false);

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setTime(new date());
            }, 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isRunning]);

    useEffect(() => {
        document.title = `clock - ${formatTime(time)}`;

        return () => {
            document.title = 'React App';
        };
    }, [time, format24Hour]);

    const formatTime = (date) => {
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: !format24Hour
        };
        return date.toLocaleDateString('en-US', options);
    };

    const formatDate = (date) => {
        return date.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="clock-container">
            <div className="date">{formatDate(time)}</div>
            <div className="time">{formatDate(time)}</div>

            <div className="control">
                <button onClick={() => setIsRunning(!isRunning)}>
                    {isRunning ? 'pause' : 'Resume'}
                </button>
                <label>
                    <input 
                        type="checkbox"
                        checked={format24Hour}
                        onChange={(e) => setFormat24Hour(e.target.checked)}
                    />
                    24-hour format
                </label>
            </div>

            <div className="status">
                clock is {isRunning ? 'running' : 'paused'}
            </div>
        </div>
    );
}

export default RealTimeClock;