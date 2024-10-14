import React from 'react';
import { Layout } from 'antd';
import './MarketSchedule.css';
import { regularMarketDays, events } from '../data/marketData';
import { LinkOutlined } from '@ant-design/icons';

const { Content } = Layout;

function formatDateToString(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${day}.${month}`;
}

const currentYear = new Date().getFullYear();

const MarketSchedule: React.FC = () => {
    const currentDate = new Date();

    // Filter only future events
    const upcomingEvents = events.filter(event => {
        return event.checkDate >= currentDate;
    });

    return (
        <Content className="table-section">
            <div className="table-container">
                <h2>Reguläre Markttage</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Tag</th>
                            <th>Ort</th>
                            <th>Uhrzeit</th>
                            <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {regularMarketDays.map((marketDay, index) => (
                            <tr key={index}>
                                <td>{marketDay.day}</td>
                                <td><a 
                                    href={marketDay.link}
                                    target="_blank"
                                    rel='noopener noreferrer'
                                >
                                    {marketDay.place}
                                </a>
                                </td>
                                <td>{marketDay.time}</td>
                                <td><a href={marketDay.linkEvent}><LinkOutlined /></a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="table-container">
                <h2>Veranstaltungen - {currentYear}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Ort</th>
                            <th>Datum</th>
                            <th>Uhrzeit</th>
                            <th>Infos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {upcomingEvents.map((event, index) => (
                            <tr key={index}>
                                <td>{event.name}</td>
                                <td><a 
                                    href={event.link}
                                    target="_blank"
                                    rel='noopener noreferrer'
                                >
                                    {event.place}
                                </a>
                                </td>
                                <td>{formatDateToString(event.checkDate)}</td>
                                <td>{event.time}</td>
                                <td><a href={event.linkEvent}><LinkOutlined /></a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Content>
    );
};

export default MarketSchedule;
