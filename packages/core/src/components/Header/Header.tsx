import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'

interface ModHeaderProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModHeader = styled.header<ModHeaderProps>`
    margin: 0;
    padding: 0;
`

const Header = (
    { children, ...props }: ModHeaderProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModHeader {...props} ref={ref} data-test="header">
            {children}
        </ModHeader>
    )
}

export default withSystemProps(forwardRef(Header))
