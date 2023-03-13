import { render } from '@testing-library/vue'
import { expect, test } from 'vitest'
import Footer from './Footer.vue'
import '@testing-library/jest-dom'

test('footer has the text "Twitter"', async () => {
  const { getByText } = render(Footer)
  const elem = getByText('Twitter')
  expect(elem).toBeInTheDocument()
})
