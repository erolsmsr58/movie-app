import { test, expect } from "@playwright/test";

test("Featured page should display featured movies", async ({ page }) => {
    await page.goto("/featured");
    await expect(page.getByRole("heading", { name: "Featured Movies" })).toBeVisible();

    const movieCards = page.locator("[data-testid='movie-card']");

    await expect(movieCards).toHaveCount(2);

    const count = await movieCards.count();
    for (let i = 0; i < count; i++) {
        const card = movieCards.nth(i);
        await expect(card).toBeVisible();
    }
});
