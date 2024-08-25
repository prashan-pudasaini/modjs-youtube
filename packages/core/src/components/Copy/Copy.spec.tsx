import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import {
    ModThemeProvider,
    ModLightTheme,
    ModDarkTheme,
} from '@modjs-youtube/utils'
import Copy from './Copy'
import Layout from '../Layout/Layout'

describe('<Copy>', () => {
    context('Render', () => {
        it('should render default Copy component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Copy></Copy>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Copy"]').should('exist')
            cy.get('[data-testid="default-copy-icon"]').should('exist')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Copy
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                        ></Copy>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Copy"]').should('have.attr', 'class')
            cy.get('[data-test="Copy"]').should('have.attr', 'style')
            cy.get('[data-test="Copy"]').should('have.attr', 'data-test')
            cy.get('[data-test="Copy"]').should('not.have.attr', 'm')
            cy.get('[data-test="Copy"]').should('not.have.attr', 'p')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Copy m={32} p={32}></Copy>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Copy"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledCopy = styled(Copy)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledCopy></StyledCopy>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Copy"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Copy
                            style={{ margin: '32px', padding: '32px' }}
                        ></Copy>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Copy"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Copy className="test"></Copy>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Copy"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
})
