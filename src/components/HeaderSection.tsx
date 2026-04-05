import { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderSectionProps {
  onBookClick: () => void;
}

const navItems = [
  { label: "Обо мне", href: "#about" },
  { label: "Подход", href: "#approach" },
  { label: "Стоимость", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const HeaderSection = ({ onBookClick }: HeaderSectionProps) => {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => setOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 pt-4">
        <div className="rounded-full border border-border/80 bg-background/85 backdrop-blur-md shadow-sm px-4 md:px-6 py-3">
          <div className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-4">
            <a
              href="#top"
              className="font-heading font-semibold text-sm md:text-base tracking-tight"
            >
              Анастасия Сотникова
            </a>

            <nav className="hidden lg:flex items-center gap-6 text-sm text-muted-foreground justify-self-center">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
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
                onClick={onBookClick}
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
            <div className="md:hidden pt-4 pb-2 border-t border-border/70 mt-4">
              <nav className="flex flex-col gap-3 text-sm">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="flex flex-col gap-3 mt-4">
                <a
                  href="tel:+79778500815"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  +7 977 850-08-15
                </a>
                <button
                  onClick={() => {
                    setOpen(false);
                    onBookClick();
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
