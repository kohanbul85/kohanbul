export interface FilmographyEntry {
  year: number;
  title_ko: string;
  title_en: string;
  roles: string[];
  role_detail?: string;
  type: string;
  slug: string | null;
}

export const filmography: FilmographyEntry[] = [
  {
    year: 2025,
    title_ko: '가끔은 여정이 아름답기도 하다',
    title_en: 'Sometimes, Beauty Lies Along the Journey',
    roles: ['감독', '촬영', '편집'],
    type: '다큐멘터리',
    slug: 'sometimes-beauty-lies-along-the-journey',
  },
  {
    year: 2024,
    title_ko: '불꽃의 기억',
    title_en: '',
    roles: ['촬영'],
    type: '',
    slug: null,
  },
  {
    year: 2021,
    title_ko: '계절이 지나가는 하늘에는',
    title_en: 'In the Sky Where Seasons Pass By',
    roles: ['감독', '촬영', '편집', '사운드'],
    type: '다큐멘터리',
    slug: 'in-the-sky-where-seasons-pass-by',
  },
  {
    year: 2021,
    title_ko: '코리도라스',
    title_en: '',
    roles: ['촬영', '조감독'],
    type: '',
    slug: null,
  },
  {
    year: 2020,
    title_ko: '학교 가는 길',
    title_en: '',
    roles: ['촬영팀'],
    role_detail: '보조촬영',
    type: '',
    slug: null,
  },
  {
    year: 2017,
    title_ko: '어느날 교실을 나오면서',
    title_en: 'Out of the Classroom',
    roles: ['감독'],
    type: '극영화',
    slug: 'out-of-the-classroom',
  },
];
