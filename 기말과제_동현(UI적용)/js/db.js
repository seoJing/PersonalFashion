const questionArr = [
  {
    img: 'htpasd/asdcxz/dasd',
    questionNum: 1,
    questionText: '첫 만남에서 셔츠를 입고 나간다면?',
    option: [
      {
        text: '너무 차려입고 나가나..? 부끄러운데',
        impact: { C: 2, S: 1, F: 0, A: 0 },
      },
      {
        text: '좋은데? 넥타이도 매볼까',
        impact: { C: 0, S: 0, F: 2, A: 1 },
      },
    ],
  },
  {
    img: 'htpasd/asdcxz/dasd',
    questionNum: 2,
    questionText: '신입생 오티날 청바지, 맨투맨 어떻게 생각해?',
    option: [
      {
        text: '너무 무난한거 아니야?',
        impact: { C: 0, S: 2, F: 0, A: 1 },
      },
      {
        text: '편하고 좋네',
        impact: { C: 2, S: 0, F: 1, A: 0 },
      },
    ],
  },
  {
    img: 'path/to/image1',
    questionNum: 3,
    questionText: '오늘 너의 기분은 어떤 색깔일까?',
    option: [
      {
        text: '차분한 네이비',
        impact: { C: 1, S: 0, F: 0, A: 2 },
      },
      {
        text: '강렬한 레드',
        impact: { C: 0, S: 2, F: 1, A: 0 },
      },
    ],
  },
  {
    img: 'path/to/image2',
    questionNum: 4,
    questionText: '만약에 시간을 돌릴 수 있다면, 어떤 시대의 패션을 입어볼래?',
    option: [
      {
        text: '1970년대 히피 스타일',
        impact: { C: 0, S: 2, F: 1, A: 0 },
      },
      {
        text: '90년대 스트리트웨어',
        impact: { C: 2, S: 0, F: 0, A: 1 },
      },
    ],
  },
  {
    img: 'path/to/image3',
    questionNum: 5,
    questionText: '너의 아침 루틴에서 가장 중요한 요소는?',
    option: [
      {
        text: '간편하고 빠르게',
        impact: { C: 2, S: 0, F: 0, A: 1 },
      },
      {
        text: '세심하고 완벽하게',
        impact: { C: 0, S: 2, F: 1, A: 0 },
      },
    ],
  },
  {
    img: 'path/to/image4',
    questionNum: 6,
    questionText: '어떤 음악을 듣고 싶을 때, 어떤 스타일의 옷을 입고 싶어?',
    option: [
      {
        text: '랩/힙합',
        impact: { C: 0, S: 2, F: 0, A: 1 },
      },
      {
        text: '인디/록',
        impact: { C: 0, S: 2, F: 1, A: 2 },
      },
    ],
  },
  {
    img: 'path/to/image5',
    questionNum: 7,
    questionText: '내일의 날씨가 어떤 스타일의 옷을 선택하게 할까?',
    option: [
      {
        text: '비가 오면 우산이 필수',
        impact: { C: 1, S: 0, F: 0, A: 2 },
      },
      {
        text: '맑은 날씨엔 시원하게',
        impact: { C: 0, S: 2, F: 1, A: 0 },
      },
    ],
  },
  {
    img: 'path/to/image6',
    questionNum: 8,
    questionText: '너의 하루를 대표하는 단어는?',
    option: [
      {
        text: '도전적이고 활동적인',
        impact: { C: 2, S: 0, F: 1, A: 0 },
      },
      {
        text: '편안하고 여유로운',
        impact: { C: 0, S: 2, F: 0, A: 1 },
      },
    ],
  },
  {
    img: 'path/to/image7',
    questionNum: 9,
    questionText: '만약 한 공간에 계속 살아야 한다면, 어떤 장소에서 살고 싶어?',
    option: [
      {
        text: '도시의 중심에서',
        impact: { C: 2, S: 0, F: 1, A: 0 },
      },
      {
        text: '자연 속에서',
        impact: { C: 0, S: 2, F: 0, A: 1 },
      },
    ],
  },
  {
    img: 'path/to/image8',
    questionNum: 10,
    questionText: '넌 새로운 경험을 시도하는 걸 좋아해?',
    option: [
      {
        text: '네, 새로운 도전이 즐거워',
        impact: { C: 0, S: 2, F: 0, A: 1 },
      },
      {
        text: '아니, 안정적인 게 더 좋아',
        impact: { C: 2, S: 0, F: 1, A: 0 },
      },
    ],
  },
  {
    img: 'path/to/image9',
    questionNum: 11,
    questionText: '너의 일상에서 가장 많이 사용하는 아이템은?',
    option: [
      {
        text: '스마트폰',
        impact: { C: 1, S: 0, F: 0, A: 2 },
      },
      {
        text: '헤드폰',
        impact: { C: 0, S: 2, F: 1, A: 0 },
      },
    ],
  },
  {
    img: 'path/to/image10',
    questionNum: 12,
    questionText: '친구에게 추천할 수 있는 가장 독특한 장소는?',
    option: [
      {
        text: '갤러리나 박물관',
        impact: { C: 0, S: 2, F: 1, A: 0 },
      },
      {
        text: '스트리트 아트 구역',
        impact: { C: 2, S: 0, F: 0, A: 1 },
      },
    ],
  },
];

const personalityScores = {
  C: 0,
  S: 0,
  F: 0,
  A: 0,
};

const mbtiDescriptions = {
  INTJ: {
    title: '용의주도한 전략가',
    description:
      '상상력이 풍부하며 전략적인 사고를 가진 당신은 모든 가능성을 고려하는 계획가입니다.',
  },
  INTP: {
    title: '논리적인 사색가',
    description:
      '끊임없이 새로운 지식을 추구하며 독창적인 아이디어를 내는 발명가입니다.',
  },
  ENTJ: {
    title: '대담한 통솔자',
    description:
      '카리스마 있고 효율적인 리더로, 장기적인 계획과 목표 달성에 능합니다.',
  },
  ENTP: {
    title: '뜨거운 논쟁을 즐기는 변론가',
    description:
      '지적 도전을 즐기며 창의적인 문제 해결 능력을 가진 혁신가입니다.',
  },
  INFJ: {
    title: '선의의 옹호자',
    description:
      '조용하고 신비로우며 영감을 주는 이상주의자로, 확고한 가치관을 가지고 있습니다.',
  },
  INFP: {
    title: '열정적인 중재자',
    description:
      '이상주의적이고 충실하며, 자신의 가치와 사람들에게 깊은 관심을 가집니다.',
  },
  ENFJ: {
    title: '정의로운 사회운동가',
    description:
      '카리스마 있고 영감을 주는 지도자로, 다른 사람들의 성장을 돕는 데 열정적입니다.',
  },
  ENFP: {
    title: '재기발랄한 활동가',
    description:
      '열정적이고 창의적이며, 항상 새로운 가능성을 찾는 자유로운 영혼입니다.',
  },
  ISTJ: {
    title: '청렴결백한 논리주의자',
    description:
      '실용적이고 사실 중심적이며, 믿을 수 있고 책임감 있는 성격입니다.',
  },
  ISFJ: {
    title: '용감한 수호자',
    description:
      '매우 헌신적이고 따뜻하며, 항상 사랑하는 사람들을 보호하려고 합니다.',
  },
  ESTJ: {
    title: '엄격한 관리자',
    description:
      '체계적이고 직접적이며, 전통과 질서를 중요시하는 관리자입니다.',
  },
  ESFJ: {
    title: '사교적인 외교관',
    description:
      '배려심이 많고 사교적이며, 인기 있고 항상 다른 사람을 돕고자 합니다.',
  },
  ISTP: {
    title: '만능 재주꾼',
    description:
      '대담하고 실용적인 문제 해결사로, 다양한 도구를 능숙하게 다룹니다.',
  },
  ISFP: {
    title: '호기심 많은 예술가',
    description:
      '친절하고 예술적이며, 항상 새로운 것을 경험하고자 하는 모험가입니다.',
  },
  ESTP: {
    title: '모험을 즐기는 사업가',
    description:
      '스마트하고 에너지 넘치며, 위험을 감수하는 것을 두려워하지 않습니다.',
  },
  ESFP: {
    title: '자유로운 영혼의 연예인',
    description:
      '자발적이고 에너지 넘치며, 인생을 즐기고 다른 사람들도 즐겁게 합니다.',
  },
};

const resultArr = [
  {
    img: 'htpasd/asdcxz/dasd',
    key: 'M',
    title: '미니멀 스타일',
    description:
      '심플하고 깔끔한 라인과 중립적인 색상을 선호하는 미니멀 스타일은 당신에게 잘 어울립니다. 불필요한 장식을 최소화하고 기본에 충실한 이 스타일은 세련되고 시간이 지나도 변하지 않는 클래식함을 추구합니다.',
    characteristics: [
      '깔끔한 라인과 실루엣',
      '중립적인 색상 (검정, 흰색, 베이지, 그레이)',
      '고품질 소재와 좋은 핏',
      '최소한의 액세서리',
      '기능성과 실용성 중시',
    ],
    items: [
      {
        name: '미니멀 셔츠',
        img: 'https://example.com/minimal-shirt.jpg',
        link: 'https://shop.example.com/minimal-shirt',
      },
      {
        name: '슬림핏 팬츠',
        img: 'https://example.com/slim-pants.jpg',
        link: 'https://shop.example.com/slim-pants',
      },
      {
        name: '미니멀 코트',
        img: 'https://example.com/minimal-coat.jpg',
        link: 'https://shop.example.com/minimal-coat',
      },
      {
        name: '베이직 스니커즈',
        img: 'https://example.com/basic-sneakers.jpg',
        link: 'https://shop.example.com/basic-sneakers',
      },
    ],
    celebrities: ['스티브 잡스', '김태희', '전지현'],
    mbti: ['INTJ', 'ISTP'],
  },
  {
    img: 'htpasd/asdcxz/dasd',
    key: 'S',
    title: '스트릿 스타일',
    description:
      '도시적이고 트렌디한 스트릿 스타일은 당신의 개성과 자유로운 정신을 표현하기에 완벽합니다. 편안함과 스타일을 동시에 추구하는 이 패션은 자신만의 독특한 감각을 보여줄 수 있습니다.',
    characteristics: [
      '오버사이즈 실루엣',
      '레이어링 기법',
      '그래픽 티셔츠와 후드티',
      '스니커즈와 캡모자',
      '대담한 색상과 패턴',
    ],
    items: [
      {
        name: '그래픽 티셔츠',
        img: 'https://example.com/graphic-tee.jpg',
        link: 'https://shop.example.com/graphic-tee',
      },
      {
        name: '오버사이즈 후드티',
        img: 'https://example.com/oversized-hoodie.jpg',
        link: 'https://shop.example.com/oversized-hoodie',
      },
      {
        name: '스트릿 청바지',
        img: 'https://example.com/street-jeans.jpg',
        link: 'https://shop.example.com/street-jeans',
      },
      {
        name: '하이탑 스니커즈',
        img: 'https://example.com/high-top-sneakers.jpg',
        link: 'https://shop.example.com/high-top-sneakers',
      },
      {
        name: '그래픽 티셔츠',
        img: 'https://example.com/graphic-tee.jpg',
        link: 'https://shop.example.com/graphic-tee',
      },
      {
        name: '오버사이즈 후드티',
        img: 'https://example.com/oversized-hoodie.jpg',
        link: 'https://shop.example.com/oversized-hoodie',
      },
      {
        name: '스트릿 청바지',
        img: 'https://example.com/street-jeans.jpg',
        link: 'https://shop.example.com/street-jeans',
      },
      {
        name: '하이탑 스니커즈',
        img: 'https://example.com/high-top-sneakers.jpg',
        link: 'https://shop.example.com/high-top-sneakers',
      },
    ],
    celebrities: ['지드래곤', '빌리 아일리시', '트래비스 스콧'],
    mbti: ['ESTP', 'ENTP'],
  },
  {
    img: 'htpasd/asdcxz/dasd',
    key: 'F',
    title: '포멀 스타일',
    description:
      '세련되고 우아한 클래식 스타일은 당신의 안정적이고 성숙한 이미지를 완성시켜 줍니다. 시간이 지나도 변하지 않는 품격과 정제된 아름다움을 추구하는 이 스타일은 전문적이고 신뢰감 있는 인상을 줍니다.',
    characteristics: [
      '테일러드 재킷과 코트',
      '깔끔한 셔츠와 블라우스',
      '잘 맞는 팬츠와 스커트',
      '품질 좋은 가죽 신발과 가방',
      '절제된 액세서리',
    ],
    items: [
      {
        name: '테일러드 재킷',
        img: 'https://example.com/tailored-jacket.jpg',
        link: 'https://shop.example.com/tailored-jacket',
      },
      {
        name: '클래식 셔츠',
        img: 'https://example.com/classic-shirt.jpg',
        link: 'https://shop.example.com/classic-shirt',
      },
      {
        name: '슬랙스 팬츠',
        img: 'https://example.com/slacks.jpg',
        link: 'https://shop.example.com/slacks',
      },
      {
        name: '가죽 로퍼',
        img: 'https://example.com/leather-loafers.jpg',
        link: 'https://shop.example.com/leather-loafers',
      },
      {
        name: '테일러드 재킷',
        img: 'https://example.com/tailored-jacket.jpg',
        link: 'https://shop.example.com/tailored-jacket',
      },
      {
        name: '클래식 셔츠',
        img: 'https://example.com/classic-shirt.jpg',
        link: 'https://shop.example.com/classic-shirt',
      },
      {
        name: '슬랙스 팬츠',
        img: 'https://example.com/slacks.jpg',
        link: 'https://shop.example.com/slacks',
      },
      {
        name: '가죽 로퍼',
        img: 'https://example.com/leather-loafers.jpg',
        link: 'https://shop.example.com/leather-loafers',
      },
    ],
    celebrities: ['케이트 미들턴', '조지 클루니', '김희애'],
    mbti: ['ENTJ', 'ISTJ'],
  },
  {
    img: 'htpasd/asdcxz/dasd',
    key: 'C',
    title: '캐주얼 스타일',
    description:
      '편안하면서도 스타일리시한 캐주얼 패션은 당신의 실용적이고 친근한 성격을 잘 보여줍니다. 일상생활에서 활동하기 편하면서도 세련된 느낌을 주는 이 스타일은 다양한 상황에 적응할 수 있습니다.',
    characteristics: [
      '편안한 청바지와 티셔츠',
      '가디건과 스웨터',
      '편안한 신발 (스니커즈, 로퍼)',
      '실용적인 아우터',
      '자연스러운 액세서리',
    ],
    items: [
      {
        name: '기본 티셔츠',
        img: 'https://cdn.sisajournal.com/news/photo/201906/186568_91172_2053.jpg',
        link: 'https://shop.example.com/basic-tee',
      },
      {
        name: '데님 팬츠',
        img: 'https://cdn.sisajournal.com/news/photo/201906/186568_91172_2053.jpg',
        link: 'https://shop.example.com/denim-pants',
      },
      {
        name: '니트 가디건',
        img: 'https://cdn.sisajournal.com/news/photo/201906/186568_91172_2053.jpg',
        link: 'https://shop.example.com/knit-cardigan',
      },
      {
        name: '데일리 스니커즈',
        img: 'https://cdn.sisajournal.com/news/photo/201906/186568_91172_2053.jpg',
        link: 'https://shop.example.com/daily-sneakers',
      },
      {
        name: '기본 티셔츠',
        img: 'https://cdn.sisajournal.com/news/photo/201906/186568_91172_2053.jpg',
        link: 'https://shop.example.com/basic-tee',
      },
      {
        name: '데님 팬츠',
        img: 'https://cdn.sisajournal.com/news/photo/201906/186568_91172_2053.jpg',
        link: 'https://shop.example.com/denim-pants',
      },
      {
        name: '니트 가디건',
        img: 'https://cdn.sisajournal.com/news/photo/201906/186568_91172_2053.jpg',
        link: 'https://shop.example.com/knit-cardigan',
      },
      {
        name: '데일리 스니커즈',
        img: 'https://cdn.sisajournal.com/news/photo/201906/186568_91172_2053.jpg',
        link: 'https://shop.example.com/daily-sneakers',
      },
      {
        name: '기본 티셔츠',
        img: 'https://cdn.sisajournal.com/news/photo/201906/186568_91172_2053.jpg',
        link: 'https://shop.example.com/basic-tee',
      },
      {
        name: '데님 팬츠',
        img: 'https://cdn.sisajournal.com/news/photo/201906/186568_91172_2053.jpg',
        link: 'https://shop.example.com/denim-pants',
      },
      {
        name: '니트 가디건',
        img: 'https://cdn.sisajournal.com/news/photo/201906/186568_91172_2053.jpg',
        link: 'https://shop.example.com/knit-cardigan',
      },
      {
        name: '데일리 스니커즈',
        img: 'https://cdn.sisajournal.com/news/photo/201906/186568_91172_2053.jpg',
        link: 'https://shop.example.com/daily-sneakers',
      },
    ],
    celebrities: ['제니퍼 애니스턴', '박보검', '수지'],
    mbti: ['ISFJ', 'ESFJ'],
  },
  {
    img: 'htpasd/asdcxz/dasd',
    key: 'A',
    title: '아메카지 스타일',
    description:
      '일본식 미국 캐주얼을 의미하는 아메카지 스타일은 당신의 독특한 감각과 빈티지한 매력을 표현하기에 적합합니다. 클래식한 아메리칸 캐주얼에 일본 특유의 세련된 감성을 더한 이 스타일은 편안하면서도 개성 있는 룩을 완성합니다.',
    characteristics: [
      '데님 아이템 (청바지, 재킷)',
      '워크웨어와 밀리터리 요소',
      '빈티지한 느낌의 아이템',
      '자연스러운 색상과 소재',
      '레이어드 스타일링',
    ],
    items: [
      {
        name: '빈티지 데님 재킷',
        img: 'https://example.com/vintage-denim-jacket.jpg',
        link: 'https://shop.example.com/vintage-denim-jacket',
      },
      {
        name: '카고 팬츠',
        img: 'https://example.com/cargo-pants.jpg',
        link: 'https://shop.example.com/cargo-pants',
      },
      {
        name: '워커 부츠',
        img: 'https://example.com/worker-boots.jpg',
        link: 'https://shop.example.com/worker-boots',
      },
      {
        name: '체크 셔츠',
        img: 'https://example.com/check-shirt.jpg',
        link: 'https://shop.example.com/check-shirt',
      },
      {
        name: '빈티지 데님 재킷',
        img: 'https://example.com/vintage-denim-jacket.jpg',
        link: 'https://shop.example.com/vintage-denim-jacket',
      },
      {
        name: '카고 팬츠',
        img: 'https://example.com/cargo-pants.jpg',
        link: 'https://shop.example.com/cargo-pants',
      },
      {
        name: '워커 부츠',
        img: 'https://example.com/worker-boots.jpg',
        link: 'https://shop.example.com/worker-boots',
      },
      {
        name: '체크 셔츠',
        img: 'https://example.com/check-shirt.jpg',
        link: 'https://shop.example.com/check-shirt',
      },
    ],
    celebrities: ['이나영', '정해인', '키무라 타쿠야'],
    mbti: ['INFP', 'ISFP'],
  },
];

export { questionArr, personalityScores, resultArr, mbtiDescriptions };
