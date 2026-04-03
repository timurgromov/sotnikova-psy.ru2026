import AnimatedSection from "./AnimatedSection";
import aboutPortrait from "../../photos-review/photo-05.jpeg";

const AboutSection = () => (
  <div className="section-gap">
    <div className="container max-w-4xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center">
          Обо мне
        </h2>
      </AnimatedSection>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <AnimatedSection className="flex-shrink-0">
          <img
            src={aboutPortrait}
            alt="Анастасия Сотникова"
            className="w-72 h-[26rem] md:w-80 md:h-[30rem] rounded-[1.5rem] object-cover shadow-sm"
            loading="lazy"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
            <p>
              Меня зовут Анастасия, я психолог, специалист по расстройствам
              пищевого поведения.
            </p>
            <p>
              Прошла путь восстановления и более 9 лет нахожусь в ремиссии.
              Этот опыт стал основой моей практики.
            </p>
            <p>
              Понимаю, как это — жить в постоянных мыслях о еде и теле,
              сталкиваться с виной, срывами и потерей контроля. И знаю, что из
              этого есть выход.
            </p>
            <p>
              В работе опираюсь на доказательные методы:
              когнитивно-поведенческую терапию РПП по протоколу Кристофера
              Фейрберна, план питания «Правило трёх» Марши Херрин и другие
              подходы.
            </p>
            <p>
              Работаю бережно, без давления и осуждения. Задача — не
              «заставить есть правильно», а помочь восстановить контакт с
              собой, снизить влияние пищевых правил и вернуть контроль над
              жизнью.
            </p>
            <p>
              Член EMDR-ассоциации и Ассоциации специалистов по расстройствам
              пищевого поведения (АРППС). Регулярно прохожу супервизию и
              продолжаю обучение — это поддерживает качество и безопасность
              терапии.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </div>
);

export default AboutSection;
