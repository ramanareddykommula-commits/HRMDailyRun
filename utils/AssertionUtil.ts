import { expect } from '@playwright/test';

export class AssertionUtil {

    static async verifyTitle(page: any, expected: string) {
        await expect(page).toHaveTitle(expected);
    }
}