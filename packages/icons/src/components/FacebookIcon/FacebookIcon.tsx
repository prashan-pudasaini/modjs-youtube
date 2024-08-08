import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModFacebookIcon = styled.svg<IconProps>`
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.sm};
    width: ${props => (props.width ? props.width : props.theme.icons.width.sm)};
    background-color: #316ff6;
    padding: 12px;
    border-radius: 0.125em;
`

const FacebookIcon = (
    { height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModFacebookIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900.000000 900.000000"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
            data-test="facebook-icon"
        >
            <title>Facebook Icon</title>
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
                <path d="M5240 8880 c-136 -19 -259 -44 -360 -74 -30 -9 -68 -21 -85 -26 -153 -45 -364 -156 -519 -273 -155 -117 -363 -349 -419 -467 -4 -8 -16 -28 -26 -45 -32 -50 -99 -192 -126 -266 -68 -192 -99 -317 -130 -531 -12 -88 -15 -229 -15 -798 0 -457 -4 -698 -10 -711 -10 -18 -28 -19 -669 -19 -543 0 -661 -2 -670 -14 -8 -9 -10 -222 -9 -782 l3 -769 675 -5 675 -5 3 -2007 2 -2008 804 0 c724 0 804 2 810 16 3 9 6 913 6 2010 l0 1994 673 2 672 3 2 25 c3 30 30 242 78 603 8 61 21 168 30 237 23 183 44 341 61 460 8 58 15 134 17 170 l2 65 -765 5 -765 5 -3 596 c-2 553 -1 602 17 686 45 218 176 367 371 426 155 46 165 47 689 47 484 0 501 1 511 19 12 23 14 1359 2 1377 -8 14 -228 38 -482 55 -96 6 -341 12 -545 14 -318 3 -389 1 -505 -15z" />{' '}
            </g>
        </ModFacebookIcon>
    )
}

export default withSystemProps(forwardRef(FacebookIcon))
