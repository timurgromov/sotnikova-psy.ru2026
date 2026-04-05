import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Сколько нужно сессий?",
    answer:
      "РПП — это не про «быстро починить». Путь к ремиссии зависит от сложности запроса, вашего темпа и личной истории. Обычно устойчивые изменения требуют времени и регулярной работы.",
  },
  {
    question: "Зачем нужна диагностическая сессия?",
    answer:
      "Она помогает понять, с чем именно вы сейчас сталкиваетесь: переедание, диетический цикл, тревога вокруг еды, недовольство телом или потеря контакта с собой. После встречи вы получаете рекомендации и концептуализацию — понятную схему маршрута, откуда вы идёте и куда можно двигаться дальше.",
  },
  {
    question: "Как проходят консультации?",
    answer:
      "Консультации проходят онлайн: в Яндекс.Телемост, WhatsApp, Telegram или Zoom. Продолжительность одной встречи — 50–55 минут. Как правило, мы встречаемся один раз в неделю, а затем по совместному решению можем перейти на формат один раз в две недели.",
  },
  {
    question: "Для чего нужна встреча-знакомство?",
    answer:
      "Это короткая встреча, чтобы вы могли понять, комфортно ли вам со мной, откликается ли мой подход и хочется ли двигаться дальше. Мы не уходим глубоко в запрос, а спокойно знакомимся и смотрим, есть ли контакт.",
  },
  {
    question: "Можно ли решить всё за одну консультацию?",
    answer:
      "Если вам нужно выдохнуть, получить первую поддержку и понять направление, одна встреча может быть полезной. Но если трудности с едой, телом и самокритикой длятся давно, для устойчивых изменений психике обычно нужно больше времени.",
  },
];

const FaqSection = () => (
  <div id="faq" className="section-gap">
    <div className="container max-w-3xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-center">
          Частые вопросы
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed text-center max-w-2xl mx-auto mb-8">
          Коротко о формате работы и первых шагах.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={item.question}
              value={`faq-${i}`}
              className="card-surface px-6 border-none"
            >
              <AccordionTrigger className="font-heading text-sm md:text-base font-semibold hover:no-underline py-5 text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>
    </div>
  </div>
);

export default FaqSection;
