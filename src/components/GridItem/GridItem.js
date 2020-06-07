import React from 'react';
import './GridItem.css';

const GridItem = ({value, active, setMultiplesActive}) => {
  const handleClick = () => setMultiplesActive(value);

  return (
      <button
          className={`grid-item ${active ? 'active' : 'inactive'}`}
          onClick={handleClick}
          type="button"
          data-testid={`item-${value}`}
      >
        {value}
      </button>
  )
};

export default GridItem;
