import React from 'react'

const ContactList = (props) => {
  console.log(props)

  const renderContactList = props.contacts.map((contact) => {
    return (
      <div className='item'>
        <div className='content'>
          <div className='header'>{contact.name}</div>
          <div className=''>{contact.email}</div>
          <div textAlign ='end'>
            <i className='trash alternate outline icon' >
            </i>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className='ui celled list'>
      {renderContactList}
    </div>
  )
}



export default ContactList
