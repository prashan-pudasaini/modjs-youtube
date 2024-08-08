import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'

interface ModGridProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
    columns?: number
}

const forwardProps = (prop: string) => !['columns'].includes(prop)

const ModGrid = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModGridProps>`
    display: grid;
    grid-template-columns: ${props =>
        props.columns === 1
            ? 'repeat(1, 1fr)'
            : props.columns === 2
              ? 'repeat(2, 1fr)'
              : props.columns === 3
                ? 'repeat(3, 1fr)'
                : props.columns === 4
                  ? 'repeat(4, 1fr)'
                  : props.columns === 5
                    ? 'repeat(5, 1fr)'
                    : props.columns === 6
                      ? 'repeat(6, 1fr)'
                      : ''};
    @media (max-width: 768px) {
        display: block;
    }
`
const Grid = (
    { children, ...props }: ModGridProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModGrid {...props} ref={ref} data-test="grid">
            {children}
        </ModGrid>
    )
}

export default withSystemProps(forwardRef(Grid))
