// import React from 'react'

const Card = (user) => {
    let userName = user.name
    let userAge = user.age
    let userRole = user.role
    console.log(user.name);

  return (
    <div className='cards'>
        <div className="cardStyle">
            <h2>Name : {userName}</h2>
            <h3>Age : {userAge}</h3>
            <p><b>Role : {userRole}</b></p>
            <button className="btnStyle">Veiw Profile</button>
        </div>

    </div>
  )
}

export default Card
