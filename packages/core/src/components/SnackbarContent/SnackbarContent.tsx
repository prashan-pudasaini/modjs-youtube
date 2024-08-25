import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'

interface ModSnackbarContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModSnackbarContent = styled.div<ModSnackbarContentProps>`
    padding: 4px 8px 4px 8px;
    background-color: ${props => props.theme.mode};
`

const SnackbarContent = (
    { children, ...props }: ModSnackbarContentProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModSnackbarContent {...props} ref={ref} data-test="snackbar-content">
            {children}
        </ModSnackbarContent>
    )
}

export default withSystemProps(forwardRef(SnackbarContent))
