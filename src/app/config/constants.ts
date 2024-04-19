export const companySubMenu = [
  { link: '/company', label: '회사소개' },
  { link: '/company/history', label: '연혁' },
  { link: '/company/press', label: '보도자료' },
];

export const servicesSubMenu = [
  { link: '/services/charging', label: '장전' },
  { link: '/services/home', label: '집찍고' },
  { link: 'https://sniperfactory.com/', label: '스나이퍼팩토리' },
];

export const vouchersSubMenu = [
  { link: '/vouchers/data', label: '데이터바우처' },
  { link: '/vouchers/industrial', label: '산업맞춤형 혁신바우처' },
  { link: '/vouchers/ai', label: 'AI 바우처' },
  { link: '/vouchers/innovation', label: '혁신바우처' },
  { link: '/vouchers/tourism', label: '관광기업 혁신바우처' },
];

export const serviceData = [
  {
    src: '',
    description: '서학개미 필수 앱! 국내 최초 실시간 해외뉴스 서비스',
    buttonsrc: '',
  },
  {
    src: '',
    description: '프롭테크의 시대, 공인중개사의 필수 매물 사진첩',
    buttonsrc: '',
  },
  {
    src: '',
    description: 'Snipe your dream 너의 스펙이 되어줄게',
    buttonsrc: '',
  },
];

export const voucherlogo = [
  { voucherlogo: '/voucherlogo/voucher-logo1.svg' },
  { voucherlogo: '/voucherlogo/voucher-logo2.svg' },
  { voucherlogo: '/voucherlogo/voucher-logo3.svg' },
  { voucherlogo: '/voucherlogo/voucher-logo4.svg' },
  { voucherlogo: '/voucherlogo/voucher-logo5.svg' },
  { voucherlogo: '/voucherlogo/voucher-logo6.svg' },
  { voucherlogo: '/voucherlogo/voucher-logo7.svg' },
  { voucherlogo: '/voucherlogo/voucher-logo8.svg' },
  { voucherlogo: '/voucherlogo/voucher-logo9.svg' },
  { voucherlogo: '/voucherlogo/voucher-logo10.svg' },
  { voucherlogo: '/voucherlogo/voucher-logo11.svg' },
  { voucherlogo: '/voucherlogo/voucher-logo12.svg' },
  { voucherlogo: '/voucherlogo/voucher-logo13.svg' },
  { voucherlogo: '/voucherlogo/voucher-logo14.svg' },
  { voucherlogo: '/voucherlogo/voucher-logo15.svg' },
  { voucherlogo: '/voucherlogo/voucher-logo16.svg' },
];

export const voucherMerit = [
  {
    number: 1,
    merit: '높은 선정률',
    description:
      '지난 5년간의 사업 경험과 노하우를 가진 스팩스페이스 DATA바우처 팀과 협업을 통해 선정률이 높아집니다.',
  },
  {
    number: 2,
    merit: '기술력',
    description:
      'DATA 관련 특허, 템플릿 등을 보유한 스팩스페이스와 DATA바우처 지원사업을 함께하세요.',
  },
  {
    number: 3,
    merit: '솔루션',
    description:
      'AI 뉴스 수집 솔루션/번역 솔루션 저해상도 -> 고해상도 변환 솔루션 AI 초점 제거 솔루션(동영상, 사진)',
  },
];

export const bannerBadge = [
  { link: `/company`, label: '기업스토리' },
  { link: `/company/history`, label: '연혁' },
  { link: `/company/press`, label: '보도자료' },
];

export const pracImg = [
  {
    img: '/pracimg/edu1.jpg',
    title: '사진 1',
    content:
      '이젠 혼자가 아닐 무대 너무나 감격스러워 끝없는 가능성 중에 날 골라줘서 고마워 나와 맞이하는 미래가 위태로울지도 몰라 하지만 눈물 가득한 감동이 있을지도 몰라 그래도 내 손 놓지 않겠다면 If so Then lets go Welcome to the show Oh 이것만큼은 맹세할게 내 전부를 다 바칠게 네 눈빛 흔들리지 않게 널 바라보며 서 있을게',
  },
  {
    img: '/pracimg/edu3.png',
    title: '사진 2',
    content:
      '숨을 죽이고 너의 대답을 기다릴게 턴을 너에게 넘긴 채로 만약 아니라 하더라도 말해 줘 Baby love me or leave me tonight',
  },
  {
    img: '/pracimg/edu4.png',
    title: '사진 3',
    content:
      '용기를 주는 힘 두려움 제치고 달리게 만들죠 두 팔 벌린 채로 터덜터덜 힘없이 걷다가 넘어질 때마다 아파하다 흘러내리려는 눈물 가득 참고 있는 그대를 위해 You need the power of love Power of love',
  },
  {
    img: '/pracimg/edu5.png',
    title: '사진 4',
    content:
      '어제는 어떤 날이었나 특별한 게 있었던가 떠올려 보려 하지만 별다를 건 없었던 것 같아 오늘도 똑같이 흘러가 나만 이렇게 힘들까 어떻게 견뎌야 할까 마음껏 소리쳐 울면 나아질까 Yeah we live a life',
  },
  {
    img: '/pracimg/edu8.jpg',
    title: '사진 5',
    content:
      '후회는 남기지 않았어 사랑했으니까 뭐 됐어 첫째 날부터 마지막 날까지 아 행복했던 날들이었다 (꿈만 같았었지) 이제 더는 없겠지만 지난 날로 남겨야지',
  },
];

interface HistoryData {
  year: number;
  events: {
    month: string;
    descriptions: (string | { content: string[] })[];
  }[];
}

export const historyData: HistoryData[] = [
  {
    year: 2023,
    events: [
      {
        month: '12월',
        descriptions: [
          '과학기술정보통신산업부 2023년 청년기업인 장관상 수상',
          '대한상공회의소장 상 수상',
        ],
      },
      {
        month: '7월',
        descriptions: [
          'AI 특허 3개 출원',
          {
            content: [
              '1. 뉴럴넷기반 해외 뉴스 요약 서비스 제공방법',
              '2. 종목 관련 뉴스 기사 내 키워드 정보추출프로그램',
              '3. 뉴스 번역 및 번역 표시 방법',
            ],
          },
        ],
      },
      {
        month: '5월',
        descriptions: ['KDATA 주관 23년도 데이터바우처 15과제 최종선정'],
      },
      {
        month: '4월',
        descriptions: [
          '중진공 글로벌 청년창업사관학교 4기 입소 선정',
          'NIPA 주관 23년도 AI산업맞춤형 혁신바우처 4개과제 최종선정',
          '연대캠퍼스 타운 입주기업 선정',
        ],
      },
      {
        month: '3월',
        descriptions: [
          '한국관광공사주관 23년도 관광기업혁신바우처 제공기업 선정 - 서버 및 개발환경 구축분야',
        ],
      },
    ],
  },
  {
    year: 2022,
    events: [
      {
        month: '12월',
        descriptions: [
          'AI 특허 출원',
          {
            content: [
              '객체가 포함된 실내 공간의 이미지를 재구성함으로써 부동산 중개용 정보를 생성하는 방법, 서버 및 컴퓨터 프로그램',
            ],
          },
        ],
      },
      {
        month: '10월',
        descriptions: [
          'AI 특허 출헌',
          'U-net 구조와 GAN AI 네크워크를 활용한 픽셀 재구성 AI',
        ],
      },
      {
        month: '9월',
        descriptions: [
          'AI 가전 산업 육성을 위한 상용화 지원 플랫폼 구축 공급기업 선정',
          'AI 특허 4건 출원',
          {
            content: [
              '전이학습 기반 자연어 처리 모델들을 훈련시키는 방법 및 시스템',
              '인공지능 기반 실시간 뉴스 크롤링 및 뉴스 요약검증 서비스 제공방법',
              '인공지능 기반 뉴스 분류 시스템',
              '자연어 처리 기술을 이용한 쿼리 생성 시스템 및 이를 포함하는 질의 응답 시스템',
            ],
          },
        ],
      },
      {
        month: '8월',
        descriptions: [
          '해외주식 투자자를 위한 AI기반 글로벌 뉴스 번역 서비스 ‘장전’ 앱 출시 (베타버전)',
        ],
      },
      {
        month: '6월',
        descriptions: [
          '과기정통부 주관 22년도 AI 인력양성 바우처’ 3개 과제 최종 선정',
        ],
      },
      {
        month: '4월',
        descriptions: ['중진공 청년사업사관학교 12기 입소 선정'],
      },
      {
        month: '3월',
        descriptions: [
          '과기정동부 주관 22년도 AI바우처 과제 최종 선정',
          '경기도경제과학진흥원 기술창업 프로그램 우수기업 선정',
        ],
      },
      {
        month: '1월',
        descriptions: [
          '인천대학교 산학협력단과 협약 체결',
          'AI 특허 출원',
          {
            content: [
              '업샘플링(super resol) = Wavelet 기반의 AI 복원에 유리한 이미지 압축 기술 및 그에 상응하는 U-net 기반의 업샘플링 AI 엔진',
              'cycleGAN 네트워크를 통한 학습 데이터 생성 및 AI 엔진 성능 향상 모델',
              'cycleGAN v2 네트워크를 통해 기존 이미지를 특정 화풍으로 변환 및 생성',
              'cuDNN 구조를 응용한 영상 내의 물질을 인식 및 제거하는 cycleGAN AI 네트워크 모델',
            ],
          },
        ],
      },
    ],
  },
  {
    year: 2021,
    events: [
      {
        month: '12월',
        descriptions: [
          '혁신성장유형 벤처기업 인증 취득',
          '과기정통부 주관 22 AI 바우처 공급기업 선정',
        ],
      },
      {
        month: '11월',
        descriptions: [
          'AI 특허 출원',
          {
            content: [
              'CNN Dailymail 기반 티커의 데이터셋을 나눠 뉴스 데이터셋, 티커가 연동되게 만들어 뉴스 카테고리를 분석하는 AI 엔진',
              'Seq to Seq 모델을 활용한 Neural Machine Translation Modle',
            ],
          },
        ],
      },
      {
        month: '10월',
        descriptions: ['CNN 기반 카테고리 분석 AI 솔루션 개발'],
      },
      {
        month: '9월',
        descriptions: [
          '과기정통부 주관 22 데이터 바우처’ 공급기업 선정',
          '기업부설연구서 설립 인정',
        ],
      },
      {
        month: '6월',
        descriptions: ['인덕대학교 캠퍼스타운 창업지원 프로그램 입주기업 선정'],
      },
      {
        month: '3월',
        descriptions: ['주식회사 스팩스페이스 설립'],
      },
    ],
  },
];

export const pressData = [
  {
    src: '/press/press1.png',
    day: '2022-10-04',
    title:
      '[협업으로 상생하는 기업] 스팩스페이스 "슬기로운 해외주식투자··· 장전하라',
    content:
      '주식회사 와이엠에스닷코가 출시한 장전은 해외주식 투자자를 위해 국내 최초 실시간 해외뉴스 서비스를 제공하는 애플리케이션이다.',
  },
  {
    src: '/press/press2.png',
    day: '2022-09-19',
    title: '고양이 푸드·AI 번역 ··· 경기북부창업사관학교 MZ표 창업',
    content:
      '또 하나 주목받는 벤처기업인 (주)와이엠에스닷코(대표·염민호)는 AI(인공지능) 번역 설루션 프로그램을 제작, 개인주식 투자자에 공급하고 있다. 이 기업이 만든 프로그램 장보고는 해외 주식시장 관련 뉴스를 종목별로 실시간 수집, 번역해 제공한다. ',
  },
  {
    src: '/press/press3.png',
    day: '2022-09-19',
    title: '스팩스페이스, 실시간 해외주식 정보제공 서비스 장전 정식 오픈',
    content:
      '주식회사 스팩스페이스는 AI 기반의 실시간 해외주식 정보제공 서비스 "장전"을 29일 정식 오픈한다고 밝혔다.',
  },
  {
    src: '/press/press4.png',
    day: '2022-09-19',
    title:
      '스팩스페이스-플롯팩토리, 스나이퍼팩토리 교육생 모집... 실무형 IT 교육 및 취업',
    content:
      'IT 전문기업 스팩스페이스와 플롯팩토리에서 내달 10일까지 실무형 IT 교육 및 취업 지원 서비스를 제공하는 스나이퍼팩토리 교육생을 모집한다.',
  },
  {
    src: '/press/press5.png',
    day: '2022-09-19',
    title: '스팩스페이스, 해외주식투자자 맞춤형 플랫폼 장전 출시 임박',
    content:
      '주식회사 스팩스페이스 측이 오는 8월 말, 해외주식 투자자를 위한 맞춤형 플랫폼 "장전"을 출시한다고 밝혔다.',
  },
  {
    src: '/press/press6.png',
    day: '2022-07-25',
    title: '스팩스페이스, 22 AI 인력양성 바우처 3개 과제 최종선정',
    content:
      'AI 솔루션 전문기업 주식회사 스팩스페이스는 정보통신산업진흥원이 주관하는 2022 AI 인력양성 바우처 3개 과제에 최종선정됐다고 5일 밝혔다.',
  },
  {
    src: '/press/press7.png',
    day: '2022-07-13',
    title: '스팩스페이스-랭글 한국어 교육 특화 AI 모델 개발을 위한 MOU 체결',
    content:
      '인공지능 전문기업 스팩스페이스와 언어 교육 전문 에듀테크 기업 랭글이 한국어 교육 플랫폼 오픈 베타 서비스 런칭을 위한 MOU를 체결했다고 지난 12일에 밝혔다.',
  },
  {
    src: '/press/press8.png',
    day: '2022-07-13',
    title: '(주)스팩스페이스 데이터바우처 지원 사업 4개 기업선정!',
    content:
      '인공지능 서비스 기업 스팩스페이스(대표 염민호)가 공급기업으로 참여한 데이터바우처 지원사업 중 가공 부문 과제가 한국데이터산업진흥원(K-DATA)의 2022년 데이터바우처 지원사업’ 매칭심사를 거쳐 최종 4건 선정됐다',
  },
  {
    src: '/press/press9.png',
    day: '2022-07-13',
    title: '스팩스페이스-리버블, NIPA AI바우처 지원사업 과제 최종 선정',
    content:
      'AI 솔루션 전문기업 주식회사 스팩스페이스가 2022 AI바우처 지원사업 간 수요기업 리버블과 함께 최종 선정되었다고 지난 4일 밝혔다.',
  },
  {
    src: '/press/press10.png',
    day: '2022-07-13',
    title: '(주)스팩스페이스 2022년 12기 청년창업사관학교 입교',
    content:
      'AI 솔루션 전문기업 주식회사 스팩스페이스가 지난 17일 창공성공패키지 청년창업사관학교 12기에 최종 선정되었다고 밝혔다.',
  },
];
