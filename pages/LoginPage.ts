import { Page, Locator } from '@playwright/test';

export class LoginPage {

    readonly page: Page;

    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.emailInput = page.locator("//input[@placeholder='Email or Phone Number']");
        this.passwordInput = page.locator("//input[@name='password']");
        this.loginButton = page.locator("//button[contains(text(),'LOGIN')]");
    }

    async navigate() {
        console.log('????Navigating to login page...'+process.env.BASE_URL!);
        await this.page.goto(process.env.BASE_URL!);
    }

    async login(username: string, password: string) {
        await this.emailInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}