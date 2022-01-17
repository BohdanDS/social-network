import React from 'react';
import axios from "axios";
import {UsersType} from "../../redux/users-reducer";
import style from './Users.module.css'
import userAvatar from '../../assets/images/userAvatar.png'
import {UsersPropsType} from "./UsersContainer";
import {AppStateType} from "../../redux/redux-store";


class Users extends React.Component<UsersPropsType, AppStateType> {


    componentDidMount() {
        //  const instance = axios.create({
        //     withCredentials: true,
        //     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        //     headers:     {
        //         "API-KEY": "fdbb564c-a244-4702-bf65-bab4b0fb11e9"
        //     }
        // });
        axios.get<UsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.totalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.selectCurrentPage(pageNumber)
        axios.get<UsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        console.log(pagesCount)

        let pages = []
        if (this.props.currentPage === 1) {
            pages.push(this.props.currentPage)
            pages.push(this.props.currentPage + 1)
            pages.push(this.props.currentPage + 2)
            // pages.push(pagesCount)
        } else {
            pages.push(this.props.currentPage - 1)
            pages.push(this.props.currentPage)
            pages.push(this.props.currentPage + 1)
            // pages.push(pagesCount)
        }

        console.log('pages', pages)
        return (
            <div>
                <div className={style.links}>
                    ...
                    {pages.map(m => {
                        return (
                            <span key={m} className={this.props.currentPage === m ? style.selectPage : ''}
                                  onClick={() => this.onPageChanged(m)}>{m}</span>
                        )
                    })}
                    ...
                </div>

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
                    </span>
                </div>)}
            </div>
        );
    }
}

export default Users;