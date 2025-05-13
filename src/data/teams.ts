import type { Team } from '../types/team';

export const teams: Team[] = [
  {
    name: '에코테크',
    description: '환경 모니터링 IoT 디바이스 개발 프로젝트',
    state: '모집중',
    role: ['프론트엔드 개발자', 'UI/UX 디자이너'],
    due: new Date('2025-03-15'),
  },
  {
    name: '스페이스런',
    description: '우주 로봇 경로 최적화 알고리즘 연구',
    state: '진행중',
    role: ['백엔드 개발자', '데이터 사이언티스트', 'QA 엔지니어'],
    due: new Date('2025-06-01'),
  },
  {
    name: '헬스메이트',
    description: '스마트 헬스케어 앱 프로토타입 제작',
    state: '모집마감',
    role: ['풀스택 개발자', '모바일 앱 개발자'],
    due: new Date('2025-04-30'),
  },
];
