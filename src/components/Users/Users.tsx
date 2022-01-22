import React from 'react';
import style from "./Users.module.css";
import userAvatar from "../../assets/images/userAvatar.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    users: Array<UserType>
    unFollow: (userId: number) => void
    follow: (userId: number) => void
    isFetching: boolean

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
                            <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`,
                                    {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "fdbb564c-a244-4702-bf65-bab4b0fb11e9"
                                        }
                                    }
                                ).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unFollow(m.id)
                                    }
                                })
                            }}>Unfollow</button> :
                            <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`, {}, {
                                    withCredentials: true, headers: {
                                        "API-KEY": 'fdbb564c-a244-4702-bf65-bab4b0fb11e9'
                                    }
                                }).then(
                                    response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(m.id)
                                        }
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