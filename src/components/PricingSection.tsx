import AnimatedSection from "./AnimatedSection";

interface PricingSectionProps {
  onBookClick: () => void;
}

const pricingItems = [
  {
    title: "Встреча-знакомство",
    duration: "15-20 минут",
    price: "Бесплатно",
    desc: "Короткая онлайн-встреча, чтобы познакомиться, задать вопросы и понять, комфортно ли вам начинать работу.",
  },
  {
    title: "1 сессия",
    duration: "55 минут",
    price: "5 000 ₽",
    desc: "Основной формат регулярной терапии с бережной и структурной работой над запросом.",
  },
  {
    title: "Диагностическая сессия",
    duration: "90 минут",
    price: "5 000 ₽",
    desc: "Подходит, если важно глубже разобраться в ситуации, получить первичную концептуализацию и первые рекомендации.",
  },
];

const PricingSection = ({ onBookClick }: PricingSectionProps) => (
  <div className="section-gap">
    <div className="container max-w-5xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-center">
          Стоимость
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed text-center max-w-2xl mx-auto mb-8">
          Формат работы и стоимость прозрачны заранее, чтобы вы могли спокойно
          оценить, подходит ли вам этот путь.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pricingItems.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.08}>
            <div className="card-surface p-7 h-full flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-4 min-h-[92px]">
                <div className="max-w-[70%]">
                  <h3 className="font-heading text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {item.duration}
                  </p>
                </div>
                <div className="font-heading text-lg font-bold whitespace-nowrap">
                  {item.price}
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {item.desc}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.28}>
        <div className="flex justify-center mt-6">
          <button
            onClick={onBookClick}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-heading font-semibold text-sm md:text-base hover:opacity-90 transition-opacity"
          >
            Записаться на бесплатную консультацию
          </button>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.32}>
        <p className="text-muted-foreground text-sm leading-relaxed text-center italic max-w-3xl mx-auto mt-6">
          Оплата осуществляется в рублях. Если нужен другой формат расчёта,
          это можно обсудить индивидуально.
        </p>
      </AnimatedSection>
    </div>
  </div>
);

export default PricingSection;
