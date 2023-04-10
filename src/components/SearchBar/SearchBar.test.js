import { fireEvent, render } from '@testing-library/vue'
import { expect, test, describe } from 'vitest'
import SearchBar from './SearchBar.vue'
import '@testing-library/jest-dom'

test('button Search is present', async () => {
  const { getByText } = render(SearchBar)
  getByText('Search')
})

describe('When I write something in the input', () => {
  test('The Clear button should be here', async () => {
    const { getByText, getByPlaceholderText } = render(SearchBar)
    const input = getByPlaceholderText('Search')
    await fireEvent.update(input, 'test')
    getByText('Clear')
  })
})

describe('WHen the input is empty', () => {
  test('The Clear button should not be here', async () => {
    const { queryByText, getByPlaceholderText } = render(SearchBar)
    const input = getByPlaceholderText('Search')
    await fireEvent.update(input, '')
    const elem = queryByText('Clear')
    expect(elem).not.toBeInTheDocument()
  })
})

describe('When I click on the Clear button', () => {
  test('The input should be empty', async () => {
    const { getByText, getByPlaceholderText } = render(SearchBar)
    const input = getByPlaceholderText('Search')
    await fireEvent.update(input, 'test')
    const clearButton = getByText('Clear')
    await fireEvent.click(clearButton)
    expect(input.value).toBe('')
  })
})
