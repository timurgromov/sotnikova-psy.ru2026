import { motion, AnimatePresence } from "framer-motion";

interface BookingOverlayProps {
  open: boolean;
  onClose: () => void;
}

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-md mx-6 text-center"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Запишитесь на бесплатную встречу
          </h2>
          <p className="text-primary-foreground/80 text-sm mb-8 leading-relaxed">
            Встреча-знакомство (15–20 минут), чтобы познакомиться и понять, подходим ли мы друг другу.
          </p>

          <div className="space-y-3">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-card text-foreground px-6 py-4 rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Написать в Telegram
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-card text-foreground px-6 py-4 rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Написать в WhatsApp
            </a>
          </div>

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
