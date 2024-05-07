import type { FC } from 'react'
import type { LinkProps as RRLinkProps } from 'react-router-dom'
import { Link as RRLink, useResolvedPath, useMatch } from 'react-router-dom'

export type LinkProps = RRLinkProps & {}

export const Link: FC<LinkProps> = ({
  className: _className,
  to,
  ...props
}) => {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })
  const className = [_className, 'btn', match ? 'btn-active' : ''].join(' ')

  return <RRLink {...props} to={to} className={className} />
}
