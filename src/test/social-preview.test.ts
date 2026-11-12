import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const imageFile = "og-telegram-20261112.jpeg";

describe("social preview", () => {
  it("uses the versioned OG image that is present in public assets", () => {
    const indexHtml = readFileSync(resolve(process.cwd(), "index.html"), "utf8");
    const imageUrl = `https://sotnikova-psy.ru/${imageFile}`;

    expect(indexHtml).toContain(imageUrl);
    expect(indexHtml).toContain("Сессии онлайн и очно.");
    expect(existsSync(resolve(process.cwd(), "public", imageFile))).toBe(true);
  });
});
