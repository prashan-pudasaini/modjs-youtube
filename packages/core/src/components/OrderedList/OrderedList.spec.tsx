import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import {
    ModThemeProvider,
    ModLightTheme,
    ModDarkTheme,
} from '@modjs-youtube/utils'
import OrderedList from './OrderedList'
import Layout from '../Layout/Layout'

describe('<OrderedList>', () => {
    context('Render', () => {
        it('should render default OrderedList component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <OrderedList>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </OrderedList>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="ordered-list"]')
                .should('exist')
                .and('have.css', 'padding-left', '0px')
        })
        it('should render custom OrderedList component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <OrderedList indent={true}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </OrderedList>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="ordered-list"]')
                .should('exist')
                .and('have.css', 'padding-left', '48px')
        })
        it('should render OrderedList with indent', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <OrderedList indent={true}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </OrderedList>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="ordered-list"]')
                .should('exist')
                .and('have.css', 'padding-left', '48px')
        })
        it('should render OrderedList without indent', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <OrderedList indent={false}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </OrderedList>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="ordered-list"]')
                .should('exist')
                .and('have.css', 'padding-left', '0px')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <OrderedList
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
                        </OrderedList>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="ordered-list"]').should('have.attr', 'class')
            cy.get('[data-test="ordered-list"]').should('have.attr', 'style')
            cy.get('[data-test="ordered-list"]').should(
                'have.attr',
                'data-test',
            )
            cy.get('[data-test="ordered-list"]').should('not.have.attr', 'm')
            cy.get('[data-test="ordered-list"]').should('not.have.attr', 'p')
            cy.get('[data-test="ordered-list"]').should(
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
                        <OrderedList m={32} p={32}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </OrderedList>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="ordered-list"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledOrderedList = styled(OrderedList)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledOrderedList>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </StyledOrderedList>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="ordered-list"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <OrderedList
                            style={{ margin: '32px', padding: '32px' }}
                        >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </OrderedList>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="ordered-list"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <OrderedList className="test">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </OrderedList>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="ordered-list"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
})
