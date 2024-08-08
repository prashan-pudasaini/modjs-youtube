import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModCopyIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.sm};
    width: ${props => (props.width ? props.width : props.theme.icons.width.sm)};
`

const CopyIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModCopyIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900.000000 900.000000"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
            data-test="copy-icon"
        >
            <g
                transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
                fill={fill}
                stroke="none"
            >
                <path
                    d="M2860 8985 c0 -8 -12 -18 -27 -21 -46 -11 -132 -82 -167 -137 -112
-180 -52 -395 139 -504 l50 -28 2050 -6 c1319 -4 2066 -9 2095 -16 281 -63
490 -270 552 -548 8 -36 13 -823 17 -2805 l6 -2755 25 -45 c155 -283 551 -250
653 54 16 46 17 260 17 2785 0 2691 -1 2738 -20 2846 -39 212 -78 321 -178
494 -104 179 -284 365 -461 476 -131 82 -386 183 -466 186 -44 1 -80 14 -78
27 2 9 -509 12 -2102 12 -1852 0 -2105 -2 -2105 -15z"
                />
                <path
                    d="M1930 7555 c-102 -12 -141 -20 -245 -51 -93 -28 -233 -91 -300 -134
-16 -11 -37 -23 -45 -27 -35 -16 -151 -110 -224 -181 -71 -70 -182 -205 -199
-242 -4 -8 -16 -28 -27 -45 -43 -67 -106 -207 -134 -300 -69 -228 -66 -98 -66
-2792 0 -1674 3 -2454 11 -2525 12 -114 39 -236 70 -319 11 -30 24 -65 28 -79
5 -14 27 -60 50 -104 207 -396 567 -662 1001 -742 111 -20 3749 -20 3860 0
141 26 233 57 365 122 109 54 107 52 220 136 162 119 309 289 407 473 39 73
51 101 93 230 70 212 65 7 65 2807 0 2224 -2 2538 -15 2610 -17 93 -40 176
-61 226 -8 18 -14 37 -14 42 0 11 -69 156 -104 218 -63 112 -198 267 -327 376
-43 37 -180 126 -239 156 -25 12 -56 28 -70 35 -35 18 -174 65 -240 82 -164
41 -228 42 -2030 41 -1292 0 -1751 -4 -1830 -13z m3695 -714 c145 -40 243 -99
347 -210 97 -103 150 -211 177 -357 8 -43 11 -750 11 -2495 0 -2586 1 -2497
-44 -2625 -37 -104 -128 -232 -215 -301 -31 -24 -63 -47 -71 -50 -8 -3 -22
-12 -30 -18 -33 -27 -160 -69 -245 -81 -71 -11 -446 -13 -1780 -13 -1748 -1
-1804 1 -1900 39 -239 96 -394 264 -455 492 -19 71 -20 128 -20 2558 0 2410 1
2487 19 2555 17 61 45 124 100 224 19 34 150 164 187 184 67 38 161 80 194 89
19 5 49 13 65 18 17 4 831 8 1810 9 1716 1 1783 0 1850 -18z"
                />
            </g>
        </ModCopyIcon>
    )
}

export default withSystemProps(forwardRef(CopyIcon))
