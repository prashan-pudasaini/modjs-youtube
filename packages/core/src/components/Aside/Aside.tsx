import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'

interface ModAsideProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModAside = styled.aside<ModAsideProps>``

const Aside = (
    { children, ...props }: ModAsideProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModAside {...props} ref={ref} data-test="aside">
            {children}
        </ModAside>
    )
}

export default withSystemProps(forwardRef(Aside))
