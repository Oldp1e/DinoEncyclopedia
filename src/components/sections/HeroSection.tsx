'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Database, Eye } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';

export function HeroSection() {
  const stats = [
    { icon: Database, label: 'Species Catalogued', value: '50+' },
    { icon: Shield, label: 'Security Level', value: '94%' },
    { icon: Eye, label: 'Active Monitoring', value: '24/7' },
    { icon: Zap, label: 'Power Grid', value: '87%' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary-500 rounded-full animate-bounce-subtle" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-amber-500 rounded-full animate-bounce-subtle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce-subtle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-60 right-10 w-1 h-1 bg-amber-400 rounded-full animate-bounce-subtle" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center space-y-8">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-display font-display text-gradient mb-4">
              Jurassic Park
            </h1>
            <h2 className="text-h1 font-display text-white mb-6">
              Dino Encyclopedia
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Explore a Era dos Dinossauros como um Cientista de Jurassic Park! 
              Acesse informações detalhadas sobre cada espécie, monitoramento em tempo real 
              e protocolos de segurança avançados.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="min-w-[200px]">
              <Database className="w-5 h-5" />
              Explore Encyclopedia
            </Button>
            <Button variant="secondary" size="lg" className="min-w-[200px]">
              <Shield className="w-5 h-5" />
              Security Dashboard
            </Button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.9 + (index * 0.1),
                    type: 'spring',
                    stiffness: 300 
                  }}
                >
                  <GlassCard className="text-center p-6 hover:scale-105">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                    <p className="text-white/70 text-sm">{stat.label}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>

          {/* System Status Indicator */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <GlassCard className="max-w-md mx-auto p-4">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
                <span className="text-white/90 font-medium">System Status: Operational</span>
                <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/60 text-sm">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
