import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModPasswordIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.sm};
    width: ${props => (props.width ? props.width : props.theme.icons.width.sm)};
`

const PasswordIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModPasswordIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900.000000 900.000000"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
            data-test="password-icon"
        >
            <g
                transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
                fill={fill}
                stroke="none"
            >
                <path d="M4335 8695 c-77 -7 -162 -18 -190 -24 -27 -6 -72 -15 -100 -20 -58 -11 -230 -59 -254 -71 -9 -4 -38 -16 -66 -25 -54 -19 -227 -102 -285 -137 -177 -107 -286 -192 -430 -337 -210 -210 -317 -370 -454 -674 -36 -80 -95 -277 -115 -387 -12 -63 -26 -137 -31 -163 -6 -27 -10 -277 -10 -571 0 -403 -3 -526 -12 -538 -10 -12 -44 -17 -158 -22 -80 -4 -165 -11 -190 -17 -25 -5 -67 -15 -94 -20 -74 -16 -233 -89 -327 -151 -87 -58 -227 -195 -291 -283 -105 -147 -174 -330 -197 -520 -15 -120 -15 -3334 -1 -3455 32 -268 132 -479 315 -663 197 -197 410 -298 699 -333 181 -21 4511 -21 4692 0 289 35 501 135 698 332 179 179 285 401 316 664 13 113 13 3321 0 3445 -5 50 -15 108 -21 130 -43 154 -91 274 -135 332 -13 17 -24 35 -24 38 0 15 -93 125 -162 193 -125 122 -320 234 -473 269 -33 8 -78 18 -100 23 -22 5 -105 12 -185 16 -114 5 -148 10 -157 22 -10 12 -13 135 -13 539 0 287 -4 542 -9 565 -5 24 -21 99 -34 168 -28 142 -43 206 -56 235 -5 11 -17 43 -26 70 -65 188 -190 412 -326 581 -91 115 -250 274 -349 349 -36 27 -69 53 -75 58 -44 36 -243 152 -330 191 -33 16 -72 34 -87 41 -15 7 -42 17 -60 20 -18 4 -37 11 -43 15 -5 4 -44 17 -85 29 -41 12 -88 26 -105 31 -16 5 -55 12 -85 16 -30 4 -65 11 -77 15 -12 4 -80 13 -150 19 -70 5 -146 12 -168 14 -22 2 -103 -2 -180 -9z m440 -568 c445 -85 819 -349 1049 -741 123 -209 185 -408 206 -660 13 -171 13 -951 0 -977 -11 -19 -38 -19 -1540 -19 -1502 0 -1529 0 -1540 19 -13 26 -13 791 0 970 20 258 75 434 214 686 58 105 248 325 345 399 145 111 357 236 401 236 9 0 20 4 25 9 22 19 142 53 285 81 119 23 429 21 555 -3z m2097 -2962 c154 -38 309 -160 374 -295 68 -141 64 -15 64 -1867 0 -1847 4 -1722 -62 -1863 -40 -84 -158 -203 -244 -247 -136 -68 75 -63 -2516 -63 -2572 0 -2374 -5 -2507 58 -81 38 -209 168 -249 252 -66 142 -62 19 -62 1865 0 1850 -4 1724 64 1865 40 84 157 203 241 245 135 67 -63 62 2507 64 2065 1 2334 -1 2390 -14z" />
                <path d="M4325 3912 c-85 -30 -115 -46 -183 -100 -46 -36 -107 -114 -136 -172 -27 -55 -56 -179 -56 -240 0 -115 51 -250 134 -355 l31 -39 5 -376 5 -375 28 -47 c34 -57 76 -94 135 -119 65 -28 340 -28 405 0 60 26 108 70 137 128 25 48 25 49 30 418 l5 371 31 39 c83 105 134 240 134 355 0 143 -77 315 -182 404 -149 128 -347 168 -523 108z" />
            </g>
        </ModPasswordIcon>
    )
}

export default withSystemProps(forwardRef(PasswordIcon))
