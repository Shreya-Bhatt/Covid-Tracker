import React, { useEffect, useState } from 'react';
import './covid.css';

const Covid = () => {
    let [data, setData] = useState([]);
    let curDate = new Date().toDateString();
    data = {
        active: "0",
        confirmed: "0",
        deaths: "0",
        lastupdatedtime: curDate,
        recovered: "0",
    }
    
    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const data = await res.json();
            console.log(data.statewise[0]);
            setData(data.statewise[0]);
        } catch(err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getCovidData();
    },[]);

    return (
        <>
        <section className="card__back">
            <h1>🔴LIVE</h1> 
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>
            <ul style={{listStyleType: "none"}}>
                <li className="card" style={{backgroundColor: "#026670"}}>
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> OUR </span> COUNTRY </p>
                            <p className="card__total card__small">INDIA</p>
                        </div>
                    </div>
                </li>
                <li className="card" style={{backgroundColor: "#d1d7e0"}}>
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> TOTAL </span> RECOVERED </p>
                            <p className="card__total card__small">{data.recovered}</p>
                        </div>
                    </div>
                </li>
                <li className="card" style={{backgroundColor: "#edb5bf"}}>
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> TOTAL </span> CONFIRMED </p>
                            <p className="card__total card__small">{data.confirmed}</p>
                        </div>
                    </div>
                </li>
                <li className="card" style={{backgroundColor: "#bc243c"}}>
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> TOTAL </span> DEATHS </p>
                            <p className="card__total card__small">{data.deaths}</p>
                        </div>
                    </div>
                </li>
                <li className="card" style={{backgroundColor: "#fef9c7"}}>
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> TOTAL </span> ACTIVE </p>
                            <p className="card__total card__small">{data.active}</p>
                        </div>
                    </div>
                </li>
                <li className="card" style={{backgroundColor: "#9fedd7"}}>
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> LAST </span> UPDATED </p>
                            <p className="card__total card__date">{data.lastupdatedtime}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
        </>
    );
}

export default Covid;
