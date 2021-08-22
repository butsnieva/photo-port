import React from 'react'
import { cleanup, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..'

afterEach(cleanup)

describe('Contact component', () => {
    //baseline test
        it('renders', () => {
            render(<ContactForm/>)
        })

    //snapshot test
        it('matches snapshot', () => {
            const { asFragment } = render(<ContactForm/>)
            expect(asFragment()).toMatchSnapshot()
        })
})

