import { test, expect } from "@playwright/test";

test("should render image correctly", async ({ page }) => {
  await page.goto("/hello");
  await page.waitForLoadState("networkidle");

  const figure = page.locator("figure.fig-normal");
  const image = figure.locator('img[alt="Eloy - Inside"]');
  const figcaption = figure.locator("figcaption");

  await expect(image).toBeVisible();
  await expect(image).toHaveAttribute(
    "src",
    /.*\/images\/hello\/eloy-inside\.jpg$/
  );
  await expect(image).toHaveAttribute("alt", "Eloy - Inside");
  await expect(figcaption).toHaveText("© Inside (Eloy album), Roberto Patelli");

  const imageSrc = await image.getAttribute("src");
  const imageResponse = await page.request.get(imageSrc);
  expect(imageResponse.status()).toBe(200);
});
