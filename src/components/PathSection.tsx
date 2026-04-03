import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    num: "1",
    title: "Знакомство",
    desc: "Бесплатная 20-минутная встреча, чтобы понять, подходим ли мы друг другу.",
  },
  {
    num: "2",
    title: "Диагностика и карта пути",
    desc: "Определяем ваш уникальный профиль и выстраиваем индивидуальный план терапии.",
  },
  {
    num: "3",
    title: "Бережная терапия",
    desc: "Работаем в вашем темпе, опираясь на доказательные методы и ваши ресурсы.",
  },
  {
    num: "4",
    title: "Устойчивая ремиссия",
    desc: "Вы обретаете свободу от навязчивых мыслей о еде и теле — и удерживаете её.",
  },
];

const PathSection = () => (
  <div id="path" className="section-gap">
    <div className="container max-w-2xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-10 text-center">
          Как мы будем работать
        </h2>
      </AnimatedSection>

      <div className="space-y-8">
        {steps.map((step, i) => (
          <AnimatedSection key={step.num} delay={i * 0.1}>
            <div className="flex gap-6 items-start">
              <span className="font-heading text-4xl font-bold text-primary/40 leading-none mt-1 select-none">
                {step.num}
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold mb-1">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </div>
);

export default PathSection;
