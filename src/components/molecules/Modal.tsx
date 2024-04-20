import { FC } from 'react'
import { Button, Div, type ReactDivProps } from '..'

export type ModalProps = ReactDivProps & {
  open?: boolean
}

export const Modal: FC<ModalProps> = ({
  open,
  className: _className,
  ...props
}) => {
  const className = ['modal', open ? 'modal-open' : '', _className].join(' ')

  return <Div {...props} className={className} />
}

export type ModalContentProps = ReactDivProps & {
  onCloseBtnClick?: () => void
  closeBtnClassName?: string
}

export const ModalContent: FC<ModalContentProps> = ({
  onCloseBtnClick,
  closeBtnClassName: _closeBtnClassName,
  className: _className,
  children,
  ...props
}) => {
  const showCloseBtn = onCloseBtnClick ? true : false
  const className = [
    'modal-box',
    showCloseBtn ? 'relative' : '',
    _className,
  ].join(' ')

  if (!showCloseBtn) {
    return <Div {...props} className={className} children={children} />
  }

  const closeBtnClassName =
    _closeBtnClassName ?? 'btn-primary btn-outline btn-sm'

  return (
    <Div {...props} className={className}>
      <Div className="absolute" right="0.5rem" top="0.5rem">
        <Button
          name="close"
          className={closeBtnClassName}
          onClick={onCloseBtnClick}
        />
        {children}
      </Div>
    </Div>
  )
}

export type ModalActionProps = ReactDivProps & {}

export const ModalAction: FC<ModalActionProps> = ({
  className: _className,
  ...props
}) => {
  const className = ['modal-action', _className].join(' ')

  return <Div {...props} className={className} />
}
