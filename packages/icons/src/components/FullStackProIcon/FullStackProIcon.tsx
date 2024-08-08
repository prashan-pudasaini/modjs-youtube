import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModFullstackproIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.lg};
    width: ${props => (props.width ? props.width : props.theme.icons.width.lg)};
`

const FullStackProIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModFullstackproIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900.000000 723.000000"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
            data-test="fullstackpro-icon"
        >
            <title>Full Stack Pro Icon</title>
            <metadata>
                Created by Prashan Pudasaini on Thursday, January 4th, 2024 @
                fullstackpro.io
            </metadata>
            <g
                transform="translate(0.000000,723.000000) scale(0.100000,-0.100000)"
                fill={fill}
                stroke="none"
            >
                {' '}
                <path d="M2032 6447 c-8 -9 -9 -292 -3 -957 4 -520 5 -951 3 -957 -3 -10 -115 -13 -496 -15 l-491 -3 -3 -1090 c-1 -600 0 -1101 3 -1114 l6 -24 491 7 c362 5 494 3 504 -5 12 -9 14 -102 14 -534 l0 -522 653 -6 c1009 -11 4190 -8 4207 3 13 8 15 64 15 402 0 305 -3 398 -13 416 -12 22 -18 23 -120 20 l-107 -3 -1 -253 c0 -208 -3 -255 -14 -262 -14 -9 -4340 -2 -4350 7 -9 8 -11 625 -3 683 l8 55 175 0 c96 0 309 -4 473 -9 l297 -9 0 1116 c0 788 -3 1118 -11 1122 -6 4 -218 10 -472 12 -283 4 -467 9 -474 16 -10 7 -13 177 -13 788 0 694 2 779 16 793 14 15 221 16 2167 14 l2152 -3 -2 -217 -1 -218 134 0 134 0 0 358 c0 196 -3 367 -6 380 l-6 22 -2428 0 c-1966 0 -2430 -2 -2438 -13z m214 -1960 c130 -94 133 -95 504 -108 271 -10 344 -19 360 -48 29 -55 40 -853 20 -1481 -12 -359 -13 -376 -41 -390 -11 -7 -135 -15 -287 -20 -309 -11 -417 -22 -460 -47 -40 -23 -113 -74 -131 -91 -18 -17 -48 -6 -93 34 -86 77 -125 84 -605 103 -217 8 -224 9 -256 34 -62 47 -61 32 -64 966 l-3 844 43 42 c25 24 58 45 77 48 18 4 144 7 280 7 193 0 264 4 321 16 75 17 136 52 188 108 37 39 77 35 147 -17z" />{' '}
                <path d="M7656 5043 c-4 -5 -484 -10 -1066 -13 -582 -3 -1061 -7 -1064 -10 -3 -3 -8 -498 -12 -1100 -7 -1050 -6 -1096 11 -1110 16 -13 155 -15 1114 -15 l1096 0 -2 1055 c-1 580 -5 1088 -9 1128 -6 70 -6 72 -33 72 -15 0 -31 -3 -35 -7z m-121 -188 l40 -20 8 -120 c4 -66 6 -464 5 -885 -3 -762 -3 -765 -25 -812 -16 -34 -29 -49 -50 -55 -15 -4 -413 -8 -883 -7 -911 1 -889 0 -929 47 -6 8 -18 70 -26 138 -12 98 -15 282 -15 882 l0 758 52 50 52 50 865 -3 c843 -3 867 -4 906 -23z" />{' '}
            </g>
        </ModFullstackproIcon>
    )
}

export default withSystemProps(forwardRef(FullStackProIcon))
