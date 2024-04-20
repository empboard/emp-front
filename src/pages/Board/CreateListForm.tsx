import { ChangeEvent, FC, useCallback, useState } from 'react'
import { Div, Input } from '../../components'

export type CreateListFormProps = {
  onCreateList: (uuid: string, title: string) => void
}

const CreateListForm: FC<CreateListFormProps> = ({ onCreateList }) => {
  const [value, setValue] = useState<string>('')
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(() => e.target.value)
  }, [])

  const addList = useCallback(() => {
    onCreateList('1', value)
    setValue(() => '123')
  }, [value, onCreateList])

  // prettier-ignore
  return (
    <Div className="flex p-2">
      <Input placeholder="title" 
        value={value} onChange={onChange}
        className="input-xs input-bordered input input-primary" />
      
      <button onClick={addList} disabled={!value.length} className="ml-2 btn-primary btn-xs">
        ADD
      </button>
    </Div>
  )
}

export default CreateListForm
