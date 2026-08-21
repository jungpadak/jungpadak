# CLAUDE.md

이 파일은 Claude Code(claude.ai/code)가 이 저장소에서 작업할 때 참고하는 가이드입니다.

## 프로젝트 개요

**MacroMate** — "이론 → 뉴스 → 인사이트" 3단 구조의 AI 기반 하루 10분 경제 학습 앱.
타깃은 20~40대 직장인·투자 입문자이며, UI 카피와 문서는 **한국어**가 기본입니다.

> **현재 상태: 초기 프로토타입.**
> 실제로 존재하는 코드는 `frontend/` 하나뿐이고, 홈 화면 한 장이 **하드코딩된 정적 목업**입니다.
> 백엔드, API 연동, 상태 관리, 라우팅, 테스트는 아직 없습니다. 작업 전에 아래 "실제 구조"를 먼저 확인하세요.

## 실제 저장소 구조

```
.
├── README.md              # 제품 소개 (아직 구현되지 않은 계획도 포함 — 아래 주의사항 참고)
├── .gitignore             # backend/, frontend/ 양쪽을 모두 커버하도록 이미 작성됨
└── frontend/              # Next.js 16 (App Router) — 유일하게 존재하는 코드
    ├── app/
    │   ├── layout.tsx     # RootLayout, <html lang="ko">, Geist 폰트, metadata
    │   ├── page.tsx       # 홈 화면 전체 (161줄, 단일 컴포넌트, 목업 데이터 인라인)
    │   └── globals.css    # Tailwind v4 import + CSS 변수 테마
    ├── public/            # next/vercel/globe/file/window.svg (CRA 기본 에셋, 미사용)
    ├── favicon.ico        # ⚠️ app/ 밖에 있어 Next가 자동 인식하지 않음 (아래 참고)
    ├── package.json
    ├── next.config.ts     # 사실상 빈 설정
    ├── tsconfig.json      # strict: true, 경로 별칭 @/* → ./frontend/*
    ├── eslint.config.mjs  # flat config, eslint-config-next core-web-vitals + typescript
    └── postcss.config.mjs # @tailwindcss/postcss (Tailwind v4)
```

### README와 실제 코드의 차이 (중요)

`README.md`는 **목표 상태**를 기술하고 있습니다. 아래 항목은 **아직 저장소에 없습니다**:

| README 기재 | 실제 |
| --- | --- |
| `backend/` (FastAPI, SQLAlchemy, PostgreSQL, Redis) | 디렉터리 자체가 없음 |
| `docs/product-spec.md` | 파일 없음 (README 링크는 깨져 있음) |
| Shadcn/ui | 미설치. 컴포넌트는 Tailwind 유틸리티 클래스로 직접 작성 |
| Framer Motion / Recharts / Zustand / date-fns | `package.json`에는 있으나 코드에서 **아직 한 번도 import 되지 않음** |

README를 근거로 "이미 있는 것"처럼 가정하지 말고, 항상 파일 시스템을 확인하세요.
새 영역(backend, docs)을 만들 때는 README에 이미 잡혀 있는 이름·구조를 따르는 것이 좋습니다.

## 개발 명령어

모든 명령은 `frontend/` 디렉터리에서 실행합니다. 저장소 루트에는 `package.json`이 없습니다.

```bash
cd frontend

npm ci            # 의존성 설치 (package-lock.json 존재 — 신규 설치 시 install 대신 ci 권장)
npm run dev       # 개발 서버 (Next 16 = Turbopack 기본) → http://localhost:3000
npm run build     # 프로덕션 빌드
npm start         # 빌드 결과 실행
npm run lint      # ESLint (flat config, 인자 없이 실행 — 대상은 설정 파일이 결정)
npx tsc --noEmit  # 타입 체크 (별도 npm script 없음)
```

테스트 러너는 설정되어 있지 않습니다. 테스트를 추가한다면 프레임워크 선정부터 필요합니다.

### 검증 상태 (2026-08-21 기준, 실제 실행 결과)

- `npx tsc --noEmit` → **통과** (에러 0)
- `npm run lint` → **실패 (에러 3건)**. 모두 `app/page.tsx`의 `react/no-unescaped-entities`:
  - 31:56 `Today's Brief`의 `'`
  - 100:19 / 100:32 `"경제 규모의 건강검진표"`의 `"`
  JSX 텍스트 안의 따옴표를 `&apos;` / `&quot;` 등으로 이스케이프하면 해결됩니다.
  **page.tsx를 수정할 일이 생기면 이 3건도 같이 정리하세요.** 이 상태가 lint 기준선입니다.
- `npm run build` → **샌드박스 환경에서는 실패**. 아래 참고.

### 샌드박스/CI 환경에서 빌드가 실패하는 알려진 원인

`app/layout.tsx`가 `next/font/google`로 Geist·Geist Mono를 불러오는데, 이는 **빌드 타임에
fonts.googleapis.com으로 네트워크 요청**을 보냅니다. 아웃바운드가 제한된 환경(Claude Code 원격
세션 등)에서는 프록시가 403으로 막아 다음 에러가 납니다:

```
next/font: error: Failed to fetch `Geist` from Google Fonts.
```

**이는 코드 결함이 아닙니다.** 이 에러를 없애려고 폰트 설정을 임의로 제거하거나
`next.config.ts`를 고치지 마세요. 빌드 검증이 필요하면 `npx tsc --noEmit`과 `npm run lint`로
대신하고, 빌드가 막혔다는 사실을 그대로 보고하면 됩니다.

## 기술 스택과 버전별 주의사항

| 항목 | 버전 | 알아둘 점 |
| --- | --- | --- |
| Next.js | **16.0.0** | App Router 전용. Turbopack이 dev/build 기본. `pages/` 디렉터리 없음 |
| React | **19.2.0** | RSC 기본. 클라이언트 훅/이벤트가 필요하면 파일 최상단에 `"use client"` |
| TypeScript | 5.x | `strict: true`. 경로 별칭은 `@/*` → `frontend/` 루트 기준 |
| Tailwind CSS | **v4** | **`tailwind.config.js`가 없고, 있어서도 안 됩니다.** 아래 참고 |
| lucide-react | 0.548 | 현재 유일하게 실사용 중인 UI 라이브러리 (Flame, Newspaper, BookOpen, Target) |
| ESLint | 9.x | flat config (`eslint.config.mjs`). `.eslintrc*`는 쓰지 않음 |

### Tailwind CSS v4 (CSS-first 설정)

v3와 설정 방식이 완전히 다릅니다. 테마 토큰은 **`app/globals.css` 안에서** 정의합니다:

```css
@import "tailwindcss";          /* v3의 @tailwind base/components/utilities 대신 */

:root { --background: #ffffff; --foreground: #171717; }

@theme inline {                 /* 여기서 정의한 토큰이 유틸리티 클래스가 됨 */
  --color-background: var(--background);
  --font-sans: var(--font-geist-sans);
}

@media (prefers-color-scheme: dark) { :root { --background: #0a0a0a; ... } }
```

- 색상·폰트 토큰을 추가하려면 `@theme inline` 블록에 CSS 변수를 넣으세요. JS 설정 파일을 만들지 마세요.
- PostCSS 플러그인은 `@tailwindcss/postcss` 하나뿐입니다 (`autoprefixer` 불필요).

## 코드 컨벤션

`app/page.tsx`가 사실상 유일한 참조 구현입니다. 새 화면을 만들 때 이 패턴을 따르세요.

- **언어**: 사용자에게 보이는 텍스트, 섹션 제목, 버튼 라벨은 **모두 한국어**. 코드 식별자는 영어.
  일부 고유명은 영어 유지 (`MacroMate`, `Today's Brief`, `AI Quiz`, `Streak`).
- **모바일 우선**: 콘텐츠 폭은 `max-w-2xl mx-auto px-6`으로 고정. 헤더는 `sticky top-0`,
  하단 네비게이션은 `fixed bottom-0`이고 본문은 `pb-24`로 가려짐을 방지합니다.
- **다크 모드**: 클래스 토글이 아니라 **`prefers-color-scheme` 기반**입니다.
  모든 색상 유틸리티에 `dark:` 변형을 반드시 함께 작성하세요 (예: `bg-white dark:bg-gray-800`).
- **카드 스타일**: `rounded-2xl` + `shadow-sm` + `border border-gray-200 dark:border-gray-700` + `p-6`.
  강조 카드(오늘의 이론)는 `bg-gradient-to-br from-purple-500 to-blue-600` 계열.
- **색 사용**: 브랜드/블루 = 브리핑·홈, 퍼플→블루 그라디언트 = 이론 카드,
  그린 = 퀴즈, 오렌지 = Streak. 새 기능은 이 색 언어를 재사용하세요.
- **아이콘**: `lucide-react`에서 import. 인라인 `<svg>`는 하단 네비게이션의 설정 아이콘 한 곳뿐이며,
  새 코드에서는 lucide 아이콘(`Settings`)을 쓰는 편이 일관됩니다.
- **컴포넌트 분리**: 현재 `page.tsx` 한 파일에 전부 들어 있습니다. 화면이 늘어나면
  `app/` 하위 라우트 폴더 + `components/` 디렉터리로 쪼개는 것이 자연스러운 다음 단계입니다.
- **데이터**: 지금 표시되는 뉴스·개념·Streak 수치는 전부 JSX에 하드코딩된 목업입니다.
  실데이터 연동 시 이 값들이 대체 지점입니다.

## 알려진 이슈 / 손쉬운 개선 지점

작업 중 자연스럽게 마주치면 함께 정리해도 좋은 항목들입니다 (요청 없이 범위를 넓히지는 마세요):

1. `npm run lint` 에러 3건 (위 "검증 상태" 참고).
2. `frontend/favicon.ico`가 `frontend/app/favicon.ico`가 아니라 프로젝트 루트에 있어
   Next.js의 파일 규약(App Router는 `app/` 안의 favicon만 자동 인식)에 걸리지 않습니다.
3. `public/`의 `next.svg`, `vercel.svg` 등은 `create-next-app` 기본 에셋이며 미사용입니다.
4. `app/globals.css`의 `body { font-family: Arial, Helvetica, sans-serif; }`가
   `layout.tsx`에서 설정한 Geist 폰트 변수를 덮어씁니다. 의도라면 그대로 두고,
   Geist를 쓰려면 `var(--font-geist-sans)`로 바꿔야 합니다.
5. `package.json`의 framer-motion / recharts / zustand / date-fns는 미사용 상태입니다.
   각각 카드 스와이프 애니메이션, 지표 차트, 전역 상태(Streak 등), 날짜 포맷을 염두에 둔 선택으로 보입니다.

## Git 워크플로

- **기본 브랜치**: `claude/economic-learning-app-011CUWvQmq94KbZQkGJUtb6u`
  (일반적인 `main`이 아닙니다. `git remote show origin`으로 항상 확인하세요.)
- **브랜치 이름**: `claude/<주제-슬러그>` 형식.
- **커밋 메시지**: Conventional Commits 접두사(`feat:`, `chore:`, `fix:`) + **한국어 제목**,
  본문은 `-` 불릿으로 변경 사항 나열. 기존 커밋 형식:

  ```
  feat: MacroMate 경제 학습 앱 초기 구현

  - Next.js 16 프론트엔드 프로젝트 셋업
  - MacroMate 홈 화면 구현
  - Tailwind CSS 4 스타일링
  ```

- 푸시는 `git push -u origin <branch-name>`. PR은 사용자가 명시적으로 요청할 때만 생성합니다.

## 작업 전 체크리스트

1. `frontend/`에서 `npm ci`로 의존성이 설치되어 있는지 확인 (`node_modules/`는 커밋되지 않음).
2. 변경 후 `npx tsc --noEmit` → 통과해야 함.
3. `npm run lint` → 기존 3건 외 **새 에러가 추가되지 않았는지** 확인.
4. `npm run build`는 네트워크가 열린 환경에서만 유효한 검증입니다 (Google Fonts 이슈).
5. UI를 바꿨다면 `npm run dev`로 라이트/다크 모드를 모두 확인하세요.
