import React from 'react'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs-youtube/utils'
import Layout from '../Layout/Layout'
import Typography from './Typography'

describe('<Typography>', () => {
    it('render typogrpahy component', () => {
        cy.mount(
            <>
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                        </Typography>
                    </Layout>
                </ModThemeProvider>

                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                        </Typography>
                    </Layout>
                </ModThemeProvider>
            </>,
        )
    })
})
