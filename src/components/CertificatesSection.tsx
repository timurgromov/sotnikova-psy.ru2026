import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import certificate01 from "../../certificates/1.jpeg";
import certificate02 from "../../certificates/2.jpeg";
import certificate03 from "../../certificates/3.jpeg";
import certificate04 from "../../certificates/4.jpeg";
import certificate05 from "../../certificates/5.jpeg";
import certificate06 from "../../certificates/6.jpg";
import certificate07 from "../../certificates/7.jpeg";
import certificate08 from "../../certificates/8.jpeg";
import certificate09 from "../../certificates/9.jpeg";
import certificate10 from "../../certificates/10.jpeg";
import certificate11 from "../../certificates/11.jpeg";
import certificate12 from "../../certificates/12.jpeg";
import certificate13 from "../../certificates/13.jpeg";
import certificate14 from "../../certificates/14.jpeg";
import certificate15 from "../../certificates/15.jpeg";
import certificate16 from "../../certificates/16.jpeg";
import certificate17 from "../../certificates/17.jpeg";
import certificate18 from "../../certificates/18.jpeg";
import certificate19 from "../../certificates/19.jpeg";
import certificate20 from "../../certificates/20.jpeg";
import certificate21 from "../../certificates/21.jpeg";
import certificate22 from "../../certificates/22.jpeg";
import certificate23 from "../../certificates/23.jpeg";
import certificate24 from "../../certificates/24.jpeg";

type CertificateItem = {
  title: string;
  meta: string;
  src: string;
};

// Static imports make a missing certificate a build error instead of a broken
// `/assets/undefined` image on the published site.
const certificateSources: Record<string, string> = {
  "1.jpeg": certificate01,
  "2.jpeg": certificate02,
  "3.jpeg": certificate03,
  "4.jpeg": certificate04,
  "5.jpeg": certificate05,
  "6.jpg": certificate06,
  "7.jpeg": certificate07,
  "8.jpeg": certificate08,
  "9.jpeg": certificate09,
  "10.jpeg": certificate10,
  "11.jpeg": certificate11,
  "12.jpeg": certificate12,
  "13.jpeg": certificate13,
  "14.jpeg": certificate14,
  "15.jpeg": certificate15,
  "16.jpeg": certificate16,
  "17.jpeg": certificate17,
  "18.jpeg": certificate18,
  "19.jpeg": certificate19,
  "20.jpeg": certificate20,
  "21.jpeg": certificate21,
  "22.jpeg": certificate22,
  "23.jpeg": certificate23,
  "24.jpeg": certificate24,
};

const certificateSrc = (fileName: string) => certificateSources[fileName];

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
    title: "международная академия дополнительного профессионального образования и EDPRO",
    meta: "EDPRO · 88 ак. часов · 2023",
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
    title: "Программа обучения по диетологии и нутрициологии",
    meta: "Школа диетологов · 2021",
    src: certificateSrc("15.jpeg"),
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
    title:
      "основы диетологии и нутрициологии, консультирование в вопросах рационального питания и коррекции веса",
    meta: "Школа диетологов · 82 ак. часа · 2021",
    src: certificateSrc("13.jpeg"),
  },
  {
    title: "Методология работы консультанта-диетолога",
    meta: "Школа диетологов · 12 ак. часов · 2021",
    src: certificateSrc("21.jpeg"),
  },
  {
    title: "Участие в конференции Академии нейрогастроэнтерологии",
    meta: "Академия нейрогастроэнтерологии · 2025",
    src: certificateSrc("23.jpeg"),
  },
  {
    title: "Научно-практическая конференция «В мире больших людей»",
    meta: "Минздрав России · 6 кредитов · 2026",
    src: certificateSrc("24.jpeg"),
  },
];

const CertificatesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const firstCard = scrollRef.current.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 16 : 320;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth * 2 : cardWidth * 2,
      behavior: "smooth",
    });
  }, []);

  const goToPrevious = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? current : (current - 1 + certificates.length) % certificates.length,
    );
  }, []);

  const goToNext = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? current : (current + 1) % certificates.length,
    );
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxIndex(null);
        return;
      }

      if (event.key === "ArrowLeft") goToPrevious();
      if (event.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goToNext, goToPrevious, lightboxIndex]);

  return (
    <div className="section-gap">
      <div className="container max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2 text-center">
            Дипломы и сертификаты
          </h2>
          <p className="text-sm font-medium text-foreground/80 text-center mb-1">
            {certificates.length} подтверждающих документа
          </p>
          <p className="text-xs text-muted-foreground text-center mb-8">
            CBT-E • EMDR • DBT
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
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0]?.clientX ?? null;
            touchEndX.current = null;
          }}
          onTouchMove={(event) => {
            touchEndX.current = event.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={() => {
            const startX = touchStartX.current;
            const endX = touchEndX.current;

            if (startX === null || endX === null) return;

            const delta = startX - endX;
            if (Math.abs(delta) < 50) return;

            if (delta > 0) {
              goToNext();
            } else {
              goToPrevious();
            }
          }}
        >
          <button
            onClick={(event) => {
              event.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-primary/35 hover:bg-primary/55 flex items-center justify-center text-white/90 shadow-lg transition-colors backdrop-blur-sm"
            aria-label="Предыдущий сертификат"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(event) => {
              event.stopPropagation();
              setLightboxIndex(null);
            }}
            className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            onClick={(event) => {
              event.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-primary/35 hover:bg-primary/55 flex items-center justify-center text-white/90 shadow-lg transition-colors backdrop-blur-sm"
            aria-label="Следующий сертификат"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <img
            src={certificates[lightboxIndex].src}
            alt={certificates[lightboxIndex].title}
            className="block max-w-[92vw] max-h-[86vh] object-contain rounded-lg animate-in fade-in zoom-in-95 duration-200 mx-auto"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default CertificatesSection;
