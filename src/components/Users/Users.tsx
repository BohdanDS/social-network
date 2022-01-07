import React from 'react';
import axios from "axios";
import {UsersType} from "../../redux/users-reducer";
import style from './Users.module.css'
import userAvatar from '../../assets/images/userAvatar.png'
import {UsersPropsType} from "./UsersContainer";
import {AppStateType} from "../../redux/redux-store";


class Users extends React.Component<UsersPropsType, AppStateType> {
    constructor(props: UsersPropsType) {
        super(props);
        axios.get<UsersType>('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        return (

            <div>
                {this.props.users.map(m => <div key={m.id}>
                <span>
                    <div>
                        <img alt={'imageHere'} className={style.img}
                             src={m.photos.large ? m.photos.large : userAvatar}/>
                    </div>
                    <div>
                        {m.followed ? <button onClick={() => this.props.unFollow(m.id)}>Unfollow</button> :
                            <button onClick={() => this.props.follow(m.id)}>Follow</button>}
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
    }
}

export default Users;