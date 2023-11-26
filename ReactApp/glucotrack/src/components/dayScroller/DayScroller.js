import React, { useRef } from 'react';
import './DayScroller.css';

const daysData = Array.from({ length: 30 }, (_, i) => ({
  date: i + 1,
  day: new Date(2023, 0, i + 1).toLocaleDateString('es-ES', { weekday: 'short' }),
}));

const DayScroller = () => {
  const scrollContainerRef = useRef(null);

  const handleScroll = (scrollType) => {
    const container = scrollContainerRef.current;

    if (container) {
      const scrollAmount = scrollType === 'left' ? -150 : 150;
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="day-scroller-container">
      <button onClick={() => handleScroll('left')} className="scroll-button left-button">
        {' < '}
      </button>
      <div className="day-scroller" ref={scrollContainerRef}>
        {daysData.map((day) => (
          <div key={day.date} className="menu-item">
            <div>{day.date}</div>
            <div>{day.day}</div>
          </div>
        ))}
      </div>
      <button onClick={() => handleScroll('right')} className="scroll-button right-button">
        {' > '}
      </button>
    </div>
  );
};

export default DayScroller;