const quotes = [
  {
    quote:
      "가능의 한계를 알기 위한 유일한 방법은 불가능의 영역에 살짝 발을 들여 놓아 보는 것",
    author: "아서 클라크",
  },
  {
    quote: "과거는 서막에 불과하다.",
    author: "셰익스피어 작 템페스트",
  },
  {
    quote:
      "그간 우리에게 가장 큰 피해를 끼친 말은 바로 지금껏 항상 그렇게 해왔어라는 말이다.",
    author: "그레이스 호퍼",
  },
  {
    quote: "그대가 읽을 수만 있다면 영원히 자유가 되리라.",
    author: "프레드릭 더글러스",
  },
  {
    quote:
      "나는 제3차 세계대전에서 어떤 무기를 가지고 싸울지 모른다. 하지만 제4차 세계대전은 막대기와 돌을 갖고 싸우게 될 것이다.",
    author: "아인슈타인",
  },
  {
    quote:
      "내 키를 땅에서부터 재면 누구보다 작아도, 하늘로부터 재면 누구보다 크다.",
    author: "나폴레옹",
  },
  {
    quote:
      "어떤 신기술이든 처음엔 모두 섹스와 포르노와 관련이 있는 무언가에 쓰인다는 말이 있죠. 그게 인간인 거 같아요.",
    author: "팀 버너스 리",
  },
  {
    quote:
      "인간은 입이 하나 귀가 둘이 있다. 이는 말하기보다 듣기를 두 배로 하라는 뜻이다.",
    author: "탈무드",
  },
  {
    quote: "분별이 부족한 곳에는 모든 것이 부족하다.",
    author: "벤자민 프랭클린",
  },
  {
    quote: "죽음은 인간이 받을 수 있는 축복 중 최고의 축복이다.",
    author: "소크라테스",
  },
  {
    quote: "같은 것을 좋아하고 싫어하는 것이 바로 진정한 우정이다.",
    author: "살루스트",
  },
  {
    quote: "도덕이 우리를 따분하게 한다면, 결단코 도덕이 잘못된 것이다.",
    author: "로버트 루이스 스티븐슨",
  },
  {
    quote: "얼마나 많이 주느냐보다 얼마나 많은 사랑을 담느냐가 중요하다.",
    author: "마더 테레사",
  },
  {
    quote:
      "어떤 이에게서 신을 발견할 수 없다면, 그를 더 알려고 하는 것은 시간낭비다.",
    author: "마하트마 간디",
  },
  {
    quote:
      "기억력이 나쁜 것의 장점은 같은 일을 여러 번, 마치 처음처럼 즐길 수 있다는 것이다.",
    author: "프레드리히 니체",
  },
  {
    quote: "미래를 결정짓고 싶다면 과거를 공부하라.",
    author: "공자",
  },
  {
    quote: "나는 똑똑한 것이 아니라 단지 문제를 더 오래 연구할 뿐이다.",
    author: "알버트 아인슈타인",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
