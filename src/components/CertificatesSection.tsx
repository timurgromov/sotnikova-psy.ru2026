import { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import certificatePlaceholder from "@/assets/certificate-placeholder.jpg";

const certificates = [
  { title: "Диплом клинического психолога", year: "2016", institution: "МГУ" },
  { title: "Сертификат CBT-E терапии", year: "2018", institution: "Beck Institute" },
  { title: "Сертификат EMDR практика", year: "2019", institution: "EMDR Europe" },
  { title: "Диплом специалиста по РПП", year: "2019", institution: "AEDP Institute" },
  { title: "Сертификат модели Марши Херрин", year: "2020", institution: "Marsha Herrin & Associates" },
  { title: "Повышение квалификации — травмотерапия", year: "2021", institution: "ИПП" },
  { title: "Сертификат DBT-терапии", year: "2021", institution: "Linehan Institute" },
  { title: "Курс мотивационного интервьюирования", year: "2022", institution: "MINT" },
];

const CertificatesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild
      ? (scrollRef.current.firstElementChild as HTMLElement).offsetWidth + 16
      : 240;
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
            15+ профессиональных сертификатов
          </p>
          <p className="text-xs text-muted-foreground text-center mb-8">
            CBT-E • EMDR • DBT • клиническая психология
          </p>
        </AnimatedSection>

        {/* Slider */}
        <div className="relative group">
          {/* Arrows */}
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

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {certificates.map((cert, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[45%] sm:w-[30%] md:w-[22%] snap-start cursor-pointer"
                onClick={() => setLightboxIndex(i)}
              >
                <div className="card-surface overflow-hidden h-full transition-all duration-300 hover:scale-[1.03] hover:shadow-lg">
                  <img
                    src={certificatePlaceholder}
                    alt={cert.title}
                    className="w-full aspect-[3/4] object-cover"
                    loading="lazy"
                  />
                  <div className="p-3">
                    <p className="text-xs font-medium text-foreground leading-snug line-clamp-2">
                      {cert.title}
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-1">
                      {cert.year} · {cert.institution}
                    </p>
                  </div>
                </div>
              </div>
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
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={certificatePlaceholder}
            alt={certificates[lightboxIndex].title}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default CertificatesSection;
