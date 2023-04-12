import { render } from '@testing-library/vue'
import { test } from 'vitest'
import Footer from './Footer.vue'
import '@testing-library/jest-dom'
import router from '@/router'

test('footer has the text "Twitter"', async () => {
  const { getByRole } = render(Footer, {
    global: {
      plugins: [router]
    }
  })
  getByRole('link', { name: 'Twitter' })
})
