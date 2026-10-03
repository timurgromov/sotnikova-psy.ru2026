import type { BookingType } from "./BookingOverlay";
import AnimatedSection from "./AnimatedSection";

interface PricingSectionProps {
  onBookClick: (bookingType?: BookingType) => void;
}

type SessionOption = {
  title: string;
  duration: string;
  price: string;
  description: string;
};

type PricingFormat = {
  bookingType: BookingType;
  title: string;
  note: string;
  buttonLabel: string;
  sessions: SessionOption[];
};

const pricingFormats: PricingFormat[] = [
  {
    bookingType: "online",
    title: "Онлайн",
    note: "Видеовстреча на удобной платформе",
    buttonLabel: "Записаться онлайн",
    sessions: [
      {
        title: "Сессия",
        duration: "55 минут",
        price: "5 500 ₽",
        description: "Основной формат регулярной терапии.",
      },
      {
        title: "Диагностическая сессия",
        duration: "90 минут",
        price: "6 000 ₽",
        description: "Для первичной концептуализации и рекомендаций.",
      },
    ],
  },
  {
    bookingType: "in-person",
    title: "Очно в Москве",
    note: "м. Курская",
    buttonLabel: "Записаться очно",
    sessions: [
      {
        title: "Сессия",
        duration: "50–55 минут",
        price: "7 500 ₽",
        description: "Основной формат регулярной терапии.",
      },
      {
        title: "Диагностическая сессия",
        duration: "90 минут",
        price: "8 000 ₽",
        description: "Для первичной концептуализации и рекомендаций.",
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
          Выберите удобный формат встречи и подходящую длительность сессии.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <section
          aria-labelledby="intro-meeting-title"
          className="card-surface border border-primary/25 bg-primary/5 px-6 py-5 md:px-7"
        >
          <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_auto_auto] md:items-center md:gap-7">
            <div>
              <h3 id="intro-meeting-title" className="font-heading text-lg font-semibold">
                Встреча-знакомство
              </h3>
              <p className="text-muted-foreground text-sm mt-1">
                Онлайн · 15–20 минут · чтобы познакомиться и задать вопросы
              </p>
            </div>
            <p className="font-heading text-lg font-bold whitespace-nowrap">Бесплатно</p>
            <button
              type="button"
              onClick={() => onBookClick("free")}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-opacity w-full md:w-auto"
            >
              Записаться
            </button>
          </div>
        </section>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        {pricingFormats.map((format, formatIndex) => {
          const headingId = `pricing-${format.bookingType}-title`;

          return (
            <AnimatedSection
              key={format.bookingType}
              delay={(formatIndex + 1) * 0.08}
              className="h-full"
            >
              <article
                aria-labelledby={headingId}
                className="card-surface p-6 md:p-7 h-full flex flex-col"
              >
                <div>
                  <h3 id={headingId} className="font-heading text-xl font-semibold">
                    {format.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    {format.note}
                  </p>
                </div>

                <div className="divide-y divide-border border-y border-border mt-6 flex-1">
                  {format.sessions.map((session) => (
                    <section
                      key={session.title}
                      aria-label={`${format.title}: ${session.title}`}
                      className="py-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-heading text-base font-semibold">
                            {session.title}
                          </h4>
                          <p className="text-muted-foreground text-sm mt-1">
                            {session.duration}
                          </p>
                        </div>
                        <p className="font-heading text-lg font-bold whitespace-nowrap">
                          {session.price}
                        </p>
                      </div>
                      <p className="text-muted-foreground text-sm mt-3">
                        {session.description}
                      </p>
                    </section>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onBookClick(format.bookingType)}
                  className="mt-5 bg-primary text-primary-foreground px-6 py-3 rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-opacity w-full"
                >
                  {format.buttonLabel}
                </button>
              </article>
            </AnimatedSection>
          );
        })}
      </div>

      <AnimatedSection delay={0.32}>
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
