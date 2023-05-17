import React from 'react'
import user from './../../../../assests/image/user.png'

const ContactCard = (props) => {

  // const{ id, name, email } = props.contact;

  return (
    <div className='item'>
      <img className ="ui avatar image" src={user} alt="user"/>
    <div className='content'>
      <div className='header'>{props.contact.name}</div>
      <div>{props.contact.email}</div>
    </div>
      <i className='trash alternate outline icon' 
        style = {{ color: "red"}}
      onClick={() => {
        props.clickHandler(props.contact.id)
      }} >
      </i>
  </div>
  )
}

export default ContactCard
