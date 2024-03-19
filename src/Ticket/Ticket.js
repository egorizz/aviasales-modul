import React from 'react';
import './Ticket.css';

const Ticket = ({ ticket }) => {
  const getStopsCounts = (stops) => {
    if (stops.length === 0) {
      return 'БЕЗ ПЕРЕСАДОК';
    }
    if (stops.length === 1) {
      return `${stops.length} ПЕРЕСАДКА`;
    }
    if ([2, 3, 4].includes(stops.length)) {
      return `${stops.length} ПЕРЕСАДКИ`;
    }
    return `${stops.length} ПЕРЕСАДОК`;
  };

  const getDurationTime = (dur) => {
    const hours = Math.floor(dur / 60);
    const minutes = dur % 60;
    return `${hours}ч ${minutes}м`;
  };

  const getTimes = (date, duration) => {
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();

    let durHours = hours + Math.floor(duration / 60);
    let durMinutes = minutes + (duration % 60);
    if (durMinutes > 59) {
      durHours += Math.floor(durMinutes / 60);
      durMinutes %= 60;
    }
    if (durHours > 23) {
      durHours += Math.floor(durHours / 24);
      durHours %= 24;
    }

    if (minutes < 10) {
      if (durMinutes < 10) {
        return `${hours}:0${minutes} - ${durHours}:0${durMinutes}`;
      }
      return `${hours}:0${minutes} - ${durHours}:${durMinutes}`;
    }
    if (durMinutes < 10) {
      return `${hours}:${minutes} - ${durHours}:0${durMinutes} `;
    }
    return `${hours}:${minutes} - ${durHours}:${durMinutes} `;
  };

  const { price, carrier } = ticket;

  const points1 = `${ticket.segments[0].origin} - ${ticket.segments[0].destination}`;
  const points2 = `${ticket.segments[1].origin} - ${ticket.segments[1].destination}`;
  const times1 = getTimes(ticket.segments[0].date, ticket.segments[0].duration);
  const times2 = getTimes(ticket.segments[1].date, ticket.segments[1].duration);
  const stops1 = ticket.segments[0].stops.join(' ');
  const stops2 = ticket.segments[1].stops.join(' ');

  const stopsCount1 = getStopsCounts(ticket.segments[0].stops);
  const stopsCount2 = getStopsCounts(ticket.segments[1].stops);

  const duration1 = getDurationTime(ticket.segments[0].duration);
  const duration2 = getDurationTime(ticket.segments[1].duration);

  return (
    <div className="ticket">
      <div className="ticket__title">
        <div className="ticket__price">{price} Р</div>
        <div
          className="ticket__logo"
          style={{ backgroundImage: `url("http://pics.avs.io/99/36/${carrier}.png")`, backgroundRepeat: 'no-repeat' }}
        ></div>
      </div>
      <div className="ticket__segment">
        <div className="ticket__route">
          <div className="ticket__cities-header">{points1}</div>
          <div className="ticket__cities-time">{times1}</div>
        </div>
        <div className="ticket__travel-time">
          <div className="ticket__travel-time-header">В ПУТИ</div>
          <div className="ticket__travel-time-info">{duration1}</div>
        </div>
        <div className="ticket__transfer">
          <div className="ticket__transfer-count">{stopsCount1}</div>
          <div className="ticket__transfer-cities">{stops1}</div>
        </div>
      </div>
      <div className="ticket__segment">
        <div className="ticket__route">
          <div className="ticket__cities-header">{points2}</div>
          <div className="ticket__cities-time">{times2}</div>
        </div>
        <div className="ticket__travel-time">
          <div className="ticket__travel-time-header">В ПУТИ</div>
          <div className="ticket__travel-time-info">{duration2}</div>
        </div>
        <div className="ticket__transfer">
          <div className="ticket__transfer-count">{stopsCount2}</div>
          <div className="ticket__transfer-cities">{stops2}</div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
