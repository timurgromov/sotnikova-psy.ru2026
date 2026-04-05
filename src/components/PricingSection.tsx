import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

interface PricingSectionProps {
  onBookClick: () => void;
}

const pricingRows = [
  {
    title: "1 сессия",
    duration: "55 минут",
    price: "5 000 ₽",
  },
  {
    title: "Диагностическая сессия",
    duration: "90 минут",
    price: "5 000 ₽",
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
          Прозрачный формат работы без скрытых условий. Сначала можно спокойно
          познакомиться, а затем решить, подходит ли вам регулярная терапия.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.06}>
        <div className="card-surface border border-primary/15 bg-primary/5 px-8 py-7 md:px-12 text-center">
          <div className="font-heading text-xl md:text-2xl font-bold">
            Запишитесь на бесплатную консультацию
          </div>
          <p className="text-muted-foreground text-base md:text-lg mt-2">
            Время 15–20 минут
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.12}>
        <div className="mt-8 space-y-5">
          {pricingRows.map((row) => (
            <div
              key={row.title}
              className="flex items-end gap-3 text-lg md:text-2xl leading-tight"
            >
              <div className="shrink-0 font-medium text-foreground">
                {row.title} ({row.duration})
              </div>
              <div className="flex-1 border-b border-dotted border-foreground/30 translate-y-[-0.25em]" />
              <div className="shrink-0 font-medium text-foreground whitespace-nowrap">
                {row.price}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.18}>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed italic max-w-3xl mt-8">
          Оплата осуществляется в рублях.
          <br />
          Возможны альтернативные способы расчёта, они обсуждаются
          индивидуально.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.24}>
        <div className="card-surface border border-primary/15 bg-primary/10 px-8 py-7 md:px-12 mt-8 text-center">
          <button
            onClick={onBookClick}
            className="font-heading text-xl md:text-2xl font-bold text-foreground hover:opacity-80 transition-opacity"
          >
            Записаться на сессию
          </button>
          <p className="text-muted-foreground text-sm md:text-base mt-3">
            Нажимая на кнопку, вы соглашаетесь с{" "}
            <Link
              to="/privacy"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              Политикой конфиденциальности
            </Link>
          </p>
        </div>
      </AnimatedSection>
    </div>
  </div>
);

export default PricingSection;
