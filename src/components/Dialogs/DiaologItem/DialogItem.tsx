import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogItemPropsType} from "../../../Redux/state";


const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`}
                     className={(x) => x.isActive ? s.activeLink : ''}>
                <img src={props.avatar} alt="avatar"/>
                {props.name}</NavLink>
        </div>
    )
}

export default DialogItem