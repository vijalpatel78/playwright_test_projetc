const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Place Order', () => {
  test('The wholesale customer should be able to select and place an order for a product', async ({ page }) => {
    await page.locator('xpath=//div[@class="header-panel-right"]/descendant::li[@class="link authorization-link"]/descendant::a').click();
    await page.locator('xpath=//input[@id="email"]').fill('test-qa1-retail@n8ko5unu.mailosaur.net');
    await page.locator('xpath=//input[@id="pass"]').fill('test#qa1#retail#n8ko5unu#mailosaur#net');
    await page.locator('xpath=//button[@id="send2"]').click();
    await expect(page.locator('xpath=//div[@class="header-panel-right"]/descendant::li[@class="customer-welcome"]')).toBeAttached();
    //await page.waitForTimeout(5000);
  });
});  
