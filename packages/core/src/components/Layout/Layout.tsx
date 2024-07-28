import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'

interface ModLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModLayout = styled.div<ModLayoutProps>`
    background-color: ${props => props.theme.mode};
`
const Layout = (
    { children, ...props }: ModLayoutProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModLayout {...props} ref={ref} data-test="layout">
            {children}
        </ModLayout>
    )
}

export default withSystemProps(forwardRef(Layout))
