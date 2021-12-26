import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.author}>
        <div className={s.author_avatar}>
          <h2>My profile page</h2>
          <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=2560&h=400&fm=webp" alt=""/>
        </div>
        <div className="author__text">

        </div>
      </div>
    </div>
  )
}
export default ProfileInfo;