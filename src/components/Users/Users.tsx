import React from 'react';
import style from "./Users.module.css";
import userAvatar from "../../assets/images/userAvatar.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {FollowAPI} from "../../API/api";

type UsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    users: Array<UserType>
    unFollow: (userId: number) => void
    follow: (userId: number) => void
    isFetching: boolean
    setFollowingState: (idOfUserInProcess: number | null) => void
    followingInProgress: boolean
    idOfUserInProcess: number | null
}

const Users = (props: UsersPropsType) => {

    // let pagesCount = Math.ceil(props.totalCount / props.pageSize)

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
                        <NavLink to={`/profile/${m.id}`}>
                            <img alt={'imageHere'} className={style.img}
                                 src={m.photos.large ? m.photos.large : userAvatar}/>
                        </NavLink>
                    </div>
                    <div>
                        {m.followed ?
                            <button disabled={m.id === props.idOfUserInProcess} onClick={() => {
                                props.setFollowingState(m.id)
                                FollowAPI.unFollowUser(m.id).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unFollow(m.id)
                                    }
                                    props.setFollowingState(null)
                                })
                            }}>Unfollow</button> :
                            <button disabled={m.id === props.idOfUserInProcess} onClick={() => {
                                props.setFollowingState(m.id)
                                FollowAPI.followUser(m.id).then(
                                    response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(m.id)
                                        }
                                        props.setFollowingState(null)
                                    }
                                )
                            }}>Follow</button>}
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