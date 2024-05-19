import React from "react"
import SearchBar from "../SearchBar"
import NotificationIcon from "../../icons/alert.svg"
function AlertsHeader() {
    return (
        <div className='flex justify-between items-center'>
            <h1 className="flex items-center text-4xl font-bold text-white px-2 border-l-4 border-[#53ACFF]">Alerts</h1>
            <div className="flex items-center">
                <SearchBar />
            </div>
            <img src={NotificationIcon} alt="notification-icon" />
        </div>
    )
}
export default AlertsHeader