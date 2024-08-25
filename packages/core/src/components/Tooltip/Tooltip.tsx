import React, { useState, forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import TooltipContext from '../../context/TooltipContext/TooltipContext'

interface ModTooltipProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode
    ref?: React.Ref<HTMLElement>
    el?: React.ReactNode
    arrow?: boolean
}

const forwardProps = (prop: string) => !['arrow', 'el'].includes(prop)

const ModTooltip = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModTooltipProps>`
    position: relative;
`

const ModTooltipArrow = styled.span<ModTooltipProps>`
    &::before {
        content: '';
        position: absolute;
        margin-top: -6px;
        right: 27%;
        border-width: 8px;
        border-style: solid;
        border-color: transparent transparent ${props => props.theme.tooltipBg}
            transparent;
    }
`

const Tooltip = (
    { children, el, arrow, ...props }: ModTooltipProps,
    ref?: React.Ref<HTMLElement>,
) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleMouseEnter = () => {
        setIsOpen(true)
    }
    const handleMouseLeave = () => {
        setIsOpen(false)
    }

    const value = {
        isOpen,
    }
    return (
        <TooltipContext.Provider value={value}>
            <ModTooltip
                {...props}
                ref={ref}
                arrow={arrow === true ? true : false}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                data-test="Tooltip"
            >
                {el}
                {isOpen && arrow && (
                    <ModTooltipArrow data-testid="Tooltip-arrow" />
                )}
                {children}
            </ModTooltip>
        </TooltipContext.Provider>
    )
}

export default withSystemProps(forwardRef(Tooltip))
