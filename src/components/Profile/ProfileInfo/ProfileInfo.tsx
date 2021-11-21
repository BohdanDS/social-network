import p from "./ProfileInfo.module.css"
import React from "react";

const ProfileInfo = () => {
    return (
            <div>
                <div><img className={p.img} src="https://www.industrialempathy.com/img/remote/ZiClJf-1280w.avif"/></div>
                <div className={p.descriptionBlock}>AVA + description</div>
            </div>
    )
}

export default ProfileInfo