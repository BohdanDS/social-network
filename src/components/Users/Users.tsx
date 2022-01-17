import React from 'react';
import style from "./Users.module.css";
import userAvatar from "../../assets/images/userAvatar.png";
import {UserType} from "../../redux/users-reducer";

type UsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    users: Array<UserType>
    unFollow: (userId: number) => void
    follow: (userId: number) => void
    isFetching:boolean

}

const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []
    if (props.currentPage === 1) {
        pages.push(props.currentPage)
        pages.push(props.currentPage + 1)
        pages.push(props.currentPage + 2)
    } else {
        pages.push(props.currentPage - 1)
        pages.push(props.currentPage)
        pages.push(props.currentPage + 1)
    }
    console.log(props.isFetching)
    return (
        <div>

            <div className={style.links}>
                ...
                {pages.map(m => {
                    return (
                        <span key={m} className={props.currentPage === m ? style.selectPage : ''}
                              onClick={() => props.onPageChanged(m)}>{m}</span>
                    )
                })}
                ...
            </div>

            {props.users.map(m => <div key={m.id}>
                <span>
                    <div>
                        <img alt={'imageHere'} className={style.img}
                             src={m.photos.large ? m.photos.large : userAvatar}/>
                    </div>
                    <div>
                        {m.followed ? <button onClick={() => props.unFollow(m.id)}>Unfollow</button> :
                            <button onClick={() => props.follow(m.id)}>Follow</button>}
                    </div>
                </span>
                <span>
                        <span>
                            <div>{m.name}</div>
                            <div>{m.status}</div>
                        </span>
                    </span>
            </div>)}
        </div>
    );
};

export default Users;