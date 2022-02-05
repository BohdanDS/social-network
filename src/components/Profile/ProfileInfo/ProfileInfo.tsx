import React from 'react';
import s from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";

type ProfileInfoType = {
    aboutMe: string,
    fullName: string,
    photos: {
        large: string
        small: string
    },
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: {
        "facebook": string,
        "website": string,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": string,
        "github": string,
        "mainLink": string
    }
}


const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <div>
            <div className={s.author}>
                <div className={s.author_avatar}>
                    <h2>My profile page</h2>
                    <h4>{props.fullName}</h4>
                    <ProfileStatus status={props.aboutMe}/>
                    <img
                        src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=2560&h=400&fm=webp"
                        alt=""/>
                </div>
                <div className="author__text">

                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;