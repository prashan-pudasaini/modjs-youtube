import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'

interface ModFooterProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModFooter = styled.footer<ModFooterProps>`
    background-color: ${props => props.theme.mode};
`

const Footer = (
    { children, ...props }: ModFooterProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModFooter {...props} ref={ref} data-test="footer">
            {children}
        </ModFooter>
    )
}

export default withSystemProps(forwardRef(Footer))
