import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const methods = [
  {
    name: "Когнитивно-поведенческая терапия (КПТ-у и КПТ-10)",
    benefit:
      "Подходы, специально разработанные для работы с расстройствами пищевого поведения.",
  },
  {
    name: "План питания Марши Херрин",
    benefit:
      "Используется для восстановления стабильного пищевого поведения и снижения хаоса вокруг еды.",
  },
  {
    name: "Программы по работе с образом тела",
    benefit:
      "Помогают улучшить восприятие себя и снизить телесную тревожность.",
  },
  {
    name: "Техники mindfulness",
    benefit:
      "Осознанность помогает снижать тревогу и лучше чувствовать тело, эмоции и свои потребности.",
  },
  {
    name: "Упражнения на самооценку и снижение внутреннего критика",
    benefit:
      "Используются для более устойчивой опоры на себя и уменьшения самонаказания.",
  },
  {
    name: "ДПДГ (EMDR)",
    benefit:
      "Метод, рекомендованный ВОЗ для переработки травматичного опыта и снижения эмоционального напряжения.",
  },
];

const ExpertiseSection = () => (
  <div className="section-gap">
    <div className="container max-w-2xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center">
          Про подходы
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
