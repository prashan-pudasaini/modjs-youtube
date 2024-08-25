import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import Box from '../Box/Box'

interface ModPreProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode
    ref?: React.Ref<HTMLElement>
    variant?: 'filled' | 'outlined' | 'transparent'
    notched?: boolean
}

const forwardProps = (prop: string) => !['variant', 'notched'].includes(prop)

const ModPre = styled.pre.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModPreProps>`
    position: relative;
    overflow-x: auto;
    scrollbar-width: thin;
    width: 100%;
    display: block;
    scrollbar-color: ${props => props.theme.scrollbarColor};
    font-family: ${props => props.theme.typography.ff.primary};
    font-size: ${props => props.theme.typography.fs.sm};
    color: ${props => props.theme.color.secondary};

    ${props =>
        props.variant === 'filled' &&
        `
            background-color: ${props.theme.color.light};
            margin: 8px 0px 8px 0px;
    `};
    ${props =>
        props.variant === 'outlined' &&
        `
            background-color: ${props.theme.mode};
            margin: 8px 0px 8px 0px;
    `};
    ${props =>
        props.variant === 'transparent' &&
        `
            background-color: ${props.theme.mode};
            margin: 4px 0px 4px 0px;
    `};
    ${props =>
        ((!props.notched && props.variant === 'filled') ||
            (!props.notched && props.variant === 'outlined')) &&
        `
            border: ${props.theme.border.dark};
            border-radius: ${props.theme.borderRadius};
    `};
    ${props =>
        ((props.notched && props.variant === 'filled') ||
            (props.notched && props.variant === 'outlined')) &&
        `
            clip-path: polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%);
            &:before { 
                content: '';
                background: ${props.theme.color.dark};
                clip-path: polygon(8px 0%,100% 0%,100% calc(100% - 8px),calc(100% - 8px) 100%,0% 100%,0% 8px,8px 0%,9.9px 0px,1px 8px,1px calc(100% - 1px),calc(100% - 8px) calc(100% - 1px),calc(100% - 1px) calc(100% - 8px),calc(100% - 1px) 1px,7px 1px);
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
            };
    `};
`

const Pre = (
    { children, variant, notched, ...props }: ModPreProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModPre
            {...props}
            ref={ref}
            variant={variant ? variant : 'filled'}
            notched={notched === true ? true : false}
            data-test="pre"
        >
            <Box>{children}</Box>
        </ModPre>
    )
}

export default withSystemProps(forwardRef(Pre))
