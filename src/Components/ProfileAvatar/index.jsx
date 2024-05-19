import React from "react"
import avatarIcon from '../../icons/profile-avatar.png'

function ProfileAvatar({ isExpanded, ...props }) {
    return (
        <div>
            {isExpanded ?
                <div className="flex flex-row ml-2 my-2">
                    <img src={avatarIcon} alt="profileavatar" />
                    <div className='flex-1 ml-10'>
                        <p className='font-bold text-sm'>MoniRoy</p>
                        <p className='text-xs text-[#979797]'>Beginner</p>
                    </div>
                </div> : <img className="ml-4 mb-2" src={avatarIcon} alt="profileavatar" />}

        </div>
    )
}
export default ProfileAvatar    