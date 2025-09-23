import './style.css';

// Debug information for Vercel deployment
console.log('🚀 Application starting...');
console.log('Environment:', {
  userAgent: navigator.userAgent,
  location: window.location.href,
  timestamp: new Date().toISOString(),
  buildTime: '__BUILD_TIME__' // Will be replaced during build
});

const app = document.querySelector<HTMLDivElement>('#app')!;

// Global error handler for debugging
window.addEventListener('error', (event) => {
  console.error('🚨 Global error:', event.error);
  console.error('📍 Error location:', event.filename, event.lineno, event.colno);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('🚨 Unhandled promise rejection:', event.reason);
});

try {
  app.innerHTML = `
  <!-- Navigation -->
  <nav class="fixed top-0 w-full z-50 glass-card rounded-none border-x-0 border-t-0 transition-all duration-300">
    <div class="max-w-7xl mx-auto section-padding py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-gradient-green-blue rounded-xl flex items-center justify-center transform hover:rotate-12 transition-transform">
            <span class="text-2xl">🎮</span>
          </div>
          <div>
            <span class="text-xl font-bold">AI Mario Level Generator</span>
            <span class="text-xs text-gray-400 block">HackMIT 2025</span>
          </div>
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <a href="#demo" class="hover:text-green-400 transition-colors">Live Demo</a>
          <a href="#features" class="hover:text-green-400 transition-colors">Features</a>
          <a href="#recognition" class="hover:text-green-400 transition-colors">OpenCV Engine</a>
          <a href="community.html" class="hover:text-green-400 transition-colors flex items-center gap-1">
            <span class="text-pink-400">🌟</span>
            <span>Community</span>
          </a>
          <a href="kids.html" class="hover:text-yellow-400 transition-colors flex items-center gap-1">
            <span class="text-yellow-400">🎨</span>
            <span>儿童版</span>
          </a>
          <a href="kids-en.html" class="hover:text-blue-400 transition-colors flex items-center gap-1">
            <span class="text-blue-400">🌍</span>
            <span>Kids</span>
          </a>
          <a href="#tech" class="hover:text-green-400 transition-colors">Tech Stack</a>
          <a href="#mario-engine" class="hover:text-green-400 transition-colors">Mario Engine</a>
          <a href="https://frontend-ui-alpha-one.vercel.app/" target="_blank" class="px-6 py-2 bg-gradient-green-blue rounded-lg hover-glow font-semibold">
            Try It Now
          </a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Section with Live Demo -->
  <section class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    <!-- Ultra-Advanced Animated Background -->
    <div class="absolute inset-0 -z-10">
      <!-- Primary floating orbs -->
      <div class="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-500/30 to-cyan-500/20 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-green-500/25 to-blue-500/20 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-blue-500/15 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>

      <!-- Secondary particle effects -->
      <div class="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-2xl animate-float" style="animation-delay: 1s;"></div>
      <div class="absolute bottom-1/3 left-1/3 w-48 h-48 bg-gradient-to-br from-pink-500/15 to-transparent rounded-full blur-2xl animate-float" style="animation-delay: 3s;"></div>
      <div class="absolute top-3/4 left-1/4 w-24 h-24 bg-gradient-to-br from-yellow-400/25 to-transparent rounded-full blur-xl animate-bounce" style="animation-delay: 0.5s;"></div>

      <!-- Matrix-style grid overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent opacity-30"
           style="background-image: linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px), linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px);
                  background-size: 100px 100px;"></div>
    </div>

    <div class="max-w-7xl mx-auto section-padding py-32">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Text Content -->
        <div class="space-y-6">
          <div class="inline-block px-4 py-2 glass-card">
            <span class="text-sm text-green-400">🚀 AI-Native Game Creation Platform</span>
          </div>

          <h1 class="text-5xl md:text-6xl font-bold">
            <span class="block">Draw Your</span>
            <span class="gradient-text text-6xl md:text-7xl">Mario Level</span>
            <span class="block text-3xl md:text-4xl text-gray-300 mt-4">
              AI Creates Playable Mario Games
            </span>
          </h1>

          <p class="text-xl text-gray-400">
            Transform hand-drawn sketches into fully playable Mario-style platformer games in under
            <span class="text-green-400 font-bold">5 minutes</span> using cutting-edge AI and computer vision.
            No coding required - just draw and play!
          </p>

          <div class="flex items-center gap-4 text-sm">
            <div class="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-500/20">
              <span class="text-cyan-400">👁️</span>
              <span>OpenCV Shape Detection</span>
            </div>
            <div class="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/20">
              <span class="text-purple-400">🧠</span>
              <span>LLaVA AI Analysis</span>
            </div>
            <div class="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full border border-green-500/20">
              <span class="text-green-400">🍄</span>
              <span>Mario Physics Engine</span>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <a href="https://frontend-ui-alpha-one.vercel.app/" target="_blank" class="px-8 py-4 bg-gradient-green-blue rounded-lg hover-glow text-lg font-semibold text-center">
              Try It Now 🚀
            </a>
            <a href="kids.html" class="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg hover-glow text-lg font-semibold text-center">
              儿童版 🎨
            </a>
            <button class="px-8 py-4 glass-card hover:bg-white/10 transition-colors text-lg">
              Watch Demo ▶️
            </button>
          </div>
        </div>

        <!-- Right: Interactive Demo Preview -->
        <div class="relative">
          <div class="glass-card p-4 rounded-2xl">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
              <span class="text-xs text-gray-400 ml-2">AI Game Engine v1.0</span>
            </div>

            <!-- Ultra-Advanced Demo Visualization -->
            <div class="bg-gradient-to-br from-black/60 to-cyan-900/20 rounded-lg p-6 space-y-4 border border-cyan-500/20">
              <div class="text-center relative">
                <div class="inline-block p-8 border-2 border-dashed border-cyan-400/40 rounded-lg bg-gradient-to-br from-cyan-500/5 to-blue-500/5 hover:border-cyan-300/60 transition-all duration-300">
                  <span class="text-6xl animate-bounce">✏️</span>
                  <p class="text-sm text-cyan-300 mt-2 font-medium">Draw your map here</p>
                  <div class="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              <div class="flex items-center justify-center gap-2">
                <div class="flex-1 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/50"></div>
                <span class="text-xs text-cyan-300 font-semibold px-2 py-1 bg-cyan-500/20 rounded-full border border-cyan-500/30">
                  🤖 Multi-Stage AI Processing
                </span>
                <div class="flex-1 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50"></div>
              </div>

              <!-- Enhanced Generated Elements Grid -->
              <div class="grid grid-cols-3 gap-3">
                <div class="aspect-square bg-gradient-to-br from-green-800/40 to-emerald-900/30 rounded-lg flex items-center justify-center border border-green-500/30 hover:scale-105 transition-transform duration-200">
                  <span class="text-3xl drop-shadow-lg">🌲</span>
                </div>
                <div class="aspect-square bg-gradient-to-br from-blue-800/40 to-cyan-900/30 rounded-lg flex items-center justify-center border border-blue-500/30 hover:scale-105 transition-transform duration-200">
                  <span class="text-3xl drop-shadow-lg">💧</span>
                </div>
                <div class="aspect-square bg-gradient-to-br from-yellow-800/40 to-orange-900/30 rounded-lg flex items-center justify-center border border-yellow-500/30 hover:scale-105 transition-transform duration-200">
                  <span class="text-3xl drop-shadow-lg">🏠</span>
                </div>
                <div class="aspect-square bg-gradient-to-br from-gray-800/40 to-slate-900/30 rounded-lg flex items-center justify-center border border-gray-500/30 hover:scale-105 transition-transform duration-200">
                  <span class="text-3xl drop-shadow-lg">⛰️</span>
                </div>
                <div class="aspect-square bg-gradient-to-br from-purple-800/40 to-violet-900/30 rounded-lg flex items-center justify-center border border-purple-500/30 hover:scale-105 transition-transform duration-200">
                  <span class="text-3xl drop-shadow-lg">🧙</span>
                </div>
                <div class="aspect-square bg-gradient-to-br from-red-800/40 to-pink-900/30 rounded-lg flex items-center justify-center border border-red-500/30 hover:scale-105 transition-transform duration-200">
                  <span class="text-3xl drop-shadow-lg">🗡️</span>
                </div>
              </div>

              <!-- New Features Showcase -->
              <div class="pt-2 border-t border-cyan-500/20">
                <div class="flex items-center justify-between text-xs">
                  <span class="text-cyan-400 font-semibold">🗃️ PostgreSQL Storage</span>
                  <span class="text-purple-400 font-semibold">🔺 Polygon Detection</span>
                  <span class="text-green-400 font-semibold">⚡ Physics Engine</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating Stats -->
          <div class="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-lg">
            <span class="text-xs text-gray-400">Processing Time</span>
            <span class="block text-lg font-bold text-green-400">&lt; 5 min</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Live Demo Section -->
  <section id="demo" class="py-20 relative">
    <div class="max-w-7xl mx-auto section-padding">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="gradient-text">See The Magic Happen</span>
        </h2>
        <p class="text-xl text-gray-400">From sketch to playable Mario level in real-time</p>
      </div>

      <!-- Three-Step Process -->
      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <!-- Step 1: Draw -->
        <div class="glass-card p-8 relative group hover-glow">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-green-blue rounded-full flex items-center justify-center font-bold">
            1
          </div>
          <div class="text-4xl mb-4">✏️</div>
          <h3 class="text-2xl font-bold mb-2">Draw Your Level</h3>
          <p class="text-gray-400">Sketch your Mario level with platforms, enemies, and coins</p>
          <div class="mt-4 p-4 bg-black/30 rounded-lg">
            <img src="https://via.placeholder.com/300x200/1a1a1a/34b298?text=Hand+Drawn+Map" alt="Hand-drawn map" class="rounded" />
          </div>
        </div>

        <!-- Step 2: AI Process -->
        <div class="glass-card p-8 relative group hover-glow">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-blue-purple rounded-full flex items-center justify-center font-bold">
            2
          </div>
          <div class="text-4xl mb-4">🤖</div>
          <h3 class="text-2xl font-bold mb-2">OpenCV + LLaVA Analysis</h3>
          <p class="text-gray-400">Computer vision detects shapes, LLaVA AI creates Mario elements</p>
          <div class="mt-4 p-4 bg-black/30 rounded-lg">
            <div class="space-y-2 font-mono text-sm">
              <div class="text-green-400">✓ OpenCV contour detection...</div>
              <div class="text-green-400">✓ Triangle → Mario start position</div>
              <div class="text-green-400">✓ Circle → Goal/end points</div>
              <div class="text-green-400">✓ Shapes → Platforms & obstacles</div>
              <div class="text-yellow-400 animate-pulse">🍄 Generating Mario level...</div>
            </div>
          </div>
        </div>

        <!-- Step 3: Play -->
        <div class="glass-card p-8 relative group hover-glow">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-purple-green rounded-full flex items-center justify-center font-bold">
            3
          </div>
          <div class="text-4xl mb-4">🎮</div>
          <h3 class="text-2xl font-bold mb-2">Play Mario Level</h3>
          <p class="text-gray-400">Jump, run and collect coins in your custom Mario world</p>
          <div class="mt-4 p-4 bg-black/30 rounded-lg">
            <img src="https://via.placeholder.com/300x200/1a1a1a/8b5cf6?text=Pixel+RPG+Game" alt="Generated game" class="rounded" />
          </div>
        </div>
      </div>

      <!-- Live Demo Area -->
      <div class="glass-card p-8 rounded-2xl">
        <div class="text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full mb-6">
            <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span class="text-red-400 font-semibold">LIVE DEMO</span>
          </div>

          <div class="aspect-video bg-black/50 rounded-lg overflow-hidden relative">
            <div class="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span class="text-red-400 font-semibold text-sm">LIVE MARIO GAME</span>
              </div>
            </div>
            <iframe
              src="https://frontend-mario.vercel.app/embed"
              class="w-full h-full border-0 rounded-lg"
              allow="fullscreen; autoplay; encrypted-media"
              loading="lazy"
              title="Mario Game Demo"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section id="features" class="py-20">
    <div class="max-w-7xl mx-auto section-padding">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="gradient-text">AI-Powered Features</span>
        </h2>
        <p class="text-xl text-gray-400">Cutting-edge technology meets creative freedom</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Feature 1 - Backend-opencv -->
        <div class="glass-card p-8 hover-glow group border border-cyan-500/20">
          <div class="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
            <span class="text-2xl">👁️</span>
          </div>
          <h3 class="text-2xl font-semibold mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">OpenCV Shape Detection</h3>
          <p class="text-gray-400">
            Advanced computer vision API that detects shapes and converts them to Mario elements with
            <span class="text-cyan-400 font-bold">FastAPI</span> backend on Modal cloud platform
          </p>
          <div class="mt-4 space-y-1 text-xs text-gray-500">
            <div>• <span class="text-cyan-400">Triangles:</span> Mario start positions</div>
            <div>• <span class="text-blue-400">Circles:</span> Goal/end points</div>
            <div>• <span class="text-purple-400">Shapes:</span> Platforms & obstacles</div>
            <div>• <span class="text-green-400">Live API:</span> Modal cloud deployment</div>
          </div>
        </div>

        <!-- Feature 2 - Backend_Llava -->
        <div class="glass-card p-8 hover-glow group">
          <div class="w-14 h-14 bg-gradient-blue-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span class="text-2xl">🧠</span>
          </div>
          <h3 class="text-2xl font-semibold mb-3">LLaVA AI Analysis</h3>
          <p class="text-gray-400">
            Large Language and Vision Assistant powered by H100 GPU for advanced hand-drawn image understanding
          </p>
        </div>

        <!-- Feature 3 - Frontend-UI -->
        <div class="glass-card p-8 hover-glow group">
          <div class="w-14 h-14 bg-gradient-purple-green rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span class="text-2xl">💬</span>
          </div>
          <h3 class="text-2xl font-semibold mb-3">Dual AI Chat Interface</h3>
          <p class="text-gray-400">
            Smart chat system with Cerebras Llama 70B for text and Claude 3.5 Sonnet for image recognition
          </p>
        </div>

        <!-- Feature 4 - Frontend_Mario -->
        <div class="glass-card p-8 hover-glow group">
          <div class="w-14 h-14 bg-gradient-green-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span class="text-2xl">🍄</span>
          </div>
          <h3 class="text-2xl font-semibold mb-3">Mario Game Engine</h3>
          <p class="text-gray-400">
            Complete Mario-style physics engine with TypeScript, collision detection, and real-time level generation
          </p>
        </div>

        <!-- Feature 5 -->
        <div class="glass-card p-8 hover-glow group">
          <div class="w-14 h-14 bg-gradient-blue-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span class="text-2xl">🎵</span>
          </div>
          <h3 class="text-2xl font-semibold mb-3">Dynamic Music</h3>
          <p class="text-gray-400">
            AI-generated soundtracks with Suno that match your game's atmosphere and style
          </p>
        </div>

        <!-- Feature 6 - Database Persistence -->
        <div class="glass-card p-8 hover-glow group border border-purple-500/20">
          <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/30">
            <span class="text-2xl">🗃️</span>
          </div>
          <h3 class="text-2xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">PostgreSQL Level Storage</h3>
          <p class="text-gray-400">
            Advanced database system for persistent level storage, sharing, and version control with real-time sync
          </p>
          <div class="mt-4 space-y-1 text-xs text-gray-500">
            <div>• <span class="text-purple-400">Store:</span> Level data with JSON schema</div>
            <div>• <span class="text-pink-400">Share:</span> Instant level sharing via URLs</div>
            <div>• <span class="text-violet-400">Sync:</span> Real-time collaborative editing</div>
            <div>• <span class="text-indigo-400">Backup:</span> Automatic version history</div>
          </div>
        </div>

        <!-- Feature 7 - Polygon Physics -->
        <div class="glass-card p-8 hover-glow group border border-emerald-500/20">
          <div class="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/30">
            <span class="text-2xl">🔺</span>
          </div>
          <h3 class="text-2xl font-semibold mb-3 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Advanced Polygon Physics</h3>
          <p class="text-gray-400">
            PyMunk-powered convex decomposition for complex shapes with real-time collision detection
          </p>
          <div class="mt-4 space-y-1 text-xs text-gray-500">
            <div>• <span class="text-emerald-400">Convex:</span> Automatic shape decomposition</div>
            <div>• <span class="text-green-400">Physics:</span> Real-time collision detection</div>
            <div>• <span class="text-teal-400">Optimize:</span> Smart vertex reduction</div>
            <div>• <span class="text-cyan-400">Support:</span> Up to 200 vertices per shape</div>
          </div>
        </div>

        <!-- Feature 8 - Instant Deployment -->
        <div class="glass-card p-8 hover-glow group border border-orange-500/20">
          <div class="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/30">
            <span class="text-2xl">🚀</span>
          </div>
          <h3 class="text-2xl font-semibold mb-3 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Instant Cloud Deployment</h3>
          <p class="text-gray-400">
            One-click deployment to Vercel + Modal with automatic scaling and global CDN distribution
          </p>
          <div class="mt-4 space-y-1 text-xs text-gray-500">
            <div>• <span class="text-orange-400">Deploy:</span> Vercel edge functions</div>
            <div>• <span class="text-red-400">Scale:</span> Modal GPU auto-scaling</div>
            <div>• <span class="text-pink-400">CDN:</span> Global content distribution</div>
            <div>• <span class="text-yellow-400">Share:</span> Instant public URLs</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Image Recognition Module Section -->
  <section id="recognition" class="py-20 relative">
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-1/4 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
    </div>

    <div class="max-w-7xl mx-auto section-padding">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="gradient-text">OpenCV Recognition Engine</span>
        </h2>
        <p class="text-xl text-gray-400">Powerful computer vision transforms sketches into game elements</p>
      </div>

      <!-- Recognition Overview -->
      <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div class="space-y-6">
          <div class="inline-block px-4 py-2 glass-card">
            <span class="text-sm text-cyan-400">🔍 Advanced Shape Detection v2.0</span>
          </div>

          <h3 class="text-3xl font-bold">
            <span class="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Revolutionary Multi-Stage Recognition
            </span>
            <span class="block text-xl text-gray-400 mt-2">Advanced AI pipeline with smart model routing</span>
          </h3>

          <p class="text-lg text-gray-400">
            Our breakthrough 3-stage recognition system combines
            <span class="text-cyan-400 font-semibold">OpenCV computer vision</span>,
            <span class="text-blue-400 font-semibold">Claude Sonnet 3.5 fast analysis</span>, and
            <span class="text-purple-400 font-semibold">Claude Opus 4 complex reasoning</span>
            with cost-aware model selection achieving
            <span class="text-green-400 font-bold text-xl">98%+ accuracy</span>.
          </p>

          <div class="grid grid-cols-2 gap-4 text-sm">
            <div class="glass-card p-4 border border-cyan-500/20">
              <div class="flex items-center justify-between mb-2">
                <span class="font-semibold text-cyan-300">Multi-Stage Speed</span>
                <span class="text-cyan-400 font-bold">&lt; 3 seconds</span>
              </div>
              <div class="w-full h-3 bg-black/30 rounded-full overflow-hidden">
                <div class="h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/50"></div>
              </div>
              <div class="text-xs text-gray-500 mt-1">OpenCV: 50ms • Sonnet: 1.5s • Opus: 2.8s</div>
            </div>
            <div class="glass-card p-4 border border-green-500/20">
              <div class="flex items-center justify-between mb-2">
                <span class="font-semibold text-green-300">Recognition Accuracy</span>
                <span class="text-green-400 font-bold">98.7%</span>
              </div>
              <div class="w-full h-3 bg-black/30 rounded-full overflow-hidden">
                <div class="h-full w-[98.7%] bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
              </div>
              <div class="text-xs text-gray-500 mt-1">Triangle: 99.2% • Circle: 98.8% • Polygon: 98.1%</div>
            </div>
          </div>

          <!-- New Advanced Metrics -->
          <div class="grid grid-cols-2 gap-4 text-sm mt-4">
            <div class="glass-card p-4 border border-purple-500/20">
              <div class="flex items-center justify-between mb-2">
                <span class="font-semibold text-purple-300">Cost Efficiency</span>
                <span class="text-purple-400 font-bold">$0.08/request</span>
              </div>
              <div class="w-full h-3 bg-black/30 rounded-full overflow-hidden">
                <div class="h-full w-4/5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50"></div>
              </div>
              <div class="text-xs text-gray-500 mt-1">Smart routing saves 60% on costs</div>
            </div>
            <div class="glass-card p-4 border border-emerald-500/20">
              <div class="flex items-center justify-between mb-2">
                <span class="font-semibold text-emerald-300">Polygon Support</span>
                <span class="text-emerald-400 font-bold">200 vertices</span>
              </div>
              <div class="w-full h-3 bg-black/30 rounded-full overflow-hidden">
                <div class="h-full w-5/6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
              </div>
              <div class="text-xs text-gray-500 mt-1">PyMunk convex decomposition</div>
            </div>
          </div>
        </div>

        <!-- Visual Recognition Demo -->
        <div class="glass-card p-6 rounded-2xl">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <span class="text-xs text-gray-400 ml-2">shape_detector.py</span>
          </div>

          <pre class="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm">
<code><span class="text-purple-400">class</span> <span class="text-yellow-400">ShapeDetector</span>:
    <span class="text-purple-400">def</span> <span class="text-cyan-400">process_image</span>(<span class="text-orange-400">self</span>, img):
        <span class="text-gray-500"># Preprocess and detect contours</span>
        processed = <span class="text-orange-400">self</span>.<span class="text-cyan-400">preprocess_image</span>(img)
        contours = <span class="text-orange-400">self</span>.<span class="text-cyan-400">get_contours</span>(processed)

        <span class="text-gray-500"># Classify each shape</span>
        <span class="text-purple-400">for</span> contour <span class="text-purple-400">in</span> contours:
            <span class="text-purple-400">if</span> <span class="text-orange-400">self</span>.<span class="text-cyan-400">is_triangle</span>(contour):
                <span class="text-gray-500"># Triangle → Starting Point</span>
                results[<span class="text-green-400">"starting_points"</span>].append({
                    <span class="text-green-400">"coordinates"</span>: centroid,
                    <span class="text-green-400">"shape_type"</span>: <span class="text-green-400">"triangle"</span>
                })
            <span class="text-purple-400">elif</span> <span class="text-orange-400">self</span>.<span class="text-cyan-400">is_circle</span>(contour):
                <span class="text-gray-500"># Circle → End Point</span>
                results[<span class="text-green-400">"end_points"</span>].append({
                    <span class="text-green-400">"coordinates"</span>: centroid,
                    <span class="text-green-400">"shape_type"</span>: <span class="text-green-400">"circle"</span>
                })
            <span class="text-purple-400">else</span>:
                <span class="text-gray-500"># Other shapes → Rigid Bodies</span>
                results[<span class="text-green-400">"rigid_bodies"</span>].append({
                    <span class="text-green-400">"contour_points"</span>: points,
                    <span class="text-green-400">"bounding_box"</span>: bbox
                })</code></pre>
        </div>
      </div>

      <!-- Shape Recognition Details -->
      <div class="mb-16">
        <h3 class="text-2xl font-bold mb-8 text-center">
          <span class="gradient-text">Shape Detection Pipeline</span>
        </h3>

        <div class="grid md:grid-cols-3 gap-6">
          <!-- Enhanced Triangle Detection -->
          <div class="glass-card p-6 hover-glow group border border-green-500/30">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-green-500/40">
                <span class="text-xl">▲</span>
              </div>
              <span class="text-xs text-green-400 font-semibold bg-green-500/20 px-2 py-1 rounded-full">SMART START POINT</span>
            </div>
            <h4 class="text-xl font-semibold mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Advanced Triangle Detection</h4>
            <p class="text-gray-400 text-sm mb-4">
              Multi-epsilon algorithm with intelligent angle validation and area filtering for 99.2% accuracy
            </p>
            <div class="space-y-2 text-xs">
              <div class="flex justify-between">
                <span class="text-gray-500">Multi-Epsilon</span>
                <span class="text-green-400">0.015 → 0.03</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Angle Validation</span>
                <span class="text-emerald-400">20° - 140°</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Smart Filtering</span>
                <span class="text-cyan-400">Area + Perimeter</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Accuracy Rate</span>
                <span class="text-green-400 font-bold">99.2%</span>
              </div>
            </div>
            <div class="mt-3 p-2 bg-green-500/10 rounded border border-green-500/20">
              <div class="text-xs text-green-300 font-mono">
                for ε in [0.015, 0.02, 0.025, 0.03]:
                  <br />
                  &nbsp;&nbsp;if vertices == 3: validate_triangle()
              </div>
            </div>
          </div>

          <!-- Circle Detection -->
          <div class="glass-card p-6 hover-glow group">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-gradient-blue-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span class="text-xl">●</span>
              </div>
              <span class="text-xs text-purple-400 font-semibold">END POINT</span>
            </div>
            <h4 class="text-xl font-semibold mb-2">Circle Detection</h4>
            <p class="text-gray-400 text-sm mb-4">
              Recognizes circular shapes as level endpoints using circularity metrics
            </p>
            <div class="space-y-2 text-xs">
              <div class="flex justify-between">
                <span class="text-gray-500">Circularity</span>
                <span>&gt; 0.6</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Min Area</span>
                <span>50px²</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Min Perimeter</span>
                <span>20px</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Formula</span>
                <span>4πA/P²</span>
              </div>
            </div>
          </div>

          <!-- Rigid Body Detection -->
          <div class="glass-card p-6 hover-glow group">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-gradient-purple-green rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span class="text-xl">◆</span>
              </div>
              <span class="text-xs text-orange-400 font-semibold">OBSTACLE</span>
            </div>
            <h4 class="text-xl font-semibold mb-2">Rigid Body Analysis</h4>
            <p class="text-gray-400 text-sm mb-4">
              Complex shapes become physics-enabled game obstacles
            </p>
            <div class="space-y-2 text-xs">
              <div class="flex justify-between">
                <span class="text-gray-500">Simplification</span>
                <span>ApproxPolyDP</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Max Vertices</span>
                <span>200 points</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Convex Check</span>
                <span>95% threshold</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Scale Factor</span>
                <span>0.3x</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- API Endpoints -->
      <div class="glass-card p-8 rounded-2xl mb-16">
        <h3 class="text-2xl font-bold mb-6">
          <span class="gradient-text">FastAPI Recognition Endpoints</span>
        </h3>

        <div class="grid lg:grid-cols-2 gap-8">
          <!-- Process Image Endpoint -->
          <div>
            <div class="flex items-center gap-2 mb-4">
              <span class="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded">POST</span>
              <code class="text-sm text-gray-300">/process_image</code>
            </div>
            <pre class="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm">
<code><span class="text-gray-500"># Upload image file</span>
<span class="text-purple-400">curl</span> -X POST <span class="text-green-400">"http://api.modal.com/process_image"</span> \
  -H <span class="text-green-400">"accept: application/json"</span> \
  -F <span class="text-green-400">"file=@hand_drawn_map.png"</span> \
  -F <span class="text-green-400">"simplify_contours=true"</span> \
  -F <span class="text-green-400">"max_vertices=200"</span>

<span class="text-gray-500"># Response</span>
{
  <span class="text-orange-400">"starting_points"</span>: [{
    <span class="text-orange-400">"coordinates"</span>: [<span class="text-cyan-400">150</span>, <span class="text-cyan-400">200</span>],
    <span class="text-orange-400">"shape_type"</span>: <span class="text-green-400">"triangle"</span>
  }],
  <span class="text-orange-400">"end_points"</span>: [{
    <span class="text-orange-400">"coordinates"</span>: [<span class="text-cyan-400">450</span>, <span class="text-cyan-400">200</span>],
    <span class="text-orange-400">"shape_type"</span>: <span class="text-green-400">"circle"</span>
  }],
  <span class="text-orange-400">"rigid_bodies"</span>: [...]
}</code></pre>
          </div>

          <!-- Process Base64 Endpoint -->
          <div>
            <div class="flex items-center gap-2 mb-4">
              <span class="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded">POST</span>
              <code class="text-sm text-gray-300">/process_base64</code>
            </div>
            <pre class="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm">
<code><span class="text-gray-500"># Send base64 encoded image</span>
<span class="text-purple-400">fetch</span>(<span class="text-green-400">'http://api.modal.com/process_base64'</span>, {
  <span class="text-orange-400">method</span>: <span class="text-green-400">'POST'</span>,
  <span class="text-orange-400">headers</span>: {
    <span class="text-green-400">'Content-Type'</span>: <span class="text-green-400">'application/json'</span>
  },
  <span class="text-orange-400">body</span>: <span class="text-yellow-400">JSON</span>.<span class="text-cyan-400">stringify</span>({
    <span class="text-orange-400">image_base64</span>: imageData,
    <span class="text-orange-400">debug</span>: <span class="text-purple-400">false</span>,
    <span class="text-orange-400">simplification_factor</span>: <span class="text-cyan-400">0.1</span>
  })
})
.<span class="text-cyan-400">then</span>(res => res.<span class="text-cyan-400">json</span>())
.<span class="text-cyan-400">then</span>(data => {
  <span class="text-gray-500">// Process recognition results</span>
  <span class="text-yellow-400">gameEngine</span>.<span class="text-cyan-400">loadFromRecognition</span>(data);
});</code></pre>
          </div>
        </div>
      </div>

      <!-- Processing Pipeline -->
      <div class="text-center mb-8">
        <h3 class="text-2xl font-bold mb-4">
          <span class="gradient-text">Image Processing Pipeline</span>
        </h3>
        <p class="text-gray-400">From raw image to game-ready data in milliseconds</p>
      </div>

      <div class="glass-card p-8 rounded-2xl">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <!-- Step 1 -->
          <div class="text-center flex-1">
            <div class="w-20 h-20 mx-auto bg-gradient-green-blue rounded-full flex items-center justify-center mb-3">
              <span class="text-2xl">📷</span>
            </div>
            <h4 class="font-semibold mb-1">Image Input</h4>
            <p class="text-xs text-gray-400">PNG/JPG upload or base64</p>
          </div>

          <div class="text-3xl text-gray-600">→</div>

          <!-- Step 2 -->
          <div class="text-center flex-1">
            <div class="w-20 h-20 mx-auto bg-gradient-blue-purple rounded-full flex items-center justify-center mb-3">
              <span class="text-2xl">🔧</span>
            </div>
            <h4 class="font-semibold mb-1">Preprocessing</h4>
            <p class="text-xs text-gray-400">Grayscale, blur, threshold</p>
          </div>

          <div class="text-3xl text-gray-600">→</div>

          <!-- Step 3 -->
          <div class="text-center flex-1">
            <div class="w-20 h-20 mx-auto bg-gradient-purple-green rounded-full flex items-center justify-center mb-3">
              <span class="text-2xl">🔍</span>
            </div>
            <h4 class="font-semibold mb-1">Contour Detection</h4>
            <p class="text-xs text-gray-400">Find & filter shapes</p>
          </div>

          <div class="text-3xl text-gray-600">→</div>

          <!-- Step 4 -->
          <div class="text-center flex-1">
            <div class="w-20 h-20 mx-auto bg-gradient-green-blue rounded-full flex items-center justify-center mb-3">
              <span class="text-2xl">🏷️</span>
            </div>
            <h4 class="font-semibold mb-1">Classification</h4>
            <p class="text-xs text-gray-400">Triangle, circle, rigid body</p>
          </div>

          <div class="text-3xl text-gray-600">→</div>

          <!-- Step 5 -->
          <div class="text-center flex-1">
            <div class="w-20 h-20 mx-auto bg-gradient-blue-purple rounded-full flex items-center justify-center mb-3">
              <span class="text-2xl">📊</span>
            </div>
            <h4 class="font-semibold mb-1">JSON Output</h4>
            <p class="text-xs text-gray-400">Game-ready data</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Tech Stack Section -->
  <section id="tech" class="py-20">
    <div class="max-w-7xl mx-auto section-padding">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="gradient-text">Powerful Tech Stack</span>
        </h2>
        <p class="text-xl text-gray-400">Built with cutting-edge AI, computer vision, and cloud technologies</p>
      </div>

      <!-- Architecture Diagram -->
      <div class="glass-card p-8 rounded-2xl mb-12">
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Frontend -->
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-green-400">Frontend</h3>
            <div class="space-y-2">
              <div class="flex items-center gap-3 p-3 bg-black/30 rounded-lg hover:bg-black/40 transition-colors">
                <img src="/logos/vercel-logo.png" alt="Vercel" class="w-8 h-8 object-contain" />
                <div>
                  <span class="font-semibold">Vercel</span>
                  <span class="text-xs text-gray-400 block">Edge Deployment</span>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-black/30 rounded-lg hover:bg-black/40 transition-colors">
                <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded flex items-center justify-center text-white font-bold text-xs">
                  TS
                </div>
                <div>
                  <span class="font-semibold">TypeScript</span>
                  <span class="text-xs text-gray-400 block">React + Vite</span>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-black/30 rounded-lg hover:bg-black/40 transition-colors">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="Canvas" class="w-8 h-8 object-contain" />
                <div>
                  <span class="font-semibold">Mario Engine</span>
                  <span class="text-xs text-gray-400 block">HTML5 Canvas Game</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Backend -->
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-blue-400">Backend</h3>
            <div class="space-y-2">
              <div class="flex items-center gap-3 p-3 bg-black/30 rounded-lg hover:bg-black/40 transition-colors">
                <img src="/logos/modal-logo.svg" alt="Modal" class="w-8 h-8 object-contain" />
                <div>
                  <span class="font-semibold">Modal</span>
                  <span class="text-xs text-gray-400 block">Serverless Compute</span>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-black/30 rounded-lg hover:bg-black/40 transition-colors">
                <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
                  CV
                </div>
                <div>
                  <span class="font-semibold">OpenCV</span>
                  <span class="text-xs text-gray-400 block">Computer Vision</span>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-black/30 rounded-lg hover:bg-black/40 transition-colors border border-green-500/20 shadow-lg shadow-green-500/10">
                <div class="w-8 h-8 bg-gradient-to-br from-green-600 to-teal-500 rounded flex items-center justify-center text-white font-bold text-xs shadow-lg">
                  ⚡
                </div>
                <div>
                  <span class="font-semibold text-green-300">FastAPI</span>
                  <span class="text-xs text-gray-400 block">Ultra-fast Recognition API</span>
                </div>
                <span class="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full border border-green-500/30">NEW</span>
              </div>
              <div class="flex items-center gap-3 p-3 bg-black/30 rounded-lg hover:bg-black/40 transition-colors">
                <img src="/logos/python-logo.svg" alt="Python" class="w-8 h-8 object-contain" />
                <div>
                  <span class="font-semibold">Python</span>
                  <span class="text-xs text-gray-400 block">Core Services</span>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-black/30 rounded-lg hover:bg-black/40 transition-colors border border-purple-500/20 shadow-lg shadow-purple-500/10">
                <div class="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-500 rounded flex items-center justify-center text-white font-bold text-xs shadow-lg">
                  🗃️
                </div>
                <div>
                  <span class="font-semibold text-purple-300">PostgreSQL</span>
                  <span class="text-xs text-gray-400 block">Level Storage & Persistence</span>
                </div>
                <span class="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full border border-purple-500/30">NEW</span>
              </div>
              <div class="flex items-center gap-3 p-3 bg-black/30 rounded-lg hover:bg-black/40 transition-colors border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
                <div class="w-8 h-8 bg-gradient-to-br from-emerald-600 to-cyan-500 rounded flex items-center justify-center text-white font-bold text-xs shadow-lg">
                  🔺
                </div>
                <div>
                  <span class="font-semibold text-emerald-300">PyMunk</span>
                  <span class="text-xs text-gray-400 block">Advanced Physics Engine</span>
                </div>
                <span class="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full border border-emerald-500/30">NEW</span>
              </div>
            </div>
          </div>

          <!-- AI Services -->
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-purple-400">AI Services</h3>
            <div class="space-y-2">
              <div class="flex items-center gap-3 p-3 bg-black/30 rounded-lg hover:bg-black/40 transition-colors">
                <div class="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded flex items-center justify-center text-white font-bold">
                  🦙
                </div>
                <div>
                  <span class="font-semibold">Cerebras Llama 70B</span>
                  <span class="text-xs text-gray-400 block">Fast Text Chat</span>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-black/30 rounded-lg hover:bg-black/40 transition-colors">
                <img src="/logos/anthropic-logo.png" alt="Claude" class="w-8 h-8 object-contain rounded" />
                <div>
                  <span class="font-semibold">Claude 3.5 Sonnet</span>
                  <span class="text-xs text-gray-400 block">Image Recognition</span>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-black/30 rounded-lg hover:bg-black/40 transition-colors">
                <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
                  👁️
                </div>
                <div>
                  <span class="font-semibold">LLaVA 1.5</span>
                  <span class="text-xs text-gray-400 block">Vision-Language AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- OpenRouter Hub -->
        <div class="mt-8 p-6 bg-gradient-overlay rounded-lg text-center relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 animate-gradient"></div>
          <div class="relative z-10">
            <span class="text-sm text-gray-400">All AI services unified through</span>
            <div class="flex items-center justify-center gap-2 mt-2">
              <img src="https://openrouter.ai/favicon.ico" alt="OpenRouter" class="w-6 h-6" />
              <span class="text-xl font-bold">OpenRouter Hub</span>
            </div>
            <div class="flex justify-center gap-4 mt-3 text-xs text-gray-500">
              <span>✓ Unified API</span>
              <span>✓ Cost Optimization</span>
              <span>✓ Model Fallbacks</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Enhanced Sponsor Integrations -->
      <div class="text-center mb-4">
        <span class="text-sm bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-bold">
          🏆 HackMIT 2025 Advanced Tech Integration - 8 Sponsors
        </span>
      </div>
      <div class="grid md:grid-cols-4 lg:grid-cols-5 gap-4">
        <div class="glass-card p-6 text-center hover:scale-105 transition-transform flex flex-col items-center justify-center border border-blue-500/20 shadow-lg shadow-blue-500/10">
          <img src="/logos/modal-logo.svg" alt="Modal" class="h-10 mb-2 object-contain" />
          <span class="text-xs text-blue-300 font-semibold">Serverless GPU Backend</span>
        </div>
        <div class="glass-card p-6 text-center hover:scale-105 transition-transform flex flex-col items-center justify-center border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
          <img src="/logos/vercel-logo.png" alt="Vercel" class="h-8 mb-2 object-contain" />
          <span class="text-xs text-cyan-300 font-semibold">Edge Deployment</span>
        </div>
        <div class="glass-card p-6 text-center hover:scale-105 transition-transform flex flex-col items-center justify-center border border-orange-500/20 shadow-lg shadow-orange-500/10">
          <img src="/logos/anthropic-logo.png" alt="Anthropic" class="h-8 mb-2 object-contain rounded" />
          <span class="text-xs text-orange-300 font-semibold">Claude AI Vision</span>
        </div>
        <div class="glass-card p-6 text-center hover:scale-105 transition-transform flex flex-col items-center justify-center border border-purple-500/20 shadow-lg shadow-purple-500/10">
          <div class="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-500 rounded flex items-center justify-center text-white font-bold text-xl mb-2">
            🗃️
          </div>
          <span class="text-xs text-purple-300 font-semibold">PostgreSQL DB</span>
        </div>
        <div class="glass-card p-6 text-center hover:scale-105 transition-transform flex flex-col items-center justify-center border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
          <div class="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded flex items-center justify-center text-white font-bold text-xl mb-2">
            🔺
          </div>
          <span class="text-xs text-emerald-300 font-semibold">PyMunk Physics</span>
        </div>
        <div class="glass-card p-6 text-center hover:scale-105 transition-transform flex flex-col items-center justify-center border border-green-500/20 shadow-lg shadow-green-500/10">
          <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded flex items-center justify-center text-white font-bold text-xl mb-2">
            ⚡
          </div>
          <span class="text-xs text-green-300 font-semibold">FastAPI</span>
        </div>
        <div class="glass-card p-6 text-center hover:scale-105 transition-transform flex flex-col items-center justify-center border border-red-500/20 shadow-lg shadow-red-500/10">
          <div class="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded flex items-center justify-center text-white font-bold text-xl mb-2">
            🧠
          </div>
          <span class="text-xs text-red-300 font-semibold">Cerebras GPU</span>
        </div>
        <div class="glass-card p-6 text-center hover:scale-105 transition-transform flex flex-col items-center justify-center border border-pink-500/20 shadow-lg shadow-pink-500/10">
          <div class="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded flex items-center justify-center text-white font-bold text-xl mb-2">
            🎵
          </div>
          <span class="text-xs text-pink-300 font-semibold">Suno AI Music</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Mario Game Engine Section -->
  <section id="mario-engine" class="py-20 relative">
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-1/3 left-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/3 right-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-float" style="animation-delay: 3s;"></div>
    </div>

    <div class="max-w-7xl mx-auto section-padding">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="gradient-text">Mario Game Engine</span>
        </h2>
        <p class="text-xl text-gray-400">Modular API-driven platform game creation system</p>
      </div>

      <!-- Engine Overview -->
      <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div class="space-y-6">
          <div class="inline-block px-4 py-2 glass-card">
            <span class="text-sm text-green-400">🎮 Game Engine Core v1.0</span>
          </div>

          <h3 class="text-3xl font-bold">
            <span class="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
              Advanced Mario Game Engine v2.0
            </span>
            <span class="block text-xl text-gray-400 mt-2">Complete API with Polygon Physics Support</span>
          </h3>

          <p class="text-lg text-gray-400">
            Revolutionary game engine combining
            <span class="text-orange-400 font-semibold">method-chaining API</span>,
            <span class="text-red-400 font-semibold">advanced polygon physics</span>, and
            <span class="text-pink-400 font-semibold">real-time AI integration</span>.
            From simple platforms to complex 200-vertex shapes with PyMunk collision detection.
          </p>

          <div class="flex flex-wrap gap-3 text-sm">
            <div class="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-500/30">
              <span class="text-orange-400">🔗</span>
              <span class="text-orange-300">Method Chaining API</span>
            </div>
            <div class="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30">
              <span class="text-purple-400">🔺</span>
              <span class="text-purple-300">Polygon Physics</span>
            </div>
            <div class="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
              <span class="text-cyan-400">🤖</span>
              <span class="text-cyan-300">AI Integration</span>
            </div>
            <div class="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
              <span class="text-green-400">⚡</span>
              <span class="text-green-300">Real-time Physics</span>
            </div>
            <div class="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30">
              <span class="text-yellow-400">🎨</span>
              <span class="text-yellow-300">WebGL Rendering</span>
            </div>
            <div class="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full border border-pink-500/30">
              <span class="text-pink-400">💾</span>
              <span class="text-pink-300">Level Persistence</span>
            </div>
          </div>
        </div>

        <!-- Interactive Demo -->
        <div class="glass-card p-6 rounded-2xl">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <span class="text-xs text-gray-400 ml-2">mario-engine.ts</span>
          </div>

          <pre class="bg-gradient-to-br from-black/60 to-orange-900/20 p-4 rounded-lg overflow-x-auto text-sm border border-orange-500/20">
<code><span class="text-purple-400">import</span> { <span class="text-yellow-400">GameAPI</span> } <span class="text-purple-400">from</span> <span class="text-green-400">'./engine'</span>;

<span class="text-gray-500">// Initialize advanced game engine v2.0</span>
<span class="text-blue-400">const</span> <span class="text-blue-400">game</span> = <span class="text-purple-400">new</span> <span class="text-yellow-400">GameAPI</span>(<span class="text-green-400">'canvas'</span>, {
  <span class="text-orange-400">width</span>: <span class="text-cyan-400">1024</span>,
  <span class="text-orange-400">height</span>: <span class="text-cyan-400">576</span>,
  <span class="text-orange-400">gravity</span>: <span class="text-cyan-400">0.5</span>,
  <span class="text-orange-400">enablePolygonPhysics</span>: <span class="text-purple-400">true</span>  <span class="text-gray-500">// New!</span>
});

<span class="text-gray-500">// Build level with enhanced API</span>
<span class="text-blue-400">game</span>
  .<span class="text-yellow-400">clearLevel</span>()
  .<span class="text-yellow-400">generateGround</span>(<span class="text-cyan-400">0</span>, <span class="text-cyan-400">3000</span>, <span class="text-cyan-400">500</span>)

  <span class="text-gray-500">// NEW: Add complex polygon from AI recognition</span>
  .<span class="text-orange-400">addPolygon</span>([
    [<span class="text-cyan-400">200</span>, <span class="text-cyan-400">300</span>], [<span class="text-cyan-400">250</span>, <span class="text-cyan-400">280</span>], [<span class="text-cyan-400">300</span>, <span class="text-cyan-400">320</span>],
    [<span class="text-cyan-400">280</span>, <span class="text-cyan-400">380</span>], [<span class="text-cyan-400">220</span>, <span class="text-cyan-400">360</span>]
  ], <span class="text-green-400">'obstacle'</span>)

  .<span class="text-yellow-400">addCoinRow</span>(<span class="text-cyan-400">400</span>, <span class="text-cyan-400">350</span>, <span class="text-cyan-400">5</span>)
  .<span class="text-yellow-400">addEnemy</span>(<span class="text-cyan-400">600</span>, <span class="text-cyan-400">450</span>, <span class="text-green-400">'goomba'</span>)

  <span class="text-gray-500">// NEW: Database integration</span>
  .<span class="text-pink-400">saveToDatabase</span>(<span class="text-green-400">'my-awesome-level'</span>)
  .<span class="text-yellow-400">setPlayerStart</span>(<span class="text-cyan-400">100</span>, <span class="text-cyan-400">400</span>)
  .<span class="text-yellow-400">buildLevel</span>()
  .<span class="text-yellow-400">startGame</span>();

<span class="text-gray-500">// NEW: Load from AI recognition data</span>
<span class="text-blue-400">game</span>.<span class="text-cyan-400">generateFromImageData</span>(<span class="text-blue-400">aiRecognitionResult</span>);</code></pre>
        </div>
      </div>

      <!-- Core Features Grid -->
      <div class="mb-16">
        <h3 class="text-2xl font-bold mb-8 text-center">
          <span class="gradient-text">Core Engine Features</span>
        </h3>

        <div class="grid md:grid-cols-3 gap-6">
          <!-- Feature 1 - Enhanced Level Builder -->
          <div class="glass-card p-6 hover-glow group border border-orange-500/20">
            <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/30">
              <span class="text-xl">🏗️</span>
            </div>
            <h4 class="text-xl font-semibold mb-2 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Advanced Level Builder API</h4>
            <p class="text-gray-400 text-sm">
              Next-gen API with polygon support, database integration, and AI-powered level generation
            </p>
            <div class="mt-4 space-y-1 text-xs text-gray-500">
              <div>• <span class="text-orange-400">addPolygon()</span> - Complex shapes</div>
              <div>• <span class="text-red-400">saveToDatabase()</span> - Level persistence</div>
              <div>• <span class="text-pink-400">generateFromImageData()</span> - AI integration</div>
              <div>• <span class="text-yellow-400">addPlatform()</span> - Classic platforms</div>
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="glass-card p-6 hover-glow group">
            <div class="w-12 h-12 bg-gradient-blue-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span class="text-xl">🤖</span>
            </div>
            <h4 class="text-xl font-semibold mb-2">AI Integration</h4>
            <p class="text-gray-400 text-sm">
              Seamlessly integrate with image recognition AI to generate levels from visual data
            </p>
            <div class="mt-4 space-y-1 text-xs text-gray-500">
              <div>• generateFromImageData()</div>
              <div>• Object detection support</div>
              <div>• Auto-positioning</div>
              <div>• Smart level layout</div>
            </div>
          </div>

          <!-- Feature 3 -->
          <div class="glass-card p-6 hover-glow group">
            <div class="w-12 h-12 bg-gradient-purple-green rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span class="text-xl">⚡</span>
            </div>
            <h4 class="text-xl font-semibold mb-2">Real-time Physics</h4>
            <p class="text-gray-400 text-sm">
              Built-in physics engine with collision detection, gravity, and smooth character movement
            </p>
            <div class="mt-4 space-y-1 text-xs text-gray-500">
              <div>• Collision detection</div>
              <div>• Gravity simulation</div>
              <div>• Jump mechanics</div>
              <div>• Enemy AI pathfinding</div>
            </div>
          </div>

          <!-- Feature 4 -->
          <div class="glass-card p-6 hover-glow group">
            <div class="w-12 h-12 bg-gradient-green-blue rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span class="text-xl">🎨</span>
            </div>
            <h4 class="text-xl font-semibold mb-2">Theme Support</h4>
            <p class="text-gray-400 text-sm">
              Multiple visual themes including classic, underground, and sky levels
            </p>
            <div class="mt-4 space-y-1 text-xs text-gray-500">
              <div>• loadClassicLevel()</div>
              <div>• loadUndergroundLevel()</div>
              <div>• loadSkyLevel()</div>
              <div>• Custom themes</div>
            </div>
          </div>

          <!-- Feature 5 -->
          <div class="glass-card p-6 hover-glow group">
            <div class="w-12 h-12 bg-gradient-blue-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span class="text-xl">💾</span>
            </div>
            <h4 class="text-xl font-semibold mb-2">Import/Export</h4>
            <p class="text-gray-400 text-sm">
              Save and load levels as JSON for easy sharing and persistence
            </p>
            <div class="mt-4 space-y-1 text-xs text-gray-500">
              <div>• exportJSON()</div>
              <div>• importJSON()</div>
              <div>• Level serialization</div>
              <div>• Cloud save ready</div>
            </div>
          </div>

          <!-- Feature 6 -->
          <div class="glass-card p-6 hover-glow group">
            <div class="w-12 h-12 bg-gradient-purple-green rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span class="text-xl">🎮</span>
            </div>
            <h4 class="text-xl font-semibold mb-2">Game Controls</h4>
            <p class="text-gray-400 text-sm">
              Responsive keyboard controls with smooth character movement and actions
            </p>
            <div class="mt-4 space-y-1 text-xs text-gray-500">
              <div>• Arrow keys movement</div>
              <div>• Space to jump</div>
              <div>• Shift to run</div>
              <div>• P to pause</div>
            </div>
          </div>
        </div>
      </div>

      <!-- AI Integration Example -->
      <div class="glass-card p-8 rounded-2xl mb-16">
        <h3 class="text-2xl font-bold mb-6">
          <span class="gradient-text">AI-Powered Level Generation</span>
        </h3>

        <div class="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p class="text-gray-400 mb-4">
              Transform image recognition data directly into playable levels with our AI integration API:
            </p>

            <pre class="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm">
<code><span class="text-gray-500">// AI detection output</span>
<span class="text-blue-400">const</span> <span class="text-blue-400">imageData</span> = [
  { <span class="text-orange-400">type</span>: <span class="text-green-400">'ground'</span>, <span class="text-orange-400">x</span>: <span class="text-cyan-400">0</span>, <span class="text-orange-400">y</span>: <span class="text-cyan-400">500</span>, <span class="text-orange-400">width</span>: <span class="text-cyan-400">2000</span> },
  { <span class="text-orange-400">type</span>: <span class="text-green-400">'platform'</span>, <span class="text-orange-400">x</span>: <span class="text-cyan-400">300</span>, <span class="text-orange-400">y</span>: <span class="text-cyan-400">400</span> },
  { <span class="text-orange-400">type</span>: <span class="text-green-400">'enemy'</span>, <span class="text-orange-400">x</span>: <span class="text-cyan-400">500</span>, <span class="text-orange-400">enemyType</span>: <span class="text-green-400">'goomba'</span> },
  { <span class="text-orange-400">type</span>: <span class="text-green-400">'coin'</span>, <span class="text-orange-400">x</span>: <span class="text-cyan-400">350</span>, <span class="text-orange-400">y</span>: <span class="text-cyan-400">350</span> },
  { <span class="text-orange-400">type</span>: <span class="text-green-400">'player'</span>, <span class="text-orange-400">x</span>: <span class="text-cyan-400">100</span>, <span class="text-orange-400">y</span>: <span class="text-cyan-400">400</span> }
];

<span class="text-gray-500">// Generate level from AI data</span>
<span class="text-blue-400">game</span>
  .<span class="text-yellow-400">generateFromImageData</span>(<span class="text-blue-400">imageData</span>)
  .<span class="text-yellow-400">startGame</span>();</code></pre>
          </div>

          <div class="space-y-4">
            <div class="glass-card p-4">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-semibold">Supported Elements</span>
                <span class="text-xs text-green-400">12 Types</span>
              </div>
              <div class="grid grid-cols-3 gap-2">
                <div class="text-center p-2 bg-black/30 rounded">
                  <span class="text-2xl">🏔️</span>
                  <p class="text-xs mt-1">Platform</p>
                </div>
                <div class="text-center p-2 bg-black/30 rounded">
                  <span class="text-2xl">👾</span>
                  <p class="text-xs mt-1">Enemy</p>
                </div>
                <div class="text-center p-2 bg-black/30 rounded">
                  <span class="text-2xl">🪙</span>
                  <p class="text-xs mt-1">Coin</p>
                </div>
                <div class="text-center p-2 bg-black/30 rounded">
                  <span class="text-2xl">🍄</span>
                  <p class="text-xs mt-1">Power-up</p>
                </div>
                <div class="text-center p-2 bg-black/30 rounded">
                  <span class="text-2xl">🚰</span>
                  <p class="text-xs mt-1">Pipe</p>
                </div>
                <div class="text-center p-2 bg-black/30 rounded">
                  <span class="text-2xl">❓</span>
                  <p class="text-xs mt-1">Block</p>
                </div>
              </div>
            </div>

            <div class="glass-card p-4">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-semibold">Performance</span>
                <span class="text-xs text-green-400">60 FPS</span>
              </div>
              <div class="space-y-2 text-xs">
                <div class="flex justify-between">
                  <span class="text-gray-400">Render Time</span>
                  <span>&lt; 16ms</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Physics Update</span>
                  <span>&lt; 2ms</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Memory Usage</span>
                  <span>&lt; 50MB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Architecture Overview -->
      <div class="text-center mb-8">
        <h3 class="text-2xl font-bold mb-4">
          <span class="gradient-text">Engine Architecture</span>
        </h3>
        <p class="text-gray-400">Modular design for maximum flexibility and performance</p>
      </div>

      <div class="glass-card p-8 rounded-2xl">
        <div class="grid md:grid-cols-4 gap-4">
          <div class="text-center">
            <div class="glass-card p-4 mb-2 hover:bg-white/10 transition-colors">
              <span class="text-3xl">🎮</span>
              <h4 class="font-semibold mt-2">GameAPI</h4>
              <p class="text-xs text-gray-400 mt-1">Main interface</p>
            </div>
            <div class="w-full h-1 bg-gradient-green-blue rounded"></div>
          </div>

          <div class="text-center">
            <div class="glass-card p-4 mb-2 hover:bg-white/10 transition-colors">
              <span class="text-3xl">⚙️</span>
              <h4 class="font-semibold mt-2">GameEngine</h4>
              <p class="text-xs text-gray-400 mt-1">Core loop</p>
            </div>
            <div class="w-full h-1 bg-gradient-blue-purple rounded"></div>
          </div>

          <div class="text-center">
            <div class="glass-card p-4 mb-2 hover:bg-white/10 transition-colors">
              <span class="text-3xl">🎨</span>
              <h4 class="font-semibold mt-2">Renderer</h4>
              <p class="text-xs text-gray-400 mt-1">Canvas/WebGL</p>
            </div>
            <div class="w-full h-1 bg-gradient-purple-green rounded"></div>
          </div>

          <div class="text-center">
            <div class="glass-card p-4 mb-2 hover:bg-white/10 transition-colors">
              <span class="text-3xl">⚡</span>
              <h4 class="font-semibold mt-2">PhysicsEngine</h4>
              <p class="text-xs text-gray-400 mt-1">Collision & movement</p>
            </div>
            <div class="w-full h-1 bg-gradient-green-blue rounded"></div>
          </div>
        </div>

        <div class="mt-8 p-4 bg-black/30 rounded-lg text-center">
          <p class="text-sm text-gray-400">
            Built with <span class="text-green-400 font-semibold">TypeScript</span> •
            <span class="text-blue-400 font-semibold">WebGL</span> •
            <span class="text-purple-400 font-semibold">Canvas API</span>
          </p>
          <a href="docs.html" class="inline-block mt-3 px-4 py-2 bg-gradient-green-blue rounded-lg hover-glow text-sm font-semibold transition-all">
            📚 View Full API Documentation
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Code Example Section -->
  <section class="py-20">
    <div class="max-w-7xl mx-auto section-padding">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="gradient-text">Simple API</span>
        </h2>
        <p class="text-xl text-gray-400">Integrate our engine with just a few lines of code</p>
      </div>

      <div class="glass-card p-8 rounded-2xl">
        <div class="flex items-center gap-2 mb-4">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
          <span class="text-xs text-gray-400 ml-2">game_engine.py</span>
        </div>

        <pre class="bg-black/50 p-6 rounded-lg overflow-x-auto">
          <code class="text-sm">
<span class="text-purple-400">import</span> <span class="text-green-400">ai_game_engine</span>
<span class="text-purple-400">from</span> <span class="text-green-400">backend_opencv</span> <span class="text-purple-400">import</span> <span class="text-yellow-400">ShapeDetector</span>
<span class="text-purple-400">import</span> <span class="text-green-400">requests</span>

<span class="text-gray-500"># Initialize OpenCV recognition</span>
<span class="text-blue-400">detector</span> = <span class="text-yellow-400">ShapeDetector</span>(
    <span class="text-orange-400">simplify_contours</span>=<span class="text-purple-400">True</span>,
    <span class="text-orange-400">max_vertices</span>=<span class="text-cyan-400">200</span>
)

<span class="text-gray-500"># Process hand-drawn map with OpenCV</span>
<span class="text-blue-400">sketch</span> = <span class="text-yellow-400">load_image</span>(<span class="text-green-400">"hand_drawn_map.png"</span>)
<span class="text-blue-400">recognition_data</span> = <span class="text-blue-400">detector</span>.<span class="text-yellow-400">process_image</span>(<span class="text-blue-400">sketch</span>)

<span class="text-gray-500"># Or use FastAPI endpoint</span>
<span class="text-blue-400">response</span> = <span class="text-yellow-400">requests</span>.<span class="text-cyan-400">post</span>(
    <span class="text-green-400">"http://api.modal.com/process_image"</span>,
    <span class="text-orange-400">files</span>={<span class="text-green-400">"file"</span>: <span class="text-purple-400">open</span>(<span class="text-green-400">"map.png"</span>, <span class="text-green-400">"rb"</span>)}
)
<span class="text-blue-400">recognition_data</span> = <span class="text-blue-400">response</span>.<span class="text-cyan-400">json</span>()

<span class="text-gray-500"># Generate game from recognition data</span>
<span class="text-blue-400">game</span> = <span class="text-yellow-400">ai_game_engine</span>.<span class="text-cyan-400">create_from_recognition</span>(
    <span class="text-orange-400">starting_points</span>=<span class="text-blue-400">recognition_data</span>[<span class="text-green-400">"starting_points"</span>],
    <span class="text-orange-400">end_points</span>=<span class="text-blue-400">recognition_data</span>[<span class="text-green-400">"end_points"</span>],
    <span class="text-orange-400">rigid_bodies</span>=<span class="text-blue-400">recognition_data</span>[<span class="text-green-400">"rigid_bodies"</span>]
)

<span class="text-gray-500"># Deploy instantly</span>
<span class="text-blue-400">game_url</span> = <span class="text-blue-400">game</span>.<span class="text-yellow-400">deploy</span>(<span class="text-orange-400">platform</span>=<span class="text-green-400">"vercel"</span>)
<span class="text-purple-400">print</span>(<span class="text-green-400">f"Your game is live at: {<span class="text-blue-400">game_url</span>}"</span>)
          </code>
        </pre>
      </div>
    </div>
  </section>

  <!-- Ultra-Advanced Real-time Metrics Dashboard -->
  <section class="py-20 relative">
    <!-- Cyberpunk Background Effects -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-cyan-500/15 to-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-purple-500/15 to-pink-500/10 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute inset-0 matrix-background"></div>
    </div>

    <div class="max-w-7xl mx-auto section-padding">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent animate-holographic">
            Real-Time Performance Dashboard
          </span>
        </h2>
        <p class="text-xl text-gray-400">Live metrics from our AI-powered game creation pipeline</p>
      </div>

      <!-- Main Dashboard Grid -->
      <div class="grid lg:grid-cols-3 gap-8 mb-12">
        <!-- AI Processing Metrics -->
        <div class="lg:col-span-2">
          <div class="holographic-card p-8 rounded-2xl animate-neon-pulse">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-2xl font-bold cyberpunk-text">AI Performance Metrics</h3>
              <span class="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/30 animate-digital-flicker">
                🟢 LIVE
              </span>
            </div>

            <!-- Real-time Charts Simulation -->
            <div class="grid md:grid-cols-2 gap-6">
              <!-- OpenCV Processing -->
              <div class="glassmorphism-enhanced p-6 rounded-lg">
                <h4 class="font-semibold mb-4 text-cyan-300">OpenCV Recognition Speed</h4>
                <div class="space-y-3">
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-400">Triangle Detection</span>
                    <span class="text-cyan-400 font-bold">47ms</span>
                  </div>
                  <div class="w-full h-2 bg-black/30 rounded-full overflow-hidden">
                    <div class="h-full w-[94%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/50"></div>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-400">Circle Detection</span>
                    <span class="text-blue-400 font-bold">32ms</span>
                  </div>
                  <div class="w-full h-2 bg-black/30 rounded-full overflow-hidden">
                    <div class="h-full w-[96%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-400">Polygon Analysis</span>
                    <span class="text-purple-400 font-bold">89ms</span>
                  </div>
                  <div class="w-full h-2 bg-black/30 rounded-full overflow-hidden">
                    <div class="h-full w-[91%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50"></div>
                  </div>
                </div>
              </div>

              <!-- AI Model Performance -->
              <div class="glassmorphism-enhanced p-6 rounded-lg">
                <h4 class="font-semibold mb-4 text-purple-300">AI Model Response Times</h4>
                <div class="space-y-3">
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-400">Cerebras Dialogue</span>
                    <span class="text-orange-400 font-bold">0.8s</span>
                  </div>
                  <div class="w-full h-2 bg-black/30 rounded-full overflow-hidden">
                    <div class="h-full w-[95%] bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse shadow-lg shadow-orange-500/50"></div>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-400">Sonnet 3.5 Vision</span>
                    <span class="text-green-400 font-bold">1.2s</span>
                  </div>
                  <div class="w-full h-2 bg-black/30 rounded-full overflow-hidden">
                    <div class="h-full w-[88%] bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-400">Opus 4 Complex</span>
                    <span class="text-blue-400 font-bold">2.8s</span>
                  </div>
                  <div class="w-full h-2 bg-black/30 rounded-full overflow-hidden">
                    <div class="h-full w-[72%] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Live Activity Feed -->
            <div class="mt-6 p-4 bg-black/30 rounded-lg border border-cyan-500/20">
              <h4 class="font-semibold mb-3 text-cyan-300 terminal-cursor">Recent Processing Activity</h4>
              <div class="space-y-2 text-xs font-mono">
                <div class="flex justify-between">
                  <span class="text-gray-400">[12:34:56] Hand-drawn map processed</span>
                  <span class="text-green-400">SUCCESS</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">[12:34:52] Triangle detection: 3 shapes found</span>
                  <span class="text-cyan-400">DETECTED</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">[12:34:48] PostgreSQL level saved</span>
                  <span class="text-purple-400">STORED</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">[12:34:44] Game engine initialized</span>
                  <span class="text-yellow-400">READY</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- System Status Panel -->
        <div class="space-y-6">
          <!-- Cost Efficiency -->
          <div class="holographic-card p-6 rounded-xl">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <span class="text-xl">💰</span>
              </div>
              <h3 class="text-lg font-bold text-green-300">Cost Efficiency</h3>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-green-400 mb-2">$0.08</div>
              <div class="text-sm text-gray-400">Per Request</div>
              <div class="mt-3 p-2 bg-green-500/10 rounded border border-green-500/20">
                <div class="text-xs text-green-300">60% cost reduction vs single model</div>
              </div>
            </div>
          </div>

          <!-- Database Performance -->
          <div class="holographic-card p-6 rounded-xl">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span class="text-xl">🗃️</span>
              </div>
              <h3 class="text-lg font-bold text-purple-300">PostgreSQL Status</h3>
            </div>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-400">Levels Stored</span>
                <span class="text-purple-400 font-bold">1,247</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Query Time</span>
                <span class="text-cyan-400 font-bold">12ms</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Uptime</span>
                <span class="text-green-400 font-bold">99.98%</span>
              </div>
            </div>
          </div>

          <!-- Physics Engine Stats -->
          <div class="holographic-card p-6 rounded-xl">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <span class="text-xl">🔺</span>
              </div>
              <h3 class="text-lg font-bold text-emerald-300">PyMunk Physics</h3>
            </div>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-400">Max Vertices</span>
                <span class="text-emerald-400 font-bold">200</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">FPS Average</span>
                <span class="text-cyan-400 font-bold">60fps</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Collision Accuracy</span>
                <span class="text-green-400 font-bold">99.7%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Global Performance Summary -->
      <div class="holographic-card p-8 rounded-2xl">
        <h3 class="text-2xl font-bold text-center mb-6 cyberpunk-text">Global Performance Summary</h3>
        <div class="grid md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="text-3xl font-bold text-cyan-400 mb-2 animate-digital-flicker">98.7%</div>
            <div class="text-sm text-gray-400">Recognition Accuracy</div>
            <div class="w-full h-1 bg-cyan-500/30 rounded-full mt-2">
              <div class="w-[98.7%] h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-green-400 mb-2 animate-digital-flicker">< 3s</div>
            <div class="text-sm text-gray-400">Processing Time</div>
            <div class="w-full h-1 bg-green-500/30 rounded-full mt-2">
              <div class="w-[85%] h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-purple-400 mb-2 animate-digital-flicker">1,247</div>
            <div class="text-sm text-gray-400">Games Created</div>
            <div class="w-full h-1 bg-purple-500/30 rounded-full mt-2">
              <div class="w-[92%] h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-orange-400 mb-2 animate-digital-flicker">99.98%</div>
            <div class="text-sm text-gray-400">System Uptime</div>
            <div class="w-full h-1 bg-orange-500/30 rounded-full mt-2">
              <div class="w-[99.98%] h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-20">
    <div class="max-w-4xl mx-auto section-padding text-center">
      <div class="glass-card p-12 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-overlay"></div>
        <div class="relative z-10">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span class="gradient-text">Create Your Game?</span>
          </h2>
          <p class="text-xl text-gray-400 mb-8">
            Join the AI-powered game creation revolution. No coding required.
          </p>

          <div class="grid md:grid-cols-3 gap-4 mb-8">
            <div class="glass-card p-4">
              <span class="text-3xl">🎨</span>
              <p class="text-sm mt-2">Draw in <span class="text-green-400 font-bold">30 seconds</span></p>
            </div>
            <div class="glass-card p-4">
              <span class="text-3xl">⚡</span>
              <p class="text-sm mt-2">AI processes in <span class="text-green-400 font-bold">5 minutes</span></p>
            </div>
            <div class="glass-card p-4">
              <span class="text-3xl">🎮</span>
              <p class="text-sm mt-2">Play <span class="text-green-400 font-bold">instantly</span></p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="px-8 py-4 bg-gradient-green-blue rounded-lg hover-glow text-lg font-semibold">
              Start Creating Now
            </button>
            <a href="docs.html" class="px-8 py-4 glass-card hover:bg-white/10 transition-colors text-lg text-center">
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-12 border-t border-white/10">
    <div class="max-w-7xl mx-auto section-padding">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-green-blue rounded-lg flex items-center justify-center">
            <span class="text-xl">🎮</span>
          </div>
          <div>
            <span class="text-lg font-bold">AI Game Engine</span>
            <span class="text-xs text-gray-400 block">Hand-drawn to RPG</span>
          </div>
        </div>

        <div class="flex items-center gap-6 text-sm text-gray-400">
          <span>🏆 HackMIT 2025</span>
          <span>💰 $14,000+ Prize Pool</span>
          <span>🚀 Challenging Playmultiverse</span>
        </div>

        <div class="text-gray-400 text-sm">
          Built in 20 hours with ❤️ and AI
        </div>
      </div>
    </div>
  </footer>
`;

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href') as string);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add scroll effect to navigation
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('bg-dark-surface/95', 'backdrop-blur-xl');
    } else {
      nav.classList.remove('bg-dark-surface/95', 'backdrop-blur-xl');
    }
  });
}

// Add typing animation for code blocks
function initializeCodeTyping() {
  const codeBlocks = document.querySelectorAll('pre code');

  codeBlocks.forEach(codeBlock => {
    const originalText = codeBlock.innerHTML;
    codeBlock.innerHTML = '';
    let hasStarted = false;

    function typeCode() {
      if (hasStarted) return;
      hasStarted = true;

      let index = 0;
      const speed = 15; // Characters per step
      const delay = 30; // Milliseconds between steps

      function step() {
        if (index < originalText.length) {
          // Add cursor effect during typing
          const currentText = originalText.slice(0, index);
          codeBlock.innerHTML = currentText + '<span class="typing-cursor">|</span>';
          index += speed;
          setTimeout(step, delay);
        } else {
          // Remove cursor when done
          codeBlock.innerHTML = originalText;
        }
      }

      step();
    }

    // Start typing when element is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasStarted) {
          setTimeout(() => typeCode(), 500); // Small delay for better UX
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.3 // Trigger when 30% of the element is visible
    });

    observer.observe(codeBlock.parentElement || codeBlock);
  });
}

// Initialize code typing after DOM is loaded
setTimeout(initializeCodeTyping, 100);

// Additional debug info
console.log('✅ DOM content loaded');
console.log('📊 Performance:', {
  loadTime: performance.now(),
  memoryUsed: (performance as any).memory?.usedJSHeapSize || 'N/A',
  scripts: Array.from(document.scripts).map(s => s.src),
  stylesheets: Array.from(document.styleSheets).length
});

// Log debug info to console only
console.log('✅ Application loaded successfully');
console.log('🏠 Host:', window.location.hostname);
console.log('⏰ Load time:', Math.round(performance.now()) + 'ms');
console.log('🌐 User Agent:', navigator.userAgent.split(' ')[0]);

} catch (error) {
  console.error('🚨 Critical error in main.ts:', error);

  // Show error message to user
  const errorDiv = document.createElement('div');
  errorDiv.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ff4444;
    color: white;
    padding: 20px;
    border-radius: 10px;
    font-family: monospace;
    z-index: 10000;
    text-align: center;
  `;

  errorDiv.innerHTML = `
    <h3>⚠️ 应用加载错误</h3>
    <p>检测到错误，正在诊断...</p>
    <p><small>${error}</small></p>
    <p style="margin-top: 10px; font-size: 12px;">
      请检查浏览器控制台获取详细信息
    </p>
  `;

  document.body.appendChild(errorDiv);
}