# 🖥️ 개인 포트폴리오 홈페이지

## 📌 프로젝트 소개

개인 포트폴리오 웹사이트로, 개발자로서의 역량과 프로젝트를 체계적으로 소개하기 위한 플랫폼입니다.
디자인부터 기획, 개발까지 전 과정을 직접 수행하였으며, 직관적인 인터페이스와 현대적인 디자인을 통해
방문자가 개발자의 기술과 경험을 쉽게 이해할 수 있도록 설계되었습니다.

---

## 🚀 주요 기능

- **홈 페이지**: 자기소개 및 포트폴리오 개요 제공.
- **프로젝트 상세 페이지**: 각 프로젝트의 기술 스택, 구현 기능, 역할 및 결과를 상세히 설명.
- **404 페이지**: 잘못된 URL로 접근 시 사용자에게 친절한 메시지와 메인 페이지로의 링크 제공.

---

## 🛠️ 사용 기술 스택

- **프론트엔드**: React (v18), React Router (v6)
- **스타일링**: Material-UI (MUI), Emotion CSS-in-JS
- **애니메이션**: 커스텀 애니메이션 버튼
- **배포**: GitHub Pages (또는 다른 배포 플랫폼)

---

## 📂 프로젝트 구조

```plaintext
src/
├── components/          # 재사용 가능한 UI 컴포넌트
│   ├── common/          # 공통 컴포넌트 (예: CustomContainer, AnimatedButton)
├── pages/               # 주요 페이지
│   ├── Home.js          # 홈 페이지
│   ├── ProjectDetail.js # 프로젝트 상세 페이지
│   └── NotFound.js      # 404 페이지
├── App.js               # 라우팅 및 테마 설정
├── App.css              # 전체적인 스타일링
└── index.js             # 엔트리 포인트
```

## 💻 설치 및 실행 방법

1. **레포지토리 클론**

   ```bash
   git clone https://github.com/your-username/portfolio.git

   ```

2. **의존성 설치**

   ```bash
   npm install

   ```

3. **개발 서버 실행**

   ```bash
   npm start

   ```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000/)으로 접속합니다.

---

```

```
