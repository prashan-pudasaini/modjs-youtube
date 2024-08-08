import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModTerminalIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.sm};
    width: ${props => (props.width ? props.width : props.theme.icons.width.sm)};
`

const TerminalIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModTerminalIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900.000000 900.000000"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
            data-test="terminal-icon"
        >
            <g
                transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
                fill={fill}
                stroke="none"
            >
                <path
                    d="M1415 7669 c-114 -6 -169 -19 -275 -62 -288 -118 -489 -353 -564
-659 -15 -60 -16 -283 -16 -2458 0 -2575 -3 -2429 47 -2565 109 -298 362 -522
675 -599 60 -15 338 -16 3206 -16 3082 0 3142 0 3219 19 180 45 315 121 443
250 129 130 211 276 254 453 15 60 16 283 16 2458 0 2175 -1 2398 -16 2458
-87 355 -360 627 -709 707 -63 14 -369 16 -3125 18 -1680 1 -3100 -1 -3155 -4z
m6110 -369 c112 -15 146 -24 220 -61 143 -70 261 -225 296 -389 21 -97 21
-4623 0 -4720 -16 -77 -69 -188 -117 -247 -43 -53 -145 -129 -209 -157 -121
-54 38 -51 -3230 -51 -3234 0 -3089 -2 -3210 47 -165 67 -297 228 -336 408
-21 97 -21 4623 0 4720 35 164 154 320 296 389 70 35 105 45 205 60 77 12
5997 12 6085 1z"
                />
                <path
                    d="M2141 6140 c-61 -44 -81 -83 -81 -156 0 -52 4 -67 29 -100 16 -21
331 -340 700 -709 369 -368 671 -677 671 -685 0 -8 -302 -317 -671 -685 -369
-369 -684 -688 -700 -709 -25 -33 -29 -48 -29 -100 0 -73 20 -112 81 -156 56
-40 140 -43 197 -6 40 26 1538 1524 1566 1566 22 33 22 147 0 180 -28 42
-1526 1540 -1566 1566 -57 37 -141 34 -197 -6z"
                />
                <path
                    d="M5000 3170 l-585 -5 -32 -23 c-52 -37 -73 -80 -73 -153 0 -74 25
-122 83 -158 l34 -21 1189 0 1189 0 37 25 c56 38 78 82 78 155 0 71 -21 115
-73 152 l-32 23 -615 5 c-338 3 -878 3 -1200 0z"
                />
            </g>
        </ModTerminalIcon>
    )
}

export default withSystemProps(forwardRef(TerminalIcon))
