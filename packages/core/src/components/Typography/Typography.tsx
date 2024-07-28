import React from 'react'
import { styled } from 'styled-components'

interface ModTypographyProps {
    children?: React.ReactNode
}

const ModTypography = styled.h1`
    color: blue;
`

const Typography = ({ children }: ModTypographyProps) => {
    return <ModTypography>{children}</ModTypography>
}

export default Typography
