import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/utils";
import heroPortrait from "../../photos-review/photo-02.jpeg";

interface HeroSectionProps {
  onBookClick: () => void;
}

const HeroSection = ({ onBookClick }: HeroSectionProps) => (
  <section
    id="top"
    className="relative min-h-[100dvh] flex items-center justify-start lg:justify-center overflow-hidden pt-28 md:pt-32"
  >
    {/* Blur blobs */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute -top-1/4 -left-1/4 w-[60vw] h-[60vw] rounded-full opacity-40 blur-[120px]"
        style={{ background: "hsl(36 14% 89%)" }}
      />
      <div
        className="absolute -bottom-1/4 -right-1/4 w-[50vw] h-[50vw] rounded-full opacity-30 blur-[120px]"
        style={{ background: "hsl(153 16% 88%)" }}
      />
    </div>

    <div className="container relative z-10 max-w-5xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
        {/* Text */}
        <div className="md:w-[52%] text-center md:text-left">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm font-body tracking-widest uppercase text-muted-foreground mb-5"
          >
            Анастасия Сотникова · Психолог
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-[1.65rem] md:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight mb-6 max-w-[520px] mx-auto md:mx-0"
          >
            Освободите место в жизни для&nbsp;чего&#8209;то важного, кроме мыслей о&nbsp;еде и&nbsp;теле
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base md:text-lg text-muted-foreground max-w-md mx-auto md:mx-0 mb-8 leading-relaxed"
          >
            Специалист по расстройствам пищевого поведения. Доказательный подход, бережная работа.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
          >
            <button
              onClick={onBookClick}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-heading font-semibold text-base hover:opacity-90 transition-opacity"
            >
              Записаться на встречу-знакомство
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium"
            >
              Узнать больше ↓
            </button>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="md:w-[45%] flex-shrink-0"
        >
          <img
            src={heroPortrait}
            alt="Анастасия Сотникова — психолог"
            className="w-64 h-64 md:w-full md:h-auto md:aspect-[3/4] rounded-[1.5rem] object-cover shadow-sm mx-auto"
            loading="eager"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
