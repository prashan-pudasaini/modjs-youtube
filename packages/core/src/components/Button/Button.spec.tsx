import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import {
    ModThemeProvider,
    ModLightTheme,
    ModDarkTheme,
} from '@modjs-youtube/utils'
import { LoginIcon } from '@modjs-youtube/icons'
import Button from './Button'
import Layout from '../Layout/Layout'

describe('<Button>', () => {
    context('Render', () => {
        it('should render Button with default props', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Button>Button with default props</Button>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="button"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(31, 142, 255)')
                .and('have.css', 'color', 'rgb(255, 255, 255)')
                .and('have.css', 'font-size', '12px')
                .and('have.css', 'font-weight', '400')
                .and('have.css', 'text-transform', 'uppercase')
                .and('have.css', 'padding', '10px')
                .and('have.css', 'display', 'flex')
                .and('have.css', 'gap', '4px')
                .and('have.css', 'align-items', 'center')
                .and('have.css', 'justify-content', 'left')
                .and('have.css', 'border-radius', '2px')
                .and('have.css', 'opacity', '1')
                .and('have.css', 'cursor', 'pointer')
        })
        it('should render Button with custom props', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Button
                            variant="outlined"
                            notched={true}
                            disabled={true}
                        >
                            Button with default props
                        </Button>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="button"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and('have.css', 'color', 'rgb(71, 71, 71)')
                .and('have.css', 'font-size', '12px')
                .and('have.css', 'font-weight', '400')
                .and('have.css', 'text-transform', 'uppercase')
                .and('have.css', 'padding', '12px')
                .and('have.css', 'display', 'flex')
                .and('have.css', 'gap', '4px')
                .and('have.css', 'align-items', 'center')
                .and('have.css', 'justify-content', 'center')
                .and('have.css', 'opacity', '0.5')
                .and('have.css', 'cursor', 'not-allowed')
                .then($button => {
                    const beforeEl = window.getComputedStyle(
                        $button[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render filled button without notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Button variant="filled" notched={false}>
                            Filled Button without Notch
                        </Button>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="button"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(31, 142, 255)')
                .and('have.css', 'color', 'rgb(255, 255, 255)')
                .and('have.css', 'font-size', '12px')
                .and('have.css', 'font-weight', '400')
                .and('have.css', 'text-transform', 'uppercase')
                .and('have.css', 'padding', '10px')
                .and('have.css', 'display', 'flex')
                .and('have.css', 'gap', '4px')
                .and('have.css', 'align-items', 'center')
                .and('have.css', 'justify-content', 'left')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render filled button with notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Button variant="filled" notched={true}>
                            Filled Button with Notch
                        </Button>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="button"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(31, 142, 255)')
                .and('have.css', 'color', 'rgb(255, 255, 255)')
                .and('have.css', 'font-size', '12px')
                .and('have.css', 'font-weight', '400')
                .and('have.css', 'text-transform', 'uppercase')
                .and('have.css', 'padding', '10px')
                .and('have.css', 'display', 'flex')
                .and('have.css', 'gap', '4px')
                .and('have.css', 'align-items', 'center')
                .and('have.css', 'justify-content', 'left')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
        })
        it('should render outlined button without notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Button variant="outlined" notched={false}>
                            Outlined Button without Notch
                        </Button>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="button"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and('have.css', 'color', 'rgb(71, 71, 71)')
                .and('have.css', 'font-size', '12px')
                .and('have.css', 'font-weight', '400')
                .and('have.css', 'text-transform', 'uppercase')
                .and('have.css', 'padding', '12px')
                .and('have.css', 'display', 'flex')
                .and('have.css', 'gap', '4px')
                .and('have.css', 'align-items', 'center')
                .and('have.css', 'justify-content', 'center')
        })
        it('should render outlined button with notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Button variant="outlined" notched={true}>
                            Outlined Button with Notch
                        </Button>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="button"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and('have.css', 'color', 'rgb(71, 71, 71)')
                .and('have.css', 'font-size', '12px')
                .and('have.css', 'font-weight', '400')
                .and('have.css', 'text-transform', 'uppercase')
                .and('have.css', 'padding', '12px')
                .and('have.css', 'display', 'flex')
                .and('have.css', 'gap', '4px')
                .and('have.css', 'align-items', 'center')
                .and('have.css', 'justify-content', 'center')
                .then($button => {
                    const beforeEl = window.getComputedStyle(
                        $button[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render transparent button', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Button variant="transparent">
                            Transparent Button
                        </Button>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="button"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and('have.css', 'color', 'rgb(71, 71, 71)')
                .and('have.css', 'font-size', '14px')
                .and('have.css', 'font-weight', '400')
                .and('have.css', 'padding', '0px')
                .and('have.css', 'display', 'flex')
                .and('have.css', 'gap', '4px')
                .and('have.css', 'align-items', 'center')
                .and('have.css', 'justify-content', 'left')
        })
        it('should render icon button', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Button variant="icon">
                            <LoginIcon /> Icon Button
                        </Button>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="button"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and('have.css', 'color', 'rgb(71, 71, 71)')
                .and('have.css', 'font-size', '14px')
                .and('have.css', 'font-weight', '400')
                .and('have.css', 'text-transform', 'none')
                .and('have.css', 'padding', '10px')
                .and('have.css', 'display', 'flex')
                .and('have.css', 'gap', '4px')
                .and('have.css', 'align-items', 'center')
                .and('have.css', 'justify-content', 'left')
                .and('have.css', 'border', '1px solid rgb(194, 194, 194)')
        })
        it('should render inline button', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Button variant="inline">Inline Button</Button>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="button"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and('have.css', 'color', 'rgb(31, 142, 255)')
                .and('have.css', 'font-size', '16px')
                .and('have.css', 'font-weight', '600')
                .and('have.css', 'text-transform', 'none')
                .and('have.css', 'padding', '0px')
                .and('have.css', 'display', 'inline-block')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Button
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                            variant="outlined"
                            notched={true}
                        >
                            Button with custom props
                        </Button>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="button"]').should('have.attr', 'class')
            cy.get('[data-test="button"]').should('have.attr', 'style')
            cy.get('[data-test="button"]').should('have.attr', 'data-test')
            cy.get('[data-test="button"]').should('not.have.attr', 'm')
            cy.get('[data-test="button"]').should('not.have.attr', 'p')
            cy.get('[data-test="button"]').should('not.have.attr', 'variant')
            cy.get('[data-test="button"]').should('not.have.attr', 'notched')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Button p={32} m={32}>
                            Button
                        </Button>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="button"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledButton = styled(Button)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <StyledButton p={32} m={32}>
                            Button
                        </StyledButton>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="button"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Button style={{ margin: '32px', padding: '32px' }}>
                            Button
                        </Button>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="button"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Button className="test">Button</Button>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="button"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })

    context('Behavior and Interactions', () => {
        it('should disable the button when disabled', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Button disabled={true}>Button</Button>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="button"]')
                .should('exist')
                .and('have.css', 'opacity', '0.5')
                .and('have.css', 'cursor', 'not-allowed')
        })
    })
    context('Integration', () => {
        it('should integrate well when displaying multiple buttons', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Button variant="filled" notched={false} mb={8}>
                            Filled Button without Notch
                        </Button>
                        <Button variant="filled" notched={true} mb={8}>
                            Filled Button with Notch
                        </Button>
                        <Button variant="outlined" notched={false} mb={8}>
                            Outlined Button without Notch
                        </Button>
                        <Button variant="outlined" notched={true} mb={8}>
                            Outlined Button with Notch
                        </Button>
                        <Button variant="transparent" mb={8}>
                            Transparent Button
                        </Button>
                        <Button variant="icon" mb={8}>
                            <LoginIcon />
                            Icon Button
                        </Button>
                        <Button variant="inline" mb={8}>
                            Inline Button
                        </Button>
                    </Layout>
                </ModThemeProvider>,
            )
        })
    })
})
