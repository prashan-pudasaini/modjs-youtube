import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModLinkedInIcon = styled.svg<IconProps>`
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.sm};
    width: ${props => (props.width ? props.width : props.theme.icons.width.sm)};
    background-color: #0077b5;
    padding: 12px;
    border-radius: 0.125em;
`

const LinkedInIcon = (
    { height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModLinkedInIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900.000000 900.000000"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
            data-test="linkedin-icon"
        >
            <title>LinkedIn Icon</title>
            <metadata>
                Created by Prashan Pudasaini on Thursday, January 4th, 2024 @
                fullstackpro.io
            </metadata>
            <g
                transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
                fill="#ffffff"
                stroke="none"
            >
                {' '}
                <path d="M1575 8070 c-126 -29 -217 -69 -320 -140 -139 -97 -251 -246 -318 -425 -76 -205 -57 -467 49 -675 60 -117 145 -217 254 -299 122 -92 203 -128 359 -161 118 -25 194 -25 312 0 113 24 159 39 236 81 147 79 257 183 340 321 78 130 105 209 124 359 37 297 -95 602 -342 787 -195 147 -461 205 -694 152z" />{' '}
                <path d="M6020 5793 c-462 -78 -847 -311 -1067 -645 -32 -49 -63 -88 -70 -88 -10 0 -13 71 -15 313 l-3 312 -703 5 c-387 3 -708 2 -713 -1 -5 -3 -8 -977 -7 -2400 l3 -2394 740 0 740 0 5 1350 c5 1233 7 1358 23 1440 35 179 49 241 63 273 8 18 14 37 14 43 0 5 14 40 32 77 41 85 126 200 186 252 51 44 178 110 257 135 62 20 241 45 315 45 128 -1 290 -36 375 -83 17 -9 39 -20 50 -25 34 -16 124 -102 158 -151 90 -130 135 -262 172 -506 13 -86 15 -298 15 -1456 0 -1068 3 -1359 13 -1372 11 -16 65 -17 747 -15 l735 3 0 1495 c0 1542 -2 1631 -41 1900 -50 342 -137 612 -267 830 -11 19 -52 76 -89 127 -156 208 -343 339 -638 448 -87 32 -261 70 -410 90 -148 20 -501 19 -620 -2z" />{' '}
                <path d="M1019 5689 c-5 -3 -8 -976 -7 -2400 l3 -2394 740 0 740 0 3 2398 c2 2278 1 2397 -15 2397 -10 0 -341 1 -736 3 -396 1 -723 -1 -728 -4z" />{' '}
            </g>
        </ModLinkedInIcon>
    )
}

export default withSystemProps(forwardRef(LinkedInIcon))
