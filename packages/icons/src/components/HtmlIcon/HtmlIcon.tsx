import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModHtmlIcon = styled.svg<IconProps>`
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.lg};
    width: ${props => (props.width ? props.width : props.theme.icons.width.lg)};
`

const HtmlIcon = (
    { height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModHtmlIcon
            {...props}
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-5 -30 130 170"
            height={height}
            width={width}
            data-test="html-icon"
        >
            <title>Html Icon</title>
            <metadata>
                Created by Prashan Pudasaini on Thursday, January July 27th,
                2024 @ www.fullstackpro.io
            </metadata>
            <path
                d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
                fill="#e34f26"
            />
            <path
                d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
                fill="#ef652a"
            />
            <path
                d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
                fill="#fff"
            />
        </ModHtmlIcon>
    )
}

export default withSystemProps(forwardRef(HtmlIcon))
