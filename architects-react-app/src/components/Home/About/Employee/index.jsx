import React from 'react'

const Employee = ({
  id, name, title, bio, img
}) => {
  return (
    <>
      <div className="w3-col l3 m6 w3-margin-bottom" id={id}>
        <img src={img} alt="John" style={{ width: "100%" }} />
        <h3>{name}</h3>
        <p className="w3-opacity">{title}</p>
        <p>{bio}</p>
        <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
      </div>
    </>
  )
}

export default Employee