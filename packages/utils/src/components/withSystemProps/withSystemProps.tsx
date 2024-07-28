import React, { forwardRef } from 'react'
import { styled } from 'styled-components'

type LayoutProps = {
    m?: number
    mt?: number
    mr?: number
    mb?: number
    ml?: number
    my?: number
    mx?: number
    p?: number
    pt?: number
    pr?: number
    pb?: number
    pl?: number
    py?: number
    px?: number
    display?: string
    gap?: number
    justifyContent?: string
    alignItems?: string
    flexWrap?: string
    float?: string
    fs?: number
    fw?: number
    textTransform: string
    textAlign?: string
    position?: string
    bottom?: number
    top?: number
    right?: number
    left?: number
    border?: 'primary' | 'success' | 'error' | 'light' | 'dark' | 'none'
    borderTop?: 'primary' | 'success' | 'error' | 'light' | 'dark' | 'none'
    borderRight?: 'primary' | 'success' | 'error' | 'light' | 'dark' | 'none'
    borderBottom?: 'primary' | 'success' | 'error' | 'light' | 'dark' | 'none'
    borderLeft?: 'primary' | 'success' | 'error' | 'light' | 'dark' | 'none'
    borderX?: 'primary' | 'success' | 'error' | 'light' | 'dark' | 'none'
    borderY?: 'primary' | 'success' | 'error' | 'light' | 'dark' | 'none'
    borderRadius?: number
    elevation?: 'light' | 'normal' | 'heavy' | 'none'
    width?: string
    height?: string
    color?:
        | 'primary'
        | 'secondary'
        | 'main'
        | 'success'
        | 'error'
        | 'light'
        | 'dark'
        | 'white'
    bgColor?:
        | 'primary'
        | 'secondary'
        | 'main'
        | 'success'
        | 'error'
        | 'light'
        | 'dark'
        | 'transparent'
}

const forwardProps = (prop: string) =>
    ![
        'm',
        'mt',
        'mr',
        'mb',
        'ml',
        'my',
        'mx',
        'p',
        'pt',
        'pr',
        'pb',
        'pl',
        'px',
        'py',
        'border',
        'borderTop',
        'borderRight',
        'borderBottom',
        'borderLeft',
        'borderX',
        'borderY',
        'borderRadius',
        'display',
        'flexWrap',
        'gap',
        'justifyContent',
        'alignItems',
        'float',
        'elevation',
        'textAlign',
        'fs',
        'fw',
        'textTransform',
        'color',
        'bgColor',
        'position',
        'bottom',
        'top',
        'right',
        'left',
        'width',
        'height',
    ].includes(prop)

const withSystemProps = <P extends object>(
    WrappedComponent: React.ComponentType<P>,
) => {
    const Layout = styled(WrappedComponent).withConfig({
        shouldForwardProp: prop => forwardProps(prop),
    })<LayoutProps>`
         && {
            margin: ${props => props.m && `${props.m}px`};
            margin-top: ${props => props.mt && `${props.mt}px`};
            margin-right: ${props => props.mr && `${props.mr}px`};
            margin-bottom: ${props => props.mb && `${props.mb}px`};
            margin-left: ${props => props.ml && `${props.ml}px`};
            ${props =>
                props.my &&
                `
              margin-top: ${props.my && `${props.my}px`};
              margin-bottom: ${props.my && `${props.my}px`};
            `};
            ${props =>
                props.mx &&
                `
              margin-right: ${props.mx && `${props.mx}px`};
              margin-left: ${props.mx && `${props.mx}px`};
            `};
            padding: ${props => props.p && `${props.p}px`};
            padding-top: ${props => props.pt && `${props.pt}px`};
            padding-right: ${props => props.pr && `${props.pr}px`};
            padding-bottom: ${props => props.pb && `${props.pb}px`};
            padding-left: ${props => props.pl && `${props.pl}px`};
            ${props =>
                props.py &&
                `
              padding-top: ${props.py && `${props.py}px`};
              padding-bottom: ${props.py && `${props.py}px`};
            `};
            ${props =>
                props.px &&
                `
              padding-right: ${props.px && `${props.px}px`};
              padding-left: ${props.px && `${props.px}px`};
            `};
            display: ${props => props.display && `${props.display}`};
            gap: ${props => props.gap && `${props.gap}px`};
            justify-content: ${props =>
                props.justifyContent && `${props.justifyContent}`};
            align-items: ${props => props.alignItems && `${props.alignItems}`};
            flex-wrap: ${props => props.flexWrap && `${props.flexWrap}`};
            float: ${props => props.float && `${props.float}`};
            font-size: ${props => props.fs && `${props.fs}rem`};
            font-weight: ${props => props.fw && `${props.fw}`};
            text-align: ${props => props.textAlign && `${props.textAlign}`};
            text-transform: ${props =>
                props.textTransform && `${props.textTransform}`};
            position: ${props => props.position && `${props.position}`};
            bottom: ${props => props.bottom && `${props.bottom}`};
            top: ${props => props.top && `${props.top}`};
            right: ${props => props.right && `${props.right}`};
            left: ${props => props.left && `${props.left}`};

            border: ${props =>
                props.border === 'primary'
                    ? props.theme.border.primary
                    : props.border === 'success'
                      ? props.theme.border.success
                      : props.border === 'error'
                        ? props.theme.border.error
                        : props.border === 'light'
                          ? props.theme.border.light
                          : props.border === 'dark'
                            ? props.theme.border.dark
                            : props.border === 'none'
                              ? props.theme.border.none
                              : ''};

            border-top: ${props =>
                props.borderTop === 'primary'
                    ? props.theme.border.primary
                    : props.borderTop === 'success'
                      ? props.theme.border.success
                      : props.borderTop === 'error'
                        ? props.theme.border.error
                        : props.borderTop === 'light'
                          ? props.theme.border.light
                          : props.borderTop === 'dark'
                            ? props.theme.border.dark
                            : props.borderTop === 'none'
                              ? props.theme.border.none
                              : ''};
            border-right: ${props =>
                props.borderRight === 'primary'
                    ? props.theme.border.primary
                    : props.borderRight === 'success'
                      ? props.theme.border.success
                      : props.borderRight === 'error'
                        ? props.theme.border.error
                        : props.borderRight === 'light'
                          ? props.theme.border.light
                          : props.borderRight === 'dark'
                            ? props.theme.border.dark
                            : props.borderRight === 'none'
                              ? props.theme.border.none
                              : ''};
            border-bottom: ${props =>
                props.borderBottom === 'primary'
                    ? props.theme.border.primary
                    : props.borderBottom === 'success'
                      ? props.theme.border.success
                      : props.borderBottom === 'error'
                        ? props.theme.border.error
                        : props.borderBottom === 'light'
                          ? props.theme.border.light
                          : props.borderBottom === 'dark'
                            ? props.theme.border.dark
                            : props.borderBottom === 'none'
                              ? props.theme.border.none
                              : ''};
            border-left: ${props =>
                props.borderLeft === 'primary'
                    ? props.theme.border.primary
                    : props.borderLeft === 'success'
                      ? props.theme.border.success
                      : props.borderLeft === 'error'
                        ? props.theme.border.error
                        : props.borderLeft === 'light'
                          ? props.theme.border.light
                          : props.borderLeft === 'dark'
                            ? props.theme.border.dark
                            : props.borderLeft === 'none'
                              ? props.theme.border.none
                              : ''};
            ${props =>
                props.borderX === 'primary' &&
                `
                border-right: ${props.theme.border.primary};
                border-left: ${props.theme.border.primary};
            `};
            ${props =>
                props.borderX === 'success' &&
                `
                border-right: ${props.theme.border.success};
                border-left: ${props.theme.border.success};
            `};
            ${props =>
                props.borderX === 'error' &&
                `
              border-right: ${props.theme.border.error};
              border-left: ${props.theme.border.error};
          `};
            ${props =>
                props.borderX === 'light' &&
                `
                border-right: ${props.theme.border.light};
                border-left: ${props.theme.border.light};
            `};
            ${props =>
                props.borderX === 'dark' &&
                `
                border-right: ${props.theme.border.dark};
                border-left: ${props.theme.border.dark};
            `};
            ${props =>
                props.borderX === 'none' &&
                `
              border-right: ${props.theme.border.none};
              border-left: ${props.theme.border.none};
            `};

            ${props =>
                props.borderY === 'primary' &&
                `
                border-top: ${props.theme.border.primary};
                border-bottom: ${props.theme.border.primary};
            `};
            ${props =>
                props.borderY === 'success' &&
                `
                border-top: ${props.theme.border.success};
                border-bottom: ${props.theme.border.success};
            `};
            ${props =>
                props.borderY === 'error' &&
                `
                border-top: ${props.theme.border.error};
                border-bottom: ${props.theme.border.error};
            `};
            ${props =>
                props.borderY === 'light' &&
                `
                border-top: ${props.theme.border.light};
                border-bottom: ${props.theme.border.light};
            `};
            ${props =>
                props.borderY === 'dark' &&
                `
                border-top: ${props.theme.border.dark};
                border-bottom: ${props.theme.border.dark};
            `};
            ${props =>
                props.borderY === 'none' &&
                `
                border-top: ${props.theme.border.none};
                border-bottom: ${props.theme.border.none};
            `};

            border-radius: ${props =>
                props.borderRadius && `${props.borderRadius}px`};

            filter: ${props =>
                props.elevation === 'light'
                    ? props.theme.elevation.light
                    : props.elevation === 'normal'
                      ? props.theme.elevation.normal
                      : props.elevation === 'heavy'
                        ? props.theme.elevation.heavy
                        : props.elevation === 'none'
                          ? props.theme.elevation.none
                          : ''};

            color: ${props =>
                props.color === 'primary'
                    ? props.theme.typography.color.primary
                    : props.color === 'secondary'
                      ? props.theme.typography.color.secondary
                      : props.color === 'main'
                        ? props.theme.typography.color.main
                        : props.color === 'success'
                          ? props.theme.typography.color.success
                          : props.color === 'error'
                            ? props.theme.typography.color.error
                            : props.color === 'light'
                              ? props.theme.typography.color.light
                              : props.color === 'dark'
                                ? props.theme.typography.color.dark
                                : props.color === 'white'
                                  ? props.theme.typography.color.white
                                  : ''};
            background-color: ${props =>
                props.bgColor === 'primary'
                    ? props.theme.color.primary
                    : props.bgColor === 'secondary'
                      ? props.theme.color.secondary
                      : props.bgColor === 'main'
                        ? props.theme.color.main
                        : props.bgColor === 'success'
                          ? props.theme.color.success
                          : props.bgColor === 'error'
                            ? props.theme.color.error
                            : props.bgColor === 'light'
                              ? props.theme.color.light
                              : props.bgColor === 'dark'
                                ? props.theme.color.dark
                                : props.bgColor === 'transparent'
                                  ? props.theme.color.transparent
                                  : ''};
            width: ${props => props.width && `${props.width}`};
            height: ${props => props.height && `${props.height}`};
        }
    }
`

    // @ts-expect-error: Temporary workaround

    const NewComponent = (props, ref) => {
        return <Layout {...props} ref={ref} />
    }
    return forwardRef(NewComponent)
}

export default withSystemProps
