import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import {
    ModThemeProvider,
    ModLightTheme,
    ModDarkTheme,
} from '@modjs-youtube/utils'
import Typography from '../Typography/Typography'
import Layout from './Layout'

describe('<Layout>', () => {
    context('Render', () => {
        it('should render default Layout component', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <Typography>Hello World</Typography>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="layout"]').should('exist')
        })
    })

    context('Props', () => {
        it('should include only valid props/attributes in the DOM', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout
                        className="test-class"
                        style={{ padding: '20px' }}
                        m={32}
                        p={32}
                    >
                        <Typography>Hello World</Typography>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="layout"]').should('have.attr', 'class')
            cy.get('[data-test="layout"]').should('have.attr', 'style')
            cy.get('[data-test="layout"]').should('not.have.attr', 'm')
            cy.get('[data-test="layout"]').should('not.have.attr', 'p')
        })
    })

    context('System Props and Global Styles', () => {
        it('should override default styles and add new styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout m={32} p={32}>
                        <Typography>Hello World</Typography>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="layout"]').should('exist')
            cy.get('[data-test="layout"]').should('have.css', 'margin', '32px')
            cy.get('[data-test="layout"]').should('have.css', 'padding', '32px')
        })
        it('should add styles when wrapped with styled() from styled-components', () => {
            const StyledLayout = styled(Layout)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <StyledLayout>
                        <Typography>Hello World</Typography>
                    </StyledLayout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="layout"]').should('exist')
            cy.get('[data-test="layout"]').should('have.css', 'margin', '32px')
            cy.get('[data-test="layout"]').should('have.css', 'padding', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout style={{ margin: '32px', padding: '32px' }}>
                        <Typography>Hello World</Typography>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="layout"]').should('exist')
            cy.get('[data-test="layout"]').should('have.css', 'margin', '32px')
            cy.get('[data-test="layout"]').should('have.css', 'padding', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout className="test">
                        <Typography>Hello World</Typography>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="layout"]').should('exist')
            cy.get('[data-test="layout"]').should('have.css', 'margin', '32px')
            cy.get('[data-test="layout"]').should('have.css', 'padding', '32px')
        })
    })
})
