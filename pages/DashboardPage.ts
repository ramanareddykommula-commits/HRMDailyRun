import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {

    readonly page: Page;

    // Left Navigation
    readonly dashboardMenu: Locator;
    readonly patientsMenu: Locator;
    readonly appointmentsMenu: Locator;
    readonly billingMenu: Locator;

    // Dashboard Widgets
    readonly welcomeHeader: Locator;
    readonly activePatientsCard: Locator;
    readonly clinicalStaffCard: Locator;
    readonly pendingAppointmentsCard: Locator;
    readonly totalRevenueCard: Locator;
    readonly opdIpdTrendsChart: Locator;
    readonly departmentMatrixChart: Locator;

    // Audit & Security
    readonly systemAuditProtocol: Locator;
    readonly securityStatus: Locator;

    constructor(page: Page) {

        this.page = page;

        // Left Navigation
        this.dashboardMenu = page.locator(
            "//span[contains(text(),'Dashboard')]"
        );

        this.patientsMenu = page.locator(
            "//span[contains(text(),'Patients')]"
        );

        this.appointmentsMenu = page.locator(
            "//span[contains(text(),'Appointments')]"
        );

        this.billingMenu = page.locator(
            "//span[contains(text(),'Billing')]"
        );

        // Main Dashboard
        this.welcomeHeader = page.locator(
            "//h1[contains(text(),'Welcome back')]"
        );

        this.activePatientsCard = page.locator(
            "text=ACTIVE PATIENTS"
        );

        this.clinicalStaffCard = page.locator(
            "text=CLINICAL STAFF"
        );

        this.pendingAppointmentsCard = page.locator(
            "text=PENDING APPTS."
        );

        this.totalRevenueCard = page.locator(
            "text=TOTAL REVENUE"
        );

        this.opdIpdTrendsChart = page.locator(
            "//*[contains(text(),'OPD & IPD Trends')]"
        );

        this.departmentMatrixChart = page.locator(
            "//*[contains(text(),'Department Matrix')]"
        );

        // Audit & Security
        this.systemAuditProtocol = page.locator(
            "text=SYSTEM AUDIT PROTOCOL"
        );

        this.securityStatus = page.locator(
            "text=Security Status"
        );
    }

    async openDashboard() {

        await expect.soft(
            this.dashboardMenu,
            'Dashboard menu should be visible'
        ).toBeVisible();

        await this.dashboardMenu.click();
    }

    async verifyDashboardLoaded() {

        await expect.soft(
            this.welcomeHeader,
            'Welcome header should be visible'
        ).toBeVisible();
    }

    async validateAllDashboardWidgets() {

        // Left Navigation
        await expect.soft(
            this.dashboardMenu,
            'Dashboard menu should be visible'
        ).toBeVisible();

        await expect.soft(
            this.patientsMenu,
            'Patients menu should be visible'
        ).toBeVisible();

        await expect.soft(
            this.appointmentsMenu,
            'Appointments menu should be visible'
        ).toBeVisible();

        await expect.soft(
            this.billingMenu,
            'Billing menu should be visible'
        ).toBeVisible();

        // Main Dashboard Widgets
        await expect.soft(
            this.activePatientsCard,
            'Active Patients card should be visible'
        ).toBeVisible();

        await expect.soft(
            this.clinicalStaffCard,
            'Clinical Staff card should be visible'
        ).toBeVisible();

        await expect.soft(
            this.pendingAppointmentsCard,
            'Pending Appointments card should be visible'
        ).toBeVisible();

        await expect.soft(
            this.totalRevenueCard,
            'Total Revenue card should be visible'
        ).toBeVisible();

        // Charts
        await expect.soft(
            this.opdIpdTrendsChart,
            'OPD & IPD Trends chart should be visible'
        ).toBeVisible();

        await expect.soft(
            this.departmentMatrixChart,
            'Department Matrix chart should be visible'
        ).toBeVisible();

        // Audit & Security
        await expect.soft(
            this.systemAuditProtocol,
            'System Audit Protocol section should be visible'
        ).toBeVisible();

        await expect.soft(
            this.securityStatus,
            'Security Status section should be visible'
        ).toBeVisible();

        console.log('Dashboard validation completed');
    }
}