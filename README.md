# MacroMate - AI 기반 하루 10분 경제 학습 앱

> "이론 → 뉴스 → 인사이트" 3단 구조로 경제를 쉽고 재미있게 배우는 개인화 학습 플랫폼

## 🎯 프로젝트 개요

MacroMate는 바쁜 직장인, 투자 입문자, 창업가를 위한 AI 기반 경제 학습 루틴 앱입니다.
매일 10분 투자로 경제 개념을 배우고, 최신 뉴스와 연결해 비즈니스 사고력을 키울 수 있습니다.

## 🏗️ 프로젝트 구조

```
macromate/
├── frontend/          # Next.js 14 (App Router) - 프론트엔드
├── backend/           # FastAPI - 백엔드 API 서버
├── docs/              # 기획서, API 명세서 등 문서
└── README.md
```

## 🚀 핵심 기능

1. **AI Daily Briefing** - 매일 오전 최신 뉴스 + 경제 개념 연결
2. **오늘의 이론 카드** - 카드 스와이프 형태의 경제 개념 학습
3. **AI Quiz** - 3문제로 복습하는 퀴즈 시스템
4. **Insight Note** - AI 피드백이 있는 개인화 학습 노트
5. **Streak 관리** - 연속 학습 일수 트래킹 및 리마인더

## 🛠️ 기술 스택

### Frontend
- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- Shadcn/ui
- Framer Motion

### Backend
- Python 3.11+
- FastAPI
- SQLAlchemy
- PostgreSQL
- Redis

### AI
- Claude 3.5 Sonnet (콘텐츠 생성)
- GPT-4 (퀴즈 생성)
- Perplexity API (뉴스 검색)

## 📦 설치 및 실행

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

## 📝 문서

- [제품 기획서](./docs/product-spec.md)
- API 명세서 (작성 예정)
- 데이터베이스 스키마 (작성 예정)

## 🎨 디자인 원칙

- 하루 10분 내 완료 가능한 UX
- 모바일 최적화
- 직관적인 카드 스와이프 학습
- 게이미피케이션 (Streak, 포인트)

## 📊 타겟 유저

- 20~40대 직장인
- 투자 입문자
- 창업가/스타트업 종사자
- 경제 감각을 키우고 싶은 실무형 학습자

## 🔐 라이선스

MIT License

## 👥 기여

개발: Claude Code + jungpadak
