import React from 'react'
import { styled } from 'styled-components'
import {
    ModThemeProvider,
    ModLightTheme,
    ModDarkTheme,
} from '@modjs-youtube/utils'
import { CopyIcon } from '@modjs-youtube/icons'
import '../../../cypress/fixtures/style.css'
import Button from '../Button/Button'
import Tooltip from '../Tooltip/Tooltip'
import TooltipContent from './TooltipContent'
import Layout from '../Layout/Layout'
import Typography from '../Typography/Typography'

describe('<TooltipContent>', () => {
    context('Render', () => {
        it('should render default TooltipContent component on the left', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Tooltip
                            arrow={true}
                            el={
                                <Button variant="icon">
                                    <CopyIcon />
                                </Button>
                            }
                        >
                            <TooltipContent>
                                <Typography variant="small" color="white">
                                    Copy to clipboard
                                </Typography>
                            </TooltipContent>
                        </Tooltip>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Tooltip"]').should('exist').click()
            cy.get('[data-test="Tooltip-content"]')
                .should('exist')
                .and('have.css', 'right', '108.148px')
        })
        it('should render Tooltip component on the right', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Tooltip
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
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Tooltip"]').should('exist').click()
            cy.get('[data-test="Tooltip-content"]')
                .should('exist')
                .and('have.css', 'left', '108.148px')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Tooltip
                            el={
                                <Button variant="icon">
                                    <CopyIcon />
                                </Button>
                            }
                        >
                            <TooltipContent
                                m={32}
                                p={32}
                                className="test-class"
                                style={{ margin: '32px', padding: '32px' }}
                                data-test="test"
                            >
                                <Typography variant="small" color="white">
                                    Copy to clipboard
                                </Typography>
                            </TooltipContent>
                        </Tooltip>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Tooltip-content"]').should('have.attr', 'class')
            cy.get('[data-test="Tooltip-content"]').should('have.attr', 'style')
            cy.get('[data-test="Tooltip-content"]').should(
                'have.attr',
                'data-test',
            )
            cy.get('[data-test="Tooltip-content"]').should('not.have.attr', 'm')
            cy.get('[data-test="Tooltip-content"]').should('not.have.attr', 'p')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Tooltip
                            el={
                                <Button variant="icon">
                                    <CopyIcon />
                                </Button>
                            }
                        >
                            <TooltipContent m={32} p={32}>
                                <Typography variant="small" color="white">
                                    Copy to clipboard
                                </Typography>
                            </TooltipContent>
                        </Tooltip>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Tooltip-content"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledTooltipContent = styled(TooltipContent)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Tooltip
                            el={
                                <Button variant="icon">
                                    <CopyIcon />
                                </Button>
                            }
                        >
                            <StyledTooltipContent>
                                <Typography variant="small" color="white">
                                    Copy to clipboard
                                </Typography>
                            </StyledTooltipContent>
                        </Tooltip>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Tooltip-content"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Tooltip>
                            <TooltipContent
                                style={{ margin: '32px', padding: '32px' }}
                            >
                                <Typography variant="small" color="white">
                                    Copy to clipboard
                                </Typography>
                            </TooltipContent>
                        </Tooltip>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Tooltip-content"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Tooltip
                            el={
                                <Button variant="icon">
                                    <CopyIcon />
                                </Button>
                            }
                        >
                            <TooltipContent className="test">
                                <Typography variant="small" color="white">
                                    Copy to clipboard
                                </Typography>
                            </TooltipContent>
                        </Tooltip>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Tooltip-content"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
})
