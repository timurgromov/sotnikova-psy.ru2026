import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import BookingOverlay, { type BookingType } from "@/components/BookingOverlay";

const renderOverlay = (bookingType: BookingType) =>
  render(
    <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <BookingOverlay open bookingType={bookingType} onClose={vi.fn()} />
    </MemoryRouter>,
  );

describe("BookingOverlay", () => {
  it("describes both online session options for the shared online CTA", () => {
    renderOverlay("online");

    expect(
      screen.getByRole("heading", { name: "Запишитесь на онлайн-консультацию" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/сессия 55 минут или диагностическая сессия 90 минут/i),
    ).toBeInTheDocument();
  });

  it("describes both in-person session options for the shared in-person CTA", () => {
    renderOverlay("in-person");

    expect(
      screen.getByRole("heading", { name: "Запишитесь на очную консультацию" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/сессия 50–55 минут или диагностическая сессия 90 минут/i),
    ).toBeInTheDocument();
  });
});
