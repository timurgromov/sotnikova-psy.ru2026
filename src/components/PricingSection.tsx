import type { BookingType } from "./BookingOverlay";
import AnimatedSection from "./AnimatedSection";

interface PricingSectionProps {
  onBookClick: (bookingType?: BookingType) => void;
}

type PricingItem = {
  bookingType: BookingType;
  title: string;
  duration: string;
  price: string;
  desc: string;
  accent?: boolean;
};

const pricingGroups: Array<{ title: string; items: PricingItem[] }> = [
  {
    title: "Онлайн",
    items: [
      {
        bookingType: "free",
        title: "Встреча-знакомство",
        duration: "15–20 минут",
        price: "Бесплатно",
        desc: "Короткая онлайн-встреча, чтобы познакомиться, задать вопросы и понять, комфортно ли вам начинать работу.",
        accent: true,
      },
      {
        bookingType: "online",
        title: "Онлайн-сессия",
        duration: "55 минут",
        price: "5 500 ₽",
        desc: "Основной формат регулярной терапии с бережной и структурной работой над запросом.",
      },
      {
        bookingType: "diagnostic-online",
        title: "Диагностическая онлайн-сессия",
        duration: "90 минут",
        price: "6 000 ₽",
        desc: "Подходит, если важно глубже разобраться в ситуации, получить первичную концептуализацию и первые рекомендации.",
      },
    ],
  },
  {
    title: "Очно в Москве · м. Курская",
    items: [
      {
        bookingType: "in-person",
        title: "Очная встреча в Москве",
        duration: "50–55 минут",
        price: "7 500 ₽",
        desc: "Очная консультация в Москве, м. Курская.",
      },
      {
        bookingType: "diagnostic-in-person",
        title: "Диагностическая сессия в Москве",
        duration: "90 минут",
        price: "8 000 ₽",
        desc: "Очная диагностическая встреча в Москве, м. Курская.",
      },
    ],
  },
];

const PricingSection = ({ onBookClick }: PricingSectionProps) => (
  <div id="pricing" className="section-gap">
    <div className="container max-w-5xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-center">
          Стоимость
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed text-center max-w-2xl mx-auto mb-10">
          Формат и стоимость известны заранее.
        </p>
      </AnimatedSection>

      <div className="space-y-10">
        {pricingGroups.map((group, groupIndex) => (
          <section key={group.title} aria-labelledby={`pricing-${groupIndex}`}>
            <h3
              id={`pricing-${groupIndex}`}
              className="font-heading text-lg font-semibold text-center mb-4"
            >
              {group.title}
            </h3>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${
                group.items.length === 3 ? "xl:grid-cols-3" : "max-w-3xl mx-auto"
              }`}
            >
              {group.items.map((item, itemIndex) => (
                <AnimatedSection key={item.title} delay={(groupIndex * 3 + itemIndex) * 0.08}>
                  <div
                    className={`card-surface p-7 h-full flex flex-col ${
                      item.accent ? "border border-primary/25 bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex flex-col gap-2 xl:grid xl:grid-cols-[minmax(0,1fr)_auto] xl:items-start xl:gap-x-4">
                      <div className="w-full xl:min-h-[4.5rem]">
                        <h4 className="font-heading text-lg font-semibold leading-tight max-w-none">
                          {item.title}
                        </h4>
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
                    <button
                      type="button"
                      onClick={() => onBookClick(item.bookingType)}
                      className="mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-opacity w-full"
                    >
                      Записаться
                    </button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>
        ))}
      </div>

      <AnimatedSection delay={0.4}>
        <p className="text-muted-foreground text-sm leading-relaxed text-center italic max-w-3xl mx-auto mt-6">
          Оплата осуществляется в рублях. Для клиентов за пределами РФ
          возможна оплата зарубежной картой — в этом случае к стоимости
          сессии добавляется 10% комиссии платёжной системы.
        </p>
      </AnimatedSection>
    </div>
  </div>
);

export default PricingSection;
