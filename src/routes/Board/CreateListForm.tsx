import { ChangeEvent, FC, KeyboardEvent, useCallback, useState } from 'react'
import { Button, Div, Input } from '../../components'
import { v4 as uuid } from 'uuid'

export type CreateListFormProps = {
  onCreateList: (uuid: string, title: string) => void
}

const CreateListForm: FC<CreateListFormProps> = ({ onCreateList }) => {
  const [value, setValue] = useState<string>('')

  const addList = useCallback(() => {
    onCreateList(uuid(), value)
    setValue('')
  }, [value, onCreateList])

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(() => e.target.value)
  }, [])

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key == 'Enter' && value !== '') addList()
    },
    [addList, value]
  )

  // prettier-ignore
  return (
    <Div className="flex p-2">
      <Input 
        placeholder="Create List" 
        value={value} 
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="input-bordered input input-md w-[400px]" 
      />
      
      <Button 
        name="ADD"
        onClick={addList} 
        disabled={!value.length} 
        className="ml-5 bg-[#205081] btn-md text-white" 
      />
    </Div>
  )
}

export default CreateListForm
