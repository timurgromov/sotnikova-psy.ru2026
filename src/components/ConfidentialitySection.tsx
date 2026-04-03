import { Shield, Lock, Heart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const items = [
  {
    icon: Shield,
    title: "Конфиденциальность сессий",
    desc: "Конфиденциальность — один из ключевых принципов в работе психолога. Всё, что вы рассказываете на сессиях, остаётся между нами.",
  },
  {
    icon: Lock,
    title: "Супервизия без раскрытия личности",
    desc: "Если в работе возникают сложности и нужен свежий взгляд, я могу обратиться за супервизией. Но даже в этом случае ваш случай обсуждается обезличенно: без имён, деталей и всего, что могло бы вас идентифицировать.",
  },
  {
    icon: Heart,
    title: "Бережный профессиональный стандарт",
    desc: "Это стандартная и важная практика, которая помогает психологу оставаться эффективным и бережным в работе.",
  },
];

const ConfidentialitySection = () => (
  <div className="section-gap">
    <div className="container max-w-4xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center">
          Конфиденциальность
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.08}>
            <div className="card-surface p-8 h-full text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </div>
);

export default ConfidentialitySection;
