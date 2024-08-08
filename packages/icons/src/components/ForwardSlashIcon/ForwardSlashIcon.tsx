import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModForwardSlashIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.sm};
    width: ${props => (props.width ? props.width : props.theme.icons.width.sm)};
`

const ForwardSlashIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModForwardSlashIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900.000000 900.000000"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
            data-test="forward-slash-icon"
        >
            <g
                transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
                fill={fill}
                stroke="none"
            >
                <path
                    d="M5118 7052 c-84 -30 -108 -63 -163 -227 -39 -112 -82 -236 -105 -295
-12 -30 -32 -86 -45 -125 -13 -38 -40 -115 -60 -170 -19 -55 -46 -131 -60
-170 -13 -38 -33 -95 -45 -125 -12 -30 -25 -68 -30 -85 -5 -16 -18 -55 -30
-85 -11 -30 -32 -86 -45 -125 -48 -140 -84 -241 -105 -295 -12 -30 -25 -68
-30 -85 -5 -16 -18 -55 -30 -85 -21 -54 -57 -155 -105 -295 -13 -38 -33 -95
-45 -125 -12 -30 -32 -86 -45 -125 -13 -38 -33 -95 -45 -125 -12 -30 -26 -68
-30 -85 -9 -29 -61 -177 -94 -265 -10 -25 -21 -58 -26 -75 -4 -16 -18 -55 -30
-85 -41 -105 -51 -135 -60 -165 -8 -27 -55 -159 -96 -270 -9 -22 -19 -53 -24
-70 -4 -16 -18 -55 -30 -85 -12 -30 -32 -86 -45 -125 -25 -72 -85 -240 -111
-310 -9 -22 -19 -53 -24 -70 -4 -16 -18 -55 -30 -85 -41 -106 -51 -135 -60
-165 -4 -16 -18 -55 -30 -85 -12 -30 -25 -68 -30 -85 -5 -16 -18 -55 -30 -85
-11 -30 -32 -86 -45 -125 -13 -38 -35 -101 -49 -139 -35 -92 -34 -135 2 -167
51 -48 115 -59 326 -59 305 0 343 20 396 205 4 17 18 55 30 85 12 30 32 87 45
125 13 39 33 95 45 125 12 30 32 87 45 125 13 39 40 115 60 170 19 55 46 132
60 170 13 39 33 95 45 125 12 30 25 69 30 85 5 17 18 55 30 85 11 30 32 87 45
125 31 88 87 246 109 305 10 25 21 59 26 75 4 17 18 55 30 85 21 54 57 155
105 295 13 39 33 95 45 125 12 30 32 87 45 125 13 39 40 115 60 170 20 55 47
132 60 170 13 39 34 95 45 125 12 30 26 69 30 85 9 30 19 59 60 165 12 30 26
69 30 85 8 27 54 156 96 270 9 22 19 54 24 70 4 17 18 55 30 85 12 30 32 87
45 125 14 39 32 90 41 115 42 114 86 238 94 265 4 17 18 55 30 85 41 106 51
135 60 165 4 17 18 55 30 85 12 30 25 69 30 85 5 17 18 55 30 85 11 30 32 87
45 125 13 39 35 101 49 139 34 90 34 128 -1 164 -49 51 -110 62 -332 61 -156
0 -205 -4 -243 -17z"
                />
            </g>
        </ModForwardSlashIcon>
    )
}

export default withSystemProps(forwardRef(ForwardSlashIcon))
