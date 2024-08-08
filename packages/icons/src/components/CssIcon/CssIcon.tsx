import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModCssIcon = styled.svg<IconProps>`
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.lg};
    width: ${props => (props.width ? props.width : props.theme.icons.width.lg)};
`

const CssIcon = (
    { height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModCssIcon
            {...props}
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-5 -30 130 170"
            height={height}
            width={width}
            data-test="css-icon"
        >
            <title>Css Icon</title>
            <metadata>
                Created by Prashan Pudasaini on Thursday, January July 27th,
                2024 @ www.fullstackpro.io
            </metadata>
            <path
                d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z"
                fill="#1b73ba"
            />
            <path
                d="M62.468 129.275V12.085l51.064.17-9.106 104.85z"
                fill="#1c88c7"
            />
            <path
                d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
                fill="#fff"
            />
        </ModCssIcon>
    )
}

export default withSystemProps(forwardRef(CssIcon))
