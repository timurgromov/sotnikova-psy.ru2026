import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

type CertificateItem = {
  title: string;
  meta: string;
  src: string;
};

const certificateSrc = (fileName: string) =>
  new URL(`../../certificates/${fileName}`, import.meta.url).href;

const certificates: CertificateItem[] = [
  {
    title: "Свидетельство о членстве в АРППС",
    meta: "АРППС · 2024",
    src: certificateSrc("1.jpeg"),
  },
  {
    title: "Доказательная психотерапия расстройств пищевого поведения (РПП)",
    meta: "Психодемия · 127 часов · 2024",
    src: certificateSrc("2.jpeg"),
  },
  {
    title: "Профессиональная переподготовка: практический психолог",
    meta: "НАДПО · 2022",
    src: certificateSrc("3.jpeg"),
  },
  {
    title: "Психотерапия расстройств пищевого поведения: продвинутый курс",
    meta: "Чистые Когниции · 40 часов · 2025",
    src: certificateSrc("4.jpeg"),
  },
  {
    title: "Базовый тренинг EMDR 1 и 2 модуль",
    meta: "EMDR Europe · 72 часа · 2025",
    src: certificateSrc("5.jpeg"),
  },
  {
    title: "Программа подготовки в Школе диетологов",
    meta: "Школа диетологов · 16 модулей",
    src: certificateSrc("6.jpg"),
  },
  {
    title: "Психотерапия РПП: продвинутый курс",
    meta: "Школа ЧК · 40 часов · 2025",
    src: certificateSrc("7.jpeg"),
  },
  {
    title: "Поведенческая психотерапия в клинической практике",
    meta: "Чистые Когниции · 33 часа · 2024/2025",
    src: certificateSrc("8.jpeg"),
  },
  {
    title: "Деньги и предназначение",
    meta: "Институт практической онлайн психологии · 54 часа · 2023",
    src: certificateSrc("9.jpeg"),
  },
  {
    title: "X Всероссийская научно-практическая конференция EMDR/ДПДГ России",
    meta: "Москва · 8-10 ноября 2024",
    src: certificateSrc("10.jpeg"),
  },
  {
    title: "Осознанное питание",
    meta: "Институт практической онлайн психологии · 68 часов · 2023",
    src: certificateSrc("11.jpeg"),
  },
  {
    title: "Деньги и предназначение",
    meta: "Институт практической онлайн психологии · 54 часа · 2023",
    src: certificateSrc("12.jpeg"),
  },
  {
    title: "Доказательная психотерапия расстройств пищевого поведения (РПП)",
    meta: "Психодемия · 127 часов · 2024",
    src: certificateSrc("14.jpeg"),
  },
  {
    title: "Стратегия формирования здоровых пищевых привычек в семье",
    meta: "Школа диетологов · 10 ак. часов · 2021",
    src: certificateSrc("16.jpeg"),
  },
  {
    title: "Диетотерапия при аллергии и непереносимости глютена",
    meta: "Школа диетологов · 3 ак. часа · 2021",
    src: certificateSrc("17.jpeg"),
  },
  {
    title: "Молочная продукция",
    meta: "Школа диетологов · 3 ак. часа · 2021",
    src: certificateSrc("18.jpeg"),
  },
  {
    title: "Fitness for pregnant women",
    meta: "Start Fit · 5 часов · 2019",
    src: certificateSrc("19.jpeg"),
  },
  {
    title: "Сахар и сахарозаменители",
    meta: "Школа диетологов · 5 ак. часов · 2021",
    src: certificateSrc("20.jpeg"),
  },
  {
    title: "Доказательная психотерапия расстройств пищевого поведения (РПП)",
    meta: "Психодемия · 127 часов · 2024",
    src: certificateSrc("22.jpeg"),
  },
  {
    title: "Свидетельство о членстве в АРППС",
    meta: "АРППС · 2024",
    src: certificateSrc("13.jpeg"),
  },
  {
    title: "Методология работы консультанта-диетолога",
    meta: "Школа диетологов · 12 ак. часов · 2021",
    src: certificateSrc("21.jpeg"),
  },
];

const CertificatesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const firstCard = scrollRef.current.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 16 : 320;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth * 2 : cardWidth * 2,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="section-gap">
      <div className="container max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2 text-center">
            Дипломы и сертификаты
          </h2>
          <p className="text-sm font-medium text-foreground/80 text-center mb-1">
            21 подтверждающий документ
          </p>
          <p className="text-xs text-muted-foreground text-center mb-8">
            CBT-E • EMDR • DBT • клиническая психология
          </p>
        </AnimatedSection>

        <div className="relative group">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center text-foreground/60 hover:text-foreground transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Назад"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center text-foreground/60 hover:text-foreground transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Вперёд"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {certificates.map((cert, i) => (
              <button
                key={`${cert.src}-${i}`}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group text-left flex-shrink-0 w-[72vw] sm:w-[44vw] md:w-[30vw] lg:w-[22vw] xl:w-[18vw] snap-start"
              >
                <div className="card-surface overflow-hidden h-full transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg">
                  <div className="relative overflow-hidden bg-background/60 aspect-[16/11]">
                    <img
                      src={cert.src}
                      alt={cert.title}
                      className="absolute inset-0 h-full w-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-3 md:p-4">
                    <p className="text-sm font-medium text-foreground leading-snug min-h-[2.5rem]">
                      {cert.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 leading-snug">
                      {cert.meta}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-4">
          Нажмите на сертификат, чтобы открыть его полностью
        </p>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={certificates[lightboxIndex].src}
            alt={certificates[lightboxIndex].title}
            className="max-w-[92vw] max-h-[80vh] object-contain rounded-lg animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="mt-4 text-center text-white max-w-3xl px-4">
            <p className="font-heading text-lg font-semibold">
              {certificates[lightboxIndex].title}
            </p>
            <p className="text-white/70 text-sm mt-1">
              {certificates[lightboxIndex].meta}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatesSection;
