import type { BookingType } from "./BookingOverlay";
import AnimatedSection from "./AnimatedSection";

interface PricingSectionProps {
  onBookClick: (bookingType?: BookingType) => void;
}

const pricingItems = [
  {
    bookingType: "free" as BookingType,
    title: "Встреча-знакомство",
    duration: "15-20 минут",
    price: "Бесплатно",
    desc: "Короткая онлайн-встреча, чтобы познакомиться, задать вопросы и понять, комфортно ли вам начинать работу.",
    accent: true,
  },
  {
    bookingType: null,
    title: "1 сессия",
    duration: "55 минут",
    price: "5 000 ₽",
    desc: "Основной формат регулярной терапии с бережной и структурной работой над запросом.",
  },
  {
    bookingType: "diagnostic" as BookingType,
    title: "Диагностическая сессия",
    duration: "90 минут",
    price: "5 500 ₽",
    desc: "Подходит, если важно глубже разобраться в ситуации, получить первичную концептуализацию и первые рекомендации.",
  },
];

const PricingSection = ({ onBookClick }: PricingSectionProps) => (
  <div id="pricing" className="section-gap">
    <div className="container max-w-5xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-center">
          Стоимость
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed text-center max-w-2xl mx-auto mb-8">
          Формат и стоимость известны заранее.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {pricingItems.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.08}>
            <div
              className={`card-surface p-7 h-full flex flex-col ${
                item.accent ? "border border-primary/20 bg-primary/5" : ""
              }`}
            >
              <div className="flex flex-col gap-2 xl:grid xl:grid-cols-[minmax(0,1fr)_auto] xl:items-start xl:gap-x-4">
                <div className="w-full xl:min-h-[4.5rem]">
                  <h3 className="font-heading text-lg font-semibold leading-tight max-w-none">
                    {item.title}
                  </h3>
                </div>
                <div className="font-heading text-base xl:text-lg font-bold whitespace-nowrap">
                  {item.price}
                </div>
              </div>

              <p className="text-muted-foreground text-sm mt-2 xl:mt-1">
                {item.duration}
              </p>

              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mt-6">
                {item.desc}
              </p>
              {item.bookingType && (
                <button
                  onClick={() => onBookClick(item.bookingType)}
                  className="mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-opacity w-full"
                >
                  Записаться
                </button>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.24}>
        <p className="text-muted-foreground text-sm leading-relaxed text-center italic max-w-3xl mx-auto mt-6">
          Оплата осуществляется в рублях. Если нужен другой формат расчёта,
          это можно обсудить индивидуально.
        </p>
      </AnimatedSection>
    </div>
  </div>
);

export default PricingSection;
