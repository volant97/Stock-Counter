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

### 2025.06.14

#### 0.2.1

- items data 입력 완료
- 진열대 별로 구분
- 우측 상단 카운트 CSS 수정

#### 0.2.2

- 카운트 개별 적용
  - useState 구조 변경

#### 0.2.3

- 빈 항목 선택되지 않게 설정

### 2025.06.19

#### 0.2.4

- 리셋 버튼 로직 수정
  - 개별 진열대별로 리셋 적용

#### 0.2.5

- DisplayZone 컴포넌트화
- 리셋 버튼 개선
  - 활성화 조건 부여
  - confirm 추가

#### 0.2.6

- 리셋 버튼 CSS 수정
  - icon 추가 및 CSS 수정
- 빈 진열칸 오류 수정
  - 선택되지 않도록 다시 수정

#### 0.3.1

- recoil, next.js 호환 이슈
  - 14ver 다운그레이드
  - 각종 오류 해결 및 설정값 재설정
- Recoil 설치
  - 스텝별로 페이지네이션 목표
  - steps atom 작성
- Provider
  - RecoilRoot 설정
- 스텝별 CSS
  - 이전, 다음 버전 클릭 시 해당 스텝 표시
  - Header와 Footer에 배치
- Layout 컴포넌트 제작
  - Header와 Footer 컴토넌트 제작

#### 0.3.2

- readme 추가
  - 버튼 진동 피드백 추가 방안
    - if (navigator.vibrate) {
      navigator.vibrate(100); // 100ms 진동
      }
    - 단, IOS에서는 작동 불가. 안드로이드만 가능
- 개별 품목 카운트 리셋 시 진동 피드백
- 개별 품목 리셋 후 다음 카운트 먹히는 현상 발견
  - 데스크팝, IOS에서는 정상작동, 안드로이드만 문제
    - 혹시 진동 피드백 문제인가? - 아님
    - 크롬 최신 업데이트가 안되어 그런가? - 아님
  - 테스트 하다보니까 테스크탑, 모바일 꼬여서 다시 복원
    - 추후에 다시 테스트해보기로
- 개별 품목 리셋 시 IOS에서 돋보기 나오는 현상
  - text 부분에 select-none 처리

### 2025.06.27

#### 0.3.3

- 진열대 리셋 버튼 confirm 제거하고 테스트
- router
  - 이전, 다음 버튼 클릭 시 해당 단계로 이동
- test
  - 테스트용 sort btn 제작

### 2025.07.26

#### 0.4.1

- 전체 sort btn 제작
  - 개별 sort와 전체 sort 모두 작동 가능

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
- 창고 진열 순서에 따라 정렬
- 저장 버튼 클릭 시 변동 방지
- 카운트 한 품목만 filter되어 최종 확인 (전산 입력 때에도 활용 가능)
- 확인, 창고, 전산, 진열
- package.json - name, version 변경방법 (변경 해도 되겠지?)
- 리셋 확인 창 모달 내가 만들자.(나중에 추가)
- 전체 리셋 버튼도 제작
- 이슈
  - 개별 품목 리셋 후 다음 카운트 먹히는 현상 해결하기
- 코드 통일
  - rafce로 통일하기
  - 현재 rafc와 rafce 섞여있음
