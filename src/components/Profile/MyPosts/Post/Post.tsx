import React from "react";
import p from "./Post.module.css"


type PostType = {
    id: number
    title: string
    likesCount: number
}

const Post: React.FC<PostType> = (props:PostType) => {
    return (

            <div className={p.item}>
                <img
                    src ="https://e7.pngegg.com/pngimages/906/448/png-clipart-silhouette-person-person-with-helmut-animals-logo.png" />
                {props.title}
                <div><span>Likes: {props.likesCount}</span></div>
            </div>
    )
}

export default Post