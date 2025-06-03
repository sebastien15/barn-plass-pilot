
import { User, Child, Application, Kindergarten, PriorityScore, Offer } from '@/types';

// Norwegian names for realistic data
const norwegianFirstNames = [
  'Emma', 'Liam', 'Nora', 'Jakob', 'Sofie', 'Oliver', 'Ingrid', 'Lucas', 'Ella', 'Filip',
  'Alma', 'William', 'Leah', 'Benjamin', 'Clara', 'Henrik', 'Astrid', 'Magnus', 'Maja', 'Aksel'
];

const norwegianLastNames = [
  'Hansen', 'Johansen', 'Olsen', 'Larsen', 'Andersen', 'Pedersen', 'Nilsen', 'Kristiansen',
  'Jensen', 'Karlsen', 'Johnsen', 'Pettersen', 'Eriksen', 'Berg', 'Haugen'
];

const osloDistricts = [
  'Gamle Oslo', 'Grünerløkka', 'Sagene', 'St. Hanshaugen', 'Frogner', 'Ullern',
  'Vestre Aker', 'Nordre Aker', 'Bjerke', 'Grorud', 'Stovner', 'Alna',
  'Østensjø', 'Nordstrand', 'Søndre Nordstrand'
];

function generateRandomName(): { firstName: string; lastName: string } {
  return {
    firstName: norwegianFirstNames[Math.floor(Math.random() * norwegianFirstNames.length)],
    lastName: norwegianLastNames[Math.floor(Math.random() * norwegianLastNames.length)]
  };
}

function generateRandomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export function generateMockUsers(): User[] {
  const users: User[] = [];
  
  // Generate guardians
  for (let i = 0; i < 100; i++) {
    const name = generateRandomName();
    users.push({
      id: `guardian-${i}`,
      role: 'guardian',
      name: `${name.firstName} ${name.lastName}`,
      email: `${name.firstName.toLowerCase()}.${name.lastName.toLowerCase()}@email.com`,
    });
  }
  
  // Generate case managers
  for (let i = 0; i < 15; i++) {
    const name = generateRandomName();
    users.push({
      id: `case-manager-${i}`,
      role: 'case_manager',
      name: `${name.firstName} ${name.lastName}`,
      email: `${name.firstName.toLowerCase()}.${name.lastName.toLowerCase()}@oslo.kommune.no`,
      district: osloDistricts[i % osloDistricts.length],
    });
  }
  
  // Generate kindergarten staff
  for (let i = 0; i < 50; i++) {
    const name = generateRandomName();
    users.push({
      id: `staff-${i}`,
      role: 'kindergarten_staff',
      name: `${name.firstName} ${name.lastName}`,
      email: `${name.firstName.toLowerCase()}.${name.lastName.toLowerCase()}@barnehage.oslo.no`,
      kindergartenId: `kindergarten-${i % 25}`,
    });
  }
  
  // Generate admins
  for (let i = 0; i < 3; i++) {
    const name = generateRandomName();
    users.push({
      id: `admin-${i}`,
      role: 'admin',
      name: `${name.firstName} ${name.lastName}`,
      email: `${name.firstName.toLowerCase()}.${name.lastName.toLowerCase()}@oslo.kommune.no`,
    });
  }
  
  return users;
}

export function generateMockKindergartens(): Kindergarten[] {
  const kindergartens: Kindergarten[] = [];
  
  for (let i = 0; i < 25; i++) {
    kindergartens.push({
      id: `kindergarten-${i}`,
      name: `Barnehage ${i + 1}`,
      districtId: osloDistricts[i % osloDistricts.length],
      address: `Barnehagegate ${i + 1}, 0${String(100 + i).slice(-3)} Oslo`,
      totalSeats: 60 + Math.floor(Math.random() * 40),
      availableSeats: Math.floor(Math.random() * 20),
      groups: [
        {
          id: `group-${i}-0`,
          name: 'Småtroll (1-2 år)',
          ageRange: '1-2',
          capacity: 12,
          occupied: 8 + Math.floor(Math.random() * 4),
        },
        {
          id: `group-${i}-1`,
          name: 'Mellomtroll (3-4 år)',
          ageRange: '3-4',
          capacity: 18,
          occupied: 12 + Math.floor(Math.random() * 6),
        },
        {
          id: `group-${i}-2`,
          name: 'Stortroll (5-6 år)',
          ageRange: '5-6',
          capacity: 20,
          occupied: 15 + Math.floor(Math.random() * 5),
        },
      ],
      updatedAt: new Date(),
    });
  }
  
  return kindergartens;
}

export function generateMockApplications(): Application[] {
  const applications: Application[] = [];
  const users = generateMockUsers().filter(u => u.role === 'guardian');
  
  for (let i = 0; i < 500; i++) {
    const guardian = users[i % users.length];
    const submissionDate = generateRandomDate(new Date('2024-01-01'), new Date('2024-03-01'));
    const isStatutoryRight = Math.random() > 0.3;
    
    applications.push({
      id: `application-${i}`,
      childId: `child-${i}`,
      guardianId: guardian.id,
      preferences: [
        `kindergarten-${Math.floor(Math.random() * 25)}`,
        `kindergarten-${Math.floor(Math.random() * 25)}`,
        `kindergarten-${Math.floor(Math.random() * 25)}`,
      ].slice(0, 1 + Math.floor(Math.random() * 3)),
      status: ['submitted', 'reviewed', 'offered', 'confirmed'][Math.floor(Math.random() * 4)] as any,
      admissionRound: i < 350 ? 'main_part1' : i < 450 ? 'main_part2' : 'ongoing',
      statutoryRight: isStatutoryRight,
      createdAt: submissionDate,
      updatedAt: submissionDate,
      documents: [],
      verificationStatus: 'auto_validated',
    });
  }
  
  return applications;
}

export function generateMockPriorityScores(): PriorityScore[] {
  const applications = generateMockApplications();
  
  return applications.map((app, i) => {
    const statutoryRight = app.statutoryRight ? 15 + Math.random() * 5 : Math.random() * 5;
    const disability = Math.random() > 0.9 ? 5 + Math.random() * 5 : 0;
    const proximity = Math.random() * 5;
    const siblings = Math.random() > 0.7 ? Math.random() * 3 : 0;
    const employment = Math.random() * 2;
    const timestamp = Math.random() * 0.5;
    
    const score = statutoryRight + disability + proximity + siblings + employment + timestamp;
    
    return {
      id: `score-${i}`,
      applicationId: app.id,
      score: Math.round(score * 10) / 10,
      priorityCode: score >= 15 ? 'P1' : score >= 7 ? 'P2' : 'P3',
      criteria: {
        statutoryRight,
        disability,
        proximity,
        siblings,
        employment,
        timestamp,
      },
    };
  });
}

export function generateMockOffers(): Offer[] {
  const applications = generateMockApplications().filter(app => 
    ['offered', 'confirmed'].includes(app.status)
  );
  
  return applications.map((app, i) => ({
    id: `offer-${i}`,
    applicationId: app.id,
    kindergartenId: app.preferences[0],
    status: app.status === 'confirmed' ? 'guardian_accepted' : 'pending',
    round: app.admissionRound === 'main_part1' ? 'round1' : 
           app.admissionRound === 'main_part2' ? 'round2' : 'ongoing',
    sentAt: new Date(app.updatedAt.getTime() + 86400000),
    deadline: new Date(app.updatedAt.getTime() + 86400000 * 14),
  }));
}
