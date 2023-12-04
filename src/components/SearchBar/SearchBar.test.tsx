import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import SearchBar, { SearchBarProps } from './SearchBar'

describe('SearchBar', () => {
  const defaultProps: SearchBarProps = {
    id: 'test-search-bar',
    placeHolder: 'Search...',
    onSearch: jest.fn(),
  }

  it('renders without crashing', () => {
    render(<SearchBar {...defaultProps} />)
    expect(
      screen.getByPlaceholderText(defaultProps.placeHolder),
    ).toBeInTheDocument()
  })

  it('calls onSearch with input value after debounce', async () => {
    render(<SearchBar {...defaultProps} />)
    const input = screen.getByPlaceholderText(defaultProps.placeHolder)

    fireEvent.change(input, { target: { value: 'test' } })

    await waitFor(() =>
      expect(defaultProps.onSearch).toHaveBeenCalledWith('test'),
    )
  })

  it('renders label if provided', () => {
    const props: SearchBarProps = {
      ...defaultProps,
      label: 'Test Label',
    }
    render(<SearchBar {...props} />)
    expect(screen.getByText(props.label!)).toBeInTheDocument()
  })
})
