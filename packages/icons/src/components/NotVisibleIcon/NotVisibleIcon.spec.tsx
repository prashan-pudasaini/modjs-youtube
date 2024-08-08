import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import {
    ModThemeProvider,
    ModLightTheme,
    ModDarkTheme,
} from '@modjs-youtube/utils'

import NotVisibleIcon from './NotVisibleIcon'

describe('<NotVisibleIcon>', () => {
    context('Render', () => {
        it('should render default NotVisibleIcon component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <NotVisibleIcon />
                </ModThemeProvider>,
            )
            cy.get('[data-test="not-visible-icon"]').should('exist')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <NotVisibleIcon
                        m={32}
                        p={32}
                        className="test-class"
                        style={{ margin: '32px', padding: '32px' }}
                        data-testid="test"
                    />
                </ModThemeProvider>,
            )
            cy.get('[data-test="not-visible-icon"]').should(
                'have.attr',
                'class',
            )
            cy.get('[data-test="not-visible-icon"]').should(
                'have.attr',
                'style',
            )
            cy.get('[data-test="not-visible-icon"]').should(
                'have.attr',
                'data-testid',
            )
            cy.get('[data-test="not-visible-icon"]').should(
                'not.have.attr',
                'm',
            )
            cy.get('[data-test="not-visible-icon"]').should(
                'not.have.attr',
                'p',
            )
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <NotVisibleIcon m={32} p={32} />
                </ModThemeProvider>,
            )
            cy.get('[data-test="not-visible-icon"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledNotVisibleIcon = styled(NotVisibleIcon)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <StyledNotVisibleIcon m={32} p={32} />
                </ModThemeProvider>,
            )
            cy.get('[data-test="not-visible-icon"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <NotVisibleIcon
                        style={{ margin: '32px', padding: '32px' }}
                    />
                </ModThemeProvider>,
            )
            cy.get('[data-test="not-visible-icon"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <NotVisibleIcon className="test" />
                </ModThemeProvider>,
            )
            cy.get('[data-test="not-visible-icon"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
    context('Interactions and Behavior', () => {
        it('should apply default fill property', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <NotVisibleIcon />
                </ModThemeProvider>,
            )
            cy.get('[data-test="not-visible-icon"]')
                .find('g')
                .should('exist')
                .and('have.css', 'fill', 'rgb(31, 142, 255)')
        })
        it('should apply hardcoded fill property', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <NotVisibleIcon fill="#000000" />
                </ModThemeProvider>,
            )
            cy.get('[data-test="not-visible-icon"]')
                .find('g')
                .should('exist')
                .and('have.css', 'fill', 'rgb(0, 0, 0)')
        })
        it('should apply fill property from current theme', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <NotVisibleIcon fill={ModLightTheme.color.success} />
                </ModThemeProvider>,
            )
            cy.get('[data-test="not-visible-icon"]')
                .should('exist')
                .find('g')
                .and('have.css', 'fill', 'rgb(90, 107, 49)')
        })
        it('should apply default height', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <NotVisibleIcon />
                </ModThemeProvider>,
            )
            cy.get('[data-test="not-visible-icon"]')
                .should('exist')
                .and('have.css', 'height', '16px')
        })
        it('should apply hardcoded height', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <NotVisibleIcon height="32px" />
                </ModThemeProvider>,
            )
            cy.get('[data-test="not-visible-icon"]')
                .should('exist')
                .and('have.css', 'height', '32px')
        })
        it('should apply height property from current theme', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <NotVisibleIcon height={ModLightTheme.icons.height.lg} />
                </ModThemeProvider>,
            )
            cy.get('[data-test="not-visible-icon"]')
                .should('exist')
                .and('have.css', 'height', '64px')
        })
        it('should apply default width', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <NotVisibleIcon />
                </ModThemeProvider>,
            )
            cy.get('[data-test="not-visible-icon"]')
                .should('exist')
                .and('have.css', 'width', '24px')
        })
        it('should apply hardcoded width', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <NotVisibleIcon width="32px" />
                </ModThemeProvider>,
            )
            cy.get('[data-test="not-visible-icon"]')
                .should('exist')
                .and('have.css', 'width', '32px')
        })
        it('should apply width property from current theme', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <NotVisibleIcon width={ModLightTheme.icons.height.lg} />
                </ModThemeProvider>,
            )
            cy.get('[data-test="not-visible-icon"]')
                .should('exist')
                .and('have.css', 'width', '64px')
        })
    })
})
