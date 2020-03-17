import React, { useState, useRef } from 'react'

export default function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    })
    const nameInput = useRef()
    const { name, nickname } = inputs

    const onChange = (e) => {
        const { name, value } = e.target
        setInputs({
            ...inputs,
            [name]: value,
        })
    }
    const onRemove = () => {
        setInputs({
            name: '',
            nickname: '',
        })
        nameInput.current.focus();
    }
    return (
        <>
            <input type="text" name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
            <input type="text" name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            값 {name}: ({nickname})
            <button onClick={onRemove}>초기화</button>
        </>
    )
}
