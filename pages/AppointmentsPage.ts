import { Page, Locator, expect } from '@playwright/test';

export class AppointmentsPage {

    readonly page: Page;

    // Left Navigation
    readonly appointmentsMenu: Locator;

    // Appointments Page
    readonly appointmentsHeader: Locator;
    readonly addAppointmentButton: Locator;
    readonly searchInput: Locator;
    readonly appointmentTable: Locator;
    readonly noRecordsMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        this.appointmentsMenu = page.locator("//span[contains(text(),'Appointments')]");

        this.appointmentsHeader = page.locator("//h1[contains(text(),'Appointments')]");
        this.addAppointmentButton = page.locator("text=Add Appointment");
        this.searchInput = page.locator("//input[@placeholder='Search']");
        this.appointmentTable = page.locator("//table");
        this.noRecordsMessage = page.locator("text=No records found");
    }

    async openAppointments() {
        await expect.soft(this.appointmentsMenu, 'Appointments menu should be visible').toBeVisible();
        await this.appointmentsMenu.click();
    }

    async verifyAppointmentsLoaded() {
        await expect.soft(this.appointmentsHeader, 'Appointments header should be visible').toBeVisible();
        await expect.soft(this.page, 'Appointments URL should contain appointments').toHaveURL(/appointments/i);
    }

    async validateImportantFields() {
        await expect.soft(this.addAppointmentButton, 'Add Appointment button should be visible').toBeVisible();
        await expect.soft(this.searchInput, 'Search input should be visible').toBeVisible();

        const tableVisible = await this.appointmentTable.isVisible();
        if (tableVisible) {
            await expect.soft(this.appointmentTable, 'Appointments table should be visible').toBeVisible();
        } else {
            await expect.soft(this.noRecordsMessage, 'No records message should be visible when table absent').toBeVisible();
        }
    }
}
