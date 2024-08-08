import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModNewTabIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.sm};
    width: ${props => (props.width ? props.width : props.theme.icons.width.sm)};
`

const NewTabIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModNewTabIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="100 0 1000 700"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
            data-test="new-tab-icon"
        >
            <g
                transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
                fill={fill}
                stroke="none"
            >
                <path
                    d="M2195 7173 c-199 -62 -331 -195 -389 -392 -14 -48 -16 -278 -16
-2291 0 -2036 1 -2243 16 -2291 61 -203 193 -333 395 -393 51 -15 249 -16
2289 -16 2018 0 2239 2 2289 16 202 58 339 196 395 399 15 54 17 135 14 810
l-3 750 -175 0 -175 0 -5 -745 c-5 -795 -3 -765 -54 -816 -12 -12 -35 -29 -53
-38 -29 -15 -213 -16 -2233 -16 -2020 0 -2204 1 -2233 16 -41 21 -70 50 -91
91 -15 29 -16 213 -16 2233 0 2009 1 2204 16 2233 22 43 43 66 79 86 27 14
114 17 865 21 l835 5 0 175 0 175 -850 2 c-746 2 -856 0 -900 -14z"
                />
                <path
                    d="M5754 7177 c-2 -7 -3 -87 -2 -177 l3 -165 390 -3 c215 -1 397 -4 405
-7 9 -4 -530 -550 -1624 -1644 -1433 -1433 -1637 -1641 -1628 -1657 13 -25
226 -234 238 -234 5 0 746 737 1646 1637 1093 1093 1639 1632 1643 1623 3 -8
6 -190 7 -405 l3 -390 175 0 175 0 3 648 c2 582 0 651 -14 680 -23 45 -44 66
-86 88 -35 18 -69 19 -683 19 -518 0 -647 -3 -651 -13z"
                />
            </g>
        </ModNewTabIcon>
    )
}

export default withSystemProps(forwardRef(NewTabIcon))
