const FooterSection = () => (
  <footer className="py-12 border-t border-border">
    <div className="container max-w-2xl mx-auto px-6 text-center">
      <p className="font-heading font-semibold mb-2">Анастасия Сотникова</p>
      <p className="text-muted-foreground text-sm mb-6">
        Психолог · Специалист по расстройствам пищевого поведения
      </p>
      <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
        <a
          href="https://t.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          Telegram
        </a>
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </footer>
);

export default FooterSection;
