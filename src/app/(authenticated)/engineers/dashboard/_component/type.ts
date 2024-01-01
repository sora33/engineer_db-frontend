export type AgeDistribution = {
  under_20_years: number;
  "20_29_years": number;
  "30_39_years": number;
  "40_49_years": number;
  "50_59_years": number;
  "60_69_years": number;
  over_70_years: number;
};

export type PurposeDistribution = {
  partner: number;
  work: number;
  hobby: number;
  other: number;
};

export type OccupationDistribution = {
  engineer: number;
  projectManager: number;
  consultant: number;
  dataAnalyst: number;
  cto: number;
  other: number;
};

export type WorkDistribution = {
  fullTime: number;
  freelancer: number;
  businessOwner: number;
  student: number;
  other: number;
};

export type DashBoard = {
  age_distribution: AgeDistribution;
  purpose_distribution: PurposeDistribution;
  occupation_distribution: OccupationDistribution;
  work_distribution: WorkDistribution;
};
