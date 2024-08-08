import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'

interface ModBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModBox = styled.div<ModBoxProps>``

const Box = (
    { children, ...props }: ModBoxProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModBox {...props} ref={ref} data-test="box">
            {children}
        </ModBox>
    )
}

export default withSystemProps(forwardRef(Box))
