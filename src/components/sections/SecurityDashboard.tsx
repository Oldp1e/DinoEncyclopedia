'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Shield, Activity, Zap, Clock, MapPin } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ClientOnly } from '@/components/ui/ClientOnly';
import { parkAlerts, systemMetrics } from '@/data';

export function SecurityDashboard() {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'security': return Shield;
      case 'containment': return AlertTriangle;
      case 'system': return Zap;
      case 'weather': return Activity;
      default: return AlertTriangle;
    }
  };

  const getAlertColor = (level: string) => {
    switch (level) {
      case 'low': return 'safe';
      case 'medium': return 'warning';
      case 'high': return 'danger';
      case 'critical': return 'danger';
      default: return 'safe';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'danger';
      case 'investigating': return 'warning';
      case 'resolved': return 'safe';
      default: return 'status';
    }
  };

  const systemHealthItems = [
    { name: 'Power Grid', value: systemMetrics.powerGrid, icon: Zap },
    { name: 'Security Systems', value: systemMetrics.securitySystems, icon: Shield },
    { name: 'Containment Fields', value: systemMetrics.containmentFields, icon: AlertTriangle },
    { name: 'Communication Networks', value: systemMetrics.communicationNetworks, icon: Activity },
  ];

  return (
    <section id="security" className="py-20 bg-black/20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-h2 font-bold text-white mb-4">
            Security Dashboard
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Monitoramento em tempo real de todos os sistemas de segurança e contenção do parque.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* System Health */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">System Health</h3>
            <div className="space-y-4">
              {systemHealthItems.map((item, index) => {
                const IconComponent = item.icon;
                const healthColor = item.value >= 90 ? 'text-primary-400' : 
                                   item.value >= 70 ? 'text-amber-400' : 'text-danger-400';
                
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassCard className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-white font-medium">{item.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-32 bg-black/30 rounded-full h-3 overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r from-primary-500 to-primary-400 transition-all duration-500`}
                              style={{ width: `${item.value}%` }}
                            />
                          </div>
                          <span className={`text-xl font-bold ${healthColor}`}>
                            {item.value}%
                          </span>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <GlassCard className="text-center p-4">
                  <div className="text-2xl font-bold text-primary-400 mb-1">
                    {systemMetrics.visitorCount}
                  </div>
                  <div className="text-white/70 text-sm">Visitors</div>
                </GlassCard>
                <GlassCard className="text-center p-4">
                  <div className="text-2xl font-bold text-amber-400 mb-1">
                    {systemMetrics.staffOnDuty}
                  </div>
                  <div className="text-white/70 text-sm">Staff on Duty</div>
                </GlassCard>
              </div>
            </div>
          </div>

          {/* Active Alerts */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white">Active Alerts</h3>
              <Badge variant="danger">
                {parkAlerts.filter(alert => alert.status === 'active' || alert.status === 'investigating').length} Active
              </Badge>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {parkAlerts.map((alert, index) => {
                const IconComponent = getAlertIcon(alert.type);
                
                return (
                  <motion.div
                    key={alert.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassCard className="p-4 hover:scale-102 transition-transform">
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          alert.level === 'critical' ? 'bg-danger-700' :
                          alert.level === 'high' ? 'bg-danger-600' :
                          alert.level === 'medium' ? 'bg-amber-500' :
                          'bg-primary-600'
                        }`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="text-white font-semibold">{alert.title}</h4>
                            <Badge variant={getAlertColor(alert.level)}>
                              {alert.level.toUpperCase()}
                            </Badge>
                            <Badge variant={getStatusColor(alert.status)}>
                              {alert.status.toUpperCase()}
                            </Badge>
                          </div>
                          
                          <p className="text-white/80 text-sm mb-3">
                            {alert.description}
                          </p>
                          
                          <div className="flex items-center gap-4 text-xs text-white/60">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              <span>{alert.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <ClientOnly 
                                showSkeleton={true}
                                skeletonClassName="h-3 w-32"
                              >
                                <span>{new Date(alert.timestamp).toLocaleDateString('en-GB', {
                                  year: 'numeric',
                                  month: '2-digit',
                                  day: '2-digit',
                                  hour: '2-digit',
                                  minute: '2-digit',
                                  hour12: false
                                })}</span>
                              </ClientOnly>
                            </div>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>

            {/* Emergency Actions */}
            <div className="mt-6 space-y-3">
              <Button variant="danger" className="w-full">
                <AlertTriangle className="w-5 h-5" />
                Emergency Lockdown Protocol
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="amber" size="sm">
                  <Shield className="w-4 h-4" />
                  Security Report
                </Button>
                <Button variant="secondary" size="sm">
                  <Activity className="w-4 h-4" />
                  System Diagnostics
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Weather and Environmental */}
        <div className="mt-12">
          <GlassCard className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-white font-semibold mb-2">Weather Conditions</h4>
                <div className="text-2xl mb-1">🌤️</div>
                <p className="text-white/80">{systemMetrics.weatherConditions}</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Emergency Protocols</h4>
                <div className="text-3xl font-bold text-primary-400 mb-1">
                  {systemMetrics.emergencyProtocols}%
                </div>
                <p className="text-white/70">Ready</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Response Time</h4>
                <div className="text-3xl font-bold text-amber-400 mb-1">
                  &lt;2min
                </div>
                <p className="text-white/70">Average</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
