import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    id : number
    dialogTitle: string
}

const DialogItem =(props: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`}
                     className={(x) => x.isActive ? s.activeLink : ''}>{props.dialogTitle}</NavLink>
        </div>
    )
}

export default DialogItem