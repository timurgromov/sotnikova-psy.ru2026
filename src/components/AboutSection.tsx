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
            className="w-64 h-80 md:w-72 md:h-96 rounded-[1.5rem] object-cover shadow-sm"
            loading="lazy"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
            <p>
              Меня зовут Анастасия, я психолог и специалист по расстройствам
              пищевого поведения.
            </p>
            <p>
              Я сама прошла путь восстановления и уже более 9 лет нахожусь в
              ремиссии. Этот опыт стал основой моей работы.
            </p>
            <p>
              Я хорошо понимаю, как это жить в постоянных мыслях о еде и теле,
              сталкиваться с виной, срывами и ощущением потери контроля. И я
              знаю, что из этого можно выйти.
            </p>
            <p>
              В работе я опираюсь на доказательные методы:
              когнитивно-поведенческую терапию РПП по протоколу Кристофера
              Фейрберна, план питания «Правило трёх» Марши Херрин и другие
              подходы.
            </p>
            <p>
              Работаю бережно, без давления и осуждения. Моя задача не
              «заставить вас есть правильно», а помочь вам восстановить контакт
              с собой, снизить влияние пищевых правил, вернуть ощущение
              контроля над жизнью и освободить место для того, что действительно
              важно.
            </p>
            <p>
              Я являюсь членом EMDR-ассоциации и Ассоциации специалистов по
              расстройствам пищевого поведения (АРППС), регулярно прохожу
              супервизию и продолжаю обучение.
            </p>
            <p>
              Это позволяет мне поддерживать высокое качество и безопасность
              терапии.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </div>
);

export default AboutSection;
