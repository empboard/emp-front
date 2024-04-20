import type { FC } from 'react'
import type { List } from '../../store/commonTypes'
import { Button, Div, Paragraph } from '../../components'

export type BoardListProps = {
  list: List
  onRemoveList?: () => void
}

const BoardList: FC<BoardListProps> = ({ list, onRemoveList, ...props }) => {
  return (
    <Div {...props} className="p-2 m-2 border border-gray-300 rounded-lg">
      <Div className="flex justify-between mb-2">
        <Paragraph className="w-32 underline" numberOfLines={1}>
          {list.title}
        </Paragraph>
        <Div className="flex justify-between ml-2">
          <Button
            name="ADD"
            className="btn-error btn-xs"
            onClick={onRemoveList}
          />
        </Div>
      </Div>
    </Div>
  )
}

export default BoardList
