import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
}

const ProfileStatus = ({status}: ProfileStatusPropsType) => {


    useEffect(() => {
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