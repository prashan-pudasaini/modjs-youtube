import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'

interface ModUnorderedListProps extends React.HTMLAttributes<HTMLUListElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
    indent?: boolean
}
const forwardProps = (prop: string) => !['indent'].includes(prop)

const ModUnorderedList = styled.ul.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModUnorderedListProps>`
    margin: 0;
    padding-left: ${props => (props.indent ? '48px' : '0')};
    color: ${props => props.theme.typography.color.main};
    font-family: ${props => props.theme.typography.ff.primary};
    font-size: ${props => props.theme.typography.fs.md};
`

const UnorderedList = (
    { children, indent, ...props }: ModUnorderedListProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModUnorderedList
            indent={indent === true ? true : false}
            {...props}
            ref={ref}
            data-test="unordered-list"
        >
            {children}
        </ModUnorderedList>
    )
}

export default withSystemProps(forwardRef(UnorderedList))
