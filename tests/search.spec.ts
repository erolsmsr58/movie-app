import { test, expect } from "@playwright/test";

test("Search page should search for movies and display results", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Search Movies" })).toBeVisible();

    const input = page.getByPlaceholder("Search movie title...");
    await input.fill("Interstellar");

    const movieCards = page.locator("[data-testid='movie-card']");

    await expect(movieCards).toHaveCount(5);

    const count = await movieCards.count();
    for (let i = 0; i < count; i++) {
        const card = movieCards.nth(i);
        await expect(card).toBeVisible();
    }
});
