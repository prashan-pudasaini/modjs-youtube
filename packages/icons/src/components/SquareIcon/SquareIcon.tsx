import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModSquareIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.sm};
    width: ${props => (props.width ? props.width : props.theme.icons.width.sm)};
`

const SquareIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModSquareIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900.000000 900.000000"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
            data-test="square-icon"
        >
            <g
                transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
                fill={fill}
                stroke="none"
            >
                {' '}
                <path d="M216 8878 c-45 -23 -52 -30 -84 -75 l-22 -31 0 -4279 c1 -3337 3 -4283 13 -4299 26 -44 54 -72 95 -93 l41 -21 4231 0 c4168 0 4231 0 4269 19 45 24 98 81 108 119 5 15 8 1944 8 4288 l0 4261 -35 45 c-19 26 -54 56 -78 67 l-43 21 -4232 0 -4232 -1 -39 -21z" />{' '}
            </g>
        </ModSquareIcon>
    )
}

export default withSystemProps(forwardRef(SquareIcon))
