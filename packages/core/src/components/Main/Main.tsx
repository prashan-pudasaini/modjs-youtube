import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'

interface ModMainProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModMain = styled.main<ModMainProps>`
    margin: 0;
    padding: 0;
    display: block;
`

const Main = (
    { children, ...props }: ModMainProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModMain {...props} ref={ref} data-test="main">
            {children}
        </ModMain>
    )
}

export default withSystemProps(forwardRef(Main))
