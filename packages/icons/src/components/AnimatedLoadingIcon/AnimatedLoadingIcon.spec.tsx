import React from 'react'
import AnimatedLoadingIcon from './AnimatedLoadingIcon'

describe('<AnimatedLoadingIcon>', () => {
    it('render animated loading icon component', () => {
        cy.mount(
            <div style={{ margin: '32px' }}>
                <AnimatedLoadingIcon stroke="red" />
            </div>,
        )
    })
})
