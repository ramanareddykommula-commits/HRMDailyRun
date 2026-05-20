import { Page, Locator } from '@playwright/test';

export class ScreenshotUtil {

  static async captureFullPage(page: Page, name: string) {
    await page.screenshot({
      path: `screenshots/${name}.png`,
      fullPage: true
    });
  }

  static async capturePage(page: Page, name: string) {
    await page.screenshot({
      path: `screenshots/${name}.png`
    });
  }

  static async captureElement(locator: Locator, name: string) {
    await locator.screenshot({
      path: `screenshots/${name}.png`
    });
  }
}