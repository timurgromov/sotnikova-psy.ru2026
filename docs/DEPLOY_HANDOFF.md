# Деплой GitHub Pages

## Production

- Публичный URL: `https://sotnikova-psy.ru`.
- Исходники: ветка `gh-pages-source`.
- Публикация: `.github/workflows/deploy-pages.yml`.
- Артефакт: `dist/`, созданный командами `npm ci` и `npm run build` на GitHub Actions.

## Проверка релиза

1. Убедиться, что commit в `gh-pages-source` запушен.
2. Убедиться, что workflow `Deploy GitHub Pages` завершился успешно.
3. Открыть публичный URL без кэша и проверить изменённый пользовательский сценарий, console/network errors и все добавленные runtime-assets.
4. До статуса «готово» сверить staged file list: каждый новый image/PDF/font, на который ссылается код, должен быть included в commit. После публикации проверить у изменённых изображений ненулевой `naturalWidth` и фактический hashed `/assets/` URL.

## Домен

Домен `sotnikova-psy.ru` настроен в GitHub Pages. `public/CNAME` переносит это имя в артефакт, но изменение домена выполняется только в настройках GitHub Pages или через API с явным запросом владельца.

## Deploy standard 1.0.0

This project adapts `Tamplates/DEPLOY_TEMPLATE.md@1.0.0` to its existing GitHub Pages workflow. Every artifact includes `deploy-version.json` with the exact source SHA. The deploy job checks that passport and the homepage before reporting success. GitHub Actions serializes publication and records upload, build, checks and total durations. Rollback reruns the previously verified source commit through the same workflow. Compare timings only for the same source/artifact scope and check coverage.
