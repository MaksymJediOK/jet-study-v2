import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Header } from '@/components/Header'

describe('Page', () => {
  it('renders a header', () => {
    render(<Header />)

    const heading = screen.getByRole('navigation')

    expect(heading).toBeInTheDocument()
  })
})
