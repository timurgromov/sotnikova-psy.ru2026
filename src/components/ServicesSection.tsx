import AnimatedSection from "./AnimatedSection";

interface ServicesSectionProps {
  onBookClick: () => void;
}

const services = [
  {
    title: "Встреча-знакомство",
    subtitle: "Бесплатно · 15–20 минут",
    desc: "Для тех, кто хочет познакомиться и задать вопросы. Без обязательств.",
    highlight: true,
  },
  {
    title: "Диагностическая консультация",
    subtitle: "Первая встреча · 60 минут",
    desc: "Для тех, кто хочет план. Определяем диагноз, формулируем цели и выстраиваем маршрут терапии.",
    highlight: false,
  },
  {
    title: "Терапевтическая сессия",
    subtitle: "Регулярные встречи · 50 минут",
    desc: "Для тех, кто готов идти. Глубокая работа с опорой на доказательные методы.",
    highlight: false,
  },
];

const ServicesSection = ({ onBookClick }: ServicesSectionProps) => (
  <div className="section-gap">
    <div className="container max-w-4xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-12 text-center">
          Форматы работы
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <div
              className={`card-surface p-8 h-full flex flex-col ${
                s.highlight ? "ring-2 ring-primary/30" : ""
              }`}
            >
              <p className="text-xs font-medium text-primary mb-3 tracking-wide uppercase">
                {s.subtitle}
              </p>
              <h3 className="font-heading text-lg font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{s.desc}</p>
              {s.highlight && (
                <button
                  onClick={onBookClick}
                  className="mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-opacity w-full"
                >
                  Записаться бесплатно
                </button>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </div>
);

export default ServicesSection;
