import { Dinosaur, ParkAlert, EnclosureStatus, SystemMetrics } from '@/types';

export const dinosaursData: Dinosaur[] = [
  {
    id: '1',
    name: 'Tyrannosaurus Rex',
    scientificName: 'Tyrannosaurus rex',
    period: 'Cretaceous',
    diet: 'Carnivore',
    size: 'Massive',
    dangerLevel: 5,
    length: '12-13 meters',
    height: '4-5 meters',
    weight: '6-9 tons',
    location: 'Paddock 9 - High Security',
    description: 'The apex predator of the Late Cretaceous period. Known for its massive skull, powerful jaws with teeth up to 20cm long, and exceptional hunting abilities. Our adult female "Rexy" has been a cornerstone of the park since its inception.',
    facts: [
      'Bite force of 12,800 pounds per square inch',
      'Could run up to 20-25 mph despite its size',
      'Had exceptional vision and sense of smell',
      'Brain was twice the size of other large carnivores',
      'One of the most intelligent predators ever discovered'
    ],
    image: '/images/trex.jpg',
    discoveredYear: 1902,
    classification: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Saurischia',
      family: 'Tyrannosauridae',
      genus: 'Tyrannosaurus',
      species: 'T. rex'
    },
    status: 'Contained',
    lastSeen: '2024-01-15T14:30:00Z',
    enclosureId: 'PADDOCK_09'
  },
  {
    id: '2',
    name: 'Velociraptor',
    scientificName: 'Velociraptor mongoliensis',
    period: 'Cretaceous',
    diet: 'Carnivore',
    size: 'Small',
    dangerLevel: 4,
    length: '2 meters',
    height: '0.5 meters',
    weight: '15-20 kg',
    location: 'Raptor Paddock - Maximum Security',
    description: 'Highly intelligent pack hunters with razor-sharp claws. Our Blue, Charlie, Delta, and Echo demonstrate remarkable problem-solving abilities and social cooperation. Extreme caution required during all interactions.',
    facts: [
      'Pack hunters with sophisticated communication',
      'Can reach speeds of 40 mph',
      'Retractable killing claw on each foot',
      'Problem-solving intelligence rivals modern primates',
      'Excellent climbers and jumpers'
    ],
    image: '/images/velociraptor.jpg',
    discoveredYear: 1924,
    classification: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Saurischia',
      family: 'Dromaeosauridae',
      genus: 'Velociraptor',
      species: 'V. mongoliensis'
    },
    status: 'Contained',
    lastSeen: '2024-01-15T16:45:00Z',
    enclosureId: 'RAPTOR_PADDOCK'
  },
  {
    id: '3',
    name: 'Triceratops',
    scientificName: 'Triceratops horridus',
    period: 'Cretaceous',
    diet: 'Herbivore',
    size: 'Large',
    dangerLevel: 2,
    length: '8-9 meters',
    height: '3 meters',
    weight: '6-12 tons',
    location: 'Gentle Giants Petting Zoo',
    description: 'Despite their formidable appearance, Triceratops are gentle herbivores. Their three distinctive horns and large frill make them one of the most recognizable dinosaurs. Popular with visitors in our petting area.',
    facts: [
      'Skull could be up to 1/3 of total body length',
      'Used horns for defense and possibly mating displays',
      'Lived in herds for protection',
      'Could process tough plant material with powerful jaws',
      'One of the last dinosaur species before extinction'
    ],
    image: '/images/triceratops.jpg',
    discoveredYear: 1889,
    classification: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Ornithischia',
      family: 'Ceratopsidae',
      genus: 'Triceratops',
      species: 'T. horridus'
    },
    status: 'Active',
    lastSeen: '2024-01-15T17:20:00Z',
    enclosureId: 'PETTING_ZOO'
  },
  {
    id: '4',
    name: 'Brachiosaurus',
    scientificName: 'Brachiosaurus altithorax',
    period: 'Jurassic',
    diet: 'Herbivore',
    size: 'Massive',
    dangerLevel: 1,
    length: '20-23 meters',
    height: '12-13 meters',
    weight: '35-40 tons',
    location: 'Gyrosphere Valley',
    description: 'The gentle giants of Jurassic Park. These massive sauropods are among the largest land animals ever to exist. Their long necks allow them to reach vegetation other herbivores cannot access.',
    facts: [
      'Could reach heights of 13 meters to feed',
      'Heart weighed about 400 kg to pump blood to brain',
      'Nostrils located on top of skull',
      'Lived in herds and migrated seasonally',
      'One of the tallest dinosaurs ever discovered'
    ],
    image: '/images/brachiosaurus.jpg',
    discoveredYear: 1903,
    classification: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Saurischia',
      family: 'Brachiosauridae',
      genus: 'Brachiosaurus',
      species: 'B. altithorax'
    },
    status: 'Active',
    lastSeen: '2024-01-15T18:00:00Z',
    enclosureId: 'GYROSPHERE_VALLEY'
  },
  {
    id: '5',
    name: 'Stegosaurus',
    scientificName: 'Stegosaurus stenops',
    period: 'Jurassic',
    diet: 'Herbivore',
    size: 'Large',
    dangerLevel: 2,
    length: '9 meters',
    height: '4 meters',
    weight: '3-5 tons',
    location: 'Herbivore Territory',
    description: 'Easily recognizable by their distinctive back plates and spiked tail. These herbivores use their thagomizer (tail spikes) for defense. Generally peaceful but can be dangerous when threatened.',
    facts: [
      'Back plates may have been used for temperature regulation',
      'Tail spikes called "thagomizer" could be lethal weapons',
      'Brain was only the size of a walnut',
      'Walked on four legs with front legs shorter than back',
      'Swallowed stones to help digest plant matter'
    ],
    image: '/images/stegosaurus.jpg',
    discoveredYear: 1877,
    classification: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Ornithischia',
      family: 'Stegosauridae',
      genus: 'Stegosaurus',
      species: 'S. stenops'
    },
    status: 'Contained',
    lastSeen: '2024-01-15T15:30:00Z',
    enclosureId: 'HERBIVORE_TERRITORY'
  },
  {
    id: '6',
    name: 'Dilophosaurus',
    scientificName: 'Dilophosaurus wetherilli',
    period: 'Jurassic',
    diet: 'Carnivore',
    size: 'Medium',
    dangerLevel: 3,
    length: '7 meters',
    height: '3 meters',
    weight: '400-500 kg',
    location: 'Restricted Area - Bio Lab',
    description: 'Medium-sized carnivore with distinctive twin crests. Known for their ability to spit venom and their pack hunting behavior. Currently under study in our restricted biological research facility.',
    facts: [
      'Twin crests possibly used for display and species recognition',
      'Can spit neurotoxic venom up to 6 meters',
      'Excellent night vision and hearing',
      'Hunts in coordinated pairs',
      'Can change skin coloration for camouflage'
    ],
    image: '/images/dilophosaurus.jpg',
    discoveredYear: 1940,
    classification: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Saurischia',
      family: 'Dilophosauridae',
      genus: 'Dilophosaurus',
      species: 'D. wetherilli'
    },
    status: 'Contained',
    lastSeen: '2024-01-15T13:15:00Z',
    enclosureId: 'BIO_LAB_07'
  },
  {
    id: '7',
    name: 'Gallimimus',
    scientificName: 'Gallimimus bullatus',
    period: 'Cretaceous',
    diet: 'Omnivore',
    size: 'Medium',
    dangerLevel: 1,
    length: '6 meters',
    height: '3 meters',
    weight: '440 kg',
    location: 'Open Plains Exhibit',
    description: 'Fast-running ornithomimid that resembles a large ostrich. These agile dinosaurs are among the fastest in the park and provide spectacular viewing as they run in herds across the plains.',
    facts: [
      'Can run up to 60 km/h (37 mph)',
      'Large eyes suggest excellent vision',
      'Lived and traveled in large flocks',
      'Long legs built for sustained running',
      'Omnivorous diet of plants, insects, and small animals'
    ],
    image: '/images/gallimimus.jpg',
    discoveredYear: 1972,
    classification: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Saurischia',
      family: 'Ornithomimidae',
      genus: 'Gallimimus',
      species: 'G. bullatus'
    },
    status: 'Active',
    lastSeen: '2024-01-15T19:10:00Z',
    enclosureId: 'OPEN_PLAINS'
  },
  {
    id: '8',
    name: 'Parasaurolophus',
    scientificName: 'Parasaurolophus walkeri',
    period: 'Cretaceous',
    diet: 'Herbivore',
    size: 'Large',
    dangerLevel: 1,
    length: '10 meters',
    height: '4 meters',
    weight: '2-3 tons',
    location: 'Lagoon Overlook',
    description: 'Hadrosaur known for their distinctive hollow crest that produces haunting musical calls. These gentle giants are popular with visitors for their beautiful vocalizations that echo across the park.',
    facts: [
      'Hollow crest acts as a resonating chamber for calls',
      'Could produce different tones by changing head position',
      'Lived in large herds with complex social structures',
      'Good swimmers and often fed in shallow water',
      'Sophisticated communication through sounds and body language'
    ],
    image: '/images/parasaurolophus.jpg',
    discoveredYear: 1922,
    classification: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Ornithischia',
      family: 'Hadrosauridae',
      genus: 'Parasaurolophus',
      species: 'P. walkeri'
    },
    status: 'Active',
    lastSeen: '2024-01-15T17:45:00Z',
    enclosureId: 'LAGOON_OVERLOOK'
  }
];

export const parkAlerts: ParkAlert[] = [
  {
    id: 'ALERT_001',
    type: 'security',
    level: 'high',
    title: 'Raptor Paddock Perimeter Breach',
    description: 'Motion sensors detected potential containment compromise in Sector 7 of the Raptor Paddock. Security team dispatched.',
    location: 'Raptor Paddock - Sector 7',
    timestamp: '2024-01-15T14:23:00Z',
    status: 'investigating',
    involvedDinosaurs: ['2']
  },
  {
    id: 'ALERT_002',
    type: 'system',
    level: 'medium',
    title: 'Power Grid Fluctuation',
    description: 'Temporary power fluctuations detected in the main grid. Backup systems are operational.',
    location: 'Main Power Station',
    timestamp: '2024-01-15T13:45:00Z',
    status: 'resolved'
  },
  {
    id: 'ALERT_003',
    type: 'weather',
    level: 'low',
    title: 'Approaching Storm System',
    description: 'Tropical storm approaching from the southeast. All outdoor activities should be concluded within 2 hours.',
    location: 'Island-wide',
    timestamp: '2024-01-15T12:30:00Z',
    status: 'active'
  },
  {
    id: 'ALERT_004',
    type: 'containment',
    level: 'critical',
    title: 'T-Rex Paddock Emergency',
    description: 'EMERGENCY: T-Rex enclosure fence damaged. All personnel evacuate immediately. Emergency protocols activated.',
    location: 'Paddock 9',
    timestamp: '2024-01-15T11:15:00Z',
    status: 'resolved',
    involvedDinosaurs: ['1']
  }
];

export const enclosureStatus: EnclosureStatus[] = [
  {
    id: 'PADDOCK_09',
    name: 'T-Rex Paddock',
    type: 'High Security Carnivore',
    capacity: 1,
    currentOccupancy: 1,
    status: 'operational',
    securityLevel: 5,
    lastInspection: '2024-01-14T08:00:00Z',
    nextInspection: '2024-01-16T08:00:00Z',
    assignedDinosaurs: ['1']
  },
  {
    id: 'RAPTOR_PADDOCK',
    name: 'Velociraptor Paddock',
    type: 'Maximum Security Carnivore',
    capacity: 4,
    currentOccupancy: 4,
    status: 'maintenance',
    securityLevel: 5,
    lastInspection: '2024-01-15T06:00:00Z',
    nextInspection: '2024-01-17T06:00:00Z',
    assignedDinosaurs: ['2']
  },
  {
    id: 'GYROSPHERE_VALLEY',
    name: 'Gyrosphere Valley',
    type: 'Open Range Herbivore',
    capacity: 20,
    currentOccupancy: 8,
    status: 'operational',
    securityLevel: 2,
    lastInspection: '2024-01-13T10:00:00Z',
    nextInspection: '2024-01-18T10:00:00Z',
    assignedDinosaurs: ['4', '7']
  },
  {
    id: 'HERBIVORE_TERRITORY',
    name: 'Herbivore Territory',
    type: 'Standard Herbivore',
    capacity: 15,
    currentOccupancy: 12,
    status: 'operational',
    securityLevel: 2,
    lastInspection: '2024-01-12T14:00:00Z',
    nextInspection: '2024-01-19T14:00:00Z',
    assignedDinosaurs: ['3', '5']
  }
];

export const systemMetrics: SystemMetrics = {
  powerGrid: 87,
  securitySystems: 94,
  containmentFields: 91,
  communicationNetworks: 98,
  emergencyProtocols: 100,
  weatherConditions: 'Partly Cloudy',
  visitorCount: 1247,
  staffOnDuty: 156
};
