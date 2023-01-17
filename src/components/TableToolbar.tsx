import { FC } from "react"
import UnlockIcon from '../assets/lock-open_white.svg'
import DeleteIcon from '../assets/trash_white.svg'
import { Button } from "./UI/Button"

interface TableToolbarProps {
  className?: string
}
export const TableToolbar:FC<TableToolbarProps> = () => {
  return (
    <div className="flex bg-orange-600 rounded text-white mb-2 p-2 mx-auto w-[50%]">
      <h1 className="mr-auto text-2xl font-extralight">USERS</h1>
      <p className="items-center my-auto ml-2 font-thin">selected: 3</p>
      <Button color="lite" className="ml-2">block</Button>
      <Button color="lite" className="ml-2">
        <img className="w-5" src={UnlockIcon} alt="unlock"/>
      </Button>
      <Button color="lite" className="ml-2">
        <img className="w-5" src={DeleteIcon} alt="delete"/>
      </Button>
    </div>
  )
}
