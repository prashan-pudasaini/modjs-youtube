import React from 'react'
import { styled } from 'styled-components'
import {
    ModThemeProvider,
    ModLightTheme,
    ModDarkTheme,
} from '@modjs-youtube/utils'
import { CopyIcon, SuccessIcon } from '@modjs-youtube/icons'
import '../../../cypress/fixtures/style.css'
import Button from '../Button/Button'
import Tooltip from './Tooltip'
import TooltipContent from '../TooltipContent/TooltipContent'
import Layout from '../Layout/Layout'
import Typography from '../Typography/Typography'

describe('<Tooltip>', () => {
    context('Render', () => {
        it('should render default Tooltip component with arrow', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Tooltip
                            arrow={true}
                            el={
                                <Button variant="icon">
                                    <SuccessIcon />
                                </Button>
                            }
                        >
                            <TooltipContent displayPosition="left">
                                <Typography variant="small" color="white">
                                    Copy to clipboard
                                </Typography>
                            </TooltipContent>
                        </Tooltip>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Tooltip"]').should('exist').click()
            cy.get('[data-testid="Tooltip-arrow"]').should('exist')
        })
        it('should render Tooltip component without arrow', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Tooltip
                            arrow={false}
                            el={
                                <Button variant="icon">
                                    <CopyIcon />
                                </Button>
                            }
                        >
                            <TooltipContent displayPosition="left">
                                <Typography variant="small" color="white">
                                    Copy to clipboard
                                </Typography>
                            </TooltipContent>
                        </Tooltip>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Tooltip"]').should('exist').click()
            cy.get('[data-testid="Tooltip-arrow"]').should('not.exist')
        })
        context('Props', () => {
            it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
                cy.mount(
                    <ModThemeProvider theme={ModDarkTheme}>
                        <Layout p={16}>
                            <Tooltip
                                m={32}
                                p={32}
                                className="test-class"
                                style={{ margin: '32px', padding: '32px' }}
                                data-test="test"
                                el={
                                    <Button variant="icon">
                                        <CopyIcon />
                                    </Button>
                                }
                            >
                                <TooltipContent displayPosition="left">
                                    <Typography variant="small" color="white">
                                        Copy to clipboard
                                    </Typography>
                                </TooltipContent>
                            </Tooltip>
                        </Layout>
                    </ModThemeProvider>,
                )
                cy.get('[data-test="Tooltip"]').should('have.attr', 'class')
                cy.get('[data-test="Tooltip"]').should('have.attr', 'style')
                cy.get('[data-test="Tooltip"]').should('have.attr', 'data-test')
                cy.get('[data-test="Tooltip"]').should('not.have.attr', 'm')
                cy.get('[data-test="Tooltip"]').should('not.have.attr', 'p')
            })
        })
        context('Global and Custom Styles', () => {
            it('should override default styles add new styles with styles from withSystemProps HOC', () => {
                cy.mount(
                    <ModThemeProvider theme={ModDarkTheme}>
                        <Layout p={16}>
                            <Tooltip
                                m={32}
                                p={32}
                                arrow={false}
                                el={
                                    <Button variant="icon">
                                        <CopyIcon />
                                    </Button>
                                }
                            >
                                <TooltipContent displayPosition="left">
                                    <Typography variant="small" color="white">
                                        Copy to clipboard
                                    </Typography>
                                </TooltipContent>
                            </Tooltip>
                        </Layout>
                    </ModThemeProvider>,
                )
                cy.get('[data-test="Tooltip"]')
                    .should('exist')
                    .and('have.css', 'padding', '32px')
                    .and('have.css', 'margin', '32px')
            })
            it('should override as well as add styles when wrapped with styled() from styled components', () => {
                const StyledTooltip = styled(Tooltip)`
                    margin: 32px;
                    padding: 32px;
                `
                cy.mount(
                    <ModThemeProvider theme={ModLightTheme}>
                        <Layout p={16}>
                            <StyledTooltip
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
                            </StyledTooltip>
                        </Layout>
                    </ModThemeProvider>,
                )
                cy.get('[data-test="Tooltip"]')
                    .should('exist')
                    .and('have.css', 'padding', '32px')
                    .and('have.css', 'margin', '32px')
            })
            it('should add inline styles with highest precedence', () => {
                cy.mount(
                    <ModThemeProvider theme={ModLightTheme}>
                        <Layout p={16}>
                            <Tooltip
                                style={{ margin: '32px', padding: '32px' }}
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
                cy.get('[data-test="Tooltip"]')
                    .should('exist')
                    .and('have.css', 'padding', '32px')
                    .and('have.css', 'margin', '32px')
            })
            it('should add custom classNames and override as well as add styles from a separate css file', () => {
                cy.mount(
                    <ModThemeProvider theme={ModLightTheme}>
                        <Layout p={16}>
                            <Tooltip
                                className="test"
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
                cy.get('[data-test="Tooltip"]')
                    .should('exist')
                    .and('have.css', 'padding', '32px')
                    .and('have.css', 'margin', '32px')
            })
        })
    })
})
