import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModLightThemeIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.sm};
    width: ${props => (props.width ? props.width : props.theme.icons.width.sm)};
`

const LightThemeIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModLightThemeIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900.000000 900.000000"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
            data-test="lighttheme-icon"
        >
            <g
                transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
                fill={fill}
                stroke="none"
            >
                <path
                    d="M4282 8758 c-17 -17 -17 -1499 0 -1516 17 -17 399 -17 416 0 17 17
17 1499 0 1516 -9 9 -69 12 -208 12 -139 0 -199 -3 -208 -12z"
                />
                <path
                    d="M6822 7137 c-292 -292 -532 -540 -532 -549 0 -22 276 -298 298 -298
18 0 1072 1048 1072 1065 0 6 -69 79 -153 163 l-152 152 -533 -533z"
                />
                <path
                    d="M1467 7512 c-81 -81 -147 -152 -147 -157 0 -18 1055 -1065 1073
-1065 23 0 297 274 297 297 0 19 -1047 1073 -1065 1073 -6 0 -77 -66 -158
-148z"
                />
                <path
                    d="M4350 6509 c-198 -12 -380 -52 -580 -127 -60 -22 -263 -119 -314
-150 -71 -43 -188 -123 -201 -137 -5 -6 -32 -28 -60 -50 -64 -50 -210 -196
-260 -260 -22 -27 -44 -54 -50 -60 -6 -5 -20 -23 -30 -40 -11 -16 -31 -46 -46
-65 -15 -19 -37 -53 -49 -75 -12 -22 -30 -56 -42 -75 -24 -42 -49 -92 -70
-140 -8 -19 -20 -46 -26 -60 -49 -113 -84 -227 -128 -425 -16 -67 -19 -126
-19 -355 0 -299 9 -364 82 -605 34 -109 142 -350 193 -430 11 -16 24 -39 30
-50 32 -64 179 -246 279 -346 100 -100 282 -247 346 -279 11 -6 34 -19 50 -30
80 -51 321 -159 430 -193 237 -72 311 -82 605 -82 267 0 324 6 475 47 22 6 56
14 75 19 96 20 389 147 485 209 17 11 39 24 50 30 64 32 246 179 346 279 100
100 247 282 279 346 6 11 19 34 30 50 51 80 159 321 193 430 70 233 82 319 82
610 0 288 -12 369 -83 600 -49 161 -176 426 -251 525 -15 19 -35 49 -46 65
-10 17 -24 35 -30 40 -6 6 -28 33 -50 60 -52 67 -200 218 -250 254 -22 16 -49
38 -60 48 -11 11 -34 28 -50 38 -17 11 -46 31 -65 46 -94 71 -367 206 -485
239 -16 4 -43 13 -60 19 -113 38 -288 70 -425 76 -69 4 -134 7 -145 9 -11 1
-81 -1 -155 -5z"
                />
                <path
                    d="M222 4698 c-17 -17 -17 -399 0 -416 17 -17 1499 -17 1516 0 17 17 17
399 0 416 -17 17 -1499 17 -1516 0z"
                />
                <path
                    d="M7242 4698 c-9 -9 -12 -69 -12 -208 0 -139 3 -199 12 -208 17 -17
1499 -17 1516 0 17 17 17 399 0 416 -17 17 -1499 17 -1516 0z"
                />
                <path
                    d="M1847 2162 c-290 -290 -527 -532 -527 -537 0 -6 69 -79 153 -163
l152 -152 533 533 c292 292 532 540 532 549 0 22 -276 298 -298 298 -9 0 -254
-237 -545 -528z"
                />
                <path
                    d="M6428 2548 c-76 -77 -138 -147 -138 -156 0 -18 1048 -1072 1065
-1072 6 0 79 69 163 153 l152 152 -533 533 c-366 366 -538 532 -552 531 -12
-1 -78 -60 -157 -141z"
                />
                <path
                    d="M4282 1738 c-17 -17 -17 -1499 0 -1516 17 -17 399 -17 416 0 17 17
17 1499 0 1516 -17 17 -399 17 -416 0z"
                />
            </g>
        </ModLightThemeIcon>
    )
}

export default withSystemProps(forwardRef(LightThemeIcon))
