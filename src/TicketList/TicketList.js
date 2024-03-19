import React, { useState } from 'react';

import Ticket from '../Ticket';
import FiveMoreButton from '../FiveMoreButton';

const TicketList = ({ tickets }) => {
  const [buttonLoading, setButtonLoading] = useState(false);
  const [endPoint, setEndPoint] = useState(5);
  const cur = tickets.slice(0, endPoint);

  const handleSetEndPoint = () => {
    setButtonLoading(true);
    setTimeout(() => {
      setEndPoint(endPoint + 5);
      setButtonLoading(false);
    }, 800);
  };

  return (
    <div className="ticket-list">
      {cur.map((ticket) => (
        <Ticket ticket={ticket} key={Math.random() * Date.now()} />
      ))}
      <FiveMoreButton onClick={handleSetEndPoint} buttonLoading={buttonLoading} />
    </div>
  );
};

export default TicketList;
