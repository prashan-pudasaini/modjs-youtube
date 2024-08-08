import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import {
    ModThemeProvider,
    ModLightTheme,
    ModDarkTheme,
} from '@modjs-youtube/utils'
import Grid from './Grid'
import Layout from '../Layout/Layout'
import Typography from '../Typography/Typography'

describe('<Grid>', () => {
    context('Render', () => {
        it('should render default Grid component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Grid>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not five centuries, but
                                also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                            </Typography>
                        </Grid>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="grid"]').should('exist')
        })
        it('should render Grid with 1 column', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <Grid columns={1}>
                            <Typography variant="h1">Grid</Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Grid>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="grid"]')
                .should('exist')
                .and('have.css', 'grid-template-columns', '753px')
        })
        it('should render Grid with 2 column', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <Grid columns={2}>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Grid>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="grid"]')
                .should('exist')
                .and('have.css', 'grid-template-columns', '376.5px 376.5px')
        })
        it('should render Grid with 3 column', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <Grid columns={3}>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Grid>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="grid"]')
                .should('exist')
                .and('have.css', 'grid-template-columns', '251px 251px 251px')
        })
        it('should render Grid with 4 column', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <Grid columns={4}>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Grid>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="grid"]')
                .should('exist')
                .and(
                    'have.css',
                    'grid-template-columns',
                    '188.25px 188.25px 188.25px 188.25px',
                )
        })
        it('should render Grid with 5 column', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <Grid columns={5}>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Grid>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="grid"]')
                .should('exist')
                .and(
                    'have.css',
                    'grid-template-columns',
                    '150.594px 150.602px 150.602px 150.602px 150.602px',
                )
        })
        it('should render Grid with 6 column', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <Grid columns={6}>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Grid>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="grid"]')
                .should('exist')
                .and(
                    'have.css',
                    'grid-template-columns',
                    '125.5px 125.5px 125.5px 125.5px 125.5px 125.5px',
                )
        })
        it('should render Grid as block in screen smaller than 769px', () => {
            cy.viewport(600, 400)
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <Grid columns={6}>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Grid>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="grid"]')
                .should('exist')
                .and('have.css', 'grid-template-columns', 'repeat(6, 1fr)')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Grid
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                            columns={2}
                        >
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Grid>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="grid"]').should('have.attr', 'class')
            cy.get('[data-test="grid"]').should('have.attr', 'style')
            cy.get('[data-test="grid"]').should('have.attr', 'data-test')
            cy.get('[data-test="grid"]').should('not.have.attr', 'm')
            cy.get('[data-test="grid"]').should('not.have.attr', 'p')
            cy.get('[data-test="grid"]').should('not.have.attr', 'columns')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Grid m={32} p={32}>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Grid>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="grid"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledGrid = styled(Grid)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledGrid>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </StyledGrid>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="grid"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Grid style={{ margin: '32px', padding: '32px' }}>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Grid>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="grid"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Grid className="test">
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Grid>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="grid"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
})
