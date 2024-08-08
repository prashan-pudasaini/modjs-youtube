import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModMinusIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.sm};
    width: ${props => (props.width ? props.width : props.theme.icons.width.sm)};
`

const MinusIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModMinusIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900.000000 900.000000"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
            data-test="minus-icon"
        >
            <g
                transform="translate(0.000000,300.000000) scale(0.050000,-0.050000)"
                fill={fill}
                stroke="none"
            >
                <path
                    d="M203 3317 c-261 -130 -261 -507 2 -635 l88 -42 2707 0 2707 0 88 42
c263 128 263 508 0 636 l-88 42 -2708 0 -2709 0 -87 -43z"
                />
            </g>
        </ModMinusIcon>
    )
}

export default withSystemProps(forwardRef(MinusIcon))
