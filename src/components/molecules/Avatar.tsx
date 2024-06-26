import type { FC } from 'react'
import { Div, DivProps } from '..'

export type AvatarProps = DivProps & {
  size?: string
}

// prettier-ignore
export const Avatar: FC<AvatarProps> = ({
  className: _className,
  style: _style,
  src, size,
  ...props
}) => {
  const w_or_h = size ?? '6rem'
  const className = ['rounded-full bg-cover bg-gray-300', _className].join(' ')
  
  return (
    <Div 
      {...props}
      src={src}
      width={w_or_h}
      height={w_or_h}
      className={className}
      style={_style}
    />
  )
}
