'use client';

import { motion } from 'framer-motion';
import { Eye, AlertTriangle, MapPin, Calendar } from 'lucide-react';
import { Dinosaur } from '@/types';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface DinosaurCardProps {
  dinosaur: Dinosaur;
  onViewDetails: (dinosaur: Dinosaur) => void;
  index?: number;
}

export function DinosaurCard({ dinosaur, onViewDetails, index = 0 }: DinosaurCardProps) {
  const getDangerColor = (level: number) => {
    switch (level) {
      case 1: return 'safe';
      case 2: return 'warning';
      case 3: return 'warning';
      case 4: return 'danger';
      case 5: return 'danger';
      default: return 'safe';
    }
  };

  const getDangerText = (level: number) => {
    switch (level) {
      case 1: return 'Safe';
      case 2: return 'Caution';
      case 3: return 'Warning';
      case 4: return 'Dangerous';
      case 5: return 'Extreme';
      default: return 'Unknown';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'safe';
      case 'Contained': return 'warning';
      case 'Escaped': return 'danger';
      default: return 'status';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: 'spring',
        stiffness: 300 
      }}
      whileHover={{ y: -10 }}
    >
      <GlassCard className="overflow-hidden group cursor-pointer" onClick={() => onViewDetails(dinosaur)}>
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden rounded-lg mb-4 bg-gradient-to-br from-stone-800 to-stone-900">
          {/* Placeholder for dinosaur image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-20">🦕</div>
          </div>
          
          {/* Status Badge */}
          <div className="absolute top-3 left-3">
            <Badge variant={getStatusColor(dinosaur.status)}>
              {dinosaur.status}
            </Badge>
          </div>
          
          {/* Danger Level */}
          <div className="absolute top-3 right-3">
            <Badge variant={getDangerColor(dinosaur.dangerLevel)}>
              Level {dinosaur.dangerLevel}
            </Badge>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button variant="secondary" size="sm">
              <Eye className="w-4 h-4" />
              View Details
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          {/* Title */}
          <div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
              {dinosaur.name}
            </h3>
            <p className="text-sm text-white/70 italic">{dinosaur.scientificName}</p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center space-x-2 text-white/70">
              <Calendar className="w-4 h-4 text-amber-500" />
              <span>{dinosaur.period}</span>
            </div>
            <div className="flex items-center space-x-2 text-white/70">
              <span className="w-4 h-4 text-center">🥗</span>
              <span>{dinosaur.diet}</span>
            </div>
            <div className="flex items-center space-x-2 text-white/70">
              <span className="w-4 h-4 text-center">📏</span>
              <span>{dinosaur.length}</span>
            </div>
            <div className="flex items-center space-x-2 text-white/70">
              <span className="w-4 h-4 text-center">⚖️</span>
              <span>{dinosaur.weight}</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2 text-white/80 bg-white/5 rounded-lg p-2">
            <MapPin className="w-4 h-4 text-primary-500" />
            <span className="text-sm">{dinosaur.location}</span>
          </div>

          {/* Description Preview */}
          <p className="text-white/70 text-sm line-clamp-2 leading-relaxed">
            {dinosaur.description}
          </p>

          {/* Danger Warning */}
          {dinosaur.dangerLevel >= 4 && (
            <div className="flex items-center space-x-2 text-danger-400 bg-danger-900/20 rounded-lg p-2">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-medium">High Risk - Authorized Personnel Only</span>
            </div>
          )}

          {/* Period Badge */}
          <div className="flex justify-between items-center">
            <Badge variant="period">{dinosaur.period} Period</Badge>
            <span className="text-xs text-white/50">
              Discovered {dinosaur.discoveredYear}
            </span>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
