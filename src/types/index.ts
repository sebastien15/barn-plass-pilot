
export interface User {
  id: string;
  role: 'guardian' | 'case_manager' | 'kindergarten_staff' | 'admin';
  name: string;
  email: string;
  district?: string;
  kindergartenId?: string;
}

export interface Child {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  address: string;
  guardianId: string;
  specialNeeds?: boolean;
  siblings?: string[];
}

export interface Application {
  id: string;
  childId: string;
  guardianId: string;
  preferences: string[]; // kindergarten IDs
  status: 'draft' | 'submitted' | 'reviewed' | 'offered' | 'confirmed' | 'declined';
  admissionRound: 'main_part1' | 'main_part2' | 'ongoing';
  statutoryRight: boolean;
  createdAt: Date;
  updatedAt: Date;
  documents: Document[];
  verificationStatus: 'auto_validated' | 'pending_manual_verification' | 'manually_verified';
  manualDocuments?: Document[];
}

export interface Document {
  id: string;
  name: string;
  type: string;
  url: string;
  uploadedAt: Date;
}

export interface PriorityScore {
  id: string;
  applicationId: string;
  score: number;
  priorityCode: 'P1' | 'P2' | 'P3';
  criteria: {
    statutoryRight: number;
    disability: number;
    proximity: number;
    siblings: number;
    employment: number;
    timestamp: number;
  };
  adjustedBy?: string;
  adjustedAt?: Date;
  auditLogId?: string;
}

export interface Offer {
  id: string;
  applicationId: string;
  kindergartenId: string;
  groupId?: string;
  status: 'pending' | 'accepted' | 'modified' | 'rejected' | 'guardian_accepted' | 'guardian_declined' | 'transfer_requested';
  round: 'round1' | 'round2' | 'round3' | 'ongoing';
  sentAt: Date;
  respondedAt?: Date;
  deadline: Date;
}

export interface Placement {
  id: string;
  offerId: string;
  kindergartenId: string;
  groupId: string;
  startDate: Date;
  confirmedAt: Date;
}

export interface Kindergarten {
  id: string;
  name: string;
  districtId: string;
  address: string;
  totalSeats: number;
  availableSeats: number;
  groups: KindergartenGroup[];
  updatedAt: Date;
}

export interface KindergartenGroup {
  id: string;
  name: string;
  ageRange: string;
  capacity: number;
  occupied: number;
}

export interface AuditLog {
  id: string;
  entityType: string;
  entityId: string;
  action: string;
  userId: string;
  timestamp: Date;
  details: Record<string, any>;
}

export interface ScoringRule {
  id: string;
  criteriaWeights: {
    statutoryRight: number;
    disability: number;
    proximity: number;
    siblings: number;
    employment: number;
    timestamp: number;
  };
  thresholds: {
    P1: number;
    P2: number;
    P3: number;
  };
  updatedAt: Date;
}
