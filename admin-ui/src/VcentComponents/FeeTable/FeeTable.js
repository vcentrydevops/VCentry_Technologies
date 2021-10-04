import React from 'react'
import { NavLink } from 'react-router-dom'
import './FeeTable.css'

function FeeTable(props) {
    const feeTable = props.feeData

    const tableData = feeTable.map((data, index) => {
        return <li key={index + data.date + data.day}>
            <div className="main-div3-table-date">
                <p>{data.date}</p>
            </div>
            <div className="main-div3-table-day">
                <p>{data.day}</p>
                {data.day === "Mon-Fri" && data.batch === "Normal" && <p>WEEKDAYS BATCH</p>}
                {data.day === "Sat-Sun" && data.batch === "Normal" && <p>WEEKEND BATCH</p>}
                {data.day === "Sat-Sun" && data.batch !== "Normal" && <p>WEEKEND FAST-TRACK</p>}
            </div>
            <div className="main-div3-table-time">
                <p>{data.time}</p>
                {data.day === "Mon-Fri" && data.batch === "Normal" && <p>(Class 1Hr - 1:30Hrs) / Per Session</p>}
                {data.day === "Sat-Sun" && data.batch === "Normal" && <p>(Class 3Hrs) / Per Session</p>}
                {data.batch !== "Normal" && <p>(Class 6Hrs - 7Hrs) / Per Session</p>}
            </div>
            <div className="main-div3-table-fee">
                <NavLink to="/">Get Fees</NavLink>
            </div>
        </li>
    })
    return (
        <div>
            <div className="main-div3-table-cont">
                <p>Upcoming Batch Schedule for Software Testing Training in Chennai</p>
                <div className="main-div3-table">
                    <div>
                        <div>
                            <ul className="main-div3-table-ul">
                                {tableData}
                            </ul>
                        </div>
                    </div>
                    <div className="main-div3-div2">
                        <div>
                            <img src={require("../../Images/calendergif.gif").default}></img>
                            <p>Can’t find a batch you were looking for?</p>
                            <NavLink to="/">REQUEST A BATCH</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-div3-advert">
                <div className="main-div3-offer">
                    <img src={require("../../Images/offer_ribbon.png").default}></img>
                    <p>Take advantage of Triple Course Offer <span>@24,999</span> and master your skills.</p>
                    <NavLink to="/">Explore Now</NavLink>
                </div>
            </div>
        </div>
    )
}

export default FeeTable
