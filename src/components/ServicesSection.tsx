import AnimatedSection from "./AnimatedSection";

interface ServicesSectionProps {
  onBookClick: () => void;
}

const concerns = [
  {
    title: "Еда, ограничения и чувство вины",
    items: [
      "Постоянные диеты и подсчёт калорий.",
      "Деление еды на «правильную» и «вредную».",
      "Чувство вины после еды.",
      "Попытки «отработать» еду спортом или ограничениями.",
      "Отказ от еды вечером из страха набрать вес.",
    ],
  },
  {
    title: "Потеря контакта с телом и переедания",
    items: [
      "Еда не по голоду, а «по расписанию» или «на всякий случай».",
      "Тяга к еде на фоне стресса, тревоги или одиночества.",
      "Переедания, булимия, чувство потери контроля.",
      "Недовольство телом и внешностью.",
      "Избегание зеркал, одежды и фотографий.",
    ],
  },
  {
    title: "Тревога, границы и отношение к себе",
    items: [
      "Еда как способ справляться с эмоциями.",
      "Трудно говорить «нет» и отстаивать границы.",
      "Жизнь по чужим ожиданиям.",
      "Вина, стыд, тревога и неуверенность.",
      "Самокритика, усиливающая трудности с едой и телом.",
    ],
  },
];

const ServicesSection = ({ onBookClick }: ServicesSectionProps) => (
  <div className="section-gap">
    <div className="container max-w-4xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-center">
          С какими вопросами к вам можно обратиться?
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <p className="text-muted-foreground text-sm leading-relaxed text-center max-w-3xl mx-auto mb-6">
          С чем я могу помочь:
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {concerns.map((group, i) => (
          <AnimatedSection key={group.title} delay={i * 0.1}>
            <div className="card-surface p-8 h-full flex flex-col">
              <h3 className="font-heading text-lg font-semibold mb-4">{group.title}</h3>
              <ul className="text-muted-foreground text-sm leading-relaxed space-y-3 flex-1">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {i === 2 && (
                <button
                  onClick={onBookClick}
                  className="mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-opacity w-full"
                >
                  Записаться на консультацию
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
