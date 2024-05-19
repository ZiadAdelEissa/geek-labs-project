import React from "react";

function AlertsCell({ data, alertDirection, iconSrc, hasVerticalLine }) {
    return (
    <div className="flex justify-around items-start">
        {hasVerticalLine && <span className="mx-2 border-l-2 border-gray-300 h-6"></span>}
        <div className="flex flex-row ">
                <div className="flex flex-row justify-between">
                    <img src={iconSrc} alt={`${data} icon`} className="mx-2 filter brightness-0 invert" />
                        <p className={`text-xl font-semibold ${alertDirection === "increased" ? "text-green-500" : alertDirection ? "text-red-500" : "text-white"}`}>{data}</p>
                </div>
            
        </div>
    </div>
    );
}

export default AlertsCell;
