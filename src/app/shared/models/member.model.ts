export interface Member {
  id: string;
  careerEn: string;
  careerSp: string;
  displayName: string;
  email: string;
  facebook: string;
  fullName: string;
  jalaRole: string;
  linkedin: string;
  mainTeam: string;
  twiter: string;
  picture?: string;
}

export const MEMBER_ROLES = {
  'DEV': 'roles.developer',
  'QA': 'roles.quality-assurance',
  'DESIGN': 'roles.design',
  'DEVOPS': 'roles.devops',
  'ADMIN': 'roles.manager',
};
