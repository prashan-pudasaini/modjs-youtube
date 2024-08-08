import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'

interface ModNavProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModNav = styled.nav`
    margin: 0;
    padding: 0;
`

const Nav = (
    { children, ...props }: ModNavProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModNav {...props} ref={ref} data-test="nav">
            {children}
        </ModNav>
    )
}

export default withSystemProps(forwardRef(Nav))
