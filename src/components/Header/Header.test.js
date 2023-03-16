import { render } from '@testing-library/vue'
import { expect, test, vi } from 'vitest'
import Header from './Header.vue'
import '@testing-library/jest-dom'

vi.mock('vue-router', () => ({
  RouterLink: vi.fn()
}))

test('header has the text "Valeurs"', async () => {
  const { getByText } = render(Header)
  const elem = getByText('Valeurs')
  expect(elem).toBeInTheDocument()
})
