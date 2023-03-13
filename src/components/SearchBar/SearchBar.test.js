import { fireEvent, render } from '@testing-library/vue'
import { expect, test, describe } from 'vitest'
import SearchBar from './SearchBar.vue'
import '@testing-library/jest-dom'

test('button Search is present', async () => {
  const { getByText } = render(SearchBar)
  const elem = getByText('Search')
  expect(elem).toBeInTheDocument()
})

describe('When I write something in the input', () => {
  test('The Clear button should be here', async () => {
    const { getByText, getByPlaceholderText } = render(SearchBar)
    const input = getByPlaceholderText('Search')
    await fireEvent.update(input, 'test')
    const elem = getByText('Clear')
    expect(elem).toBeInTheDocument()
  })
})
