import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'

interface ModListProps extends React.HTMLAttributes<HTMLLIElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
    listStyle?: 'square' | 'inside' | 'none'
}

const forwardProps = (prop: string) => !['listStyle'].includes(prop)

const ModList = styled.li.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModListProps>`
    list-style: ${props =>
        props.listStyle === 'square'
            ? 'square'
            : props.listStyle === 'inside'
              ? 'inside'
              : props.listStyle === 'none'
                ? 'none'
                : ''};
    font-family: ${props => props.theme.typography.ff.primary};
    color: ${props => props.theme.typography.color.main};
    font-size: ${props => props.theme.typography.fs.md};
`

const List = (
    { children, listStyle, ...props }: ModListProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModList
            listStyle={listStyle ? listStyle : 'none'}
            {...props}
            ref={ref}
            data-test="list"
        >
            {children}
        </ModList>
    )
}

export default withSystemProps(forwardRef(List))
