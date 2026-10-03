# 2026-10-03 — GitHub Pages через Actions

Для публикации добавлен workflow `Deploy GitHub Pages`: он запускается после push в `gh-pages-source`, устанавливает зависимости из lockfile, выполняет сборку и тесты, затем публикует `dist/` как Pages-артефакт. Переход устраняет ручной commit сгенерированного JavaScript в `gh-pages`; завершение фиксируется только после успешного GitHub Actions run и проверки публичного URL.
