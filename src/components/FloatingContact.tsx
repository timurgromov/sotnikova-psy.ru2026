import { MessageCircle } from "lucide-react";

interface FloatingContactProps {
  onBookClick: () => void;
}

const FloatingContact = ({ onBookClick }: FloatingContactProps) => (
  <button
    onClick={onBookClick}
    className="fixed bottom-6 right-6 z-40 md:hidden bg-primary text-primary-foreground w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity"
    aria-label="Записаться"
  >
    <MessageCircle className="w-6 h-6" />
  </button>
);

export default FloatingContact;
