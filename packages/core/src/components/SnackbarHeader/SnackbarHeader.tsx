import React, { useContext, forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { CloseIcon } from '@modjs-youtube/icons'
import SnackbarContext from '../../context/SnackbarContext/SnackbarContext'
import Button from '../Button/Button'

interface ModSnackbarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModSnackbarHeader = styled.div<ModSnackbarHeaderProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    padding: 4px 8px 4px 8px;
`

const SnackbarHeader = (
    { children, ...props }: ModSnackbarHeaderProps,
    ref?: React.Ref<HTMLElement>,
) => {
    const { closeSnackbar } = useContext(SnackbarContext)
    return (
        <ModSnackbarHeader {...props} ref={ref} data-test="snackbar-header">
            {children}
            <Button variant="transparent" onClick={closeSnackbar}>
                <CloseIcon fill="#ffffff" />
            </Button>
        </ModSnackbarHeader>
    )
}

export default withSystemProps(forwardRef(SnackbarHeader))
