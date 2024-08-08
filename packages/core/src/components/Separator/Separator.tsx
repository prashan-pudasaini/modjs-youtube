import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'

interface ModSeparatorProps extends React.HTMLAttributes<HTMLElement> {
    ref?: React.Ref<HTMLElement>
}

const ModSeparator = styled.hr<ModSeparatorProps>`
    border: ${props => props.theme.border.dark};
`

const Separator = (
    { ...props }: ModSeparatorProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return <ModSeparator {...props} ref={ref} data-test="separator" />
}

export default withSystemProps(forwardRef(Separator))
