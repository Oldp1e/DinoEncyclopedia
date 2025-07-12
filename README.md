# 🦕 Jurassic Park Dino Encyclopedia

Uma enciclopédia interativa de dinossauros inspirada no universo de Jurassic Park, com design system moderno, glassmorphism e experiência visual imersiva.

## 🌟 Features

### Design System Completo
- **Glassmorphism**: Elementos com efeito de vidro fosco e backdrop blur
- **Paleta Jurassic Park**: Verde musgo, dourado, marrom, cinza rocha e vermelho alerta
- **Tipografia Moderna**: Inter font com pesos variados
- **Animações Fluidas**: Framer Motion para transições suaves
- **Responsividade Total**: Desktop, tablet e mobile

### Funcionalidades Principais
- **Enciclopédia de Dinossauros**: Catálogo completo com 8+ espécies
- **Sistema de Segurança**: Dashboard em tempo real com alertas
- **Filtros Avançados**: Por período, dieta, tamanho e nível de perigo
- **Modal de Detalhes**: Informações completas de cada dinossauro
- **Monitoramento**: Status de contenção e localização
- **Alertas de Emergência**: Sistema de notificações críticas

### Componentes UI
- **GlassCard**: Cards com efeito glassmorphism
- **Button**: Botões com variantes e animações
- **Badge**: Indicadores de status e classificação
- **Input**: Campos de busca com ícones
- **Navbar**: Navegação fixa com menu mobile
- **Modal**: Overlay com detalhes completos

## 🚀 Tecnologias

- **Next.js 14**: Framework React com App Router
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Biblioteca de animações
- **Lucide React**: Ícones modernos
- **Radix UI**: Componentes acessíveis

## 🛠️ Instalação

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/DinoEncyclopedia.git
   cd DinoEncyclopedia
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── ui/               # Componentes UI básicos
│   │   ├── Button.tsx
│   │   ├── GlassCard.tsx
│   │   ├── Badge.tsx
│   │   └── Input.tsx
│   ├── layout/           # Componentes de layout
│   │   └── Navbar.tsx
│   ├── sections/         # Seções da página
│   │   ├── HeroSection.tsx
│   │   └── SecurityDashboard.tsx
│   └── dinosaurs/        # Componentes de dinossauros
│       ├── DinosaurCard.tsx
│       └── DinosaurDetailModal.tsx
├── data/                 # Dados estáticos
│   └── index.ts          # Dados dos dinossauros
├── types/                # Definições TypeScript
│   └── index.ts
└── lib/                  # Utilitários
    └── utils.ts
```

## 🎨 Design System

### Cores Principais
```css
/* Verde Jurassic */
--primary-500: #2f855a
--primary-600: #22543d

/* Dourado/Amber */
--amber-500: #e3c770
--amber-600: #d1a450

/* Marrom */
--brown-900: #3d2c16

/* Cinza Rocha */
--stone-800: #2d3748

/* Vermelho Alerta */
--danger-700: #c53030

/* Bege/Areia */
--sand-200: #f9f6f2
```

### Componentes
- **Glass Effect**: `backdrop-blur-10` + `bg-white/10`
- **Hover Effects**: `scale-105` + `shadow-xl`
- **Transitions**: `duration-300` + `ease-out`
- **Typography**: `Inter` font family

## 🦖 Dados dos Dinossauros

### Espécies Incluídas
1. **Tyrannosaurus Rex** - Nível 5 (Extremo)
2. **Velociraptor** - Nível 4 (Perigoso)  
3. **Triceratops** - Nível 2 (Cuidado)
4. **Brachiosaurus** - Nível 1 (Seguro)
5. **Stegosaurus** - Nível 2 (Cuidado)
6. **Dilophosaurus** - Nível 3 (Alerta)
7. **Gallimimus** - Nível 1 (Seguro)
8. **Parasaurolophus** - Nível 1 (Seguro)

### Informações por Dinossauro
- Nome científico e comum
- Período geológico
- Dieta (Carnívoro/Herbívoro/Onívoro)
- Dimensões (comprimento, altura, peso)
- Localização no parque
- Nível de periculosidade (1-5)
- Status atual (Ativo/Contido/Escapado)
- Fatos interessantes
- Classificação científica completa

## 🔒 Sistema de Segurança

### Dashboard em Tempo Real
- **Grid de Energia**: 87% operacional
- **Sistemas de Segurança**: 94% operacional  
- **Campos de Contenção**: 91% operacional
- **Redes de Comunicação**: 98% operacional

### Alertas Ativos
- Alertas de segurança por nível (Baixo/Médio/Alto/Crítico)
- Localização e timestamp
- Status (Ativo/Investigando/Resolvido)
- Protocolos de emergência

## 📱 Responsividade

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

### Adaptações
- Menu hamburger no mobile
- Grid responsivo para cards
- Tipografia escalável
- Touch-friendly buttons

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm run start

# Linting
npm run lint

# Type checking
npm run type-check
```

## 🌐 Deploy

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload da pasta .next
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Contato

**InGen Corporation** - Advanced Genetic Technologies

---

*"Life finds a way"* - Dr. Ian Malcolm

🦕 **Jurassic Park Dino Encyclopedia** - Explore a Era dos Dinossauros como um Cientista de Jurassic Park!
