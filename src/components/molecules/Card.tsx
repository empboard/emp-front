import { Suspense, type FC } from 'react'
import { CardDraggable, Div, Overlay, Paragraph } from '..'
import { Avatar } from './Avatar'
import { Button } from '../atoms/Button'

export type IUser = {
  uuid: string
  name: string
  jobTitle: string
  email: string
  avatar: string
}

export type ICard = {
  uuid: string
  writer: IUser
  image: string
  title: string
  paragraphs: string
  dayMonthYearDate: string
  relativeDate: string | null
}

export type CardProps = {
  card: ICard
  onClick?: () => void
  onRemove?: () => void
  draggableId: string
  index: number
}

export const Card: FC<CardProps> = ({
  card,
  onClick,
  onRemove,
  draggableId,
  index,
}) => {
  const { image, writer } = card
  const { avatar, name, jobTitle } = writer

  return (
    <CardDraggable draggableId={draggableId} index={index}>
      <Div
        className="m-2 overflow-hidden border shadow-lg rounded-xl"
        width="350px"
        height="200px"
        onClick={onClick}
      >
        <Suspense fallback={<Overlay />}>
          <Div src={image} className="relative h-20">
            <Button
              name="REMOVE"
              className="absolute right-1 top-1 btn-primary btn-xs"
              onClick={onRemove}
            />
          </Div>
        </Suspense>
        <Div
          className="flex flex-col p-2"
          minHeight="4rem"
          height="4rem"
          maxHeight="4rem"
        >
          <Div className="flex flex-row items-center">
            <Avatar src={avatar} size="2rem" />
            <Div className="ml-2">
              <Paragraph>{name}</Paragraph>
              <Paragraph className="text-gray-500">{jobTitle}</Paragraph>
            </Div>
          </Div>
        </Div>
      </Div>
    </CardDraggable>
  )
}
