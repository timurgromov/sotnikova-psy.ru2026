import AnimatedSection from "./AnimatedSection";

const tiles = [
  {
    title: "Личный опыт восстановления",
    desc: "Я прошла свой путь и знаю, каково это — основа глубокого понимания вашего пути.",
    span: "md:col-span-2",
  },
  {
    title: "Член Ассоциации EMDR",
    desc: "Международный стандарт работы с травмой.",
    span: "",
  },
  {
    title: "Специалист по РПП",
    desc: "Фокус на расстройствах пищевого поведения — не широкий профиль, а глубокая экспертиза.",
    span: "",
  },
  {
    title: "Доказательный подход",
    desc: "Методы с научной базой, а не интуиция и гипотезы.",
    span: "md:col-span-2",
  },
];

const BentoSection = () => (
  <div className="section-gap">
    <div className="container max-w-4xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center">
          Почему мне доверяют
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tiles.map((tile, i) => (
          <AnimatedSection
            key={tile.title}
            delay={i * 0.08}
            className={tile.span}
          >
            <div className="card-surface p-8 h-full">
              <h3 className="font-heading text-lg font-semibold mb-2">{tile.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{tile.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </div>
);

export default BentoSection;
