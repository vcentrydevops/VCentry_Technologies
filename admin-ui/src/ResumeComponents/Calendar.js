import React from 'react'
import '../ResumeStyleSheets/Calendar.css'

export default function Calendar(props) {
    const { items, value, getValue, styleObj, year, year1 } = props
    const calData = items.map((data, index) => {
            return <input key={`${data} +${index}`} name="passedOut" className="calendar-input" type="button" style={value == data ? { backgroundColor: "#0d84a8", color: "#ffff", fontWeight: "600" } : { backgroundColor: "#ffff" }} value={data} onClick={(e) => getValue(e)} disabled={year ? year >= data ? true : false : year1 <= data ? true : false}></input>
        })

    return (
        <div className="calendar-cont">
            <div className="calendar-year" style={styleObj}>
                <div className="calendar-header">
                    <span>{value}</span>
                </div>
                <div className="calendar-body">
                    {calData}
                </div>
            </div>
        </div>
    )
}
