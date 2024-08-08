import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'

interface ModFieldSetProps extends React.HTMLAttributes<HTMLFieldSetElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModFieldset = styled.fieldset<ModFieldSetProps>`
    border: none;
    padding: 0;
`

const Fieldset = (
    { children, ...props }: ModFieldSetProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModFieldset {...props} ref={ref} data-test="fieldset">
            {children}
        </ModFieldset>
    )
}

export default withSystemProps(forwardRef(Fieldset))
