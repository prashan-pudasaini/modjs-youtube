import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import {
    ModThemeProvider,
    ModLightTheme,
    ModDarkTheme,
} from '@modjs-youtube/utils'
import List from './List'
import Layout from '../Layout/Layout'

describe('<List>', () => {
    context('Render', () => {
        it('should render default List component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <List>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </List>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="list"]')
                .should('exist')
                .and('have.css', 'list-style', 'outside none none')
        })
        it('should render custom List component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <List listStyle="square">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </List>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="list"]')
                .should('exist')
                .and('have.css', 'list-style', 'outside none square')
        })
        it('should render List with style square', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <List listStyle="square">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </List>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="list"]')
                .should('exist')
                .and('have.css', 'list-style', 'outside none square')
        })
        it('should render List with style inside', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <List listStyle="inside">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </List>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="list"]')
                .should('exist')
                .and('have.css', 'list-style', 'inside none disc')
        })
        it('should render List with style none', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <List listStyle="none">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </List>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="list"]')
                .should('exist')
                .and('have.css', 'list-style', 'outside none none')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <List
                            listStyle="inside"
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                            columns={2}
                        >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </List>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="list"]').should('have.attr', 'class')
            cy.get('[data-test="list"]').should('have.attr', 'style')
            cy.get('[data-test="list"]').should('have.attr', 'data-test')
            cy.get('[data-test="list"]').should('not.have.attr', 'm')
            cy.get('[data-test="list"]').should('not.have.attr', 'p')
            cy.get('[data-test="list"]').should('not.have.attr', 'listStyle')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <List m={32} p={32}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </List>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="list"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledList = styled(List)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledList>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </StyledList>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="list"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <List style={{ margin: '32px', padding: '32px' }}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </List>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="list"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <List className="test">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </List>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="list"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
})
