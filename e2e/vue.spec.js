import { test, expect } from '@playwright/test'

test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5174/')
  })
  test('main navigation', async ({ page }) => {
    //URL ASSERTION
    await expect(page).toHaveURL('http://localhost:5174/')
    //EXEPCT RENDER ELEMENTS
    await expect(page.getByAltText('poster')).toHaveCount(30)
    //FIND INPU AND FILL WITH FULLMETAL
    await page.getByPlaceholder('Search').fill('Fullmetal')
    //CLICK ON SEARCH BUTTON
    await page.locator('button', { hasText: 'Search' }).click()
    //EXPECT RENDER ONLY ONE ELEMENT
    await expect(page.getByAltText('poster')).toHaveCount(1)
    //ClICK ON IMAGE
    await page.getByAltText('poster').click()
    //URL ASSERTION
    await expect(page).toHaveURL('http://localhost:5174/details/5114')
    //RENDER TITLE
    await expect(page.getByText('Fullmetal Alchemist: Brotherhood', { exact: true })).toBeVisible()
    //RENDER SYSNOPSIS
    await expect(
      page.getByText(
        `After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor. The brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing "automail," a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange. As Edward becomes an infamous alchemist and gains the nickname "Fullmetal," the boys' journey embroils them in a growing conspiracy that threatens the fate of the world`
      )
    ).toBeVisible()
  })
})
