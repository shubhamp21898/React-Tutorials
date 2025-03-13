import React from 'react'
import userimg from '../assets/user-img.png'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={userimg} alt='user'></img>
      <p id='user-desc'>{props.desc} </p>
    </div>
  )
}

export default UserCard
