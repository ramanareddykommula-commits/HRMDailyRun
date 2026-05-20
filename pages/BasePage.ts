import { Page, expect } from '@playwright/test';
import { logger } from '../utils/Logger';
import { ScreenshotUtil } from '../utils/ScreenshotUtil';

export class BasePage {

  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async click(locator: string) {
    logger.info(`Clicking on : ${locator}`);
    await this.page.locator(locator).click();
  }

  async enterText(locator: string, value: string) {
    logger.info(`Entering text into : ${locator}`);
    await this.page.locator(locator).fill(value);
  }

  async getText(locator: string): Promise<string> {
    return await this.page.locator(locator).textContent() || '';
  }

  async hardAssertElementVisible(locator: string, screenshotName: string) {
    try {
      await expect(this.page.locator(locator)).toBeVisible();
      logger.info(`Assertion Passed : ${locator} visible`);
    } catch (error) {
      logger.error(`Assertion Failed : ${locator} not visible`);

      await ScreenshotUtil.captureFullPage(
        this.page,
        screenshotName
      );

      throw error;
    }
  }

  async softAssertElementVisible(locator: string) {
    await expect.soft(this.page.locator(locator)).toBeVisible();
  }
}