import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModUpChevronIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.sm};
    width: ${props => (props.width ? props.width : props.theme.icons.width.sm)};
`

const UpChevronIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModUpChevronIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900 1300"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
            data-test="up-chevron-icon"
        >
            <g
                transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
                fill={fill}
                stroke="none"
            >
                <path
                    d="M2237 4802 c-1230 -1230 -2237 -2242 -2237 -2247 0 -16 604 -615 620
-615 8 0 879 864 1935 1920 1056 1056 1927 1920 1935 1920 8 0 879 -864 1935
-1920 1056 -1056 1927 -1920 1935 -1920 8 0 150 135 315 300 165 165 306 300
312 300 7 0 13 7 13 15 0 8 -6 15 -13 15 -6 0 -1018 1006 -2247 2235 -1229
1229 -2242 2235 -2250 2235 -8 0 -1022 -1007 -2253 -2238z"
                />
            </g>
        </ModUpChevronIcon>
    )
}

export default withSystemProps(forwardRef(UpChevronIcon))
