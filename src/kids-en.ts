import './style.css';

console.log('🎮 Kids AI Draw-to-Game Creator loading...');

const app = document.querySelector<HTMLDivElement>('#kids-app')!;

try {
  app.innerHTML = `
  <!-- Kids Friendly Navigation Bar -->
  <nav class="fixed top-0 w-full z-50 glass-card rounded-none border-x-0 border-t-0 transition-all duration-300">
    <div class="max-w-7xl mx-auto section-padding py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-gradient-green-blue rounded-xl flex items-center justify-center transform hover:rotate-12 transition-transform">
            <span class="text-2xl animate-bounce">🎨</span>
          </div>
          <div>
            <span class="text-xl font-bold">Kids AI Draw-to-Game</span>
            <span class="text-xs text-green-400 block">✨ Super Fun Magic World</span>
          </div>
        </div>
        <div class="hidden md:flex items-center space-x-4">
          <a href="kids.html" class="hover:text-yellow-400 transition-colors text-sm">🇨🇳 中文版</a>
          <a href="/" class="hover:text-green-400 transition-colors text-sm">🏠 Main Site</a>
          <a href="https://frontend-ui-alpha-one.vercel.app/" target="_blank" class="px-6 py-2 bg-gradient-green-blue rounded-lg hover-glow font-semibold text-lg">
            🚀 Start Creating
          </a>
        </div>
        <!-- Mobile Menu -->
        <div class="md:hidden">
          <button id="mobile-menu-btn" class="p-2 glass-card hover:bg-white/10 transition-colors rounded-lg">
            <span class="text-xl">☰</span>
          </button>
        </div>
      </div>
      <!-- Mobile Menu Content -->
      <div id="mobile-menu" class="md:hidden hidden mt-4 pb-4 border-t border-white/10">
        <div class="flex flex-col space-y-3 mt-4">
          <a href="kids.html" class="px-4 py-2 glass-card hover:bg-white/10 transition-colors rounded-lg text-center">
            🇨🇳 中文版
          </a>
          <a href="/" class="px-4 py-2 glass-card hover:bg-white/10 transition-colors rounded-lg text-center">
            🏠 Main Site
          </a>
          <a href="https://frontend-ui-alpha-one.vercel.app/" target="_blank" class="px-4 py-2 bg-gradient-green-blue rounded-lg hover-glow font-semibold text-center">
            🚀 Start Creating
          </a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Super Welcome Area -->
  <section class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    <!-- Rainbow Floating Background -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-pink-500/30 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-green-500/25 to-blue-500/20 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-yellow-500/15 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>

      <!-- Cute Little Stars -->
      <div class="absolute top-1/4 right-1/4 w-8 h-8 text-yellow-400 animate-bounce" style="animation-delay: 1s;">⭐</div>
      <div class="absolute bottom-1/3 left-1/3 w-6 h-6 text-pink-400 animate-bounce" style="animation-delay: 3s;">💫</div>
      <div class="absolute top-3/4 left-1/4 w-10 h-10 text-purple-400 animate-bounce" style="animation-delay: 0.5s;">🌟</div>
      <div class="absolute top-1/3 left-1/6 w-7 h-7 text-cyan-400 animate-bounce" style="animation-delay: 2.5s;">✨</div>
    </div>

    <div class="max-w-6xl mx-auto section-padding py-16 text-center">
      <!-- Welcome Title -->
      <div class="mb-12">
        <div class="inline-block px-6 py-3 glass-card mb-6 animate-bounce">
          <span class="text-lg text-rainbow">🎉 Welcome to the Magic World!</span>
        </div>

        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span class="block mb-4">
            <span class="text-5xl md:text-7xl lg:text-8xl animate-bounce" style="animation-delay: 0.1s;">🎨</span>
            <span class="gradient-text">Draw It</span>
          </span>
          <span class="block mb-4">
            <span class="text-5xl md:text-7xl lg:text-8xl animate-bounce" style="animation-delay: 0.2s;">🤖</span>
            <span class="text-purple-400">AI Makes Magic</span>
          </span>
          <span class="block">
            <span class="text-5xl md:text-7xl lg:text-8xl animate-bounce" style="animation-delay: 0.3s;">🎮</span>
            <span class="text-green-400">Play the Game</span>
          </span>
        </h1>

        <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Hey kids! Want to turn your drawings into <span class="text-yellow-400 font-bold">real playable Mario games</span>?
          <br>Just <span class="text-pink-400 font-bold">draw a few lines</span>, and AI will help you make <span class="text-green-400 font-bold">super cool games</span>!
        </p>

        <!-- Big Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://frontend-ui-alpha-one.vercel.app/" target="_blank"
             class="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl hover-glow text-xl font-bold text-center transform hover:scale-105 transition-all shadow-lg shadow-pink-500/25">
            🚀 Let's Start Drawing!
          </a>
          <button id="learn-more-btn" class="px-8 py-4 glass-card hover:bg-white/10 transition-colors text-xl font-bold rounded-2xl">
            🤔 How to Play First
          </button>
        </div>
      </div>

      <!-- Quick Preview -->
      <div class="grid md:grid-cols-3 gap-6 mt-16">
        <div class="glass-card p-6 rounded-2xl hover-glow group">
          <div class="text-6xl mb-4 group-hover:scale-110 transition-transform">✏️</div>
          <h3 class="text-xl font-bold mb-2 text-green-400">1. Draw Your Map</h3>
          <p class="text-gray-300">Draw platforms, enemies and treasures</p>
        </div>
        <div class="glass-card p-6 rounded-2xl hover-glow group">
          <div class="text-6xl mb-4 group-hover:scale-110 transition-transform">🪄</div>
          <h3 class="text-xl font-bold mb-2 text-purple-400">2. AI Magic</h3>
          <p class="text-gray-300">AI understands your drawing and turns it into a game</p>
        </div>
        <div class="glass-card p-6 rounded-2xl hover-glow group">
          <div class="text-6xl mb-4 group-hover:scale-110 transition-transform">🎮</div>
          <h3 class="text-xl font-bold mb-2 text-blue-400">3. Start Playing</h3>
          <p class="text-gray-300">Control Mario in your world adventure</p>
        </div>
      </div>
    </div>
  </section>

  <!-- What is AI Draw-to-Game -->
  <section id="what-is-this" class="py-20 relative">
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-1/4 left-10 w-80 h-80 bg-gradient-to-br from-green-500/15 to-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/15 to-pink-500/10 rounded-full blur-3xl animate-float" style="animation-delay: 1s;"></div>
    </div>

    <div class="max-w-6xl mx-auto section-padding">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="gradient-text">What is This Amazing Thing?</span>
        </h2>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto">
          It's like having a super smart robot friend that can understand your drawings and help you make real games!
        </p>
      </div>

      <!-- Story-style Explanation -->
      <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div class="space-y-6">
          <div class="flex items-start gap-4">
            <div class="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-2xl">
              🧠
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-2 text-yellow-400">What is AI?</h3>
              <p class="text-lg text-gray-300">
                AI is like a <span class="text-yellow-400 font-bold">super smart friend</span>!
                It can understand pictures, listen to words, and help you do many things.
                Just like WALL-E the robot - so smart!
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-2xl">
              👁️
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-2 text-pink-400">How Does AI Understand My Drawing?</h3>
              <p class="text-lg text-gray-300">
                AI has <span class="text-pink-400 font-bold">"electronic eyes"</span> that can recognize what you draw!
                Triangle? That's Mario's starting point! Circle? That's the goal!
                Other shapes? Those become platforms and obstacles!
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-2xl">
              🎮
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-2 text-green-400">Why Can It Become a Game?</h3>
              <p class="text-lg text-gray-300">
                AI is like a <span class="text-green-400 font-bold">game designer</span>!
                It knows what Mario needs, how to jump, how to collect coins.
                So it can turn your drawing into a real fun game!
              </p>
            </div>
          </div>
        </div>

        <!-- Cute Illustration Area -->
        <div class="glass-card p-8 rounded-2xl">
          <div class="text-center">
            <div class="text-8xl mb-6 animate-bounce">🤖</div>
            <div class="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-lg p-6 border border-purple-500/30">
              <div class="space-y-4">
                <div class="flex items-center justify-center gap-4">
                  <span class="text-3xl">📝</span>
                  <span class="text-2xl">→</span>
                  <span class="text-3xl animate-spin">🔄</span>
                  <span class="text-2xl">→</span>
                  <span class="text-3xl">🎮</span>
                </div>
                <p class="text-lg text-purple-300 font-bold">
                  Your Drawing → AI Magic → Cool Game!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Three-Step Game Tutorial -->
  <section id="tutorial" class="py-20 relative">
    <div class="max-w-6xl mx-auto section-padding">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="gradient-text">🎯 Three Steps to Become a Game Master!</span>
        </h2>
        <p class="text-xl text-gray-400">Follow these three steps, and you can make your own game!</p>
      </div>

      <!-- Interactive Tutorial Steps -->
      <div class="space-y-8">
        <!-- Step 1: Drawing -->
        <div class="tutorial-step glass-card p-8 rounded-2xl hover-glow cursor-pointer" data-step="1">
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  1
                </div>
                <div>
                  <h3 class="text-3xl font-bold text-green-400">🎨 Start Drawing Your Map</h3>
                  <p class="text-gray-400">As easy as art class!</p>
                </div>
              </div>

              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <span class="text-2xl">📐</span>
                  <div>
                    <h4 class="text-lg font-bold text-green-300">Draw a Triangle △</h4>
                    <p class="text-gray-300">This is Mario's starting point! Better to draw it on the left</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-2xl">⭕</span>
                  <div>
                    <h4 class="text-lg font-bold text-blue-300">Draw a Circle ○</h4>
                    <p class="text-gray-300">This is the goal flag! Draw it on the right</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-2xl">⬛</span>
                  <div>
                    <h4 class="text-lg font-bold text-purple-300">Draw Other Shapes</h4>
                    <p class="text-gray-300">Squares and rectangles become platforms!</p>
                  </div>
                </div>
              </div>

              <div class="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <p class="text-green-300 font-bold">💡 Pro Tip:</p>
                <p class="text-gray-300">Use thick lines so AI can see them clearly!</p>
              </div>
            </div>

            <div class="tutorial-demo bg-gradient-to-br from-green-900/30 to-emerald-900/20 rounded-xl p-6 border border-green-500/30">
              <h4 class="text-lg font-bold text-green-300 mb-4 text-center">Drawing Example</h4>
              <div class="bg-white/10 rounded-lg p-4 aspect-video flex items-center justify-center">
                <div class="relative w-full h-full">
                  <div class="absolute left-4 bottom-8 w-8 h-8 border-2 border-green-400 transform rotate-45 bg-green-400/20"></div>
                  <div class="absolute left-1/3 bottom-16 w-16 h-4 bg-purple-400/30 border border-purple-400"></div>
                  <div class="absolute right-1/3 bottom-12 w-12 h-6 bg-purple-400/30 border border-purple-400"></div>
                  <div class="absolute right-4 bottom-8 w-6 h-6 border-2 border-blue-400 rounded-full bg-blue-400/20"></div>
                  <div class="absolute bottom-2 left-0 right-0 h-2 bg-gray-600"></div>
                </div>
              </div>
              <p class="text-center text-gray-400 text-sm mt-2">Perfect drawing!</p>
            </div>
          </div>
        </div>

        <!-- Step 2: AI Magic -->
        <div class="tutorial-step glass-card p-8 rounded-2xl hover-glow cursor-pointer" data-step="2">
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="tutorial-demo bg-gradient-to-br from-purple-900/30 to-pink-900/20 rounded-xl p-6 border border-purple-500/30">
              <h4 class="text-lg font-bold text-purple-300 mb-4 text-center">AI Magic in Progress...</h4>
              <div class="space-y-3">
                <div class="bg-purple-500/20 rounded-lg p-3 animate-pulse">
                  <div class="flex items-center gap-2">
                    <div class="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
                    <span class="text-sm text-purple-300">Recognizing your drawing...</span>
                  </div>
                </div>
                <div class="bg-purple-500/20 rounded-lg p-3 animate-pulse" style="animation-delay: 0.5s;">
                  <div class="flex items-center gap-2">
                    <div class="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style="animation-delay: 0.5s;"></div>
                    <span class="text-sm text-pink-300">Found triangle starting point!</span>
                  </div>
                </div>
                <div class="bg-purple-500/20 rounded-lg p-3 animate-pulse" style="animation-delay: 1s;">
                  <div class="flex items-center gap-2">
                    <div class="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style="animation-delay: 1s;"></div>
                    <span class="text-sm text-blue-300">Discovered circle goal!</span>
                  </div>
                </div>
                <div class="bg-purple-500/20 rounded-lg p-3 animate-pulse" style="animation-delay: 1.5s;">
                  <div class="flex items-center gap-2">
                    <div class="w-3 h-3 bg-green-400 rounded-full animate-bounce" style="animation-delay: 1.5s;"></div>
                    <span class="text-sm text-green-300">Creating game...</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  2
                </div>
                <div>
                  <h3 class="text-3xl font-bold text-purple-400">🪄 Watch AI Do Magic</h3>
                  <p class="text-gray-400">Just like a magic trick!</p>
                </div>
              </div>

              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <span class="text-2xl">👁️</span>
                  <div>
                    <h4 class="text-lg font-bold text-purple-300">AI Starts Looking</h4>
                    <p class="text-gray-300">Just like you look at picture books, AI is observing carefully</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-2xl">🧠</span>
                  <div>
                    <h4 class="text-lg font-bold text-pink-300">AI Starts Thinking</h4>
                    <p class="text-gray-300">"This triangle should be the start, that circle is the goal..."</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-2xl">⚡</span>
                  <div>
                    <h4 class="text-lg font-bold text-blue-300">AI Starts Creating</h4>
                    <p class="text-gray-300">Turning your drawing into a world where Mario can run and jump!</p>
                  </div>
                </div>
              </div>

              <div class="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                <p class="text-purple-300 font-bold">🤖 AI Says:</p>
                <p class="text-gray-300">"I understand your drawing! Let me make you a super cool game!"</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 3: Playing -->
        <div class="tutorial-step glass-card p-8 rounded-2xl hover-glow cursor-pointer" data-step="3">
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  3
                </div>
                <div>
                  <h3 class="text-3xl font-bold text-blue-400">🎮 Start Your Adventure</h3>
                  <p class="text-gray-400">Your own Mario world!</p>
                </div>
              </div>

              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <span class="text-2xl">⌨️</span>
                  <div>
                    <h4 class="text-lg font-bold text-blue-300">Keyboard Controls</h4>
                    <p class="text-gray-300">Arrow keys to move, spacebar to jump!</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-2xl">📱</span>
                  <div>
                    <h4 class="text-lg font-bold text-cyan-300">Phone Controls</h4>
                    <p class="text-gray-300">Just tap the screen buttons with your finger!</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-2xl">🏆</span>
                  <div>
                    <h4 class="text-lg font-bold text-yellow-300">Collect Coins</h4>
                    <p class="text-gray-300">Jump to collect coins, reach the goal to win!</p>
                  </div>
                </div>
              </div>

              <div class="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <p class="text-blue-300 font-bold">🎮 Game Tips:</p>
                <p class="text-gray-300">Try jumping continuously, Mario can jump higher and farther!</p>
              </div>
            </div>

            <div class="tutorial-demo bg-gradient-to-br from-blue-900/30 to-cyan-900/20 rounded-xl p-6 border border-blue-500/30">
              <h4 class="text-lg font-bold text-blue-300 mb-4 text-center">Game Preview</h4>
              <div class="bg-black/50 rounded-lg p-4 aspect-video flex items-center justify-center relative overflow-hidden">
                <!-- Game Scene Simulation -->
                <div class="relative w-full h-full">
                  <!-- Background -->
                  <div class="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-green-400/20"></div>
                  <!-- Ground -->
                  <div class="absolute bottom-0 left-0 right-0 h-8 bg-green-600"></div>
                  <!-- Platforms -->
                  <div class="absolute left-1/3 bottom-16 w-16 h-4 bg-yellow-600"></div>
                  <div class="absolute right-1/3 bottom-12 w-12 h-6 bg-yellow-600"></div>
                  <!-- Mario -->
                  <div class="absolute left-8 bottom-8 w-8 h-8 bg-red-500 rounded flex items-center justify-center animate-bounce">
                    <span class="text-white text-xs">M</span>
                  </div>
                  <!-- Coin -->
                  <div class="absolute left-1/2 bottom-20 w-4 h-4 bg-yellow-400 rounded-full animate-spin"></div>
                  <!-- Goal Flag -->
                  <div class="absolute right-8 bottom-8 w-2 h-16 bg-gray-400"></div>
                  <div class="absolute right-6 bottom-20 w-8 h-4 bg-green-400"></div>
                </div>
              </div>
              <p class="text-center text-gray-400 text-sm mt-2">This is your game!</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Start Now Button -->
      <div class="text-center mt-16">
        <a href="https://frontend-ui-alpha-one.vercel.app/" target="_blank"
           class="inline-block px-12 py-6 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl hover-glow text-2xl font-bold transform hover:scale-105 transition-all shadow-lg shadow-green-500/25">
          🚀 Start Creating My Game Now!
        </a>
        <p class="text-gray-400 mt-4">Click the button above to start your creative journey!</p>
      </div>
    </div>
  </section>

  <!-- Other Kids' Works Showcase -->
  <section id="showcase" class="py-20 relative">
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-1/4 left-20 w-80 h-80 bg-gradient-to-br from-orange-500/15 to-red-500/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/15 to-pink-500/10 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
    </div>

    <div class="max-w-6xl mx-auto section-padding">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="gradient-text">🌟 See Other Kids' Amazing Works</span>
        </h2>
        <p class="text-xl text-gray-400">They all made their own games with AI! You can too!</p>
      </div>

      <!-- Works Showcase Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="showcase-card glass-card p-6 rounded-2xl hover-glow group">
          <div class="bg-gradient-to-br from-pink-900/50 to-purple-900/50 rounded-lg p-4 mb-4 border border-pink-500/30 aspect-square flex items-center justify-center">
            <div class="text-center">
              <span class="text-4xl mb-2 block">🏰</span>
              <span class="text-lg text-pink-300 font-bold">Lily's Castle Adventure</span>
            </div>
          </div>
          <div class="space-y-2">
            <h3 class="text-lg font-bold text-pink-400">Castle Adventure</h3>
            <p class="text-sm text-gray-300">Lily drew a beautiful castle, Mario needs to cross it to save the princess!</p>
            <div class="flex items-center gap-2">
              <span class="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Difficulty: Easy</span>
              <span class="text-xs text-gray-400">❤️ 128 likes</span>
            </div>
          </div>
        </div>

        <div class="showcase-card glass-card p-6 rounded-2xl hover-glow group">
          <div class="bg-gradient-to-br from-green-900/50 to-blue-900/50 rounded-lg p-4 mb-4 border border-green-500/30 aspect-square flex items-center justify-center">
            <div class="text-center">
              <span class="text-4xl mb-2 block">🌲</span>
              <span class="text-lg text-green-300 font-bold">Mike's Forest Quest</span>
            </div>
          </div>
          <div class="space-y-2">
            <h3 class="text-lg font-bold text-green-400">Mysterious Forest</h3>
            <p class="text-sm text-gray-300">Mike drew a dense forest with lots of trees and animal friends!</p>
            <div class="flex items-center gap-2">
              <span class="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Difficulty: Medium</span>
              <span class="text-xs text-gray-400">❤️ 95 likes</span>
            </div>
          </div>
        </div>

        <div class="showcase-card glass-card p-6 rounded-2xl hover-glow group">
          <div class="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-lg p-4 mb-4 border border-blue-500/30 aspect-square flex items-center justify-center">
            <div class="text-center">
              <span class="text-4xl mb-2 block">🚀</span>
              <span class="text-lg text-blue-300 font-bold">Emma's Space Journey</span>
            </div>
          </div>
          <div class="space-y-2">
            <h3 class="text-lg font-bold text-blue-400">Space Adventure</h3>
            <p class="text-sm text-gray-300">Emma drew spaceships and planets, Mario jumps in space!</p>
            <div class="flex items-center gap-2">
              <span class="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">Difficulty: Hard</span>
              <span class="text-xs text-gray-400">❤️ 156 likes</span>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <div class="inline-block glass-card p-6 rounded-2xl">
          <p class="text-xl text-gray-300 mb-4">
            <span class="text-yellow-400 font-bold">Already 847 kids</span> have made their own games!
          </p>
          <p class="text-lg text-gray-400">Your ideas will be even more awesome! Come try it!</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Super Big Start Button Area -->
  <section class="py-20">
    <div class="max-w-4xl mx-auto section-padding text-center">
      <div class="glass-card p-12 relative overflow-hidden rounded-3xl">
        <!-- Background Animation -->
        <div class="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 animate-gradient"></div>

        <div class="relative z-10">
          <div class="text-6xl md:text-8xl mb-6 animate-bounce">🎨</div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your <span class="gradient-text">Creative Journey</span>?
          </h2>
          <p class="text-xl text-gray-400 mb-8">
            Just <span class="text-green-400 font-bold">30 seconds of drawing</span>,
            AI will help you make your <span class="text-purple-400 font-bold">own game</span>!
          </p>

          <div class="grid md:grid-cols-3 gap-4 mb-8">
            <div class="glass-card p-4 rounded-xl">
              <span class="text-4xl">✏️</span>
              <p class="text-sm mt-2">Draw in <span class="text-green-400 font-bold">30 seconds</span></p>
            </div>
            <div class="glass-card p-4 rounded-xl">
              <span class="text-4xl">🪄</span>
              <p class="text-sm mt-2">AI magic <span class="text-purple-400 font-bold">3 minutes</span></p>
            </div>
            <div class="glass-card p-4 rounded-xl">
              <span class="text-4xl">🎮</span>
              <p class="text-sm mt-2">Start <span class="text-blue-400 font-bold">playing now</span></p>
            </div>
          </div>

          <div class="space-y-4">
            <a href="https://frontend-ui-alpha-one.vercel.app/" target="_blank"
               class="inline-block px-12 py-6 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-2xl hover-glow text-2xl font-bold transform hover:scale-105 transition-all shadow-lg shadow-purple-500/25">
              🚀 Let's Create a Game!
            </a>
            <p class="text-gray-400">Totally FREE! No downloads needed!</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Cute Footer -->
  <footer class="py-12 border-t border-white/10">
    <div class="max-w-6xl mx-auto section-padding">
      <div class="text-center space-y-6">
        <div class="flex justify-center items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-green-blue rounded-lg flex items-center justify-center">
            <span class="text-xl animate-bounce">🎨</span>
          </div>
          <div>
            <span class="text-lg font-bold">Kids AI Draw-to-Game</span>
            <span class="text-xs text-gray-400 block">Let every kid make games</span>
          </div>
        </div>

        <div class="flex justify-center items-center gap-8 text-sm text-gray-400 flex-wrap">
          <span>🏆 HackMIT 2025 Project</span>
          <span>💝 Designed for Kids</span>
          <span>🌈 Safe and Fun</span>
        </div>

        <div class="flex justify-center gap-4">
          <a href="/" class="text-cyan-400 hover:text-cyan-300 transition-colors">
            🏠 Adult Version
          </a>
          <a href="community.html" class="text-purple-400 hover:text-purple-300 transition-colors">
            🌟 See More Works
          </a>
          <a href="kids.html" class="text-yellow-400 hover:text-yellow-300 transition-colors">
            🇨🇳 中文版
          </a>
        </div>

        <div class="text-gray-400 text-sm">
          Made with ❤️ and AI Magic • Let Creativity Fly!
        </div>
      </div>
    </div>
  </footer>
`;

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Learn more button scroll
const learnMoreBtn = document.getElementById('learn-more-btn');
if (learnMoreBtn) {
  learnMoreBtn.addEventListener('click', () => {
    const tutorialSection = document.getElementById('tutorial');
    if (tutorialSection) {
      tutorialSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Tutorial step interaction
const tutorialSteps = document.querySelectorAll('.tutorial-step');
tutorialSteps.forEach((step, index) => {
  step.addEventListener('click', () => {
    // Add click effect
    step.style.transform = 'scale(1.02)';
    setTimeout(() => {
      step.style.transform = 'scale(1)';
    }, 200);

    // Can add more interaction effects
    console.log(`Clicked step ${index + 1}`);
  });
});

// Work card hover effect
const showcaseCards = document.querySelectorAll('.showcase-card');
showcaseCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px) scale(1.02)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});

// Add some cute interaction sounds (optional)
function playClickSound() {
  // Can add sound effects here, but considering kids' user experience, not adding for now
  console.log('🎵 Click sound');
}

// Add click feedback for all buttons
const buttons = document.querySelectorAll('button, a[href]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 100);
    playClickSound();
  });
});

console.log('✨ Kids AI Draw-to-Game page loaded!');
console.log('🎮 Ready to start creating?');

} catch (error) {
  console.error('🚨 Page loading error:', error);

  // Show friendly error message
  const errorDiv = document.createElement('div');
  errorDiv.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(135deg, #ff6b6b, #feca57);
    color: white;
    padding: 30px;
    border-radius: 20px;
    font-family: monospace;
    z-index: 10000;
    text-align: center;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  `;

  errorDiv.innerHTML = `
    <div style="font-size: 3rem; margin-bottom: 1rem;">😅</div>
    <h3 style="margin-bottom: 1rem;">Oops! Something went wrong</h3>
    <p style="margin-bottom: 1rem;">Don't worry, just refresh the page!</p>
    <button onclick="location.reload()" style="
      background: white;
      color: #333;
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
      font-weight: bold;
      cursor: pointer;
    ">🔄 Refresh Page</button>
  `;

  document.body.appendChild(errorDiv);
}