import { ChangeEvent, FC, useCallback, useState } from 'react'
import { Button, Div, Input } from '../../components'
import { v4 as uuid } from 'uuid'

export type CreateListFormProps = {
  onCreateList: (uuid: string, title: string) => void
}

const CreateListForm: FC<CreateListFormProps> = ({ onCreateList }) => {
  const [value, setValue] = useState<string>(uuid())
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(() => e.target.value)
  }, [])

  const addList = useCallback(() => {
    onCreateList(uuid(), value)
    setValue(() => uuid())
  }, [value, onCreateList])

  // prettier-ignore
  return (
    <Div className="flex p-2">
      <Input placeholder="title" 
        value={value} onChange={onChange}
        className="input-xs input-bordered input input-primary" />
      
      <Button 
        name="ADD"
        onClick={addList} 
        disabled={!value.length} 
        className="ml-2 btn-primary btn-xs" 
      />
    </Div>
  )
}

export default CreateListForm
