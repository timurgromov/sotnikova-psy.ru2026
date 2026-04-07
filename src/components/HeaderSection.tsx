import type { BookingType } from "./BookingOverlay";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

interface HeaderSectionProps {
  onBookClick: (bookingType?: BookingType) => void;
}

const navItems = [
  { label: "Обо мне", sectionId: "about" },
  { label: "Стоимость", sectionId: "pricing" },
  { label: "FAQ", sectionId: "faq" },
];

const HeaderSection = ({ onBookClick }: HeaderSectionProps) => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 pt-4">
        <div className="rounded-[28px] md:rounded-full border border-border/80 bg-background/85 backdrop-blur-md shadow-sm px-4 md:px-6 py-3">
          <div className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("top")}
              className="font-heading font-semibold text-sm md:text-base tracking-tight flex flex-col items-start text-left leading-tight"
            >
              <span>Анастасия Сотникова</span>
              <span className="text-[11px] md:text-xs font-normal text-muted-foreground">
                Психолог
              </span>
            </button>

            <nav className="hidden lg:flex items-center gap-6 text-sm text-muted-foreground justify-self-center">
              {navItems.map((item) => (
                <button
                  key={item.sectionId}
                  type="button"
                  onClick={() => scrollToSection(item.sectionId)}
                  className="hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4 lg:justify-self-end">
              <a
                href="tel:+79778500815"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                +7 977 850-08-15
              </a>
              <button
                type="button"
                onClick={() => onBookClick("free")}
                className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Записаться
              </button>
            </div>

            <button
              onClick={() => setOpen((value) => !value)}
              className="md:hidden inline-flex items-center justify-center justify-self-end w-10 h-10 rounded-full border border-border/80 text-foreground"
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden mt-3 rounded-[24px] border border-border/70 bg-background/95 px-4 py-4 shadow-md">
              <nav className="flex flex-col gap-4 text-sm">
                {navItems.map((item) => (
                  <button
                    key={item.sectionId}
                    type="button"
                    onClick={() => handleNavClick(item.sectionId)}
                    className="w-full text-left text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border/60">
                <a
                  href="tel:+79778500815"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  +7 977 850-08-15
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    onBookClick("free");
                  }}
                  className="bg-primary text-primary-foreground px-5 py-3 rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Записаться
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
