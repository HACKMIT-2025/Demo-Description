import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

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
            <span class="text-xl font-bold">AI Game Engine</span>
            <span class="text-xs text-gray-400 block">HackMIT 2025</span>
          </div>
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <a href="#demo" class="hover:text-green-400 transition-colors">Live Demo</a>
          <a href="#features" class="hover:text-green-400 transition-colors">Features</a>
          <a href="#workflow" class="hover:text-green-400 transition-colors">How It Works</a>
          <a href="#tech" class="hover:text-green-400 transition-colors">Tech Stack</a>
          <button class="px-6 py-2 bg-gradient-green-blue rounded-lg hover-glow font-semibold">
            Try It Now
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Section with Live Demo -->
  <section class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    <!-- Animated Background -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
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
            <span class="gradient-text text-6xl md:text-7xl">Game World</span>
            <span class="block text-3xl md:text-4xl text-gray-300 mt-4">
              AI Transforms It to Playable RPG
            </span>
          </h1>

          <p class="text-xl text-gray-400">
            Transform hand-drawn sketches into fully playable pixel-style RPG games in under
            <span class="text-green-400 font-bold">5 minutes</span> using cutting-edge AI technology.
            No coding required - just draw and play!
          </p>

          <div class="flex items-center gap-4 text-sm">
            <div class="flex items-center gap-2">
              <span class="text-green-400">✓</span>
              <span>Challenging Playmultiverse (YC 2020)</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-green-400">✓</span>
              <span>7 Sponsor Integrations</span>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <button class="px-8 py-4 bg-gradient-green-blue rounded-lg hover-glow text-lg font-semibold">
              Start Drawing 🎨
            </button>
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

            <!-- Demo Visualization -->
            <div class="bg-black/50 rounded-lg p-6 space-y-4">
              <div class="text-center">
                <div class="inline-block p-8 border-2 border-dashed border-gray-600 rounded-lg">
                  <span class="text-6xl">✏️</span>
                  <p class="text-sm text-gray-400 mt-2">Draw your map here</p>
                </div>
              </div>

              <div class="flex items-center justify-center gap-2">
                <div class="flex-1 h-1 bg-gradient-green-blue rounded animate-pulse"></div>
                <span class="text-xs text-gray-400">AI Processing</span>
                <div class="flex-1 h-1 bg-gradient-green-blue rounded animate-pulse"></div>
              </div>

              <div class="grid grid-cols-3 gap-2">
                <div class="aspect-square bg-green-900/30 rounded flex items-center justify-center">
                  <span class="text-2xl">🌲</span>
                </div>
                <div class="aspect-square bg-blue-900/30 rounded flex items-center justify-center">
                  <span class="text-2xl">💧</span>
                </div>
                <div class="aspect-square bg-yellow-900/30 rounded flex items-center justify-center">
                  <span class="text-2xl">🏠</span>
                </div>
                <div class="aspect-square bg-gray-900/30 rounded flex items-center justify-center">
                  <span class="text-2xl">⛰️</span>
                </div>
                <div class="aspect-square bg-purple-900/30 rounded flex items-center justify-center">
                  <span class="text-2xl">🧙</span>
                </div>
                <div class="aspect-square bg-red-900/30 rounded flex items-center justify-center">
                  <span class="text-2xl">🗡️</span>
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
        <p class="text-xl text-gray-400">From sketch to game in real-time</p>
      </div>

      <!-- Three-Step Process -->
      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <!-- Step 1: Draw -->
        <div class="glass-card p-8 relative group hover-glow">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-green-blue rounded-full flex items-center justify-center font-bold">
            1
          </div>
          <div class="text-4xl mb-4">✏️</div>
          <h3 class="text-2xl font-bold mb-2">Draw Your Map</h3>
          <p class="text-gray-400">Sketch your game world on paper or digital canvas</p>
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
          <h3 class="text-2xl font-bold mb-2">AI Recognition</h3>
          <p class="text-gray-400">Our AI identifies elements and generates pixel art</p>
          <div class="mt-4 p-4 bg-black/30 rounded-lg">
            <div class="space-y-2 font-mono text-sm">
              <div class="text-green-400">✓ Detecting terrain...</div>
              <div class="text-green-400">✓ Identifying objects...</div>
              <div class="text-green-400">✓ Generating assets...</div>
              <div class="text-yellow-400 animate-pulse">⚡ Creating game world...</div>
            </div>
          </div>
        </div>

        <!-- Step 3: Play -->
        <div class="glass-card p-8 relative group hover-glow">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-purple-green rounded-full flex items-center justify-center font-bold">
            3
          </div>
          <div class="text-4xl mb-4">🎮</div>
          <h3 class="text-2xl font-bold mb-2">Play Your Game</h3>
          <p class="text-gray-400">Explore your creation as a pixel RPG game</p>
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

          <div class="aspect-video bg-black/50 rounded-lg flex items-center justify-center">
            <div class="text-center space-y-4">
              <div class="text-6xl">🎮</div>
              <p class="text-xl text-gray-400">Interactive Demo Coming Soon</p>
              <button class="px-6 py-3 bg-gradient-green-blue rounded-lg hover-glow">
                Request Early Access
              </button>
            </div>
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
        <!-- Feature 1 -->
        <div class="glass-card p-8 hover-glow group">
          <div class="w-14 h-14 bg-gradient-green-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span class="text-2xl">🧠</span>
          </div>
          <h3 class="text-2xl font-semibold mb-3">Computer Vision Recognition</h3>
          <p class="text-gray-400">
            Advanced OpenCV + Claude integration recognizes hand-drawn elements with
            <span class="text-green-400 font-bold">85%+ accuracy</span>
          </p>
        </div>

        <!-- Feature 2 -->
        <div class="glass-card p-8 hover-glow group">
          <div class="w-14 h-14 bg-gradient-blue-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span class="text-2xl">⚡</span>
          </div>
          <h3 class="text-2xl font-semibold mb-3">Ultra-Fast Generation</h3>
          <p class="text-gray-400">
            Powered by Cerebras for instant dialogue and Gemini for rapid asset generation via OpenRouter
          </p>
        </div>

        <!-- Feature 3 -->
        <div class="glass-card p-8 hover-glow group">
          <div class="w-14 h-14 bg-gradient-purple-green rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span class="text-2xl">🎨</span>
          </div>
          <h3 class="text-2xl font-semibold mb-3">Pixel Art Generation</h3>
          <p class="text-gray-400">
            Automatically converts recognized elements into beautiful retro-style pixel art assets
          </p>
        </div>

        <!-- Feature 4 -->
        <div class="glass-card p-8 hover-glow group">
          <div class="w-14 h-14 bg-gradient-green-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span class="text-2xl">💬</span>
          </div>
          <h3 class="text-2xl font-semibold mb-3">AI Game Assistant</h3>
          <p class="text-gray-400">
            Chat with Cerebras AI for gameplay suggestions, quest ideas, and world-building advice
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

        <!-- Feature 6 -->
        <div class="glass-card p-8 hover-glow group">
          <div class="w-14 h-14 bg-gradient-purple-green rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span class="text-2xl">🚀</span>
          </div>
          <h3 class="text-2xl font-semibold mb-3">Instant Deployment</h3>
          <p class="text-gray-400">
            One-click deployment to Vercel with Modal backend, ready to share in seconds
          </p>
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
        <p class="text-xl text-gray-400">Built with cutting-edge AI and cloud technologies</p>
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
                <img src="/logos/nextjs-logo.svg" alt="Next.js" class="w-8 h-8 object-contain invert" />
                <div>
                  <span class="font-semibold">Next.js</span>
                  <span class="text-xs text-gray-400 block">React Framework</span>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-black/30 rounded-lg hover:bg-black/40 transition-colors">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="Canvas" class="w-8 h-8 object-contain" />
                <div>
                  <span class="font-semibold">Canvas API</span>
                  <span class="text-xs text-gray-400 block">Drawing Interface</span>
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
                <img src="/logos/python-logo.svg" alt="Python" class="w-8 h-8 object-contain" />
                <div>
                  <span class="font-semibold">Python</span>
                  <span class="text-xs text-gray-400 block">API Services</span>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-black/30 rounded-lg hover:bg-black/40 transition-colors">
                <img src="/logos/redis-logo.svg" alt="Redis" class="w-8 h-8 object-contain" />
                <div>
                  <span class="font-semibold">Redis</span>
                  <span class="text-xs text-gray-400 block">Caching Layer</span>
                </div>
              </div>
            </div>
          </div>

          <!-- AI Services -->
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-purple-400">AI Services</h3>
            <div class="space-y-2">
              <div class="flex items-center gap-3 p-3 bg-black/30 rounded-lg hover:bg-black/40 transition-colors">
                <div class="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded flex items-center justify-center text-white font-bold">
                  C
                </div>
                <div>
                  <span class="font-semibold">Cerebras</span>
                  <span class="text-xs text-gray-400 block">Ultra-fast Dialogue</span>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-black/30 rounded-lg hover:bg-black/40 transition-colors">
                <img src="/logos/anthropic-logo.png" alt="Claude" class="w-8 h-8 object-contain rounded" />
                <div>
                  <span class="font-semibold">Claude</span>
                  <span class="text-xs text-gray-400 block">Vision & Logic</span>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-black/30 rounded-lg hover:bg-black/40 transition-colors">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" alt="Gemini" class="w-8 h-8 object-contain" />
                <div>
                  <span class="font-semibold">Gemini</span>
                  <span class="text-xs text-gray-400 block">Image Generation</span>
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

      <!-- Sponsor Integrations -->
      <div class="text-center mb-4">
        <span class="text-sm text-gray-400">🏆 HackMIT 2025 Sponsor Integrations</span>
      </div>
      <div class="grid md:grid-cols-4 lg:grid-cols-5 gap-4">
        <div class="glass-card p-6 text-center hover:scale-105 transition-transform flex flex-col items-center justify-center">
          <img src="/logos/modal-logo.svg" alt="Modal" class="h-10 mb-2 object-contain" />
          <span class="text-xs text-gray-400">Serverless Backend</span>
        </div>
        <div class="glass-card p-6 text-center hover:scale-105 transition-transform flex flex-col items-center justify-center">
          <img src="/logos/vercel-logo.png" alt="Vercel" class="h-8 mb-2 object-contain" />
          <span class="text-xs text-gray-400">Edge Deployment</span>
        </div>
        <div class="glass-card p-6 text-center hover:scale-105 transition-transform flex flex-col items-center justify-center">
          <img src="/logos/anthropic-logo.png" alt="Anthropic" class="h-8 mb-2 object-contain rounded" />
          <span class="text-xs text-gray-400">Claude AI</span>
        </div>
        <div class="glass-card p-6 text-center hover:scale-105 transition-transform flex flex-col items-center justify-center">
          <div class="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded flex items-center justify-center text-white font-bold text-xl mb-2">
            W
          </div>
          <span class="text-xs text-gray-400">AI Development</span>
        </div>
        <div class="glass-card p-6 text-center hover:scale-105 transition-transform flex flex-col items-center justify-center">
          <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded flex items-center justify-center text-white font-bold text-xl mb-2">
            S
          </div>
          <span class="text-xs text-gray-400">AI Music (Suno)</span>
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
<span class="text-purple-400">from</span> <span class="text-green-400">openrouter</span> <span class="text-purple-400">import</span> <span class="text-yellow-400">AIServices</span>

<span class="text-gray-500"># Initialize the engine</span>
<span class="text-blue-400">engine</span> = <span class="text-yellow-400">ai_game_engine</span>.<span class="text-yellow-400">GameEngine</span>(
    <span class="text-orange-400">vision_model</span>=<span class="text-green-400">"claude-3"</span>,
    <span class="text-orange-400">dialogue_model</span>=<span class="text-green-400">"cerebras"</span>,
    <span class="text-orange-400">image_gen</span>=<span class="text-green-400">"gemini"</span>
)

<span class="text-gray-500"># Process hand-drawn map</span>
<span class="text-blue-400">sketch</span> = <span class="text-yellow-400">load_image</span>(<span class="text-green-400">"hand_drawn_map.png"</span>)
<span class="text-blue-400">game_world</span> = <span class="text-blue-400">engine</span>.<span class="text-yellow-400">process_sketch</span>(<span class="text-blue-400">sketch</span>)

<span class="text-gray-500"># Generate playable RPG</span>
<span class="text-blue-400">rpg_game</span> = <span class="text-blue-400">engine</span>.<span class="text-yellow-400">create_game</span>(
    <span class="text-orange-400">world</span>=<span class="text-blue-400">game_world</span>,
    <span class="text-orange-400">style</span>=<span class="text-green-400">"pixel_art"</span>,
    <span class="text-orange-400">music</span>=<span class="text-purple-400">True</span>
)

<span class="text-gray-500"># Deploy instantly</span>
<span class="text-blue-400">game_url</span> = <span class="text-blue-400">rpg_game</span>.<span class="text-yellow-400">deploy</span>(<span class="text-orange-400">platform</span>=<span class="text-green-400">"vercel"</span>)
<span class="text-purple-400">print</span>(<span class="text-green-400">f"Your game is live at: {<span class="text-blue-400">game_url</span>}"</span>)
          </code>
        </pre>
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
            <button class="px-8 py-4 glass-card hover:bg-white/10 transition-colors text-lg">
              View Documentation
            </button>
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

// Add typing animation for code
const codeBlock = document.querySelector('pre code');
if (codeBlock) {
  const originalText = codeBlock.innerHTML;
  codeBlock.innerHTML = '';
  let index = 0;

  function typeCode() {
    if (index < originalText.length) {
      codeBlock.innerHTML = originalText.slice(0, index);
      index += 10;
      setTimeout(typeCode, 10);
    }
  }

  // Start typing when element is in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeCode();
        observer.disconnect();
      }
    });
  });

  observer.observe(codeBlock);
}