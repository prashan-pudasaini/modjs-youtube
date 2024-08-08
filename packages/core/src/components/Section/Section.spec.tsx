import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import {
    ModThemeProvider,
    ModLightTheme,
    ModDarkTheme,
} from '@modjs-youtube/utils'
import Section from './Section'
import Layout from '../Layout/Layout'
import Typography from '../Typography/Typography'

describe('<Section>', () => {
    context('Render', () => {
        it('should render default Section component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Section>
                            <Typography variant="body1">Lorem Ipsum</Typography>
                        </Section>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="section"]').should('exist')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Section
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                        >
                            <Typography variant="body1">Lorem Ipsum</Typography>
                        </Section>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="section"]').should('have.attr', 'class')
            cy.get('[data-test="section"]').should('have.attr', 'style')
            cy.get('[data-test="section"]').should('have.attr', 'data-test')
            cy.get('[data-test="section"]').should('not.have.attr', 'm')
            cy.get('[data-test="section"]').should('not.have.attr', 'p')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Section m={32} p={32}>
                            <Typography variant="body1">Lorem Ipsum</Typography>
                        </Section>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="section"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledSection = styled(Section)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledSection>
                            <Typography variant="body1">Lorem Ipsum</Typography>
                        </StyledSection>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="section"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Section style={{ margin: '32px', padding: '32px' }}>
                            <Typography variant="body1">Lorem Ipsum</Typography>
                        </Section>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="section"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Section className="test">
                            <Typography variant="body1">Lorem Ipsum</Typography>
                        </Section>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="section"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
})
