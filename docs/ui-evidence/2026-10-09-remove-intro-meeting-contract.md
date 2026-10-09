# Контракт UI: удаление бесплатной встречи

- Change ID: `2026-10-09-remove-intro-meeting`
- Requested visible change: убрать бесплатную встречу-знакомство из сайта и сохранить связную запись на платные консультации.
- Surface: `/`.
- User state: публичный посетитель без авторизации.
- Exact target: `HeroSection`, `ServicesSection`, `PathSection`, `FaqSection`, `PricingSection`, `BookingOverlay` и CTA header/floating contact.
- Action to reveal target: открыть главную страницу, прокрутить до пути работы, FAQ и стоимости; открыть общий CTA и CTA каждого формата стоимости.
- Reported CSS viewport: `390×844` и `1440×900`.
- Affected breakpoints: mobile-first и desktop `lg` (1024 px).
- Baseline visible signature: CTA hero «Записаться на встречу-знакомство», отдельная карточка «Встреча-знакомство / Бесплатно», FAQ о встрече-знакомстве и четыре шага от «Знакомства» до «Перехода в ремиссию».
- Expected visible signature: CTA hero «Записаться на консультацию», стоимость начинается с карточек «Онлайн» и «Очно в Москве», FAQ без вопроса о знакомстве и три шага с номерами 1–3.
- Must remain unchanged: четыре платных тарифа и длительности, Москва/м. Курская, платёжное примечание, контакты и CTA платных форматов.
- Required viewports: `390×844`, `1023×768`, `1024×768`, `1025×768`, `1440×900`.
- Attempt number for this exact target: `1`.
- Owner reference: пометки Анастасии на четырёх скриншотах от 2026-10-09.
