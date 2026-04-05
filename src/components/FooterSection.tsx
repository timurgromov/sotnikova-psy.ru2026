import { Link } from "react-router-dom";

const maxUrl =
  "https://max.ru/u/f9LHodD0cOKA2AvcWg4u-wPXy8WBXgGhmXVa2fayy94L3qvhN16LQMN47No";

const FooterSection = () => (
  <footer id="contacts" className="py-12 border-t border-border">
    <div className="container max-w-2xl mx-auto px-6 text-center">
      <p className="font-heading font-semibold mb-2">Анастасия Сотникова</p>
      <p className="text-muted-foreground text-sm mb-6">
        Психолог · Специалист по расстройствам пищевого поведения
      </p>
      <a
        href="tel:+79778500815"
        className="inline-block text-sm font-medium mb-6 hover:text-primary transition-colors"
      >
        +7 977 850-08-15
      </a>
      <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
        <a
          href="https://t.me/Anastasiasotnikovaa"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          Telegram
        </a>
        <a
          href="https://wa.me/79778500815"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          WhatsApp
        </a>
        <a
          href={maxUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          Max
        </a>
      </div>
      <div className="mt-6">
        <Link
          to="/privacy"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Политика конфиденциальности
        </Link>
      </div>
    </div>
  </footer>
);

export default FooterSection;
