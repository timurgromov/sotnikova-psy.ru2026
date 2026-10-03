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
