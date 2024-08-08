import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import {
    ModThemeProvider,
    ModLightTheme,
    ModDarkTheme,
} from '@modjs-youtube/utils'

import SwiftIcon from './SwiftIcon'

describe('<SwiftIcon>', () => {
    context('Render', () => {
        it('should render default SwiftIcon component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <SwiftIcon />
                </ModThemeProvider>,
            )
            cy.get('[data-test="swift-icon"]').should('exist')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <SwiftIcon
                        m={32}
                        p={32}
                        className="test-class"
                        style={{ margin: '32px', padding: '32px' }}
                        data-testid="test"
                    />
                </ModThemeProvider>,
            )
            cy.get('[data-test="swift-icon"]').should('have.attr', 'class')
            cy.get('[data-test="swift-icon"]').should('have.attr', 'style')
            cy.get('[data-test="swift-icon"]').should(
                'have.attr',
                'data-testid',
            )
            cy.get('[data-test="swift-icon"]').should('not.have.attr', 'm')
            cy.get('[data-test="swift-icon"]').should('not.have.attr', 'p')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <SwiftIcon m={32} p={32} />
                </ModThemeProvider>,
            )
            cy.get('[data-test="swift-icon"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledSwiftIcon = styled(SwiftIcon)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <StyledSwiftIcon m={32} p={32} />
                </ModThemeProvider>,
            )
            cy.get('[data-test="swift-icon"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <SwiftIcon style={{ margin: '32px', padding: '32px' }} />
                </ModThemeProvider>,
            )
            cy.get('[data-test="swift-icon"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <SwiftIcon className="test" />
                </ModThemeProvider>,
            )
            cy.get('[data-test="swift-icon"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
    context('Interactions and Behavior', () => {
        it('should apply default height', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <SwiftIcon />
                </ModThemeProvider>,
            )
            cy.get('[data-test="swift-icon"]')
                .should('exist')
                .and('have.css', 'height', '64px')
        })
        it('should apply hardcoded height', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <SwiftIcon height="32px" />
                </ModThemeProvider>,
            )
            cy.get('[data-test="swift-icon"]')
                .should('exist')
                .and('have.css', 'height', '32px')
        })
        it('should apply height property from current theme', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <SwiftIcon height={ModLightTheme.icons.height.lg} />
                </ModThemeProvider>,
            )
            cy.get('[data-test="swift-icon"]')
                .should('exist')
                .and('have.css', 'height', '64px')
        })
        it('should apply default width', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <SwiftIcon />
                </ModThemeProvider>,
            )
            cy.get('[data-test="swift-icon"]')
                .should('exist')
                .and('have.css', 'width', '64px')
        })
        it('should apply hardcoded width', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <SwiftIcon width="32px" />
                </ModThemeProvider>,
            )
            cy.get('[data-test="swift-icon"]')
                .should('exist')
                .and('have.css', 'width', '32px')
        })
        it('should apply width property from current theme', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <SwiftIcon width={ModLightTheme.icons.height.lg} />
                </ModThemeProvider>,
            )
            cy.get('[data-test="swift-icon"]')
                .should('exist')
                .and('have.css', 'width', '64px')
        })
    })
})
