# 고한벌 감독 웹사이트 기획 및 데이터 정리

이 문서는 고한벌 감독 개인 웹사이트 프로토타입 제작을 위해 정리한 데이터와 페이지 설계안이다.

---

## 1. 프로젝트 목적

| 항목 | 내용 |
|---|---|
| 사이트 성격 | 영화감독 개인 포트폴리오 + 작품 아카이브 |
| 운영 비용 | 무료 우선 |
| 데이터베이스 | 사용하지 않음 |
| 수정 방식 | 감독이 간단하게 직접 수정 가능해야 함 |
| 권장 기술 구조 | Astro + GitHub Pages + Pages CMS |
| 콘텐츠 저장 방식 | Markdown / YAML / JSON 기반 정적 데이터 |
| 디자인 방향 | 미니멀, 텍스트 중심, 넓은 여백, 작품 스틸컷 중심 |

---

## 2. 인물 기본 정보

| 항목 | 내용 |
|---|---|
| 이름 | 고한벌 |
| 영문 표기 | KO HANBUL |
| 출생/연도 표기 | 1985 ~ |
| 대표 분야 | 감독 |
| 활동 연대 | 2010년대, 2020년대 |
| KMDb 기준 필모그래피 수 | 12건 |
| 프로필 사진 | `assets/profile/kohanbul_profile.jpg` |

### 사이트용 짧은 소개문 초안

고한벌은 다큐멘터리를 중심으로 활동하는 영화감독이다. 학교, 가족, 지역, 삶의 여정을 관찰하며 개인의 시간과 공동체의 기억을 섬세하게 기록해왔다. 대표작으로는 《계절이 지나가는 하늘에는》, 《가끔은 여정이 아름답기도 하다》, 《어느날 교실을 나오면서》가 있다.

### 영문 소개문 초안

Ko Hanbul is a film director primarily working in documentary cinema. His films observe schools, families, local communities, and personal journeys, carefully recording individual time and collective memory. His representative works include *In the Sky Where Seasons Pass By*, *Sometimes, Beauty Lies Along the Journey*, and *Out of the Classroom*.

---

## 3. 필모그래피 요약

| 역할 | 건수 | 작품 |
|---|---:|---|
| 감독 | 3 | 가끔은 여정이 아름답기도 하다(2025), 계절이 지나가는 하늘에는(2021), 어느날 교실을 나오면서(2017) |
| 촬영 | 4 | 가끔은 여정이 아름답기도 하다(2025), 불꽃의 기억(2024), 계절이 지나가는 하늘에는(2021), 코리도라스(2021) |
| 편집 | 2 | 가끔은 여정이 아름답기도 하다(2025), 계절이 지나가는 하늘에는(2021) |
| 사운드(음향) | 1 | 계절이 지나가는 하늘에는(2021) |
| 조감독 | 1 | 코리도라스(2021) |
| 촬영팀 | 1 | 학교 가는 길(2020), 역할명: 보조촬영 |

---

## 4. 작품별 상세 데이터

### 4-1. 가끔은 여정이 아름답기도 하다

| 항목 | 내용 |
|---|---|
| 국문 제목 | 가끔은 여정이 아름답기도 하다 |
| 영문 제목 | Sometimes, Beauty Lies Along the Journey |
| 연도 | 2025 |
| 유형/국가/시간 | 다큐멘터리 / 대한민국 / 83분 |
| 감독 | 고한벌 |
| 출연 | 정선영, 정호영, 김창연, 정희갑 |
| 장르 태그 | 인물, 사회 |
| 이미지 | 제공 파일 5장 |
| 대표 이미지 | `assets/work/sometimes-beauty-lies-along-the-journey/sometimes-beauty-lies-along-the-journey-01.jpg` |

#### 줄거리

20여 년 전, 선영은 열여덟 살에 인천에서 추락 사고로 경추를 크게 다쳤다. 선영의 가족은 수술비를 마련하기 위해 인천의 가게와 집을 팔고 아버지의 고향인 청주로 이주했다. 청주에서 아버지는 알코올 중독으로 고통받고, 어머니는 힘든 노동에 시달리며 건강을 잃었고, 선영의 친형은 군대에서 불미스러운 일로 정신질환을 앓게 된다. 선영은 고시 시험에 합격하면, 그동안 가족이 함께 살았던 인천으로 돌아가 그곳에서의 기억과 흔적을 되찾고자 한다.

#### 크레디트

| 역할 | 이름 |
|---|---|
| 감독 | 고한벌 |
| 출연 | 정선영, 정호영, 김창연, 정희갑 |
| 프로듀서 | 김일권 |
| 촬영 | 고한벌, 류형석 |
| 편집 | 고한벌 |
| 음악 | 임미현 |
| 배급사 | (주)시네마달 |

#### 수상

| 연도 | 영화제 | 부문/수상 |
|---:|---|---|
| 2025 | 제17회 DMZ국제다큐멘터리영화제 | 특별상-연대상 |

---

### 4-2. 계절이 지나가는 하늘에는

| 항목 | 내용 |
|---|---|
| 국문 제목 | 계절이 지나가는 하늘에는 |
| 영문 제목 | In the Sky Where Seasons Pass By |
| 연도 | 2021 |
| 유형/국가/시간 | 다큐멘터리 / 대한민국 / 104분 |
| 감독 | 고한벌 |
| 이미지 | 제공 파일 7장 |
| 대표 이미지 | `assets/work/in-the-sky-where-seasons-pass-by/in-the-sky-where-seasons-pass-by-01.jpg` |

#### 줄거리

월악산 아래 있는 덕산초등학교에는 6년 동안 한 반으로 지낸 15명의 아이들이 있다. 이 아이들은 여느 학교 아이들처럼 수업 시간에 다소곳이 앉아있지만은 않다. 학교를 마치면 냇가에 숨겨진 비밀 장소에 모이기도 하고, 감정 조절도 못 하는 어른이 담임이 되었다며 쑥덕쑥덕 이야기를 나누기도 한다. 교실에 얌전히 앉아있는 아이들을 상상했던 신규교사 윤재는 예상과 다른 아이들의 모습에 당황한다. 아이들의 계절이 지나가는 하늘에는 무엇으로 가득할까.

#### 크레디트

| 역할 | 이름 |
|---|---|
| 감독 | 고한벌 |
| 프로듀서 | 류형석 |
| 촬영 | 고한벌, 김보미, 류형석 |
| 편집 | 고한벌 |
| 사운드(음향) | 고한벌 |
| 음악 | 임미현 |

#### 수상

| 연도 | 영화제 | 부문/수상 |
|---:|---|---|
| 2022 | 제19회 서울국제환경영화제 | 한국환경영화부문 - 관객심사단상 |

---

### 4-3. 어느날 교실을 나오면서

| 항목 | 내용 |
|---|---|
| 국문 제목 | 어느날 교실을 나오면서 |
| 영문 제목 | Out of the Classroom |
| 연도 | 2017 |
| 유형/국가/시간 | 극영화 / 대한민국 / 15분 |
| 감독 | 고한벌 |
| 이미지 | 제공 파일 1장 |
| 대표 이미지 | `assets/work/out-of-the-classroom/out-of-the-classroom-01.jpg` |

#### 줄거리

캡처 화면에는 줄거리 영역이 확인되지 않았다. 추후 KMDb 원문, 감독 제공 자료, 영화제 소개글 등으로 보완해야 한다.

#### 크레디트

| 역할 | 이름 |
|---|---|
| 감독 | 고한벌 |

---

## 5. 이미지 에셋 정리


### 가끔은 여정이 아름답기도 하다 이미지

- 대표 이미지: `assets/work/sometimes-beauty-lies-along-the-journey/sometimes-beauty-lies-along-the-journey-01.jpg`
- 갤러리 이미지 수: 5장
  - `assets/work/sometimes-beauty-lies-along-the-journey/sometimes-beauty-lies-along-the-journey-01.jpg`
  - `assets/work/sometimes-beauty-lies-along-the-journey/sometimes-beauty-lies-along-the-journey-02.jpg`
  - `assets/work/sometimes-beauty-lies-along-the-journey/sometimes-beauty-lies-along-the-journey-03.jpg`
  - `assets/work/sometimes-beauty-lies-along-the-journey/sometimes-beauty-lies-along-the-journey-04.jpg`
  - `assets/work/sometimes-beauty-lies-along-the-journey/sometimes-beauty-lies-along-the-journey-05.jpg`

### 계절이 지나가는 하늘에는 이미지

- 대표 이미지: `assets/work/in-the-sky-where-seasons-pass-by/in-the-sky-where-seasons-pass-by-01.jpg`
- 갤러리 이미지 수: 7장
  - `assets/work/in-the-sky-where-seasons-pass-by/in-the-sky-where-seasons-pass-by-01.jpg`
  - `assets/work/in-the-sky-where-seasons-pass-by/in-the-sky-where-seasons-pass-by-02.jpg`
  - `assets/work/in-the-sky-where-seasons-pass-by/in-the-sky-where-seasons-pass-by-03.jpg`
  - `assets/work/in-the-sky-where-seasons-pass-by/in-the-sky-where-seasons-pass-by-04.jpg`
  - `assets/work/in-the-sky-where-seasons-pass-by/in-the-sky-where-seasons-pass-by-05.jpg`
  - `assets/work/in-the-sky-where-seasons-pass-by/in-the-sky-where-seasons-pass-by-06.jpg`
  - `assets/work/in-the-sky-where-seasons-pass-by/in-the-sky-where-seasons-pass-by-07.jpg`

### 어느날 교실을 나오면서 이미지

- 대표 이미지: `assets/work/out-of-the-classroom/out-of-the-classroom-01.jpg`
- 갤러리 이미지 수: 1장
  - `assets/work/out-of-the-classroom/out-of-the-classroom-01.jpg`


---

## 6. 수상경력

| 연도 | 영화제 | 부문/수상 | 관련 작품 |
|---:|---|---|---|
| 2025 | 제17회 DMZ국제다큐멘터리영화제 | 특별상-연대상 | 가끔은 여정이 아름답기도 하다 |
| 2022 | 제19회 서울국제환경영화제 | 한국환경영화부문 - 관객심사단상 | 계절이 지나가는 하늘에는 |

---

## 7. 웹사이트 구성 제안

### 전체 메뉴 구조

```text
HOME
WORKS
  - 가끔은 여정이 아름답기도 하다
  - 계절이 지나가는 하늘에는
  - 어느날 교실을 나오면서
FILMOGRAPHY
AWARDS / SCREENINGS
ABOUT
CONTACT
```

### 권장 URL 구조

```text
/
 /works
 /works/sometimes-beauty-lies-along-the-journey
 /works/in-the-sky-where-seasons-pass-by
 /works/out-of-the-classroom
 /filmography
 /awards
 /about
 /contact
```

---

## 8. 페이지별 콘텐츠 설계

### HOME

- 감독명: 고한벌 / KO HANBUL
- 프로필 사진: `assets/profile/kohanbul_profile.jpg`
- 짧은 소개문
- 대표 작품 카드 3개
- 최근 수상/상영 정보
- Contact 영역

### WORKS 목록

- 대표 이미지
- 국문 제목
- 영문 제목
- 연도
- 유형
- 상영시간
- 간단 설명
- 최신순 정렬: 2025 → 2021 → 2017

### 작품 상세 페이지

- 제목, 영문 제목, 연도
- 대표 이미지 또는 스틸컷
- 기본 정보
- Synopsis
- Credits
- Awards / Screenings
- Gallery

### FILMOGRAPHY

| 연도 | 작품명 | 역할 | 비고 |
|---:|---|---|---|
| 2025 | 가끔은 여정이 아름답기도 하다 | 감독, 촬영, 편집 | 다큐멘터리 |
| 2024 | 불꽃의 기억 | 촬영 | 확인 필요 |
| 2021 | 계절이 지나가는 하늘에는 | 감독, 촬영, 편집, 사운드 | 다큐멘터리 |
| 2021 | 코리도라스 | 촬영, 조감독 | 확인 필요 |
| 2020 | 학교 가는 길 | 촬영팀 | 보조촬영 |
| 2017 | 어느날 교실을 나오면서 | 감독 | 극영화 |

### AWARDS / SCREENINGS

| 연도 | 영화제 | 부문/수상 | 관련 작품 |
|---:|---|---|---|
| 2025 | 제17회 DMZ국제다큐멘터리영화제 | 특별상-연대상 | 가끔은 여정이 아름답기도 하다 |
| 2022 | 제19회 서울국제환경영화제 | 한국환경영화부문 - 관객심사단상 | 계절이 지나가는 하늘에는 |

### ABOUT

- 감독 프로필 사진
- 감독 소개
- 약력
- 작업 방향
- 필모그래피 요약

### CONTACT

- 이메일
- SNS
- 상영 문의
- 협업 문의
- 배급사 또는 제작사 연락처가 있을 경우 별도 표기

현재 이메일과 SNS 정보는 미확보 상태이므로 placeholder 처리한다.

---

## 9. CMS 필드 설계

### 작품 Collection: works

```yaml
title_ko: 국문 제목
title_en: 영문 제목
slug: URL 식별자
year: 제작/공개 연도
type: 다큐멘터리/극영화 등
country: 국가
runtime_min: 상영시간
roles: 감독의 참여 역할
synopsis: 줄거리
cast: 출연
staff: 스태프
awards: 수상/상영 정보
screenings: 상영 정보
thumbnail: 대표 이미지
gallery: 장면 사진 목록
is_featured: 홈 노출 여부
order: 정렬 순서
draft: 비공개 여부
```

### 인물 정보 Collection: director

```yaml
name_ko: 고한벌
name_en: KO HANBUL
birth_year_display: 1985 ~
primary_role: 감독
active_decades:
  - 2010
  - 2020
bio_ko: 국문 소개문
bio_en: 영문 소개문
profile_image: assets/profile/kohanbul_profile.jpg
email: 이메일
sns:
  instagram:
  vimeo:
  youtube:
```

---