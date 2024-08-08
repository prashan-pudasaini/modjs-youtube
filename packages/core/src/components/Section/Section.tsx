import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'

interface ModSectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModSection = styled.section<ModSectionProps>`
    margin: 0;
    padding: 0;
    display: block;
`

const Section = (
    { children, ...props }: ModSectionProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModSection {...props} ref={ref} data-test="section">
            {children}
        </ModSection>
    )
}

export default withSystemProps(forwardRef(Section))
