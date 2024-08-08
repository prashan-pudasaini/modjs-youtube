import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

interface AnimatedLoadingIconProps extends IconProps {
    stroke?: string
}

const ModAnimatedLoadingIcon = styled.svg<AnimatedLoadingIconProps>`
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.sm};
    width: ${props => (props.width ? props.width : props.theme.icons.width.sm)};
    stroke: ${props =>
        props.stroke ? props.stroke : props.theme.color.primary};
`

const AnimatedLoadingIcon = (
    { stroke, height, width, ...props }: AnimatedLoadingIconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModAnimatedLoadingIcon
            {...props}
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            preserveAspectRatio="xMidYMid"
            height={height}
            width={width}
            data-test="animated-loading-icon"
        >
            <circle
                cx="25"
                cy="25"
                fill="transparent"
                stroke={stroke}
                strokeWidth="3"
                r="15"
                strokeDasharray="47.123889803846895 16.041189668484067"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    dur="30s"
                    values="0 25 25;360 25 25"
                    keyTimes="0;1"
                ></animateTransform>
            </circle>
        </ModAnimatedLoadingIcon>
    )
}

export default withSystemProps(forwardRef(AnimatedLoadingIcon))
