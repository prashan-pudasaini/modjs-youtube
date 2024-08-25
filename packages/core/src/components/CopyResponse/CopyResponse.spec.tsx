import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import {
    ModThemeProvider,
    ModLightTheme,
    ModDarkTheme,
} from '@modjs-youtube/utils'
import Layout from '../Layout/Layout'
import CopyResponse from './CopyResponse'
import Typography from '../Typography/Typography'

describe('<CopyResponse>', () => {
    context('Render', () => {
        it.only('should render default CopyResponse component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <CopyResponse>
                            <Typography variant="body2" color="success">
                                Copied to clipboard
                            </Typography>
                        </CopyResponse>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="copy-response"]').should('exist')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <CopyResponse
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                        >
                            <Typography variant="body2" color="success">
                                Copied to clipboard
                            </Typography>
                        </CopyResponse>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="copy-response"]').should('have.attr', 'class')
            cy.get('[data-test="copy-response"]').should('have.attr', 'style')
            cy.get('[data-test="copy-response"]').should(
                'have.attr',
                'data-test',
            )
            cy.get('[data-test="copy-response"]').should('not.have.attr', 'm')
            cy.get('[data-test="copy-response"]').should('not.have.attr', 'p')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <CopyResponse m={32} p={32}>
                            <Typography variant="body2" color="success">
                                Copied to clipboard
                            </Typography>
                        </CopyResponse>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="copy-response"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledCopyResponse = styled(CopyResponse)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledCopyResponse></StyledCopyResponse>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="copy-response"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <CopyResponse
                            style={{ margin: '32px', padding: '32px' }}
                        >
                            <Typography variant="body2" color="success">
                                Copied to clipboard
                            </Typography>
                        </CopyResponse>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="copy-response"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <CopyResponse className="test">
                            <Typography variant="body2" color="success">
                                Copied to clipboard
                            </Typography>
                        </CopyResponse>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="copy-response"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
})
