'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Shield, AlertTriangle, Database, Settings } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Encyclopedia', href: '#encyclopedia', icon: Database },
    { name: 'Security', href: '#security', icon: Shield },
    { name: 'Control Center', href: '#control', icon: Settings },
    { name: 'Alerts', href: '#alerts', icon: AlertTriangle },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">JP</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-white">
                Jurassic Park
              </h1>
              <p className="text-xs text-white/60">Dino Encyclopedia</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </motion.a>
              );
            })}
          </div>

          {/* Emergency Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="danger" size="sm" className="hidden sm:flex">
              <AlertTriangle className="w-4 h-4" />
              Emergency
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-white/80 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white/20">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </a>
              );
            })}
            <div className="pt-2">
              <Button variant="danger" size="sm" className="w-full">
                <AlertTriangle className="w-4 h-4" />
                Emergency Protocol
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
