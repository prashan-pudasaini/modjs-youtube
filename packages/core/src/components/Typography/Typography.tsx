import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'

interface ModTypographyProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
    variant?:
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'body1'
        | 'body2'
        | 'small'
        | 'b'
        | 'strong'
        | 'i'
        | 'em'
        | 'mark'
        | 'del'
        | 'ins'
        | 'sub'
        | 'sup'
}

const ModTypographyH1 = styled.h1<ModTypographyProps>`
    font-family: ${props => props.theme.typography.ff.primary};
    font-weight: ${props => props.theme.typography.fw.bold};
    font-size: ${props => props.theme.typography.fs.xl};
    color: ${props => props.theme.typography.color.primary};
    padding: 16px 0px 16px 0px;
    margin: 0px;
`
const ModTypographyH2 = styled.h2<ModTypographyProps>`
    font-family: ${props => props.theme.typography.ff.primary};
    font-weight: ${props => props.theme.typography.fw.bold};
    font-size: ${props => props.theme.typography.fs.lg};
    color: ${props => props.theme.typography.color.primary};
    padding: 16px 0px 16px 0px;
    margin: 0px;
`
const ModTypographyH3 = styled.h3<ModTypographyProps>`
    font-family: ${props => props.theme.typography.ff.primary};
    font-weight: ${props => props.theme.typography.fw.semibold};
    font-size: ${props => props.theme.typography.fs.md};
    color: ${props => props.theme.typography.color.primary};
    padding: 8px 0px 8px 0px;
    margin: 0px;
`
const ModTypographyH4 = styled.h4<ModTypographyProps>`
    font-family: ${props => props.theme.typography.ff.primary};
    font-weight: ${props => props.theme.typography.fw.semibold};
    font-size: ${props => props.theme.typography.fs.md};
    color: ${props => props.theme.typography.color.primary};
    padding: 8px 0px 8px 0px;
    margin: 0px;
`
const ModTypographyH5 = styled.h5<ModTypographyProps>`
    font-family: ${props => props.theme.typography.ff.primary};
    font-weight: ${props => props.theme.typography.fw.semibold};
    font-size: ${props => props.theme.typography.fs.md};
    color: ${props => props.theme.typography.color.primary};
    padding: 8px 0px 8px 0px;
    margin: 0px;
`
const ModTypographyH6 = styled.h6<ModTypographyProps>`
    font-family: ${props => props.theme.typography.ff.primary};
    font-weight: ${props => props.theme.typography.fw.semibold};
    font-size: ${props => props.theme.typography.fs.md};
    color: ${props => props.theme.typography.color.primary};
    padding: 8px 0px 8px 0px;
    margin: 0px;
`
const ModTypographyBody1 = styled.p<ModTypographyProps>`
    font-family: ${props => props.theme.typography.ff.primary};
    font-weight: ${props => props.theme.typography.fw.medium};
    font-size: ${props => props.theme.typography.fs.md};
    color: ${props => props.theme.typography.color.main};
`

const ModTypographyBody2 = styled.p<ModTypographyProps>`
    font-family: ${props => props.theme.typography.ff.primary};
    font-weight: ${props => props.theme.typography.fw.medium};
    font-size: ${props => props.theme.typography.fs.sm};
    color: ${props => props.theme.typography.color.light};
    padding: 8px 0px 8px 0px;
    margin: 0px;
`

const ModTypographySmall = styled.small<ModTypographyProps>`
    font-family: ${props => props.theme.typography.ff.primary};
    font-weight: ${props => props.theme.typography.fw.medium};
    font-size: ${props => props.theme.typography.fs.xsm};
    color: ${props => props.theme.typography.color.light};
    padding-top: 8px;
    padding-bottom: 8px;
    margin-top: 0px;
    margin-bottom: 0px;
`
const ModTypographyBold = styled.b<ModTypographyProps>`
    font-family: ${props => props.theme.typography.ff.primary};
    font-weight: ${props => props.theme.typography.fw.bold};
    font-size: ${props => props.theme.typography.fs.md};
    color: ${props => props.theme.typography.color.main};
`
const ModTypographyStrong = styled.strong<ModTypographyProps>`
    font-family: ${props => props.theme.typography.ff.primary};
    font-weight: ${props => props.theme.typography.fw.bold};
    font-size: ${props => props.theme.typography.fs.md};
    color: ${props => props.theme.typography.color.main};
`
const ModTypographyItalic = styled.i<ModTypographyProps>`
    font-family: ${props => props.theme.typography.ff.primary};
    font-weight: ${props => props.theme.typography.fw.medium};
    font-size: ${props => props.theme.typography.fs.md};
    color: ${props => props.theme.typography.color.main};
`
const ModTypographyEmphasis = styled.em<ModTypographyProps>`
    font-family: ${props => props.theme.typography.ff.primary};
    font-weight: ${props => props.theme.typography.fw.medium};
    font-size: ${props => props.theme.typography.fs.md};
    color: ${props => props.theme.typography.color.main};
`
const ModTypographyMark = styled.mark<ModTypographyProps>`
    font-family: ${props => props.theme.typography.ff.primary};
    font-weight: ${props => props.theme.typography.fw.medium};
    font-size: ${props => props.theme.typography.fs.md};
    color: ${props => props.theme.typography.color.main};
`
const ModTypographyDelete = styled.del<ModTypographyProps>`
    font-family: ${props => props.theme.typography.ff.primary};
    font-weight: ${props => props.theme.typography.fw.medium};
    font-size: ${props => props.theme.typography.fs.md};
    color: ${props => props.theme.typography.color.main};
`
const ModTypographyInsert = styled.ins<ModTypographyProps>`
    font-family: ${props => props.theme.typography.ff.primary};
    font-weight: ${props => props.theme.typography.fw.medium};
    font-size: ${props => props.theme.typography.fs.md};
    color: ${props => props.theme.typography.color.main};
`
const ModTypographySubscript = styled.sub<ModTypographyProps>`
    font-family: ${props => props.theme.typography.ff.primary};
    font-weight: ${props => props.theme.typography.fw.medium};
    font-size: ${props => props.theme.typography.fs.md};
    color: ${props => props.theme.typography.color.main};
`
const ModTypographySuperscript = styled.sup<ModTypographyProps>`
    font-family: ${props => props.theme.typography.ff.primary};
    font-weight: ${props => props.theme.typography.fw.medium};
    font-size: ${props => props.theme.typography.fs.md};
    color: ${props => props.theme.typography.color.main};
`

const getTypographyComponent = (variant?: ModTypographyProps['variant']) => {
    switch (variant) {
        case 'h1':
            return ModTypographyH1
        case 'h2':
            return ModTypographyH2
        case 'h3':
            return ModTypographyH3
        case 'h4':
            return ModTypographyH4
        case 'h5':
            return ModTypographyH5
        case 'h6':
            return ModTypographyH6
        case 'body1':
            return ModTypographyBody1
        case 'body2':
            return ModTypographyBody2
        case 'small':
            return ModTypographySmall
        case 'b':
            return ModTypographyBold
        case 'strong':
            return ModTypographyStrong
        case 'i':
            return ModTypographyItalic
        case 'em':
            return ModTypographyEmphasis
        case 'mark':
            return ModTypographyMark
        case 'del':
            return ModTypographyDelete
        case 'ins':
            return ModTypographyInsert
        case 'sub':
            return ModTypographySubscript
        case 'sup':
            return ModTypographySuperscript
        default:
            return ModTypographyBody1
    }
}

const Typography = (
    { children, variant, ...props }: ModTypographyProps,
    ref?: React.Ref<HTMLElement>,
) => {
    const TypographyComponent = getTypographyComponent(
        variant,
    ) as React.ComponentType<ModTypographyProps>
    return (
        <TypographyComponent {...props} ref={ref} data-test="typography">
            {children}
        </TypographyComponent>
    )
}

export default withSystemProps(forwardRef(Typography))
