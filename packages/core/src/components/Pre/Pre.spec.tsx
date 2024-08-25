import React from 'react'
import { styled } from 'styled-components'
import { ModThemeProvider, ModLightTheme } from '@modjs-youtube/utils'
import '../../../cypress/fixtures/style.css'
import Pre from './Pre'
import Code from '../CodeEditor/CodeEditor'
import Layout from '../Layout/Layout'

const codeContent = `
import React from 'react'
import { Typography } from '@modjs/core'

const App = () => {
    return (
        <div>
            <Typography variant="h3">Code component Code component Code component Code component Code component Code component</Typography>
        </div>
    )
}

export default App
`

describe('<Pre>', () => {
    context('Render', () => {
        it('should render default Pre component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Pre>
                            <Code>{codeContent}</Code>
                        </Pre>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="pre"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and('have.css', 'border', '1px solid rgb(194, 194, 194)')
                .and('have.css', 'margin', '8px 0px')
        })

        it('should render custom Pre componnent', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Pre variant="outlined" notched={true}>
                            <Code>{codeContent}</Code>
                        </Pre>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="pre"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(255, 255, 255)')
                .and('have.css', 'margin', '8px 0px')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .then($Code => {
                    const beforeEl = window.getComputedStyle(
                        $Code[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render filled Pre without notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Pre variant="filled" notched={false}>
                            <Code>{codeContent}</Code>
                        </Pre>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="pre"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and('have.css', 'margin', '8px 0px')
        })
        it('should render filled Pre with notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Pre variant="filled" notched={true}>
                            <Code>{codeContent}</Code>
                        </Pre>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="pre"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and('have.css', 'margin', '8px 0px')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .then($Code => {
                    const beforeEl = window.getComputedStyle(
                        $Code[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render outlined Pre without notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Pre variant="outlined" notched={false}>
                            <Code>{codeContent}</Code>
                        </Pre>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="pre"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(255, 255, 255)')
                .and('have.css', 'margin', '8px 0px')
        })
        it('should render outlined Pre with notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Pre variant="outlined" notched={true}>
                            <Code>{codeContent}</Code>
                        </Pre>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="pre"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(255, 255, 255)')
                .and('have.css', 'margin', '8px 0px')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .then($Code => {
                    const beforeEl = window.getComputedStyle(
                        $Code[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render transparent Pre', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Pre variant="transparent">
                            <Code>{codeContent}</Code>
                        </Pre>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="pre"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(255, 255, 255)')
                .and('have.css', 'margin', '4px 0px')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Pre
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                            variant="filled"
                            notched={true}
                        >
                            <Code>{codeContent}</Code>
                        </Pre>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="pre"]').should('have.attr', 'class')
            cy.get('[data-test="pre"]').should('have.attr', 'style')
            cy.get('[data-test="pre"]').should('have.attr', 'data-test')
            cy.get('[data-test="pre"]').should('not.have.attr', 'm')
            cy.get('[data-test="pre"]').should('not.have.attr', 'p')
            cy.get('[data-test="pre"]').should('not.have.attr', 'variant')
            cy.get('[data-test="pre"]').should('not.have.attr', 'notched')
        })
    })

    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Pre p={32} m={32}>
                            <Code>{codeContent}</Code>
                        </Pre>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="pre"]')
                .should('exist')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledPre = styled(Pre)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledPre p={32} m={32}>
                            <Code>{codeContent}</Code>
                        </StyledPre>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="pre"]')
                .should('exist')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Pre
                            p={0}
                            m={0}
                            style={{ margin: '32px', padding: '32px' }}
                        >
                            <Code>{codeContent}</Code>
                        </Pre>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="pre"]')
                .should('exist')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Pre className="test">
                            <Code>{codeContent}</Code>
                        </Pre>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="pre"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
})
