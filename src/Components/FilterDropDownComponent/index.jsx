import React from "react";
import DropDownIcon from '../../icons/DropDownIcon.svg'
// export const imageMapping = {
//   "healthcare":'../../icons/Healthcare.svg',
//   "materials": "../../icons/Materials.svg",
//   "energy": "../../icons/Energy.svg",
//   "consumerdiscretionary": "../../icons/ConsumerDesc.svg",
//   "consumerstapies": "../../icons/ConsumerStap.svg",
//   "realestate": "../../icons/RealEstate.svg",
//   "it": "../../icons/It.svg",
//   "communication": "../../icons/Communication.svg",
//   "industries": "../../icons/Industries.svg",
//   "utilities": "../../icons/Utilities.svg",
//   "financials": "../../icons/Financials.svg",
// }
// {require(`${imageMapping[option.toLowerCase().replace(/\s/g, '')]}`).default}
function FilterDropDownComponent({ isComponentVisible, toggleVisibility, filterData, applyFilter, text }) {
    return (    
        <div className="mt-4">
            <div onClick={toggleVisibility} className={`cursor-pointer flex flex-row ${text === "Industry" ? "text-white text-xl font-semibold px-4" : ""}`}>
                 <img src={DropDownIcon} alt="dropdown icon" className="mx-2 filter brightness-0 invert"/>
                <p className="text-white text-xl font-semibold">{text}</p>
            </div>
            {isComponentVisible && (
                <div className={`ml-2 mt-2 ${text === "Industry" ? "grid grid-cols-2 p-2" : ""}`} >
                    {filterData.map((option, index) => (
                        text === "Industry" ? (
                            <div onClick={() => applyFilter(option)} key={index} className="flex flex-row border-l-2 border-white pl-1">
                                <img src="" alt={option} className="cursor-pointer"/> 
                                <div className="text-white cursor-pointer py-1 text-xs font-normal">
                                    {option}
                                    {console.log(option)}   
                                </div>
                            </div>
                        ) : (
                            <div key={index} className='flex items-center'>
                                <input
                                    type='radio'
                                    name={text}
                                    onChange={() => applyFilter(option)}
                                />
                                <label className='ml-2 text-white text-xs font-normal'>{option}</label>
                            </div>
                        )
                    ))}
                </div>
            )}
        </div>
    );
}

export default FilterDropDownComponent;
