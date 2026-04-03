import AnimatedSection from "./AnimatedSection";
import therapistPortrait from "@/assets/therapist-portrait.jpg";

const TherapistAvatar = () => (
  <div className="pb-4">
    <div className="container max-w-4xl mx-auto px-6 flex justify-center">
      <AnimatedSection>
        <img
          src={therapistPortrait}
          alt="Анастасия Сотникова"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-sm border-4 border-card"
          loading="lazy"
        />
      </AnimatedSection>
    </div>
  </div>
);

export default TherapistAvatar;
