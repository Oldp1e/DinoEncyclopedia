export interface Dinosaur {
  id: string;
  name: string;
  scientificName: string;
  period: 'Triassic' | 'Jurassic' | 'Cretaceous';
  diet: 'Herbivore' | 'Carnivore' | 'Omnivore';
  size: 'Small' | 'Medium' | 'Large' | 'Massive';
  dangerLevel: 1 | 2 | 3 | 4 | 5;
  length: string;
  height: string;
  weight: string;
  location: string;
  description: string;
  facts: string[];
  image: string;
  discoveredYear: number;
  classification: {
    kingdom: string;
    phylum: string;
    class: string;
    order: string;
    family: string;
    genus: string;
    species: string;
  };
  status: 'Active' | 'Contained' | 'Escaped' | 'Unknown';
  lastSeen?: string;
  enclosureId?: string;
}

export interface ParkAlert {
  id: string;
  type: 'security' | 'containment' | 'weather' | 'system' | 'medical';
  level: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  location: string;
  timestamp: string;
  status: 'active' | 'resolved' | 'investigating';
  involvedDinosaurs?: string[];
}

export interface FilterOptions {
  period: string[];
  diet: string[];
  size: string[];
  dangerLevel: number[];
  status: string[];
}

export interface SearchFilters {
  query: string;
  period: string;
  diet: string;
  size: string;
  dangerLevel: number | null;
  status: string;
  sortBy: 'name' | 'dangerLevel' | 'size' | 'period';
  sortOrder: 'asc' | 'desc';
}

export interface EnclosureStatus {
  id: string;
  name: string;
  type: string;
  capacity: number;
  currentOccupancy: number;
  status: 'operational' | 'maintenance' | 'emergency' | 'offline';
  securityLevel: number;
  lastInspection: string;
  nextInspection: string;
  assignedDinosaurs: string[];
}

export interface SystemMetrics {
  powerGrid: number;
  securitySystems: number;
  containmentFields: number;
  communicationNetworks: number;
  emergencyProtocols: number;
  weatherConditions: string;
  visitorCount: number;
  staffOnDuty: number;
}
