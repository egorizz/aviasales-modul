import React from "react";
import './Ticket.css';

const fakeData = {
    price: '14 450',
        route: {
            header: 'MOW - NKT',
            time: '10:45 - 8:00'
        },
        travelTime: '21ч 15м',
        tranfer: {
            transferCount: 2,
            transferCities: 'NKG FGE'
        }
}

const price = fakeData.price;
const header = fakeData.route.header;
const time = fakeData.route.time;
const travelTime = fakeData.travelTime;
const transferCount = fakeData.tranfer.transferCount;
const transferCities = fakeData.tranfer.transferCities;


const Ticket = () => {

    
    return (
        <div className="ticket">
            <div className="ticket__title">
                <div className="ticket__price">
                    {price} Р
                </div>
                <div className="ticket__logo">

                </div>
            </div>
            <div className="ticket__flight-info">
                <div className="ticket__route">
                    <div className="ticket__cities-header">{header}</div>
                    <div className="ticket__cities-time">{time}</div>
                </div>
                <div className="ticket__travel-time">
                    <div className="ticket__travel-time-header">В ПУТИ</div>
                    <div className="ticket__travel-time-info">{travelTime}</div>
                </div>
                <div className="ticket__transfer">
                    <div className="ticket__transfer-count">{transferCount} ПЕРЕСАДКИ</div>
                    <div className="ticket__transfer-cities">{transferCities}</div>
                </div>
            </div>
            <div className="ticket__flight-info">
                <div className="ticket__route">
                    <div className="ticket__cities-header">{header}</div>
                    <div className="ticket__cities-time">{time}</div>
                </div>
                <div className="ticket__travel-time">
                    <div className="ticket__travel-time-header">В ПУТИ</div>
                    <div className="ticket__travel-time-info">{travelTime}</div>
                </div>
                <div className="ticket__transfer">
                    <div className="ticket__transfer-count">{transferCount} ПЕРЕСАДКИ</div>
                    <div className="ticket__transfer-cities">{transferCities}</div>
                </div>
            </div>


        </div>
    )
};

export default Ticket;