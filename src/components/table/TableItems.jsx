import React from 'react'

const TableItems = ({ filtered }) => {
  return (
    <>
    {filtered.map((user) => {
        return (
          <tr key={user.id}>
            <td>
                {user.first_name}
            </td>
            <td>{user.last_name}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
            <td>
              <a className="link web" href={user.web} rel="noreferrer" target="_blank">
                {user.web}
              </a>
            </td>
          </tr>
        );
      })}
      </>
  )
}

export default TableItems