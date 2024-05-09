import React from 'react'
import { render, screen } from '@testing-library/react'
import { DefaultEventCard } from '@/components/Cards/DefaultEventCard/DefaultEventCard'
import { EventCard } from '@/types/event'

jest.mock('next/image', () => ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} />
))

jest.mock('@/app/_font/eUK', () => ({
  eUK: {
    className: 'mocked-eUK-class',
  },
}))

jest.mock('lucide-react', () => ({
  ChevronRight: ({ size }: { size: number }) => (
    <div data-testid='chevron-right'>{`ChevronRight ${size}`}</div>
  ),
}))

jest.mock('next/link', () => ({ children, href }: { children: React.ReactNode; href: string }) => (
  <a href={href}>{children}</a>
))

describe('DefaultEventCard', () => {
  const props: EventCard & { imgId: number; linkId: number } = {
    title: 'Test Event',
    category: 'Category',
    contentType: 'Type',
    price: 100,
    thumbnail: '/path/to/thumbnail.png',
    imgId: 1,
    linkId: 1,
  }

  it('renders without crashing', () => {
    render(<DefaultEventCard {...props} />)
  })

  it('renders the correct props', () => {
    render(<DefaultEventCard {...props} />)

    expect(screen.getByText(props.title)).toBeInTheDocument()
    expect(screen.getByText(props.category)).toBeInTheDocument()
    expect(screen.getByText(props.contentType)).toBeInTheDocument()
    expect(screen.getByText(`${props.price} ₴`)).toBeInTheDocument()
    expect(screen.getByText('Детальніше')).toBeInTheDocument()
    expect(screen.getByTestId('chevron-right')).toBeInTheDocument()

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      `/placeholders/placeholder_card_${props.imgId}.png`,
    )
    expect(screen.getByRole('link')).toHaveAttribute('href', `/event/${props.linkId}`)
  })
})
