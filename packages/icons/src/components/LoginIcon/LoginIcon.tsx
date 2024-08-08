import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModLoginIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.sm};
    width: ${props => (props.width ? props.width : props.theme.icons.width.sm)};
`

const LoginIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModLoginIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900.000000 900.000000"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
            data-test="login-icon"
        >
            <g
                transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
                fill={fill}
                stroke="none"
            >
                <path
                    d="M3550 8881 c-47 -10 -105 -25 -130 -34 -25 -9 -64 -23 -86 -31 -99
-36 -245 -132 -339 -223 -135 -131 -205 -239 -273 -418 -71 -186 -67 -116 -67
-1270 l0 -1040 27 -50 c38 -72 69 -111 119 -148 70 -53 117 -67 223 -67 83 0
99 3 153 30 74 37 145 111 181 188 l27 57 2 985 c2 718 6 997 15 1030 27 103
89 181 188 235 l55 30 2130 0 2130 0 53 -28 c75 -39 124 -87 163 -159 l34 -63
0 -3415 0 -3415 -34 -63 c-39 -72 -88 -120 -163 -159 l-53 -28 -2130 0 -2130
0 -52 29 c-101 56 -164 134 -191 236 -9 33 -13 307 -15 1030 -2 946 -3 987
-21 1030 -41 94 -125 178 -214 213 -58 23 -206 23 -264 0 -87 -34 -152 -97
-206 -198 l-27 -50 0 -1040 c0 -977 1 -1045 18 -1115 33 -132 58 -196 130
-331 53 -102 171 -234 287 -323 75 -57 189 -124 236 -139 11 -3 44 -15 74 -27
30 -11 99 -30 153 -40 96 -20 151 -20 2222 -20 2076 0 2126 0 2222 20 123 25
172 40 259 80 233 109 436 312 544 544 40 87 55 136 80 259 20 97 20 151 20
3507 0 3356 0 3410 -20 3507 -25 123 -40 172 -80 259 -128 276 -388 506 -672
593 -175 54 -43 51 -2356 50 -1998 -1 -2143 -2 -2222 -18z"
                />
                <path
                    d="M4764 5941 c-83 -25 -136 -61 -189 -128 -47 -60 -85 -161 -85 -225 0
-50 28 -136 62 -193 17 -27 136 -154 264 -283 129 -129 234 -238 234 -243 0
-5 -980 -10 -2347 -11 -2335 -3 -2348 -3 -2388 -23 -79 -40 -123 -74 -159
-123 -100 -136 -100 -308 0 -444 36 -49 80 -83 159 -123 40 -20 53 -20 2388
-23 1293 -1 2347 -6 2347 -11 0 -5 -112 -121 -249 -258 -217 -219 -252 -258
-280 -316 -27 -58 -31 -78 -31 -149 0 -98 17 -151 74 -227 74 -99 152 -135
291 -136 169 0 129 -32 810 649 542 543 593 596 623 658 29 61 32 77 32 158 0
80 -3 97 -32 157 -29 63 -74 110 -617 653 -369 369 -601 594 -627 607 -57 29
-140 53 -183 52 -20 0 -63 -9 -97 -18z"
                />
            </g>
        </ModLoginIcon>
    )
}

export default withSystemProps(forwardRef(LoginIcon))
