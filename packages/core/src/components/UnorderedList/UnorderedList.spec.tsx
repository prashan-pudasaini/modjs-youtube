import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import {
    ModThemeProvider,
    ModLightTheme,
    ModDarkTheme,
} from '@modjs-youtube/utils'
import UnorderedList from './UnorderedList'
import Layout from '../Layout/Layout'

describe('<UnorderedList>', () => {
    context('Render', () => {
        it('should render default UnorderedList component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UnorderedList>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </UnorderedList>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="unordered-list"]')
                .should('exist')
                .and('have.css', 'padding-left', '0px')
        })
        it('should render custom UnorderedList component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UnorderedList indent={true}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </UnorderedList>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="unordered-list"]')
                .should('exist')
                .and('have.css', 'padding-left', '48px')
        })
        it('should render UnorderedList with indent', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <UnorderedList indent={true}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </UnorderedList>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="unordered-list"]')
                .should('exist')
                .and('have.css', 'padding-left', '48px')
        })
        it('should render UnorderedList without indent', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <UnorderedList indent={false}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </UnorderedList>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="unordered-list"]')
                .should('exist')
                .and('have.css', 'padding-left', '0px')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <UnorderedList
                            indent={true}
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                            columns={2}
                        >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </UnorderedList>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="unordered-list"]').should('have.attr', 'class')
            cy.get('[data-test="unordered-list"]').should('have.attr', 'style')
            cy.get('[data-test="unordered-list"]').should(
                'have.attr',
                'data-test',
            )
            cy.get('[data-test="unordered-list"]').should('not.have.attr', 'm')
            cy.get('[data-test="unordered-list"]').should('not.have.attr', 'p')
            cy.get('[data-test="unordered-list"]').should(
                'not.have.attr',
                'indent',
            )
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UnorderedList m={32} p={32}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </UnorderedList>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="unordered-list"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledUnorderedList = styled(UnorderedList)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledUnorderedList>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </StyledUnorderedList>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="unordered-list"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UnorderedList
                            style={{ margin: '32px', padding: '32px' }}
                        >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </UnorderedList>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="unordered-list"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UnorderedList className="test">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </UnorderedList>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="unordered-list"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
})
