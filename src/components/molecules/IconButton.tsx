import { FC } from 'react'
import { Button, Div, DivProps } from '..'

type IconButtonProps = DivProps & {
  onClick: () => void
}

export const IconButton: FC<IconButtonProps> = ({
  onClick,
  className: _className,
  children,
  ...props
}) => {
  const className = ['text-[32px]', _className].join(' ')

  return (
    <Div {...props}>
      <button onClick={onClick}>
        <span className={className}>{children}</span>
      </button>
    </Div>
  )
}
