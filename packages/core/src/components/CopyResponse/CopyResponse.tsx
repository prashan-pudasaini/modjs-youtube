import React, { useContext, forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import Box from '../Box/Box'
import CopyContext from '../../context/CopyContext/CopyContext'

interface ModCopyResponseProps {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
    isOpen?: boolean
}

const forwardProps = (prop: string) => !['isOpen'].includes(prop)

const ModCopyResponse = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModCopyResponseProps>`
    width: fit-content;
    height: fit-content;
    background-color: ${props => props.theme.mode};
    border: ${props => props.isOpen && `1px solid ${props.theme.color.dark}`};
    border-radius: ${props => props.isOpen && props.theme.borderRadius};
`

const CopyResponse = (
    { children, ...props }: ModCopyResponseProps,
    ref?: React.Ref<HTMLElement>,
) => {
    const { isOpen } = useContext(CopyContext)
    return (
        <ModCopyResponse
            {...props}
            ref={ref}
            isOpen={isOpen}
            data-test="copy-response"
        >
            {isOpen && <Box px={8}>{children}</Box>}
        </ModCopyResponse>
    )
}

export default withSystemProps(forwardRef(CopyResponse))
