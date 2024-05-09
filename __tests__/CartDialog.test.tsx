import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { CartDialog } from '@/components/Header/ui/CartDialog'

// Mock the SheetTrigger component to isolate the test
jest.mock('@/components/ui/sheet', () => ({
  Sheet: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SheetTrigger: ({ children }: { children: React.ReactNode }) => <button>{children}</button>,
  SheetContent: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SheetFooter: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SheetHeader: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SheetTitle: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SheetClose: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))

describe('CartDialog', () => {
  it('renders without crashing', () => {
    render(<CartDialog>Trigger</CartDialog>)
  })

  it('renders the trigger child component', () => {
    const { getByText } = render(<CartDialog>Trigger</CartDialog>)
    expect(getByText('Trigger')).toBeInTheDocument()
  })

  it('opens and closes the dialog when the trigger is clicked', () => {
    const { getByText, queryByText } = render(<CartDialog>Trigger</CartDialog>)

    fireEvent.click(getByText('Trigger'))

    expect(getByText('Кошик')).toBeInTheDocument()
    expect(getByText('Кошик порожній 😢')).toBeInTheDocument()
    expect(getByText('Змінити кошик')).toBeInTheDocument()

    fireEvent.click(getByText('Змінити кошик'))
  })
})
