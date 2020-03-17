import React, { useEffect } from 'react'

const User = React.memo(({ user, onRemove, onToggle }) => {
    const { id, username, email, active } = user
    // useEffect(() => {
    //     console.log('컴포넌트가 화면에 나타남')
    //     // 빈배열은 첫 시작시에만 실행됌 -> mount
    //     // props -> state
    //     // REST API
    //     // D3 Video.js
    //     // setInterval, setTimeout
    //     loadPost(username, urlSlug)
    //     return () => {
    //         console.log('컴포넌트가 화면에서 사라짐')
    //         // unmount
    //         // clearInterval, clearTimeout
    //         // 라이브러리 인스턴스 제거
    //     }
    // }, [username, urlSlug])
    useEffect(() => {
        console.log('user값이 설정됌')
        console.log(user)
        // 해당값이 바뀌거나 설정될때 마운트해줌
        return () => {
            console.log('user 값이 바뀌기 전')
            console.log(user)
        }
    }, [user])
    return (
        <div>
            <b
                style={{
                    color: active ? 'green' : 'black',
                    cursor: 'pointer'
                }}
                onClick={() => onToggle(id)}>{username}</b> <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
})

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map(user => <User key={user.id} user={user} onRemove={onRemove} onToggle={onToggle} />)}
        </div>
    )
}

export default React.memo(UserList)
