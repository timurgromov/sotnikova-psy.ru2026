import { fireEvent, render, screen, within } from "@testing-library/react";
import type { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";
import PricingSection from "@/components/PricingSection";

vi.mock("@/components/AnimatedSection", () => ({
  default: ({ children, className = "" }: { children: ReactNode; className?: string }) => (
    <section className={className}>{children}</section>
  ),
}));

describe("PricingSection", () => {
  it("groups formats into two service cards and preserves every booking type", () => {
    const onBookClick = vi.fn();
    render(<PricingSection onBookClick={onBookClick} />);

    expect(screen.getAllByRole("article")).toHaveLength(2);
    expect(screen.getAllByText("Москва · м. Курская")).toHaveLength(2);

    const intro = screen.getByRole("heading", { name: "Встреча-знакомство" }).closest("section");
    expect(intro).not.toBeNull();
    fireEvent.click(within(intro!).getByRole("button", { name: "Записаться" }));

    const scenarios = [
      ["Сессия: Онлайн", "Записаться онлайн", "online"],
      ["Сессия: Очно", "Записаться очно", "in-person"],
      ["Диагностическая сессия: Онлайн", "Записаться онлайн", "diagnostic-online"],
      ["Диагностическая сессия: Очно", "Записаться очно", "diagnostic-in-person"],
    ] as const;

    scenarios.forEach(([sectionLabel, buttonLabel]) => {
      fireEvent.click(
        within(screen.getByLabelText(sectionLabel)).getByRole("button", { name: buttonLabel }),
      );
    });

    expect(onBookClick.mock.calls).toEqual([
      ["free"],
      ["online"],
      ["in-person"],
      ["diagnostic-online"],
      ["diagnostic-in-person"],
    ]);
  });
});
