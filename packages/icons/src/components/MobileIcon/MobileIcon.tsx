import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModMobileIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.lg};
    width: ${props => (props.width ? props.width : props.theme.icons.width.lg)};
`

const MobileIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModMobileIcon
            {...props}
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 1200"
            height={height}
            width={width}
            data-test="mobile-icon"
        >
            <g
                transform="translate(100, 1070) scale(0.100000,-0.100000)"
                fill={fill}
                stroke="none"
            >
                <path
                    d="M2365 8991 c7 -12 -26 -31 -55 -31 -12 0 -51 -16 -87 -35 -174 -93
-260 -197 -327 -400 -15 -46 -16 -364 -16 -4035 0 -3671 1 -3989 16 -4035 66
-200 152 -306 319 -396 33 -18 78 -37 100 -43 56 -14 4294 -14 4350 0 22 6 67
25 100 43 167 90 253 196 319 396 15 46 16 364 16 4035 0 3671 -1 3989 -16
4035 -50 151 -118 257 -209 326 -66 49 -178 109 -205 109 -29 0 -62 19 -55 31
4 5 -782 9 -2125 9 -1343 0 -2129 -4 -2125 -9z m2790 -445 c60 -26 71 -72 26
-117 l-29 -29 -662 0 -662 0 -29 29 c-44 45 -34 91 24 116 48 21 1282 22 1332
1z m1523 -3974 l2 -3452 -26 -10 c-35 -14 -4293 -14 -4328 0 l-26 10 0 3448
c0 1897 3 3452 7 3455 3 4 988 6 2187 5 l2181 -3 3 -3453z m-2053 -3702 c55
-28 112 -86 141 -143 32 -64 34 -186 4 -251 -24 -53 -123 -146 -176 -165 -50
-18 -158 -18 -208 0 -53 19 -152 112 -176 165 -29 62 -28 188 2 246 42 84 120
149 203 169 51 13 167 1 210 -21z"
                />
            </g>
        </ModMobileIcon>
    )
}

export default withSystemProps(forwardRef(MobileIcon))
