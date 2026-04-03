import AnimatedSection from "./AnimatedSection";

interface ServicesSectionProps {
  onBookClick: () => void;
}

const concerns = [
  {
    title: "Еда, ограничения и чувство вины",
    items: [
      "Если вы постоянно сидите на диетах, считаете калории, читаете составы — и всё равно срываетесь.",
      "Если вы делите еду на «правильную» и «вредную» и чувствуете вину, когда едите «не то».",
      "Если стараетесь «отработать» еду спортом, голоданием или ограничениями.",
      "Если отказываетесь от еды по вечерам, «чтобы не поправиться», даже когда голодны.",
    ],
  },
  {
    title: "Потеря контакта с телом и переедания",
    items: [
      "Если приёмы пищи не связаны с голодом — едите «по расписанию», «на всякий случай» или вообще забываете поесть.",
      "Если тянет к еде в ответ на стресс, скуку, одиночество, тревогу, злость.",
      "Если вы сталкиваетесь с перееданиями, булимией, чувством потери контроля.",
      "Если недовольны своим телом и внешностью, избегаете зеркал, одежды, фотографий.",
    ],
  },
  {
    title: "Тревога, границы и отношение к себе",
    items: [
      "Если еда — это развлечение, привычка, способ быть с другими или просто «что-то, что всегда рядом».",
      "Если вам трудно говорить «нет», отстаивать границы и вы часто живёте по чужим ожиданиям.",
      "Если вы много сомневаетесь в себе, чувствуете вину, тревогу, стыд, неуверенность — и всё это только усиливает трудности с едой и телом.",
    ],
  },
];

const ServicesSection = ({ onBookClick }: ServicesSectionProps) => (
  <div className="section-gap">
    <div className="container max-w-4xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-12 text-center">
          С какими вопросами к вам можно обратиться?
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <p className="text-muted-foreground text-sm leading-relaxed text-center max-w-3xl mx-auto mb-10">
          С чем я могу помочь:
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {concerns.map((group, i) => (
          <AnimatedSection key={group.title} delay={i * 0.1}>
            <div className="card-surface p-8 h-full flex flex-col">
              <h3 className="font-heading text-lg font-semibold mb-4">{group.title}</h3>
              <ul className="text-muted-foreground text-sm leading-relaxed space-y-3 flex-1">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {i === 0 && (
                <button
                  onClick={onBookClick}
                  className="mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-opacity w-full"
                >
                  Записаться на консультацию
                </button>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </div>
);

export default ServicesSection;
