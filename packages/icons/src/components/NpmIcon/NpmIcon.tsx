import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModNpmIcon = styled.svg<IconProps>`
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.lg};
    width: ${props => (props.width ? props.width : props.theme.icons.width.lg)};
`

const NpmIcon = (
    { height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModNpmIcon
            {...props}
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 60"
            height={height}
            width={width}
            data-test="npm-icon"
        >
            <title>Npm Icon</title>
            <metadata>
                Created by Prashan Pudasaini on Thursday, January July 27th,
                2024 @ www.fullstackpro.io
            </metadata>
            <path
                d="M0 0v85.498h71.166V99.83H128V85.498h128V0H0z"
                fill="#CB3837"
            />
            <path
                d="M42.502 14.332h-28.17v56.834h28.17V28.664h14.332v42.502h14.332V14.332H42.502zM85.498 14.332v71.166h28.664V71.166h28.17V14.332H85.498zM128 56.834h-13.838v-28.17H128v28.17zM184.834 14.332h-28.17v56.834h28.17V28.664h14.332v42.502h14.332V28.664h14.332v42.502h14.332V14.332h-57.328z"
                fill="#FFF"
            />
        </ModNpmIcon>
    )
}

export default withSystemProps(forwardRef(NpmIcon))