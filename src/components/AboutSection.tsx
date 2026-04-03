import AnimatedSection from "./AnimatedSection";
import therapistPortrait from "@/assets/therapist-portrait.jpg";

const AboutSection = () => (
  <div className="section-gap">
    <div className="container max-w-4xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-12 text-center">
          Обо мне
        </h2>
      </AnimatedSection>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <AnimatedSection className="flex-shrink-0">
          <img
            src={therapistPortrait}
            alt="Анастасия Сотникова"
            className="w-64 h-80 md:w-72 md:h-96 rounded-[1.5rem] object-cover shadow-sm"
            loading="lazy"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
            <p>
              Меня зовут Анастасия. Я — психолог, специалист по расстройствам
              пищевого поведения. Я прошла свой путь восстановления и с тех
              пор нахожусь в устойчивой ремиссии.
            </p>
            <p>
              Этот личный опыт стал фундаментом моей профессиональной практики. Я понимаю, каково
              это — жить в постоянном диалоге с едой, телом и чувством вины. И я знаю, что из
              этого можно выйти.
            </p>
            <p>
               Мой подход основан на доказательных методах: CBT-E, EMDR, план трёх Марши Херрин и
               других. Я работаю бережно, без давления и осуждения, помогая вам вернуть контроль
               над жизнью и найти в ней место для чего-то большего, чем мысли о еде и теле.
            </p>
            <p>
              Я член Ассоциации EMDR и регулярно прохожу супервизию, чтобы поддерживать высокое
              качество терапевтической работы.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </div>
);

export default AboutSection;
