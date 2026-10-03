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

Исходники ведутся в ветке `gh-pages-source`. Workflow [deploy-pages.yml](./.github/workflows/deploy-pages.yml) запускается после каждого пуша в эту ветку, выполняет `npm ci`, `npm run build` и `npm run test`, а затем публикует `dist/` в GitHub Pages. Домен `sotnikova-psy.ru` остаётся настроенным в GitHub Pages; файл `public/CNAME` попадает в артефакт сборки.

Изменение сайта считается завершённым после локальной проверки, пуша исходников, успешного workflow и свежей проверки публичного URL. Для добавленных изображений и других runtime-assets обязательны два условия: файл tracked в том же commit, что и ссылка на него, а на публичной странице он отдаётся как реальный `/assets/<hash>.*`, а не как пустой или `undefined` URL.

## Документация

- [PROJECT_SPEC.md](./PROJECT_SPEC.md) — назначение и границы сайта.
- [UX.md](./UX.md) — пользовательский путь и правила интерфейса.
- [TASKS.md](./TASKS.md) — текущие рабочие задачи и блокеры.
- [docs/history/](./docs/history/) — текущее состояние и принятые решения.
