import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const methods = [
  {
    name: "CBT-E (Когнитивно-поведенческая терапия расстройств пищевого поведения)",
    benefit: "Золотой стандарт лечения РПП — структурированный подход к изменению мыслей и поведения вокруг еды и тела.",
  },
  {
    name: "EMDR (Десенсибилизация и переработка движением глаз)",
    benefit: "Бережная переработка травматичного опыта без лишних слов.",
  },
  {
     name: "План трёх Марши Херрин",
    benefit: "Практичный подход к нормализации питания через структурированный план и поддержку.",
  },
  {
    name: "Мотивационное интервьюирование",
    benefit: "Помогает найти внутреннюю мотивацию к изменениям, когда амбивалентность мешает двигаться.",
  },
  {
    name: "Третья волна КПТ (ACT, DBT-элементы)",
    benefit: "Развитие осознанности и эмоциональной устойчивости для долгосрочной ремиссии.",
  },
];

const ExpertiseSection = () => (
  <div className="section-gap">
    <div className="container max-w-2xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-12 text-center">
          Методы работы
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <Accordion type="single" collapsible className="space-y-3">
          {methods.map((m, i) => (
            <AccordionItem
              key={i}
              value={`method-${i}`}
              className="card-surface px-6 border-none"
            >
              <AccordionTrigger className="font-heading text-sm md:text-base font-semibold hover:no-underline py-5">
                {m.name}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {m.benefit}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>
    </div>
  </div>
);

export default ExpertiseSection;
