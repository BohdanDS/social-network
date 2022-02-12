import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {getProfileStatus} from "../../../redux/profile-reducer";

type ProfileStatusPropsType = {
    status: string
    updateProfileStatus: (newStatus: string) => void
    userId:number
}

const ProfileStatus = ({status, updateProfileStatus,userId}: ProfileStatusPropsType) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfileStatus(userId))
        setInputValue(status)
    }, [status])


    const [inputValue, setInputValue] = useState<string>()
    const [editable, setEditable] = useState<boolean>(false)


    const onInputChangeHandler = (value: ChangeEvent<HTMLInputElement>) => {
        setInputValue(value.currentTarget.value)
    }

    const onSaveClick = () => {
        setEditable(false)
        setInputValue(inputValue)
        inputValue && updateProfileStatus(inputValue)
    }

    return (
        <>
            <div>
                {editable ? <><input value={inputValue} onChange={onInputChangeHandler}
                                     onBlur={() => setEditable(false)} autoFocus/>
                        <button onClick={onSaveClick}>Save</button>
                    </> :
                    <span onDoubleClick={() => setEditable(true)}>{inputValue}</span>}
            </div>
        </>
    );
};

export default ProfileStatus;

