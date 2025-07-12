'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, MapPin, Calendar, Ruler, Weight, AlertTriangle, Shield, Eye, Clock } from 'lucide-react';
import { Dinosaur } from '@/types';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ClientOnly } from '@/components/ui/ClientOnly';

interface DinosaurDetailModalProps {
  dinosaur: Dinosaur | null;
  isOpen: boolean;
  onClose: () => void;
}

export function DinosaurDetailModal({ dinosaur, isOpen, onClose }: DinosaurDetailModalProps) {
  if (!isOpen || !dinosaur) return null;

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <motion.div
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
      >
        <GlassCard className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-black/50 hover:bg-black/70 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 mb-4">
              <Badge variant={getStatusColor(dinosaur.status)}>
                {dinosaur.status}
              </Badge>
              <Badge variant={getDangerColor(dinosaur.dangerLevel)}>
                Danger Level {dinosaur.dangerLevel}
              </Badge>
              <Badge variant="period">
                {dinosaur.period} Period
              </Badge>
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-2">
              {dinosaur.name}
            </h1>
            <p className="text-xl text-white/70 italic mb-4">
              {dinosaur.scientificName}
            </p>
            
            {/* Warning for dangerous dinosaurs */}
            {dinosaur.dangerLevel >= 4 && (
              <div className="flex items-center gap-3 p-4 bg-danger-900/30 border border-danger-700 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-danger-400" />
                <div>
                  <h3 className="font-semibold text-danger-400">HIGH RISK SPECIES</h3>
                  <p className="text-danger-300 text-sm">
                    Access restricted to authorized personnel only. Emergency protocols in effect.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Image Section */}
          <div className="relative h-64 mb-8 rounded-lg overflow-hidden bg-gradient-to-br from-stone-800 to-stone-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl opacity-30">🦕</div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="glass rounded-lg p-3">
                <div className="flex items-center gap-2 text-white/90">
                  <MapPin className="w-4 h-4 text-primary-500" />
                  <span className="text-sm font-medium">{dinosaur.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Basic Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Basic Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 glass rounded-lg">
                    <Calendar className="w-5 h-5 text-amber-500" />
                    <div>
                      <span className="text-white/70 text-sm">Period</span>
                      <p className="text-white font-medium">{dinosaur.period}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 glass rounded-lg">
                    <span className="w-5 h-5 text-center">🥗</span>
                    <div>
                      <span className="text-white/70 text-sm">Diet</span>
                      <p className="text-white font-medium">{dinosaur.diet}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 glass rounded-lg">
                    <Ruler className="w-5 h-5 text-primary-500" />
                    <div>
                      <span className="text-white/70 text-sm">Length</span>
                      <p className="text-white font-medium">{dinosaur.length}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 glass rounded-lg">
                    <span className="w-5 h-5 text-center">📏</span>
                    <div>
                      <span className="text-white/70 text-sm">Height</span>
                      <p className="text-white font-medium">{dinosaur.height}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 glass rounded-lg">
                    <Weight className="w-5 h-5 text-amber-500" />
                    <div>
                      <span className="text-white/70 text-sm">Weight</span>
                      <p className="text-white font-medium">{dinosaur.weight}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 glass rounded-lg">
                    <Clock className="w-5 h-5 text-primary-500" />
                    <div>
                      <span className="text-white/70 text-sm">Discovered</span>
                      <p className="text-white font-medium">{dinosaur.discoveredYear}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Information */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Current Status</h3>
                <div className="space-y-3">
                  <div className="p-4 glass rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="w-5 h-5 text-primary-500" />
                      <span className="text-white font-medium">Last Sighting</span>
                    </div>
                    <ClientOnly 
                      showSkeleton={true}
                      skeletonClassName="h-4 w-40"
                    >
                      <p className="text-white/70 text-sm">
                        {dinosaur.lastSeen ? new Date(dinosaur.lastSeen).toLocaleDateString('en-GB', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit',
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: false
                        }) : 'Unknown'}
                      </p>
                    </ClientOnly>
                  </div>
                  
                  {dinosaur.enclosureId && (
                    <div className="p-4 glass rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-5 h-5 text-amber-500" />
                        <span className="text-white font-medium">Enclosure ID</span>
                      </div>
                      <p className="text-white/70 text-sm font-mono">
                        {dinosaur.enclosureId}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Description and Facts */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Description</h3>
                <p className="text-white/80 leading-relaxed">
                  {dinosaur.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Interesting Facts</h3>
                <ul className="space-y-2">
                  {dinosaur.facts.map((fact, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 glass rounded-lg">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Scientific Classification</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {Object.entries(dinosaur.classification).map(([key, value]) => (
                    <div key={key} className="p-2 glass rounded">
                      <span className="text-white/60 capitalize">{key}:</span>
                      <span className="text-white ml-2">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-white/20">
            <Button variant="primary">
              <Eye className="w-4 h-4" />
              Live Camera Feed
            </Button>
            <Button variant="amber">
              <MapPin className="w-4 h-4" />
              Track Location
            </Button>
            {dinosaur.dangerLevel >= 3 && (
              <Button variant="danger">
                <AlertTriangle className="w-4 h-4" />
                Emergency Protocol
              </Button>
            )}
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
