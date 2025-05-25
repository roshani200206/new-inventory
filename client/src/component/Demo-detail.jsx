import React from 'react'

function DemoDetail({user}) {
    console.log(user)
  return (
    <div>DemoDetail{user.username}</div>
  )
}

export default DemoDetail