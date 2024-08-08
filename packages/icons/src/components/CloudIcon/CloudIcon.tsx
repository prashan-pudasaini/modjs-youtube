import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModCloudIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.lg};
    width: ${props => (props.width ? props.width : props.theme.icons.width.lg)};
`

const CloudIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <>
            <ModCloudIcon
                {...props}
                ref={ref}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 350 350"
                height={height}
                width={width}
                data-test="Cloud-icon"
            >
                <title>Cloud Icon</title>
                <metadata>
                    Created by Prashan Pudasaini on Thursday, January 4th, 2024
                    @ fullstackpro.io
                </metadata>
                <g
                    transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                    fill={fill}
                    stroke="none"
                >
                    <path
                        d="M1255 2683 c-73 -26 -137 -67 -175 -110 -44 -50 -89 -149 -97 -211
l-6 -51 -51 -12 c-216 -50 -366 -269 -329 -483 22 -126 99 -244 201 -303 93
-55 144 -63 388 -63 l224 0 0 -84 0 -85 -262 -3 c-249 -3 -265 -4 -304 -25
-53 -28 -107 -91 -122 -142 -7 -21 -12 -75 -12 -120 l0 -81 -90 0 c-85 0 -91
-2 -122 -29 l-33 -29 0 -247 0 -247 33 -29 32 -29 261 0 261 0 34 34 34 34 0
231 c0 157 -4 238 -12 256 -17 38 -58 55 -133 55 l-65 0 0 73 c0 43 5 78 12
85 9 9 153 12 584 12 507 0 574 -2 588 -16 12 -11 16 -35 16 -85 l0 -69 -75 0
c-86 0 -125 -15 -143 -55 -8 -18 -12 -99 -12 -256 l0 -231 34 -34 34 -34 261
0 261 0 32 29 33 29 0 247 0 247 -33 29 c-30 27 -38 29 -111 29 l-79 0 -4 98
c-3 84 -7 104 -31 144 -15 26 -43 59 -62 74 -65 49 -91 53 -357 54 l-248 0 0
85 0 85 244 0 c209 0 253 3 304 18 219 69 326 306 233 517 -22 50 -97 135
-147 165 -30 19 -32 23 -23 53 14 50 11 99 -12 172 -28 91 -114 181 -204 215
-84 31 -197 25 -273 -14 l-53 -27 -55 50 c-68 62 -144 92 -244 98 -55 2 -88
-1 -125 -14z"
                    />
                </g>
            </ModCloudIcon>
        </>
    )
}

export default withSystemProps(forwardRef(CloudIcon))
