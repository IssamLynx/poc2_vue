import { render } from '@testing-library/vue'
import { test } from 'vitest'
import Header from './Header.vue'
import '@testing-library/jest-dom'
import router from '@/router'

test('header has the text "Valeurs"', async () => {
  const { getByRole } = render(Header, {
    global: {
      plugins: [router]
    }
  })
  getByRole('link', { name: 'Valeurs' })
})
