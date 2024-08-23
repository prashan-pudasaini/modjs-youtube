import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    disabled?: boolean
}

interface ModButtonProps extends ButtonProps {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
    startAdornment?: React.ReactNode
    endAdornment?: React.ReactNode
    variant?: 'filled' | 'outlined' | 'transparent' | 'icon' | 'inline'
    notched?: boolean
}

const forwardProps = (prop: string) => !['variant', 'notched'].includes(prop)

const ModButton = styled.button.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModButtonProps>`
    width: fit-content;
    max-width: fit-content;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    border: none;
    font-family: ${props => props.theme.typography.ff.primary};
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${props => (props.disabled === true ? '0.5' : '1')};
    ${props =>
        props.variant === 'filled' &&
        `
        text-transform: uppercase;
        padding: 10px;
        display: flex;
        gap: 4px;
        align-items: center;
        justify-content: left;
        border-radius: ${props.theme.borderRadius};
        background-color: ${props.theme.color.primary};
        color: ${props.theme.typography.color.white};
        font-size: ${props.theme.typography.fs.xsm};
        font-weight: ${props.theme.typography.fw.medium};

    `}
    ${props =>
        props.variant === 'outlined' &&
        `
        padding: 12px;
        display: flex;
        gap: 4px;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        background-color: ${props.theme.color.transparent};
        color: ${props.theme.typography.color.primary};
        font-weight: ${props.theme.typography.fw.medium};
        font-size: ${props.theme.typography.fs.xsm};
  
    `}
    ${props =>
        props.variant === 'transparent' &&
        `
        padding: 0px;
        display: flex;
        gap: 4px;
        align-items: center;
        justify-content: left;
        background-color: ${props.theme.color.transparent};
        color: ${props.theme.typography.color.primary};
        font-weight: ${props.theme.typography.fw.medium};
        font-size: ${props.theme.typography.fs.sm};

    `}
    ${props =>
        props.variant === 'icon' &&
        `
            text-transform: none;
            padding: 10px;
            border-radius: ${props.theme.borderRadius};
            display: flex;
            gap: 4px;
            align-items: center;
            justify-content: left;
            background-color: ${props.theme.color.transparent};
            border: 1px solid ${props.theme.color.dark};
            color: ${props.theme.typography.color.primary};
            font-weight: ${props.theme.typography.fw.medium};
            font-size: ${props.theme.typography.fs.sm};
    `}
    ${props =>
        props.variant === 'inline' &&
        `
        padding: 0px;
        display: inline-block;
        text-transform: none;
        background-color: ${props.theme.color.transparent};
        color: ${props.theme.color.primary};
        font-weight: ${props.theme.typography.fw.semibold};
        font-size: ${props.theme.typography.fs.md};
    `}

    ${props =>
        props.variant === 'filled' &&
        props.notched &&
        `
        border-radius: 0px;
        clip-path: polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%);
    `}

    ${props =>
        props.variant === 'outlined' &&
        !props.notched &&
        `
        border-radius: ${props.theme.borderRadius};
        border: 1px solid ${props.theme.color.primary};
    `};
    ${props =>
        props.variant === 'outlined' &&
        props.notched &&
        `
        &::before {
        content: '';
        background-color: ${props.theme.color.primary};
        clip-path: polygon(8px 0%,100% 0%,100% calc(100% - 8px),calc(100% - 8px) 100%,0% 100%,0% 8px,8px 0%,9.9px 0px,1px 8px,1px calc(100% - 1px),calc(100% - 8px) calc(100% - 1px),calc(100% - 1px) calc(100% - 8px),calc(100% - 1px) 1px,7px 1px);
        position: absolute;
        top: none;
        left: none;
        width: 100%;
        height: 100%;
        }
  `};
    &:hover {
        opacity: ${props =>
            props.disabled === false
                ? props.theme.opacity.medium
                : props.theme.opacity.low};
    }
`

const Button = (
    {
        disabled,
        children,
        startAdornment,
        endAdornment,
        variant,
        notched,
        ...props
    }: ModButtonProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModButton
            disabled={disabled}
            variant={variant ? variant : 'filled'}
            notched={notched === true ? true : false}
            {...props}
            ref={ref}
            data-test="button"
        >
            {startAdornment}
            {children}
            {endAdornment}
        </ModButton>
    )
}

export default withSystemProps(forwardRef(Button))
