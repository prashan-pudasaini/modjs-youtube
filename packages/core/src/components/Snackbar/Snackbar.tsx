import React, { useState, useEffect, forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import SnackbarContext from '../../context/SnackbarContext/SnackbarContext'

interface ModSnackbarProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
    variant?: 'success' | 'error' | 'filled'
    notched?: boolean
    visible?: boolean
    timeout?: number
    displayPosition?: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft'
}

const forwardProps = (prop: string) =>
    ![
        'variant',
        'notched',
        'type',
        'visible',
        'timeout',
        'displayPosition',
    ].includes(prop)

const ModSnackbar = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModSnackbarProps>`
    z-index: 5;
    position: absolute;
    width: fit-content;
    overflow: hidden;
    display: block;
    align-items: center;
    font-family: ${props => props.theme.typography.ff.primary};
    font-size: ${props => props.theme.typography.fs.sm};
    background-color: ${props =>
        props.variant === 'success'
            ? props.theme.color.success
            : props.variant === 'error'
              ? props.theme.color.error
              : props.variant === 'filled'
                ? props.theme.color.light
                : ''};
    ${props =>
        !props.notched &&
        `
                border: ${props.variant === 'success' ? props.theme.border.success : props.variant === 'error' ? props.theme.border.error : props.theme.border.dark};
                border-radius: ${props.theme.borderRadius};
        `};
    ${props =>
        props.notched &&
        `
                clip-path: polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%);
                &:before { 
                    content: '';
                    background: ${props.variant === 'success' ? props.theme.color.success : props.variant === 'error' ? props.theme.color.error : props.theme.color.dark};
                    clip-path: polygon(8px 0%,100% 0%,100% calc(100% - 8px),calc(100% - 8px) 100%,0% 100%,0% 8px,8px 0%,9.9px 0px,1px 8px,1px calc(100% - 1px),calc(100% - 8px) calc(100% - 1px),calc(100% - 1px) calc(100% - 8px),calc(100% - 1px) 1px,7px 1px);
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                };
        `};

    ${props =>
        props.displayPosition === 'topRight' &&
        `
                position: fixed;
                right: ${props.visible ? '12px' : '-100%'};
                top: ${props.visible ? '0' : ''};
                transition: right 0.3s ease-out ;
        `};
    ${props =>
        props.displayPosition === 'topLeft' &&
        `
                position: fixed;
                left: ${props.visible ? '12px' : '-100%'};
                top: ${props.visible ? '0' : ''};
                transition: left 0.3s ease-out ;
        `};
    ${props =>
        props.displayPosition === 'bottomRight' &&
        `
                position: fixed;
                right: ${props.visible ? '12px' : '-100%'};
                transition: right 0.3s ease-out;
                bottom: 0;
                margin-bottom: 12px;
        `};
    ${props =>
        props.displayPosition === 'bottomLeft' &&
        `
                position: fixed;
                left: ${props.visible ? '12px' : '-100%'};
                transition: right 0.3s ease-out;
                bottom: 0;
                margin-bottom: 12px;
        `};
`

const Snackbar = (
    {
        children,
        variant,
        notched,
        timeout,
        visible,
        displayPosition,
        ...props
    }: ModSnackbarProps,
    ref?: React.Ref<HTMLElement>,
) => {
    const [isVisible, setIsVisible] = useState(true)

    const closeSnackbar = () => {
        setIsVisible(!isVisible)
    }
    const value = {
        isVisible,
        closeSnackbar,
    }

    useEffect(() => {
        if (visible) {
            setIsVisible(true)
            const timer = setTimeout(() => {
                setIsVisible(false)
            }, timeout || 5000)
            return () => clearTimeout(timer)
        }
    }, [visible, timeout])

    return (
        <>
            {isVisible && visible === true && (
                <SnackbarContext.Provider value={value}>
                    <ModSnackbar
                        {...props}
                        ref={ref}
                        variant={variant ? variant : 'filled'}
                        notched={notched === true ? true : false}
                        timeout={timeout}
                        visible={visible}
                        displayPosition={
                            displayPosition ? displayPosition : 'topLeft'
                        }
                        data-test="snackbar"
                    >
                        {children}
                    </ModSnackbar>
                </SnackbarContext.Provider>
            )}
        </>
    )
}

export default withSystemProps(forwardRef(Snackbar))
