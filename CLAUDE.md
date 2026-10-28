# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

## Current state

`ROADMAP.md` plans a developer web resume (Korean-language document). Phases 1-4 are implemented: `index.html`, `css/style.css`, `js/main.js`. There is no build tooling, tests, or git history. Phases 5-7 (QA, deployment, extras) remain.

## 디자인 리뉴얼 (portfolio-resume/)

`portfolio-resume/`에 참고 캡처(Jensen Omega) 스타일의 다크 테마 버전이 있다. 기본 테마는 다크(`<html class="dark">`, 라이트 선택 시에만 `localStorage['portfolio-theme']`), 포인트 컬러는 코랄(`--accent`), 컨테이너는 `max-w-6xl`(`.container-x`), 색·간격은 `css/style.css`의 CSS 변수에서 관리한다. 미리보기: `portfolio-resume` 폴더에서 `python -m http.server 8000` 실행 후 http://localhost:8000 접속.

## Planned stack and constraints (from ROADMAP.md)

- Plain HTML5, CSS3, JavaScript (ES6+), and Tailwind CSS loaded via CDN. There is no bundler, package manager, or build step. The site must work by opening `index.html` directly, so commands for build, lint, and test do not exist.
- Single-page, responsive resume. Sections in order: Hero, About, Skills, Experience, Projects, Education, Contact.
- Planned layout: `index.html` at the root, `css/style.css` only for styles Tailwind cannot express, `js/main.js` for interactions, and `assets/images/`.
- Planned interactions in `js/main.js`: mobile menu toggle, scroll-spy nav highlighting, dark mode persisted in `localStorage`, `IntersectionObserver` reveal animations, and a copy-email button.
- The container width is `max-w-3xl`. The profile photo and project thumbnails are sample images loaded from external URLs (`i.pravatar.cc`, `picsum.photos`), so they need an internet connection; replace them with real images under `assets/images/`.
- Target deployment is GitHub Pages (static hosting).
- The resume content in `ROADMAP.md` (name 홍길동, companies, projects) is placeholder data and should be replaced with real information.
- `ROADMAP.md` tracks progress with checkbox lists per phase. Tick items there as they are completed.
