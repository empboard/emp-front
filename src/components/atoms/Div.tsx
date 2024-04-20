import type {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from 'react'

export type WidthHeight = {
  width?: string
  height?: string
}

export type MinMaxWidthHeight = {
  minWidth?: string
  maxWidth?: string
  minHeight?: string
  maxHeight?: string
}

export type LeftRightTopBottom = {
  left?: string
  right?: string
  top?: string
  bottom?: string
}

export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export type DivProps = ReactDivProps &
  PropsWithChildren<WidthHeight> &
  LeftRightTopBottom &
  MinMaxWidthHeight & {
    src?: string
  }

// prettier-ignore
export const Div: FC<DivProps> = ({
  width, height, src,
  left, right, top, bottom,
  minWidth, maxWidth, minHeight, maxHeight,
  style: _style,
  className: _className,
  ...props
}) => {
  const style = { 
    ..._style, 
    width, height, 
    backgroundImage: src && `url(${src})`,
    left, right, top, bottom,
    minWidth, maxWidth, minHeight, maxHeight
  }

  const className = [
    'box-border',
    src ? 'bg-gray-300' : '',
    _className
  ].join(' ')

  return <div {...props} style={style} className={className} />
}
