import AnimatedSection from "./AnimatedSection";

const benefits = [
  {
    title: "Больше ясности",
    desc: "Почему именно с вами это происходит — и это не ваша вина.",
  },
  {
    title: "Больше опоры",
    desc: "На тело, на чувства и на свои потребности.",
  },
  {
    title: "Больше гибкости",
    desc: "В еде, в отношениях и в отношении к себе.",
  },
  {
    title: "Больше свободы",
    desc: "От циклов «срыв — вина — обещание с понедельника».",
  },
  {
    title: "Устойчивое состояние",
    desc: "Постепенно еда перестаёт быть врагом, а тело — объектом войны.",
  },
];

const BenefitsSection = () => (
  <div className="section-gap">
    <div className="container max-w-5xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-center">
          Что вы получите в процессе работы
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed text-center max-w-2xl mx-auto mb-8">
          Терапия не сводится к контролю еды. Её задача — вернуть больше
          устойчивости, свободы и опоры в повседневной жизни.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
        {benefits.map((benefit, i) => (
          <AnimatedSection key={benefit.title} delay={i * 0.06}>
            <div className="card-surface p-6 h-full">
              <h3 className="font-heading text-lg font-semibold mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </div>
);

export default BenefitsSection;
