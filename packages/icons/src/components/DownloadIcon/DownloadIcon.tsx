import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModDownloadIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.sm};
    width: ${props => (props.width ? props.width : props.theme.icons.width.sm)};
`

const DownloadIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModDownloadIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900.000000 900.000000"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
            data-test="download-icon"
        >
            <g
                transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
                fill={fill}
                stroke="none"
            >
                <path
                    d="M3837 8980 c-3 -11 -13 -20 -24 -20 -29 0 -113 -79 -137 -129 l-21
-46 -5 -1865 -5 -1865 -595 -6 c-327 -3 -607 -9 -622 -14 -15 -4 -33 -13 -39
-21 -6 -8 -17 -14 -23 -14 -21 0 -71 -61 -91 -110 -4 -8 -13 -27 -21 -42 -19
-35 -18 -119 3 -160 9 -18 23 -46 31 -63 9 -16 75 -97 148 -180 72 -82 144
-165 160 -184 29 -34 68 -78 199 -226 39 -43 79 -90 90 -105 11 -14 36 -44 56
-66 20 -21 58 -64 85 -95 142 -160 172 -194 199 -227 33 -39 119 -136 174
-196 20 -22 46 -53 57 -68 20 -26 60 -72 209 -238 28 -31 64 -72 80 -91 47
-56 209 -240 282 -322 19 -21 57 -66 86 -100 127 -154 210 -234 271 -262 103
-47 221 -21 308 68 59 60 176 190 202 225 11 15 37 46 57 68 64 70 232 261
284 323 17 19 53 60 80 91 149 166 189 212 209 238 11 15 37 46 57 68 55 60
141 157 174 196 27 33 57 67 199 227 27 31 65 74 85 95 20 22 45 52 56 66 11
15 52 62 90 105 131 148 170 192 199 226 16 19 88 102 160 184 73 83 139 164
148 180 8 17 22 45 31 63 21 41 22 125 3 160 -8 15 -17 34 -21 42 -20 49 -70
110 -91 110 -6 0 -17 6 -23 14 -6 8 -24 17 -39 21 -15 5 -295 11 -622 14
l-595 6 -5 1865 -5 1865 -21 46 c-24 50 -108 129 -137 129 -11 0 -21 9 -24 20
-5 20 -14 20 -653 20 -639 0 -648 0 -653 -20z"
                />
                <path
                    d="M291 2786 c-9 -10 -11 -310 -9 -1197 l3 -1184 38 -75 c58 -115 61
-118 125 -180 63 -60 184 -130 226 -130 14 0 28 -4 31 -10 9 -14 7561 -14
7570 0 3 6 18 10 33 11 15 0 47 11 72 24 25 13 55 28 66 34 25 11 148 129 158
151 3 8 15 29 26 45 11 17 22 37 26 45 3 8 13 31 22 50 16 32 17 135 20 1219
2 887 0 1187 -9 1197 -16 20 -1083 21 -1096 2 -4 -7 -10 -389 -13 -848 l-5
-835 -3085 0 -3085 0 -5 835 c-3 459 -9 841 -13 848 -13 19 -1080 18 -1096 -2z"
                />
            </g>
        </ModDownloadIcon>
    )
}

export default withSystemProps(forwardRef(DownloadIcon))
