import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import {
    ModThemeProvider,
    ModLightTheme,
    ModDarkTheme,
} from '@modjs-youtube/utils'
import Layout from '../Layout/Layout'
import Typography from './Typography'

describe('<Typography>', () => {
    context('Render', () => {
        it('should render default Typography component', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <Typography>Hello World</Typography>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="typography"]').should('exist')
        })
    })

    context('Props', () => {
        it('should include only valid props/attributes in the DOM', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <Typography
                            className="test-class"
                            style={{ padding: '20px' }}
                            m={32}
                            p={32}
                        >
                            Hello World
                        </Typography>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="typography"]').should('have.attr', 'class')
            cy.get('[data-test="typography"]').should('have.attr', 'style')
            cy.get('[data-test="typography"]').should('not.have.attr', 'm')
            cy.get('[data-test="typography"]').should('not.have.attr', 'p')
        })
    })

    context('System Props and Global Styles', () => {
        it('should override default styles and add new styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <Typography m={32} p={32}>
                            Hello World
                        </Typography>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="typography"]').should('exist')
            cy.get('[data-test="typography"]').should(
                'have.css',
                'margin',
                '32px',
            )
            cy.get('[data-test="typography"]').should(
                'have.css',
                'padding',
                '32px',
            )
        })
        it('should add styles when wrapped with styled() from styled-components', () => {
            const StyledTypography = styled(Typography)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <StyledTypography>Hello World</StyledTypography>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="typography"]').should('exist')
            cy.get('[data-test="typography"]').should(
                'have.css',
                'margin',
                '32px',
            )
            cy.get('[data-test="typography"]').should(
                'have.css',
                'padding',
                '32px',
            )
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <Typography style={{ margin: '32px', padding: '32px' }}>
                            Hello World
                        </Typography>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="typography"]').should('exist')
            cy.get('[data-test="typography"]').should(
                'have.css',
                'margin',
                '32px',
            )
            cy.get('[data-test="typography"]').should(
                'have.css',
                'padding',
                '32px',
            )
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Typography className="test">Hello World</Typography>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="typography"]').should('exist')
            cy.get('[data-test="typography"]').should(
                'have.css',
                'margin',
                '32px',
            )
            cy.get('[data-test="typography"]').should(
                'have.css',
                'padding',
                '32px',
            )
        })
    })
})
