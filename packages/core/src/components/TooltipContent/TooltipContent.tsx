import React, { useContext, forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import Box from '../Box/Box'
import TooltipContext from '../../context/TooltipContext/TooltipContext'

interface ModTooltipContentProps {
    children?: React.ReactNode
    ref?: React.Ref<HTMLElement>
    isOpen?: boolean
    displayPosition?: 'right' | 'left'
}

const forwardProps = (prop: string) =>
    !['isOpen', 'displayPosition'].includes(prop)

const ModTooltipContent = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModTooltipContentProps>`
    position: absolute;
    overflow: hidden;
    margin-top: 10px;
    width: max-content;
    height: ${props => (props.isOpen ? 'max-content' : '0')};
    background-color: ${props => props.theme.tooltipBg};
    border-radius: ${props => props.isOpen && props.theme.borderRadius};
    ${props =>
        props.displayPosition === 'right' &&
        `
        left: 15%;
    `};
    ${props =>
        props.displayPosition === 'left' &&
        `
        right: 15%;
    `};
`

const TooltipContent = (
    { children, displayPosition, ...props }: ModTooltipContentProps,
    ref?: React.Ref<HTMLElement>,
) => {
    const { isOpen } = useContext(TooltipContext)
    return (
        <ModTooltipContent
            {...props}
            ref={ref}
            isOpen={isOpen}
            displayPosition={displayPosition ? displayPosition : 'left'}
            data-test="Tooltip-content"
        >
            <Box p={8}>{children}</Box>
        </ModTooltipContent>
    )
}

export default withSystemProps(forwardRef(TooltipContent))
