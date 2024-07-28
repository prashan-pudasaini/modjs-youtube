import React from 'react'
import { styled } from 'styled-components'

interface ModLayoutProps {
    children?: React.ReactNode
}

const ModLayout = styled.div`
    background-color: ${props => props.theme.mode};
`
const Layout = ({ children }: ModLayoutProps) => {
    return <ModLayout>{children}</ModLayout>
}

export default Layout
