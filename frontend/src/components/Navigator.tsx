import { Link } from 'react-router-dom'
export default function Navigator(){
    //toggle active identifier
    const tabs = document.getElementsByClassName('nav-bar-link')
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', () => {
          for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('active')
          }
          tabs[i].classList.add('active')
        })
       }

    return(
            <ul className='nav-bar'>
                <li className='nav-bar-link active'><Link to='dashboard'><i className='fa-solid fa-house'></i></Link></li>
                <li className='nav-bar-link'><Link to='transactions'><i className="fa-solid fa-hand-holding-dollar"></i></Link></li>
                <li className='nav-bar-link'><Link to='wallet'><i className="fa-solid fa-wallet"></i></Link></li>
                <li className='nav-bar-link'><Link to='Profile'><i className="fa-solid fa-user"></i></Link></li>
            </ul>
    )
}