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
  it("groups both session types into one card per meeting format", () => {
    const onBookClick = vi.fn();
    render(<PricingSection onBookClick={onBookClick} />);

    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(2);

    const onlineCard = screen.getByRole("heading", { name: "Онлайн" }).closest("article");
    const inPersonCard = screen.getByRole("heading", { name: "Очно в Москве" }).closest("article");
    expect(onlineCard).not.toBeNull();
    expect(inPersonCard).not.toBeNull();

    expect(within(onlineCard!).getAllByText("Сессия")).toHaveLength(1);
    expect(within(onlineCard!).getByText("Диагностическая сессия")).toBeInTheDocument();
    expect(within(onlineCard!).getByText("5 500 ₽")).toBeInTheDocument();
    expect(within(onlineCard!).getByText("6 000 ₽")).toBeInTheDocument();

    expect(within(inPersonCard!).getAllByText("Сессия")).toHaveLength(1);
    expect(within(inPersonCard!).getByText("Диагностическая сессия")).toBeInTheDocument();
    expect(within(inPersonCard!).getByText("7 500 ₽")).toBeInTheDocument();
    expect(within(inPersonCard!).getByText("8 000 ₽")).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(3);

    const intro = screen.getByRole("heading", { name: "Встреча-знакомство" }).closest("section");
    expect(intro).not.toBeNull();
    fireEvent.click(within(intro!).getByRole("button", { name: "Записаться" }));

    fireEvent.click(within(onlineCard!).getByRole("button", { name: "Записаться онлайн" }));
    fireEvent.click(within(inPersonCard!).getByRole("button", { name: "Записаться очно" }));

    expect(onBookClick.mock.calls).toEqual([
      ["free"],
      ["online"],
      ["in-person"],
    ]);
  });
});
