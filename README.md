# Сайт Анастасии Сотниковой

Публичный одностраничный сайт психолога: https://sotnikova-psy.ru

## Технологии

- React + TypeScript
- Vite
- Tailwind CSS и shadcn/ui
- GitHub Pages для статической публикации

## Локальная работа

```sh
npm install
npm run dev
npm run build
npm run test
```

## Публикация

Исходники ведутся в ветке `gh-pages-source`, собранный сайт — в `gh-pages`.
Полный порядок релиза, включая сохранение `CNAME` и `.nojekyll`, описан в [AGENTS.md](./AGENTS.md). Изменение сайта считается завершённым только после проверки сборки, пуша исходников и публикации актуального `dist/` в GitHub Pages.

## Документация

- [PROJECT_SPEC.md](./PROJECT_SPEC.md) — назначение и границы сайта.
- [UX.md](./UX.md) — пользовательский путь и правила интерфейса.
- [TASKS.md](./TASKS.md) — текущие рабочие задачи и блокеры.
- [docs/history/](./docs/history/) — текущее состояние и принятые решения.
