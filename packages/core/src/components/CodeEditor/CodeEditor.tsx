import React, { useRef, useEffect, useState } from 'react'
import { styled } from 'styled-components'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import html from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/atom-one-dark.css'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', html)

import { withSystemProps } from '@modjs-youtube/utils'
import { SuccessIcon, SquareIcon, PlayIcon } from '@modjs-youtube/icons'
import Box from '../Box/Box'
import Tooltip from '../Tooltip/Tooltip'
import TooltipContent from '../TooltipContent/TooltipContent'
import Button from '../Button/Button'
import Typography from '../Typography/Typography'
import Copy from '../Copy/Copy'
import CopyResponse from '../CopyResponse/CopyResponse'
import Pre from '../Pre/Pre'

interface ModCodeProps extends React.HTMLAttributes<HTMLElement> {
    children?: string
    className?: string
    contentEditable?: boolean
    type?: 'script' | 'code'
    fileName?: React.ReactNode
    headerContent?: React.ReactNode
    disableExec?: boolean
    variant?: 'filled' | 'outlined' | 'transparent'
    notched?: boolean
}

const forwardProps = (prop: string) =>
    ![
        'highlightedCode',
        'variant',
        'notched',
        'fileName',
        'headerContent',
    ].includes(prop)

const ModCode = styled.code.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModCodeProps>`
    position: relative;
    display: block;
    letter-spacing: 1px;
    padding: 16px;
    border-right: ${props => props.theme.border.dark};
    border-bottom: ${props => props.theme.border.dark};
    border-left: ${props => props.theme.border.dark};
    font-family: ${props => props.theme.typography.ff.primary};
    font-size: ${props => props.theme.typography.fs.sm};
    color: ${props => props.theme.color.secondary};
    background-color: ${props => props.theme.color.transparent};
    ${props =>
        props.contentEditable &&
        `
            outline: none;
        `};
    ${props =>
        props.type === 'code' &&
        `
                height: 40vh;
                overflow-y: auto;
                scrollbar-width: thin;
        scrollbar-color: ${props.theme.scrollbarColor};
        `}
`
const ModCodeHeader = styled.div`
    display: flex;
    alilgn-items: center;
    justify-content: space-between;
    border-bottom: ${props => props.theme.border.dark};
    padding: 8px 8px 8px 0px;
    background-color: ${props => props.theme.mode};
`

const CodeEditor = ({
    children,
    className,
    type,
    contentEditable,
    variant,
    notched,
    fileName,
    headerContent,
    disableExec,
    ...props
}: ModCodeProps) => {
    const codeRef = useRef<HTMLElement>(null)

    const [codeRunning, setCodeRunning] = useState(false)

    const handleCodeRun = () => {
        setCodeRunning(!codeRunning)
    }

    useEffect(() => {
        if (codeRef.current && !codeRef.current.dataset.highlighted) {
            hljs.highlightAll()
        }
    }, [])

    return (
        <Pre variant={variant} notched={notched}>
            <ModCodeHeader>
                <Box pl={8}>{fileName}</Box>
                <Box display="flex" gap={8} alignItems="center">
                    {codeRunning ? (
                        <Tooltip
                            arrow={true}
                            el={
                                <Button
                                    variant="icon"
                                    onClick={handleCodeRun}
                                    data-testid="stop-code-icon"
                                >
                                    <SquareIcon fill="#ca3c1f" />
                                </Button>
                            }
                        >
                            <TooltipContent displayPosition="left">
                                <Typography variant="small" color="white">
                                    Stop Execution
                                </Typography>
                            </TooltipContent>
                        </Tooltip>
                    ) : (
                        <Tooltip
                            arrow={true}
                            el={
                                <Button
                                    variant="icon"
                                    onClick={handleCodeRun}
                                    data-testid="run-code-icon"
                                    disabled={
                                        disableExec === false ? false : true
                                    }
                                >
                                    <PlayIcon fill="#5a6b31" />
                                </Button>
                            }
                        >
                            <TooltipContent displayPosition="left">
                                <Typography variant="small" color="white">
                                    Execute Code
                                </Typography>
                            </TooltipContent>
                        </Tooltip>
                    )}

                    {headerContent}

                    <Copy textNode={codeRef}>
                        <CopyResponse>
                            <Typography variant="body2" color="success">
                                <SuccessIcon fill="#5a6b31" /> Copied to
                                clipboard
                            </Typography>
                        </CopyResponse>
                    </Copy>
                </Box>
            </ModCodeHeader>

            <ModCode
                {...props}
                className={`${className}`}
                type={type ? type : 'code'}
                data-test="code-editor"
                ref={codeRef}
                suppressContentEditableWarning={true}
                // onInput={handleInput}
                contentEditable={contentEditable === true ? true : false}
            >
                {children}
            </ModCode>
        </Pre>
    )
}
export default withSystemProps(CodeEditor)
