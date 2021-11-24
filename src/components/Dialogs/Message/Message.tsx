 import s from "./../Dialogs.module.css"
 import {MessagePropsType} from "../../../Redux/state";


const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.messageText}</div>
}

export default Message