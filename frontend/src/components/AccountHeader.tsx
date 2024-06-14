import { useEffect, useState} from 'react'

export default function AccountHeader(){
    const [userId, setUserId] = useState('')

    useEffect(()=>{
        setUserId(sessionStorage.getItem('user')!)
    }, [])
    
    return(
        <><header>
            <div className="logo">
                <img src="" alt="Manivas" />
            </div>
            <div className="profile">
                <img src="" alt="" className="avatar" />
                <div className="profile-details">
                    <p>{userId} <i className="fa-solid fa-caret-right"></i></p>
                </div>
            </div>
        </header><hr /></>
    )
}