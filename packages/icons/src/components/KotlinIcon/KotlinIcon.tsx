import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModKotlinIcon = styled.svg<IconProps>`
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.lg};
    width: ${props => (props.width ? props.width : props.theme.icons.width.lg)};
`

const KotlinIcon = (
    { height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModKotlinIcon
            {...props}
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-600 -500 3700 3700"
            height={height}
            width={width}
            data-test="kotlin-icon"
        >
            <title>Kotlin Icon</title>
            <metadata>
                Created by Prashan Pudasaini on Thursday, January 4th, 2024 @
                fullstackpro.io
            </metadata>
            <radialGradient
                id="a"
                cx="2329.27"
                cy="2305.82"
                gradientTransform="matrix(1.09 0 0 -1.09 -110.8 2605.56)"
                gradientUnits="userSpaceOnUse"
                r="2638.25"
            >
                <stop offset="0" stopColor="#e44857" />
                <stop offset=".47" stopColor="#c711e1" />
                <stop offset="1" stopColor="#7f52ff" />
            </radialGradient>
            <path
                d="M2501.34 2500H0V0h2501.34L1224.87 1231.44z"
                fill="url(#a)"
            />
        </ModKotlinIcon>
    )
}

export default withSystemProps(forwardRef(KotlinIcon))
