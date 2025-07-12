'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { SecurityDashboard } from '@/components/sections/SecurityDashboard';
import { ControlCenter } from '@/components/sections/ControlCenter';
import { DinosaurCard } from '@/components/dinosaurs/DinosaurCard';
import { DinosaurDetailModal } from '@/components/dinosaurs/DinosaurDetailModal';
import { SearchInput } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { dinosaursData } from '@/data';
import { Dinosaur } from '@/types';
import { Filter, Grid, List, AlertTriangle, Shield, Activity } from 'lucide-react';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [selectedDiet, setSelectedDiet] = useState('');
  const [selectedDanger, setSelectedDanger] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedDinosaur, setSelectedDinosaur] = useState<Dinosaur | null>(null);

  // Filter dinosaurs
  const filteredDinosaurs = dinosaursData.filter(dino => {
    const matchesSearch = dino.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dino.scientificName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPeriod = !selectedPeriod || dino.period === selectedPeriod;
    const matchesDiet = !selectedDiet || dino.diet === selectedDiet;
    const matchesDanger = !selectedDanger || dino.dangerLevel === selectedDanger;
    
    return matchesSearch && matchesPeriod && matchesDiet && matchesDanger;
  });

  const periods = ['Triassic', 'Jurassic', 'Cretaceous'];
  const diets = ['Herbivore', 'Carnivore', 'Omnivore'];
  const dangerLevels = [1, 2, 3, 4, 5];

  const clearFilters = () => {
    setSelectedPeriod('');
    setSelectedDiet('');
    setSelectedDanger(null);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Security Dashboard */}
      <SecurityDashboard />

      {/* Control Center */}
      <ControlCenter />

      {/* Encyclopedia Section */}
      <section id="encyclopedia" className="py-20 relative">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-h2 font-bold text-white mb-4">
              Dinosaur Encyclopedia
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Explore nossa coleção completa de espécies catalogadas. Cada entrada contém 
              informações detalhadas de segurança, localização atual e dados científicos.
            </p>
          </div>

          {/* Search and Filters */}
          <GlassCard>
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <SearchInput
                    onSearch={setSearchQuery}
                    placeholder="Search by name or scientific name..."
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={viewMode === 'grid' ? 'primary' : 'secondary'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'primary' : 'secondary'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4">
                {/* Period Filter */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Period
                  </label>
                  <select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="input-glass"
                  >
                    <option value="">All Periods</option>
                    {periods.map(period => (
                      <option key={period} value={period}>{period}</option>
                    ))}
                  </select>
                </div>

                {/* Diet Filter */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Diet
                  </label>
                  <select
                    value={selectedDiet}
                    onChange={(e) => setSelectedDiet(e.target.value)}
                    className="input-glass"
                  >
                    <option value="">All Diets</option>
                    {diets.map(diet => (
                      <option key={diet} value={diet}>{diet}</option>
                    ))}
                  </select>
                </div>

                {/* Danger Level Filter */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Danger Level
                  </label>
                  <select
                    value={selectedDanger || ''}
                    onChange={(e) => setSelectedDanger(e.target.value ? parseInt(e.target.value) : null)}
                    className="input-glass"
                  >
                    <option value="">All Levels</option>
                    {dangerLevels.map(level => (
                      <option key={level} value={level}>Level {level}</option>
                    ))}
                  </select>
                </div>

                {/* Clear Filters */}
                <div className="flex items-end">
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    <Filter className="w-4 h-4" />
                    Clear Filters
                  </Button>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Results Count */}
          <div className="flex justify-between items-center my-8">
            <p className="text-white/70">
              Showing {filteredDinosaurs.length} of {dinosaursData.length} species
            </p>
            <div className="flex gap-2">
              <Badge variant="safe">{filteredDinosaurs.filter(d => d.dangerLevel <= 2).length} Safe</Badge>
              <Badge variant="warning">{filteredDinosaurs.filter(d => d.dangerLevel === 3).length} Caution</Badge>
              <Badge variant="danger">{filteredDinosaurs.filter(d => d.dangerLevel >= 4).length} Dangerous</Badge>
            </div>
          </div>

          {/* Dinosaur Grid */}
          <div className={viewMode === 'grid' ? 'grid-cards' : 'space-y-4'}>
            {filteredDinosaurs.map((dinosaur, index) => (
              <DinosaurCard
                key={dinosaur.id}
                dinosaur={dinosaur}
                onViewDetails={setSelectedDinosaur}
                index={index}
              />
            ))}
          </div>

          {/* No Results */}
          {filteredDinosaurs.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4 opacity-30">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No dinosaurs found</h3>
              <p className="text-white/70 mb-6">Try adjusting your search criteria or filters</p>
              <Button onClick={clearFilters}>
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-black/20">
        <div className="container-custom">
          <h2 className="text-h2 font-bold text-white text-center mb-12">
            Park Status Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Security Status */}
            <GlassCard>
              <div className="text-center">
                <Shield className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Security Systems</h3>
                <div className="text-3xl font-bold text-primary-400 mb-2">94%</div>
                <p className="text-white/70">All systems operational</p>
              </div>
            </GlassCard>

            {/* Active Monitoring */}
            <GlassCard>
              <div className="text-center">
                <Activity className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Active Monitoring</h3>
                <div className="text-3xl font-bold text-amber-400 mb-2">24/7</div>
                <p className="text-white/70">Continuous surveillance</p>
              </div>
            </GlassCard>

            {/* Alert Status */}
            <GlassCard>
              <div className="text-center">
                <AlertTriangle className="w-12 h-12 text-danger-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Current Alerts</h3>
                <div className="text-3xl font-bold text-danger-400 mb-2">2</div>
                <p className="text-white/70">Active investigations</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/40">
        <div className="container-custom text-center">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-2">InGen Corporation</h3>
            <p className="text-white/70">Advanced Genetic Technologies</p>
          </div>
          <div className="text-white/50 text-sm">
            <p>&copy; 2024 International Genetic Technologies, Inc. All rights reserved.</p>
            <p className="mt-2">
              "Life finds a way" - Dr. Ian Malcolm
            </p>
          </div>
        </div>
      </footer>

      {/* Dinosaur Detail Modal */}
      <DinosaurDetailModal
        dinosaur={selectedDinosaur}
        isOpen={!!selectedDinosaur}
        onClose={() => setSelectedDinosaur(null)}
      />
    </div>
  );
}
