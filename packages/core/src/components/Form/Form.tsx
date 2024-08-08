import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'

interface ModFormProps extends React.HTMLAttributes<HTMLFormElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModForm = styled.form<ModFormProps>`
    margin: 0;
    padding: 0;
`

const Form = (
    { children, ...props }: ModFormProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModForm {...props} ref={ref} data-test="form">
            {children}
        </ModForm>
    )
}

export default withSystemProps(forwardRef(Form))
