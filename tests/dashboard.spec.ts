import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test('Verify dashboard loads successfully @smoke', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.navigate();
    await loginPage.login(
        process.env.USERNAME!,
        process.env.PASSWORD!
    );
    await dashboardPage.openDashboard();
    await dashboardPage.verifyDashboardLoaded();
    await dashboardPage.validateAllDashboardWidgets();


});