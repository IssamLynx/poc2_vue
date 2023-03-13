import { render } from '@testing-library/vue'
import Footer from './Footer.vue'

describe('Footer.vue', () => {
  test('Footer render', () => {
    render(<Footer />)
    const element = screen.getByText(/Instagram/i)
    expect(element).toBeInTheDocument()
  })
})
