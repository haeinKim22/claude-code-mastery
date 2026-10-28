# 개발자 웹 이력서 ROADMAP

HTML, CSS, JavaScript, Tailwind CSS로 만드는 개발자 웹 이력서 개발 로드맵입니다.

## 1. 프로젝트 개요

- **목표**: 한 페이지로 구성된 반응형 개발자 이력서 웹사이트
- **기술 스택**: HTML5, CSS3, JavaScript (ES6+), Tailwind CSS (CDN)
- **배포**: GitHub Pages (또는 Netlify / Vercel)
- **특징**: 빌드 도구 없이 `index.html`만 열어도 동작하는 정적 사이트

## 2. 이력서 내용 (일반적인 예시)

| 섹션 | 내용 |
| --- | --- |
| 프로필 | 이름: 홍길동 / 직무: 프론트엔드 개발자 / 한 줄 소개 |
| 연락처 | 이메일, GitHub, 블로그, 전화번호 |
| 기술 스택 | HTML, CSS, JavaScript, Tailwind CSS, Git |
| 경력 | 회사명 / 기간 / 담당 업무 및 성과 (2~3개) |
| 프로젝트 | 프로젝트명 / 설명 / 사용 기술 / 링크 (3개) |
| 학력 | 학교명 / 전공 / 기간 |
| 자격증·교육 | 정보처리기사, 부트캠프 수료 등 |

## 3. 폴더 구조

```
resume/
├── index.html        # 메인 페이지
├── css/
│   └── style.css     # Tailwind로 처리 못하는 커스텀 스타일
├── js/
│   └── main.js       # 다크모드, 스크롤 애니메이션 등
├── assets/
│   └── images/       # 프로필 사진, 프로젝트 썸네일
└── ROADMAP.md
```

## 4. 개발 단계

### Phase 1. 기획 및 환경 설정
- [x] 이력서에 들어갈 내용 정리 (섹션별 텍스트 초안)
- [x] 폴더 구조 생성 및 `index.html` 기본 틀 작성
- [x] Tailwind CSS CDN 연결, 폰트(Pretendard 등) 설정
- [x] 컬러 팔레트 및 레이아웃 간단 스케치

### Phase 2. 마크업 (HTML)
- [x] 시맨틱 태그(`header`, `nav`, `main`, `section`, `footer`)로 구조 작성
- [x] 섹션 작성: Hero → About → Skills → Experience → Projects → Education → Contact → SNS
- [x] 네비게이션 앵커 링크 연결
- [x] 이미지 `alt`, 메타 태그(`title`, `description`, OG) 추가

### Phase 3. 스타일링 (Tailwind CSS)
- [x] 전체 레이아웃 및 간격, 타이포그래피 적용
- [x] 반응형 디자인 (`sm`, `md`, `lg` 브레이크포인트)
- [x] 카드형 프로젝트 목록, 타임라인형 경력 UI
- [x] 기술 스택 배지 및 hover 효과

### Phase 4. 인터랙션 (JavaScript)
- [x] 모바일 햄버거 메뉴 토글
- [x] 부드러운 스크롤 및 현재 섹션 네비 하이라이트
- [x] 다크 모드 토글 (`localStorage`에 저장)
- [x] 스크롤 시 섹션 등장 애니메이션 (`IntersectionObserver`)
- [x] 연락처 이메일 복사 버튼

### Phase 5. 품질 점검
- [ ] 반응형 확인 (모바일 / 태블릿 / 데스크톱)
- [ ] 크로스 브라우저 확인 (Chrome, Edge, Safari)
- [ ] Lighthouse 점검 (성능, 접근성, SEO 90점 이상)
- [ ] 오탈자 및 링크 동작 확인

### Phase 6. 배포
- [ ] GitHub 저장소 생성 및 코드 푸시
- [ ] GitHub Pages 활성화 및 접속 확인
- [ ] 이력서·SNS 프로필에 URL 등록

### Phase 7. 확장 (선택)
- [ ] PDF 다운로드 버튼 및 인쇄용 스타일 (`@media print`)
- [ ] 한국어 / 영어 언어 전환
- [ ] 프로젝트 데이터를 JSON으로 분리해 동적 렌더링
- [ ] 방문자 분석(Google Analytics) 추가

## 5. 일정 (예시)

| 단계 | 예상 기간 |
| --- | --- |
| Phase 1. 기획 및 환경 설정 | 0.5일 |
| Phase 2. 마크업 | 1일 |
| Phase 3. 스타일링 | 1.5일 |
| Phase 4. 인터랙션 | 1일 |
| Phase 5~6. 점검 및 배포 | 0.5일 |
| **합계** | **약 4~5일** |

## 6. 완료 기준

- 모든 섹션이 표시되고 모바일·데스크톱에서 레이아웃이 깨지지 않는다.
- 다크 모드와 메뉴 토글이 정상 동작한다.
- Lighthouse 주요 항목 90점 이상.
- 공개 URL로 접속 가능하다.
