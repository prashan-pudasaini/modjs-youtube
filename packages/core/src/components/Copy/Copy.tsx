import React, { useState, useRef, forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import Button from '../Button/Button'
import Tooltip from '../Tooltip/Tooltip'
import TooltipContent from '../TooltipContent/TooltipContent'
import Typography from '../Typography/Typography'
import { CopyIcon } from '@modjs-youtube/icons'
import CopyContext from '../../context/CopyContext/CopyContext'

interface ModCopyProps {
    children?: React.ReactNode
    ref?: React.Ref<HTMLElement>
    textNode?: React.RefObject<HTMLElement> | null
}

const forwardProps = (prop: string) => !['textNode'].includes(prop)

const ToggleCopyWrapper = styled.div`
    width: fit-content;
`

const ModCopy = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModCopyProps>`
    padding-right: 4px;
`

const Copy = (
    { children, textNode, ...props }: ModCopyProps,
    ref?: React.Ref<HTMLElement>,
) => {
    const [isOpen, setIsOpen] = useState(false)
    const reference = useRef<HTMLElement>(null)
    const [copied, setCopied] = useState(false)

    const handleCopyToClipboard = async () => {
        if (textNode && textNode.current) {
            const text = textNode.current.textContent || ''
            try {
                await navigator.clipboard.writeText(text)
                setCopied(true)
                setTimeout(() => {
                    setCopied(false)
                }, 1000)
            } catch (error) {
                setCopied(!copied)
            }
        }
        setIsOpen(true)
    }

    const value = { isOpen, reference }
    return (
        <CopyContext.Provider value={value}>
            <ModCopy {...props} ref={ref} textNode={reference} data-test="Copy">
                {!copied && (
                    <ToggleCopyWrapper
                        onClick={handleCopyToClipboard}
                        data-testid="default-copy-icon"
                    >
                        <Tooltip
                            arrow={true}
                            el={
                                <Button variant="icon">
                                    <CopyIcon />
                                </Button>
                            }
                        >
                            <TooltipContent displayPosition="right">
                                <Typography variant="small" color="white">
                                    Copy to clipboard
                                </Typography>
                            </TooltipContent>
                        </Tooltip>
                    </ToggleCopyWrapper>
                )}
                {copied && children}
            </ModCopy>
        </CopyContext.Provider>
    )
}

export default withSystemProps(forwardRef(Copy))
