import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'

interface ModContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
    ref?: React.Ref<HTMLElement>
    fluid?: boolean
}

const forwardProps = (prop: string) => !['fluid'].includes(prop)

const ModContainer = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModContainerProps>`
    ${props =>
        !props.fluid &&
        `
            max-width: 1280px;
            margin: auto;
            padding-right: 80px;
            padding-left: 80px;
            @media (max-width: 1280px) {
                padding-right: 48px;
                padding-left: 48px;
            }
            @media (max-width: 768px) {
                padding-right: 8px;
                padding-left: 8px;
            }
        `};
    ${props =>
        props.fluid &&
        `
            padding-right: 16px;
            padding-left: 16px;
    `}
`
const Container = (
    { children, fluid, ...props }: ModContainerProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModContainer
            {...props}
            ref={ref}
            fluid={fluid === true ? true : false}
            data-test="container"
        >
            {children}
        </ModContainer>
    )
}

export default withSystemProps(forwardRef(Container))
