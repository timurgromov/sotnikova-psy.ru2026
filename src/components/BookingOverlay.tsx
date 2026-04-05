import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

interface BookingOverlayProps {
  open: boolean;
  onClose: () => void;
}

const maxUrl =
  "https://max.ru/u/f9LHodD0cOKA2AvcWg4u-wPXy8WBXgGhmXVa2fayy94L3qvhN16LQMN47No";

const BookingOverlay = ({ open, onClose }: BookingOverlayProps) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
      >
        <button
          onClick={onClose}
          className="fixed top-6 right-6 z-[60] inline-flex items-center justify-center w-11 h-11 rounded-full bg-card text-foreground shadow-sm hover:opacity-90 transition-opacity"
          aria-label="Закрыть попап"
        >
          <X className="w-5 h-5" />
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-md mx-6 text-center"
        >

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Запишитесь на бесплатную консультацию
          </h2>
          <p className="text-primary-foreground/80 text-sm mb-8 leading-relaxed">
            Встреча-знакомство (15–20 минут), чтобы познакомиться и понять, подходим ли мы друг другу.
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
            className="mt-8 text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
          >
            ← Вернуться на сайт
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default BookingOverlay;
