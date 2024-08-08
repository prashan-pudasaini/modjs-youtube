import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'

interface ModArticleProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModArticle = styled.article<ModArticleProps>``

const Article = (
    { children, ...props }: ModArticleProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModArticle {...props} ref={ref} data-test="article">
            {children}
        </ModArticle>
    )
}

export default withSystemProps(forwardRef(Article))
