'use client';

import { motion } from 'framer-motion';
import { Monitor, Satellite, Shield, Activity, AlertTriangle, Eye } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ClientOnly } from '@/components/ui/ClientOnly';
import { enclosureStatus } from '@/data';

export function ControlCenter() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'safe';
      case 'maintenance': return 'warning';
      case 'emergency': return 'danger';
      case 'offline': return 'status';
      default: return 'status';
    }
  };

  const getSecurityLevelBars = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <div
        key={i}
        className={`w-2 h-4 rounded-sm ${
          i < level ? 'bg-primary-500' : 'bg-white/20'
        }`}
      />
    ));
  };

  return (
    <section id="control" className="py-20 relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-h2 font-bold text-white mb-4">
            Central de Controle
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Sistema de monitoramento avançado para controle total dos recintos e segurança do parque.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Live Monitoring */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-white mb-6">Monitoramento ao Vivo</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {enclosureStatus.map((enclosure, index) => (
                <motion.div
                  key={enclosure.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{enclosure.name}</h4>
                        <p className="text-sm text-white/70">{enclosure.type}</p>
                      </div>
                      <Badge variant={getStatusColor(enclosure.status)}>
                        {enclosure.status.toUpperCase()}
                      </Badge>
                    </div>

                    {/* Security Level */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-white/80">Security Level</span>
                        <span className="text-sm font-semibold text-white">{enclosure.securityLevel}/5</span>
                      </div>
                      <div className="flex gap-1">
                        {getSecurityLevelBars(enclosure.securityLevel)}
                      </div>
                    </div>

                    {/* Occupancy */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-white/80">Occupancy</span>
                        <span className="text-sm font-semibold text-white">
                          {enclosure.currentOccupancy}/{enclosure.capacity}
                        </span>
                      </div>
                      <div className="w-full bg-black/30 rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                          style={{ 
                            width: `${(enclosure.currentOccupancy / enclosure.capacity) * 100}%` 
                          }}
                        />
                      </div>
                    </div>

                    {/* Inspection Dates */}
                    <div className="text-xs text-white/60 space-y-1">
                      <ClientOnly 
                        showSkeleton={true}
                        skeletonClassName="h-3 w-full"
                      >
                        <div>Last Inspection: {new Date(enclosure.lastInspection).toLocaleDateString('en-GB')}</div>
                        <div>Next Inspection: {new Date(enclosure.nextInspection).toLocaleDateString('en-GB')}</div>
                      </ClientOnly>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 mt-4">
                      <Button variant="secondary" size="sm">
                        <Eye className="w-3 h-3" />
                        View
                      </Button>
                      <Button variant="amber" size="sm">
                        <Monitor className="w-3 h-3" />
                        Control
                      </Button>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Command Panel */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Painel de Comando</h3>
            
            <div className="space-y-6">
              {/* Quick Actions */}
              <GlassCard className="p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Ações Rápidas</h4>
                <div className="space-y-3">
                  <Button variant="primary" className="w-full">
                    <Satellite className="w-4 h-4" />
                    Scan All Enclosures
                  </Button>
                  <Button variant="amber" className="w-full">
                    <Activity className="w-4 h-4" />
                    System Diagnostics
                  </Button>
                  <Button variant="secondary" className="w-full">
                    <Shield className="w-4 h-4" />
                    Security Report
                  </Button>
                  <Button variant="danger" className="w-full">
                    <AlertTriangle className="w-4 h-4" />
                    Emergency Lock Down
                  </Button>
                </div>
              </GlassCard>

              {/* Communication Center */}
              <GlassCard className="p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Centro de Comunicação</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
                    <span className="text-white text-sm">Park Radio Active</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
                    <span className="text-white text-sm">Emergency Channel</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
                    <span className="text-white text-sm">Mainland Connection</span>
                  </div>
                </div>
              </GlassCard>

              {/* Weather Station */}
              <GlassCard className="p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Estação Meteorológica</h4>
                <div className="text-center">
                  <div className="text-4xl mb-2">🌤️</div>
                  <div className="text-lg font-semibold text-white mb-1">Partly Cloudy</div>
                  <div className="text-2xl font-bold text-amber-400 mb-1">24°C</div>
                  <div className="text-sm text-white/70">Wind: 15 km/h NE</div>
                  <div className="text-sm text-white/70">Humidity: 68%</div>
                </div>
              </GlassCard>

              {/* Emergency Protocols */}
              <GlassCard className="p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Protocolos de Emergência</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded">
                    <span className="text-white text-sm">Code Red</span>
                    <Badge variant="danger">READY</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded">
                    <span className="text-white text-sm">Code Blue</span>
                    <Badge variant="safe">READY</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded">
                    <span className="text-white text-sm">Evacuation</span>
                    <Badge variant="warning">STANDBY</Badge>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>

        {/* Map Overview */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Visão Geral do Parque</h3>
          <GlassCard className="p-8">
            <div className="relative h-64 bg-gradient-to-br from-primary-900/50 to-stone-900/50 rounded-lg overflow-hidden">
              {/* Simplified park map placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4 opacity-30">🗺️</div>
                  <p className="text-white/70">Interactive Park Map</p>
                  <p className="text-white/50 text-sm">Real-time tracking and monitoring</p>
                </div>
              </div>
              
              {/* Map markers */}
              <div className="absolute top-4 left-4">
                <div className="w-3 h-3 bg-danger-500 rounded-full animate-pulse" />
                <span className="text-xs text-white ml-2">T-Rex Paddock</span>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-warning-500 rounded-full animate-pulse" />
                <span className="text-xs text-white mr-2">Raptor Paddock</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
                <span className="text-xs text-white ml-2">Visitor Center</span>
              </div>
              <div className="absolute bottom-4 right-4">
                <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
                <span className="text-xs text-white mr-2">Herbivore Valley</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
