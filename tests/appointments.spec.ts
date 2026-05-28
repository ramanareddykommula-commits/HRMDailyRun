import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AppointmentsPage } from '../pages/AppointmentsPage';

test.skip('Verify Appointments tab loads and important fields are present @smoke', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const appointmentsPage = new AppointmentsPage(page);

    await loginPage.navigate();

    await loginPage.login("ramanareddyk_qtp@live.in","ramana123");

    await appointmentsPage.openAppointments();
    await appointmentsPage.verifyAppointmentsLoaded();
    await appointmentsPage.validateImportantFields();

});
