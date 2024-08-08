import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import {
    ModThemeProvider,
    ModLightTheme,
    ModDarkTheme,
} from '@modjs-youtube/utils'
import Fieldset from './Fieldset'
import Layout from '../Layout/Layout'
import Typography from '../Typography/Typography'

describe('<Fieldset>', () => {
    context('Render', () => {
        it('should render default Fieldset component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Fieldset>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Fieldset>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="fieldset"]').should('exist')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Fieldset
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                        >
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Fieldset>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="fieldset"]').should('have.attr', 'class')
            cy.get('[data-test="fieldset"]').should('have.attr', 'style')
            cy.get('[data-test="fieldset"]').should('have.attr', 'data-test')
            cy.get('[data-test="fieldset"]').should('not.have.attr', 'm')
            cy.get('[data-test="fieldset"]').should('not.have.attr', 'p')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Fieldset m={32} p={32}>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Fieldset>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="fieldset"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledFieldset = styled(Fieldset)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledFieldset>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </StyledFieldset>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="fieldset"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Fieldset style={{ margin: '32px', padding: '32px' }}>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Fieldset>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="fieldset"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Fieldset className="test">
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Fieldset>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="fieldset"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
})
