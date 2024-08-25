import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import { ModThemeProvider, ModLightTheme } from '@modjs-youtube/utils'
import Layout from '../Layout/Layout'
import Box from '../Box/Box'
import Snackbar from './Snackbar'
import SnackbarHeader from '../SnackbarHeader/SnackbarHeader'
import SnackbarContent from '../SnackbarContent/SnackbarContent'
import Typography from '../Typography/Typography'

describe('<Snackbar>', () => {
    context('Render', () => {
        it('should render Snackbar component with default props', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Box elevation="light">
                            <Snackbar visible={true} timeout={1000000000}>
                                <SnackbarHeader>
                                    <Typography variant="body2">
                                        Snackbar Header goes here.
                                    </Typography>
                                </SnackbarHeader>
                                <SnackbarContent>
                                    <Typography variant="body2">
                                        Snackbar content goes here
                                    </Typography>
                                </SnackbarContent>
                            </Snackbar>
                        </Box>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and('have.css', 'border', '1px solid rgb(194, 194, 194)')
                .and('have.css', 'left', '12px')
                .and('have.css', 'position', 'fixed')
        })
        it('should render Snackbar component with custom props', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Box elevation="light">
                            <Snackbar
                                visible={true}
                                timeout={1000000000}
                                variant="success"
                                notched={true}
                                displayPosition="topRight"
                            >
                                <SnackbarHeader>
                                    <Typography variant="body2" color="white">
                                        Snackbar Header goes here.
                                    </Typography>
                                </SnackbarHeader>
                                <SnackbarContent>
                                    <Typography variant="body2" color="success">
                                        Snackbar content goes here
                                    </Typography>
                                </SnackbarContent>
                            </Snackbar>
                        </Box>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar"]')
                .should('exist')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .and('have.css', 'right', '12px')
                .and('have.css', 'position', 'fixed')
                .and('have.css', 'background-color', 'rgb(90, 107, 49)')
                .then($snackbar => {
                    const beforeEl = window.getComputedStyle(
                        $snackbar[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                    expect(beforeEl.backgroundColor).to.equal(
                        'rgb(90, 107, 49)',
                    )
                })
        })
        it('should render filled snackbar with notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Box elevation="light">
                            <Snackbar
                                visible={true}
                                timeout={1000000000}
                                variant="filled"
                                notched={true}
                            >
                                <SnackbarHeader>
                                    <Typography variant="body2">
                                        Snackbar Header goes here.
                                    </Typography>
                                </SnackbarHeader>
                                <SnackbarContent>
                                    <Typography variant="body2">
                                        Snackbar content goes here
                                    </Typography>
                                </SnackbarContent>
                            </Snackbar>
                        </Box>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar"]')
                .should('exist')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .and('have.css', 'left', '12px')
                .and('have.css', 'position', 'fixed')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .then($snackbar => {
                    const beforeEl = window.getComputedStyle(
                        $snackbar[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                    expect(beforeEl.backgroundColor).to.equal(
                        'rgb(194, 194, 194)',
                    )
                })
        })
        it('should render success snackbar with notch ', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Box elevation="light">
                            <Snackbar
                                visible={true}
                                timeout={1000000000}
                                variant="success"
                                notched={true}
                            >
                                <SnackbarHeader>
                                    <Typography variant="body2" color="white">
                                        Snackbar Header goes here
                                    </Typography>
                                </SnackbarHeader>
                                <SnackbarContent>
                                    <Typography variant="body2" color="success">
                                        Snackbar content goes here
                                    </Typography>
                                </SnackbarContent>
                            </Snackbar>
                        </Box>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar"]')
                .should('exist')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .and('have.css', 'left', '12px')
                .and('have.css', 'position', 'fixed')
                .and('have.css', 'background-color', 'rgb(90, 107, 49)')
                .then($snackbar => {
                    const beforeEl = window.getComputedStyle(
                        $snackbar[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                    expect(beforeEl.backgroundColor).to.equal(
                        'rgb(90, 107, 49)',
                    )
                })
        })
        it('should render error snackbar with notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Box elevation="light">
                            <Snackbar
                                visible={true}
                                timeout={1000000000}
                                variant="error"
                                notched={true}
                            >
                                <SnackbarHeader>
                                    <Typography variant="body2" color="white">
                                        Snackbar Header goes here
                                    </Typography>
                                </SnackbarHeader>
                                <SnackbarContent>
                                    <Typography variant="body2" color="error">
                                        Snackbar content goes here
                                    </Typography>
                                </SnackbarContent>
                            </Snackbar>
                        </Box>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar"]')
                .should('exist')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .and('have.css', 'left', '12px')
                .and('have.css', 'position', 'fixed')
                .and('have.css', 'background-color', 'rgb(202, 60, 31)')
                .then($snackbar => {
                    const beforeEl = window.getComputedStyle(
                        $snackbar[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                    expect(beforeEl.backgroundColor).to.equal(
                        'rgb(202, 60, 31)',
                    )
                })
        })
        it('should render filled snackbar without notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Box elevation="light">
                            <Snackbar
                                visible={true}
                                timeout={1000000000}
                                variant="filled"
                                notched={false}
                                type="default"
                            >
                                <SnackbarHeader>
                                    <Typography variant="body2">
                                        Snackbar Header goes here
                                    </Typography>
                                </SnackbarHeader>
                                <SnackbarContent>
                                    <Typography variant="body2">
                                        Snackbar content goes here
                                    </Typography>
                                </SnackbarContent>
                            </Snackbar>
                        </Box>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar"]')
                .should('exist')
                .and('have.css', 'left', '12px')
                .and('have.css', 'position', 'fixed')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and('have.css', 'border', '1px solid rgb(194, 194, 194)')
        })
        it('should render success snackbar without notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Box elevation="light">
                            <Snackbar
                                visible={true}
                                timeout={1000000000}
                                variant="success"
                                notched={false}
                            >
                                <SnackbarHeader>
                                    <Typography variant="body2" color="white">
                                        Snackbar Header goes here
                                    </Typography>
                                </SnackbarHeader>
                                <SnackbarContent>
                                    <Typography variant="body2" color="success">
                                        Snackbar content goes here
                                    </Typography>
                                </SnackbarContent>
                            </Snackbar>
                        </Box>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar"]')
                .should('exist')
                .and('have.css', 'left', '12px')
                .and('have.css', 'position', 'fixed')
                .and('have.css', 'background-color', 'rgb(90, 107, 49)')
                .and('have.css', 'border', '1px solid rgb(90, 107, 49)')
        })
        it('should render error snackbar without notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Box elevation="light">
                            <Snackbar
                                visible={true}
                                timeout={1000000000}
                                variant="error"
                                notched={false}
                            >
                                <SnackbarHeader>
                                    <Typography variant="body2" color="white">
                                        Snackbar Header goes here
                                    </Typography>
                                </SnackbarHeader>
                                <SnackbarContent>
                                    <Typography variant="body2" color="error">
                                        Snackbar content goes here
                                    </Typography>
                                </SnackbarContent>
                            </Snackbar>
                        </Box>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar"]')
                .should('exist')
                .and('have.css', 'left', '12px')
                .and('have.css', 'position', 'fixed')
                .and('have.css', 'background-color', 'rgb(202, 60, 31)')
                .and('have.css', 'border', '1px solid rgb(202, 60, 31)')
        })

        it('should render snackbar on top left', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Box elevation="light">
                            <Snackbar
                                visible={true}
                                timeout={1000000000}
                                displayPosition="topLeft"
                            >
                                <SnackbarHeader>
                                    <Typography variant="body2">
                                        Snackbar Header goes here
                                    </Typography>
                                </SnackbarHeader>
                                <SnackbarContent>
                                    <Typography variant="body2">
                                        Snackbar content goes here
                                    </Typography>
                                </SnackbarContent>
                            </Snackbar>
                        </Box>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar"]')
                .should('exist')
                .and('have.css', 'left', '12px')
                .and('have.css', 'position', 'fixed')
        })
        it('should render snackbar on top right', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Box elevation="light">
                            <Snackbar
                                visible={true}
                                timeout={1000000000}
                                displayPosition="topRight"
                            >
                                <SnackbarHeader>
                                    <Typography variant="body2">
                                        Snackbar Header goes here
                                    </Typography>
                                </SnackbarHeader>
                                <SnackbarContent>
                                    <Typography variant="body2">
                                        Snackbar content goes here
                                    </Typography>
                                </SnackbarContent>
                            </Snackbar>
                        </Box>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar"]')
                .should('exist')
                .and('have.css', 'right', '12px')
                .and('have.css', 'position', 'fixed')
        })
        it('should render snackbar on bottom left', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Snackbar
                            visible={true}
                            timeout={1000000000}
                            displayPosition="bottomLeft"
                        >
                            <SnackbarHeader>
                                <Typography variant="body2">
                                    Snackbar Header goes here
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="body2">
                                    Snackbar content goes here
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar"]')
                .should('exist')
                .and('have.css', 'bottom', '0px')
                .and('have.css', 'margin-bottom', '12px')
                .and('have.css', 'left', '12px')
                .and('have.css', 'position', 'fixed')
        })
        it('should render snackbar on bottom right', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Snackbar
                            visible={true}
                            timeout={1000}
                            displayPosition="bottomRight"
                        >
                            <SnackbarHeader>
                                <Typography variant="body2">
                                    Snackbar Header goes here
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="body2">
                                    Snackbar content goes here
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar"]')
                .should('exist')
                .and('have.css', 'bottom', '0px')
                .and('have.css', 'margin-bottom', '12px')
                .and('have.css', 'right', '12px')
                .and('have.css', 'position', 'fixed')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Snackbar
                            visible={true}
                            timeout={1000000000}
                            variant="outlined"
                            notched={true}
                            type="success"
                            displayPosition="topRight"
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                        >
                            <SnackbarHeader>
                                <Typography variant="body2">
                                    Snackbar Header goes here.
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="body2">
                                    Snackbar content goes here
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar"]').should('have.attr', 'class')
            cy.get('[data-test="snackbar"]').should('have.attr', 'style')
            cy.get('[data-test="snackbar"]').should('have.attr', 'data-test')
            cy.get('[data-test="snackbar"]').should('not.have.attr', 'm')
            cy.get('[data-test="snackbar"]').should('not.have.attr', 'p')
            cy.get('[data-test="snackbar"]').should('not.have.attr', 'visible')
            cy.get('[data-test="snackbar"]').should('not.have.attr', 'timeout')
            cy.get('[data-test="snackbar"]').should('not.have.attr', 'variant')
            cy.get('[data-test="snackbar"]').should('not.have.attr', 'notched')
            cy.get('[data-test="snackbar"]').should('not.have.attr', 'type')
            cy.get('[data-test="snackbar"]').should(
                'not.have.attr',
                'displayPosition',
            )
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Snackbar p={32} m={32} visible={true}>
                            <SnackbarHeader>
                                <Typography variant="body2">
                                    Snackbar Header goes here.
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="body2">
                                    Snackbar content goes here
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledSnackbar = styled(Snackbar)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledSnackbar p={32} m={32} visible={true}>
                            <SnackbarHeader>
                                <Typography variant="body2">
                                    Snackbar Header goes here.
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="body2">
                                    Snackbar content goes here
                                </Typography>
                            </SnackbarContent>
                        </StyledSnackbar>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Snackbar
                            p={0}
                            m={0}
                            style={{ margin: '32px', padding: '32px' }}
                            visible={true}
                        >
                            <SnackbarHeader>
                                <Typography variant="body2">
                                    Snackbar Header goes here.
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="body2">
                                    Snackbar content goes here
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Snackbar className="test" visible={true}>
                            <SnackbarHeader>
                                <Typography variant="body2">
                                    Snackbar Header goes here.
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="body2">
                                    Snackbar content goes here
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
    context('Interactions and Behavior', () => {
        it('should auto hide the snackbar based on timeout', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Snackbar visible={true} timeout={1000}>
                            <SnackbarHeader>
                                <Typography variant="body2">
                                    Snackbar Header goes here.
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="body2">
                                    Snackbar content goes here
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar"]').should('exist')
            cy.wait(5)
            cy.get('[data-test="snackbar"]').should('not.exist')
        })
        it('should hide the snackbar when visible is set to false', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Snackbar visible={false}>
                            <SnackbarHeader>
                                <Typography variant="body2">
                                    Snackbar Header goes here.
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="body2">
                                    Snackbar content goes here
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar"]').should('not.exist')
        })
        it('should show the snackbar when visible is set to true', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Snackbar visible={true}>
                            <SnackbarHeader>
                                <Typography variant="body2">
                                    Snackbar Header goes here.
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="body2">
                                    Snackbar content goes here
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar"]').should('exist')
        })
    })
})
