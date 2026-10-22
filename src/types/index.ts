export type ServiceType = 'fenntarto' | 'nagytakaritas' | 'ablakmosas' | 'koltozes';

export type PropertySize = 'small' | 'medium' | 'large';

export interface CalculatorState {
  areaM2: number;
  rooms: number;
  bathrooms: number;
  serviceType: ServiceType;
  hasPets: boolean;
  extraWindowCleaning: boolean;
  extraOven: boolean;
  extraFridge: boolean;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  address: string;
  propertyType: string;
  areaM2: string;
  serviceType: string;
  preferredDate: string;
  message: string;
  applyPromo: boolean;
}
