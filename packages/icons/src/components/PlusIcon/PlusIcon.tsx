import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModPlusIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.md};
    width: ${props => (props.width ? props.width : props.theme.icons.width.md)};
`

const PlusIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModPlusIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900.000000 900.000000"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
            data-test="plus-icon"
        >
            <g
                transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                fill={fill}
                stroke="none"
            >
                <path
                    d="M1432 2984 c-18 -9 -43 -31 -55 -48 l-22 -31 -3 -627 -2 -628 -616 0
c-681 0 -660 2 -707 -64 -31 -43 -31 -129 0 -172 47 -66 26 -64 707 -64 l616
0 0 -616 c0 -681 -2 -660 64 -707 43 -31 129 -31 172 0 66 47 64 26 64 707 l0
616 616 0 c681 0 660 -2 707 64 31 43 31 129 0 172 -47 66 -26 64 -707 64
l-616 0 0 616 c0 679 2 660 -63 706 -39 28 -112 34 -155 12z"
                />
            </g>
        </ModPlusIcon>
    )
}

export default withSystemProps(forwardRef(PlusIcon))
