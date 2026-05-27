import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PatientsPage } from '../pages/PatientsPage';

test('Verify Patients tab loads and important fields are present @smoke', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const patientsPage = new PatientsPage(page);

    await loginPage.navigate();

    await loginPage.login("ramanareddyk_qtp@live.in","ramana123");

    await patientsPage.openPatients();
    await patientsPage.verifyPatientsLoaded();
    await patientsPage.validateImportantFields();

});
