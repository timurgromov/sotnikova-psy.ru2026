import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export type BookingType = "free" | "diagnostic";

interface BookingOverlayProps {
  open: boolean;
  onClose: () => void;
  bookingType: BookingType;
}

const maxUrl =
  "https://max.ru/u/f9LHodD0cOKA2AvcWg4u-wPXy8WBXgGhmXVa2fayy94L3qvhN16LQMN47No";

const bookingCopy: Record<
  BookingType,
  {
    title: string;
    description: string;
  }
> = {
  free: {
    title: "Запишитесь на бесплатную сессию",
    description:
      "Встреча-знакомство (15–20 минут), чтобы познакомиться и понять, подходим ли мы друг другу.",
  },
  diagnostic: {
    title: "Запишитесь на диагностическую сессию",
    description:
      "Диагностическая встреча (90 минут), чтобы глубже разобраться в ситуации, получить первичную концептуализацию и первые рекомендации.",
  },
};

const BookingOverlay = ({ open, onClose, bookingType }: BookingOverlayProps) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 overflow-y-auto bg-black/25 px-4 py-6 backdrop-blur-sm md:px-6 md:py-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="relative mx-auto mt-[8vh] w-full max-w-md rounded-[2rem] bg-primary px-6 py-8 text-center shadow-2xl md:mt-[10vh] md:px-8 md:py-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-title"
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-card text-foreground shadow-sm transition-opacity hover:opacity-90"
            aria-label="Закрыть попап"
          >
            <X className="h-5 w-5" />
          </button>

          <h2
            id="booking-title"
            className="font-heading mb-4 text-2xl font-bold text-primary-foreground md:text-3xl"
          >
            {bookingCopy[bookingType].title}
          </h2>
          <p className="text-primary-foreground/80 text-sm mb-8 leading-relaxed">
            {bookingCopy[bookingType].description}
          </p>

          <div className="space-y-3">
            <a
              href="https://t.me/Anastasiasotnikovaa"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-card text-foreground px-6 py-4 rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Написать в Telegram
            </a>
            <a
              href="https://wa.me/79778500815"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-card text-foreground px-6 py-4 rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Написать в WhatsApp
            </a>
            <a
              href={maxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-card text-foreground px-6 py-4 rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Написать в Max
            </a>
          </div>

          <p className="mt-5 text-primary-foreground/70 text-xs leading-relaxed">
            Нажимая кнопку, вы соглашаетесь с{" "}
            <Link to="/privacy" className="underline underline-offset-2">
              Политикой конфиденциальности
            </Link>
            .
          </p>

          <button
            onClick={onClose}
            className="mt-8 text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
          >
            ← Вернуться на сайт
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default BookingOverlay;
