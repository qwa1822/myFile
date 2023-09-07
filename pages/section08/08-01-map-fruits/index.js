const FRUITS = [
  { number: 1, title: "레드향" },
  { number: 2, title: "레드향" },
  { number: 3, title: "레드향" },
  { number: 4, title: "레드향" },
  { number: 5, title: "레드향" },
  { number: 6, title: "레드향" },
  { number: 7, title: "레드향" },
  { number: 8, title: "레드향" },
];

export default function MapFruitsPage() {
  // 1. 가장 기본 예제

  const aaa = [
    <div>1.레드향</div>,
    <div>2 샤인머스캣</div>,
    <div>3 산청딸기</div>,
  ];

  const bbb = FRUITS.map(item => (
    <div>
      {item.number} {item.title}
    </div>
  ));

  return (
    <div>
      <div>{aaa}</div>
      =================
      <div>
        {FRUITS.map((item, idx) => (
          <div key={idx}>
            {item.number} {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}
