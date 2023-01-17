import { UsersTable } from "../components/UsersTabe/UsersTable"
import { TableToolbar } from "../components/TableToolbar"

export function HomePage() {
  return (
    <div className="mx-auto w-min mt-4">
      <TableToolbar/>
      <UsersTable/>
    </div>
  )
}
