const questionArr = [
  {
    questionNum: 1,
    questionText: '첫 만남에 셔츠는 어때?',
    option: [
      {
        text: '너무 차려입고 나가나..?',
        impact: { C: 2, S: 1, M: 0, A: 0 },
      },
      {
        text: '무난하고 좋은데?',
        impact: { C: 0, S: 0, M: 2, A: 1 },
      },
    ],
  },
  {
    questionNum: 2,
    questionText: '신입생 오티날 청바지에 맨투맨은 어때?',
    option: [
      {
        text: '너무 안꾸민거 아니야?',
        impact: { C: 0, S: 2, M: 0, A: 1 },
      },
      {
        text: '편하고 좋네',
        impact: { C: 2, S: 0, M: 1, A: 0 },
      },
    ],
  },
  {
    questionNum: 3,
    questionText: '어떤 신발을 더 선호해?',
    option: [
      {
        text: '로퍼, 더비, 첼시부츠 같은 구두',
        impact: { C: 0, S: 0, M: 2, A: 1 },
      },
      {
        text: '스니커즈나 운동화',
        impact: { C: 2, S: 1, M: 0, A: 0 },
      },
    ],
  },
  {
    questionNum: 4,
    questionText: '어떤 가방이 더 좋아?',
    option: [
      {
        text: '백팩이나 크로스백',
        impact: { C: 2, S: 1, M: 0, A: 0 },
      },
      {
        text: '토트백이나 숄더백',
        impact: { C: 0, S: 0, M: 2, A: 1 },
      },
    ],
  },
  {
    questionNum: 5,
    questionText: '날이 좀 추워지면, 가장 먼저 생각나는 아우터는?',
    option: [
      {
        text: '코트나 블레이저?',
        impact: { C: 0, S: 0, M: 2, A: 1 },
      },
      {
        text: '후드티, 바람막이같이 편안한 아우터',
        impact: { C: 2, S: 1, M: 0, A: 0 },
      },
    ],
  },
  {
    questionNum: 6,
    questionText: '갑작스럽게 친구가 나오라고 할 때',
    option: [
      {
        text: '간단하게 후드티나 입고 나가자',
        impact: { C: 2, S: 0, M: 0, A: 0 },
      },
      {
        text: '이왕 나가는 거 예쁘게 입자',
        impact: { C: 0, S: 2, M: 1, A: 2 },
      },
    ],
  },
  {
    questionNum: 7,
    questionText: '옷장에 더 많이 보유한 아이템은?',
    option: [
      {
        text: '기본템',
        impact: { C: 1, S: 0, M: 2, A: 0 },
      },
      {
        text: '개성템',
        impact: { C: 0, S: 2, M: 0, A: 1 },
      },
    ],
  },
  {
    questionNum: 8,
    questionText: '나의 스타일을 표현하는 단어는?',
    option: [
      {
        text: '느낌있는',
        impact: { C: 0, S: 2, M: 1, A: 0 },
      },
      {
        text: '편안한',
        impact: { C: 2, S: 0, M: 0, A: 1 },
      },
    ],
  },
  {
    questionNum: 9,
    questionText: '주말 데이트 룩으로 더 선호하는 룩은?',
    option: [
      {
        text: '단정한 슬랙스와 셔츠',
        impact: { C: 0, S: 0, M: 2, A: 1 },
      },
      {
        text: '캐주얼한 와이드 팬츠와 후드',
        impact: { C: 2, S: 1, M: 0, A: 0 },
      },
    ],
  },
  {
    questionNum: 10,
    questionText: '마무리로 액세서리를 추가해야 한다면?',
    option: [
      {
        text: '목걸이나 반지',
        impact: { C: 0, S: 2, M: 0, A: 0 },
      },
      {
        text: '스마트워치나 손목시계',
        impact: { C: 1, S: 0, M: 2, A: 2 },
      },
    ],
  },
  {
    questionNum: 11,
    questionText: '옷을 구매할 때, 더 고려하는 것은?',
    option: [
      {
        text: '금액이 저렴해야지!',
        impact: { C: 1, S: 1, M: 1, A: 1 },
      },
      {
        text: '비싸도 예쁘면 장떙!',
        impact: { C: 1, S: 1, M: 1, A: 1 },
      },
    ],
  },
  {
    questionNum: 12,
    questionText: '추구하는 색상톤은?',
    option: [
      {
        text: '카키, 브라운, 버건디',
        impact: { C: 0, S: 0, M: 2, A: 2 },
      },
      {
        text: '블루, 레드, 그린, 베이지',
        impact: { C: 2, S: 2, M: 0, A: 0 },
      },
    ],
  },
];

const personalityScores = {
  C: 0,
  S: 0,
  M: 0,
  A: 0,
};

const resultArr = [
  {
    key: 'M',
    title: '미니멀 스타일',
    description:
      '절제와 단순함을 추구하는 미니멀 스타일은 깔끔하고, 단정된 이미지를 주기에 가장 적합합니다.',
    img: ['https://imgur.com/a/UjyNlmC.png', 'https://imgur.com/a/wRnMHFv.png', 'https://imgur.com/a/p0wHqZH.png'],
    youtube: {
      name: '패션튜브삭형',
      link: 'https://www.youtube.com/@%ED%8C%A8%EC%85%98%ED%8A%9C%EB%B8%8C%EC%82%AD%ED%98%95',
      icon: 'https://yt3.googleusercontent.com/ytc/AIdro_neit_841a8Hd8mBWlTVrFf7ZrhDJTdb25wyPPr1w2nxjE=s160-c-k-c0x00ffffff-no-rj',
      src: 'https://youtube.com/embed/R3qY2GHHErY',
    },
  },
  {
    key: 'S',
    title: '스트릿 스타일',
    description:
      '색깔이 뚜렷한 스트릿 스타일은 다양한 색감과 패턴으로 자신만의 스타일과 개성을 마음껏 뽐낼 수 있습니다.',
    img: ['https://imgur.com/a/bzCksjM.png', 'https://imgur.com/a/3ktzXGL.png', 'https://imgur.com/a/ddHmQ2m.png'],
    youtube: {
      name: '피로',
      link: 'https://www.youtube.com/@Piro7',
      icon: 'https://yt3.googleusercontent.com/UY3seZF-3dGVHe_5Uu-JeyDMPWNjjNDpoQUbvATWm1Cf0kZHmRYSWPIdBXMbtAKRMEs6j9Gt=s160-c-k-c0x00ffffff-no-rj',
      src: 'https://youtube.com/embed/x06QNmVqCWg',
    },
  },
  {
    key: 'C',
    title: '캐주얼 스타일',
    description:
      '꾸민 듯 안꾸민 듯한 느낌을 주는 캐주얼 스타일은 활동성 좋고 편안한 옷을 추구하면서도, 부드러운 인상을 줄 수 있습니다.',
    img: ['https://imgur.com/a/Q56kawB.png', 'https://imgur.com/a/QYope2m.png', 'https://imgur.com/a/mOyAwxe.png'],
    youtube: {
      name: '우연',
      link: 'https://www.youtube.com/@%EC%9A%B0%EC%97%B0%ED%8C%A8%EC%85%98/videos',
      icon: 'https://yt3.googleusercontent.com/-TBeO87KWUOwZSv87XhdCFFL0URhZjbV7yc7OL8lzRovRQCx0uRvm3koUCM5_dkHy6Cm68keJEg=s160-c-k-c0x00ffffff-no-rj',
      src: 'https://youtube.com/embed/hzUEvjZ1ZSI',
    },
  },
  {
    key: 'A',
    title: '아메카지 스타일',
    description:
      '일본식 미국 캐주얼을 의미하는 아메카지 스타일은 빈티지한 매력을 표현하기에 적합합니다. 클래식한 아메리칸 캐주얼에 일본 감성을 더한 이 스타일은 편안하고 활동성있으면서도 개성 있는 룩을 완성시켜줍니다.',
    img: ['https://imgur.com/a/jUxV7w8.png', 'https://imgur.com/a/alw5bcR.png', 'https://imgur.com/a/iSbKDHF.png'],
    youtube: {
      name: '코스모쓰 패션한짠',
      link: 'https://www.youtube.com/@cosmoss_xx/videos',
      icon: 'https://yt3.googleusercontent.com/ytc/AIdro_kXQZ1I0BOdYdcPq2ovvNVZPRvOdZpHivpeBH9odIoLdg=s160-c-k-c0x00ffffff-no-rj',
      src: 'https://youtube.com/embed/7jaljlrA_bk',
    },
  },
];

export { questionArr, personalityScores, resultArr };
