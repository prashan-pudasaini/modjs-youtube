import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'

interface ModOrderedListProps extends React.HTMLAttributes<HTMLOListElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
    indent?: boolean
}

const forwardProps = (prop: string) => !['indent'].includes(prop)

const ModOrderedList = styled.ol.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModOrderedListProps>`
    margin: 0;
    padding-left: ${props => (props.indent ? '48px' : '0')};
    color: ${props => props.theme.typography.color.main};
    font-family: ${props => props.theme.typography.ff.primary};
    font-size: ${props => props.theme.typography.fs.md};
`

const OrderedList = (
    { children, indent, ...props }: ModOrderedListProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModOrderedList
            indent={indent === true ? true : false}
            {...props}
            ref={ref}
            data-test="ordered-list"
        >
            {children}
        </ModOrderedList>
    )
}

export default withSystemProps(forwardRef(OrderedList))
