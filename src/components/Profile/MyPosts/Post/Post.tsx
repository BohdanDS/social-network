import React from "react";
import p from "./Post.module.css"


type PostType = {
    imageLink:string
    title: string
    likesCount: number
}

const Post: React.FC<PostType> = (props) => {
    return (

            <div className={p.item}>
                <img
                    src = {props.imageLink}/>
                {props.title}
                <div><span>Likes: {props.likesCount}</span></div>
            </div>
    )
}

export default Post