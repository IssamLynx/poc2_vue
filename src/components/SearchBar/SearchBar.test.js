import { render } from '@testing-library/vue'
import { test } from 'vitest'
import SearchBar from './SearchBar.vue'
import '@testing-library/jest-dom'

test('The input should be visible', async () => {
  const { getByPlaceholderText } = render(SearchBar)
  getByPlaceholderText('Search')
})
