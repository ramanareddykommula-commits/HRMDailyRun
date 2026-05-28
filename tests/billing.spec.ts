import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { BillingPage } from '../pages/BillingPage';

test.skip('Verify Billing tab loads and important fields are present @smoke', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const billingPage = new BillingPage(page);

    await loginPage.navigate();

    await loginPage.login("ramanareddyk_qtp@live.in","ramana123");

    await billingPage.openBilling();
    await billingPage.verifyBillingLoaded();
    await billingPage.validateImportantFields();

});
