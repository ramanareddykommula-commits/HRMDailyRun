import { test } from '@playwright/test';
import { ScreenshotUtil } from './ScreenshotUtil';


test.afterEach(async ({ page }, testInfo) => {

  if (testInfo.status !== testInfo.expectedStatus) {

    await ScreenshotUtil.captureFullPage(
      page,
      `FAILED-${testInfo.title}`
    );
  }
});