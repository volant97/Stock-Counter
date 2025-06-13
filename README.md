# Stock Counter

## Project Version

### 2025.05.24

#### 0.0.1

- Next 설치 및 파일 초기 세팅
  - npx create-next-app@latest

#### 0.1.1

- 기본 기능 구현
  - grid로 item 배치
  - 클릭 시 카운트 증가
  - 1.5초 클릭 유지 시 카운트 리셋

#### 0.1.2

- github 연결

#### 0.1.3

- 버전 표시
- 카운트 리셋 버튼 제작

### 2025.06.13

#### 0.1.4

- items data 입력

### 추가 사항

- git 연결
- layout 잡기
- 파일 초기 세팅
  - env
  - gitignore에 env 추가
  - components 폴더 추가
  - lib 폴더 추가
  - types 폴더 추가
  - page 정리
  - layout 정리
    - 기존 폰트 코드 삭제
    - 모바일 크기 설정
    - scrollbar-hide 설정
  - tailwind-scrollbar-hide 설치
    - tailwind.config.js 설정
  - globals css 정리
  - globals.css 폰트 추가
    - 전역 폰트 설정
    - 테마에 폰트 추가
  - tailwind.config.js 설정
    - colors
    - fontFamily
- data
  - name: string
  - shortName: string
  - defaultCount: number
  - displayZone: number
