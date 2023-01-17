import { User } from "../../types"
import './UsersTable.css'
import { FC } from "react"

// interface UsersTableProps {
//   className?: string
// }

export const UsersTable: FC = () => {
  const users: User[] = [
    {
      id: '1',
      name: 'Alex',
      email: 'alex@mail.ru',
      lastLoginTimestamp: '1673965260317',
      registrationTimestamp: '1673965260317',
      status: 'active'
    }, {
      id: '2',
      name: 'Peter',
      email: 'peter@mail.ru',
      lastLoginTimestamp: '1673965260317',
      registrationTimestamp: '1673965260317',
      status: 'blocked'
    }, {
      id: '3',
      name: 'Elena',
      email: 'elena@mail.ru',
      lastLoginTimestamp: '1673965260317',
      registrationTimestamp: '1673965260317',
      status: 'active'
    }, {
      id: '4',
      name: 'Pavel',
      email: 'pavel@mail.ru',
      lastLoginTimestamp: '1673965260317',
      registrationTimestamp: '1673965260317',
      status: 'active'
    }, {
      id: '5',
      name: 'Georgy',
      email: 'georgy@mail.ru',
      lastLoginTimestamp: '1673965260317',
      registrationTimestamp: '1673965260317',
      status: 'blocked'
    },
  ]
  const currentUserId = '1'

  const dateFormat = (timestamp: string) => {
    return new Date(+timestamp).toLocaleDateString()
  }

  return (
    <div className={"table-container"}>
      <table>
        <thead>
        <tr>
          <td className="checkbox-select-all">
            <p>select all</p>
            <input className="checkbox" type="checkbox" onChange={(e) => console.log(e.target.checked)}/>
          </td>
          <td>id</td>
          <td>name</td>
          <td>email</td>
          <td>date of registration</td>
          <td>last login date</td>
          <td>status</td>
        </tr>
        </thead>

        <tbody>

        {users.map(({ id, name, email, registrationTimestamp, lastLoginTimestamp, status }) => (
          <tr key={id} className={currentUserId === id ? 'bg-gray-100' : ''}>
            <td>
              <input className="checkbox" type="checkbox" onChange={(e) => console.log(e.target.checked)}/>
            </td>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{dateFormat(registrationTimestamp)}</td>
            <td>{dateFormat(lastLoginTimestamp)}</td>
            <td>
              <p className={status === 'active' ? 'active' : 'blocked'}>
                {status}
              </p>
            </td>
          </tr>
        ))}

        </tbody>
      </table>
    </div>
  )
}
