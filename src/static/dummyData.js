import uuid from 'react-uuid'

const dummyData =[
   {
    id: uuid(),
    username: 'zinoopark',
    picture: `${process.env.PUBLIC_URL}/profile.jpeg`,
    content:
      '블록체인 밸리 리액트 화이팅!!',
    createdAt: '2022-02-24T16:17:47.000Z',
    marked: false
  },
  {
    id: uuid(),
    username: 'Hermann Karl Hesse',
    picture: `https://randomuser.me/api/portraits/men/98.jpg`,
    content:
      '새는 알에서 나오기 위해 투쟁한다. 알은 새의 세계이다. 누구든지 태어나려고 하는 자는 하나의 세계를 파괴하여야 한다. 새는 신을 향해 날아간다. 그 신의 이름은 아브락사스이다. ',
    createdAt: '2021-09-25T16:17:47.000Z',
    marked: false
  },
  {
    id: uuid(),
    username: 'Steve Jobs',
    picture: 'https://randomuser.me/api/portraits/men/5.jpg',
    content:
      '내가 곧 죽을 것이라는 사실은 인생에서 큰 결정을 할 때 도와주는 가장 중요한 도구가 되었습니다. 당신이 언젠가 죽을 것이라는 사실을 기억하는 건 우리가 아직 잃을 게 많다는 착각으로부터 벗어나는 좋은 방법입니다.',
    createdAt: '2021-07-06T16:17:47.000Z',
    marked: false
  },
  {
    id: uuid(),
    username: 'Elon Musk',
    picture: 'https://randomuser.me/api/portraits/men/11.jpg',
    content:
      '나는 사실 시간관리와 관련된 책은 아무것도 읽어보지 않았다.',
    createdAt: '2021-06-27T16:17:47.000Z',
    marked: false
  },
  {
    id: uuid(),
    username: 'Jeffrey Preston Bezos',
    picture: 'https://randomuser.me/api/portraits/men/40.jpg',
    content:
      '사람들은 내게 5년 후, 혹은 10년 후 무엇이 변할 것인지는 묻지만 무엇이 변하지 않을지는 묻지 않는다. 세상이 어떻게 변하더라도 고객이 원하는 가치를 제공한다면 고객은 절대 외면하지 않는다.',
    createdAt: '2020-12-08T16:17:47.000Z',
    marked: false
  }
]

export default dummyData;