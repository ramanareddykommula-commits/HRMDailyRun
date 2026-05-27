import { Page, Locator, expect } from '@playwright/test';

export class PatientsPage {

    readonly page: Page;

    // Left Navigation
    readonly patientsMenu: Locator;

    // Patients Page
    readonly patientsHeader: Locator;
    readonly addPatientButton: Locator;
    readonly searchInput: Locator;
    readonly patientTable: Locator;
    readonly noRecordsMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        this.patientsMenu = page.locator("//span[contains(text(),'Patients')]");

        this.patientsHeader = page.locator("//h1[contains(text(),'Patients')]");
        this.addPatientButton = page.locator("text=Add Patient");
        this.searchInput = page.locator("//input[@placeholder='Search']");
        this.patientTable = page.locator("//table");
        this.noRecordsMessage = page.locator("text=No records found");
    }

    async openPatients() {
        await expect.soft(this.patientsMenu, 'Patients menu should be visible').toBeVisible();
        await this.patientsMenu.click();
    }

    async verifyPatientsLoaded() {
        await expect.soft(this.patientsHeader, 'Patients header should be visible').toBeVisible();
        await expect.soft(this.page, 'Patients URL should contain patients').toHaveURL(/patients/i);
    }

    async validateImportantFields() {
        await expect.soft(this.addPatientButton, 'Add Patient button should be visible').toBeVisible();
        await expect.soft(this.searchInput, 'Search input should be visible').toBeVisible();

        // Table may or may not contain rows depending on data; check table or empty state
        const tableVisible = await this.patientTable.isVisible();
        if (tableVisible) {
            await expect.soft(this.patientTable, 'Patient table should be visible').toBeVisible();
        } else {
            await expect.soft(this.noRecordsMessage, 'No records message should be visible when table absent').toBeVisible();
        }
    }
}
