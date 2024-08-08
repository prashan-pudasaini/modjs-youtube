import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import {
    ModThemeProvider,
    ModLightTheme,
    ModDarkTheme,
} from '@modjs-youtube/utils'
import Form from './Form'
import Layout from '../Layout/Layout'
import Typography from '../Typography/Typography'

describe('<Form>', () => {
    context('Render', () => {
        it('should render default Form component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Form>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Form>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="form"]').should('exist')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Form
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
                        </Form>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="form"]').should('have.attr', 'class')
            cy.get('[data-test="form"]').should('have.attr', 'style')
            cy.get('[data-test="form"]').should('have.attr', 'data-test')
            cy.get('[data-test="form"]').should('not.have.attr', 'm')
            cy.get('[data-test="form"]').should('not.have.attr', 'p')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Form m={32} p={32}>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Form>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="form"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledForm = styled(Form)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledForm>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </StyledForm>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="form"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Form style={{ margin: '32px', padding: '32px' }}>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Form>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="form"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Form className="test">
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Form>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="form"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
})
