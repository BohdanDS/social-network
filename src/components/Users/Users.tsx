import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import style from './Users.module.css'
import axios from "axios";
import {UsersType} from "../../redux/users-reducer";
import userAvatar from '../../assets/images/userAvatar.png'


const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        axios.get<UsersType>('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }

    return (
        <div>
            {props.users.map(m => <div key={m.id}>
                <span>
                    <div>
                        <img className={style.img}
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
                    <span>
                        {/*<div>{m.location.country}</div>*/}
                        {/* <div>{m.location.city}</div>*/}
                    </span>
                </span>
            </div>)}
        </div>
    );
};

export default Users;