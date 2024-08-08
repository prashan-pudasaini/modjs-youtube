import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModTypescriptIcon = styled.svg<IconProps>`
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.lg};
    width: ${props => (props.width ? props.width : props.theme.icons.width.lg)};
`

const TypeScriptIcon = (
    { height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModTypescriptIcon
            {...props}
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            height={height}
            width={width}
            data-test="typescript-icon"
        >
            <title>TypeScript Icon</title>
            <metadata>
                Created by Prashan Pudasaini on Thursday, January 7th, 2024 @
                fullstackpro.io
            </metadata>
            <text
                x="50%"
                y="50%"
                fontSize="150"
                fill="#3178C6"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="Helvetica Neue"
            >
                TS
            </text>
        </ModTypescriptIcon>
    )
}

export default withSystemProps(forwardRef(TypeScriptIcon))
