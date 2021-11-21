 import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
 import {MessagePropsType} from "../../../index";

const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.messageText}</div>
}

export default Message