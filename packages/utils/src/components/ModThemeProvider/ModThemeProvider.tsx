import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

interface Theme {}

interface ModThemeProps {
    children?: React.ReactNode
    theme?: Theme
}

const ModThemeProvider = ({ children, theme }: ModThemeProps) => {
    return (
        <StyledThemeProvider theme={theme as Theme}>
            {children}
        </StyledThemeProvider>
    )
}

export default ModThemeProvider
