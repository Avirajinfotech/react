import React from 'react'

const Employee = (props) => {
  return (
    <table>
    <tr>
        <td>{props.name}</td>
        <td>{props.age}</td>
        <td>{props.email}</td>
    </tr>
    </table>
  )
}

export default Employee