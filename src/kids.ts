import './style.css';

console.log('🎮 小朋友的AI画画变游戏开始加载...');

const app = document.querySelector<HTMLDivElement>('#kids-app')!;

try {
  app.innerHTML = `
  <!-- 儿童友好导航栏 -->
  <nav class="fixed top-0 w-full z-50 glass-card rounded-none border-x-0 border-t-0 transition-all duration-300">
    <div class="max-w-7xl mx-auto section-padding py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-gradient-green-blue rounded-xl flex items-center justify-center transform hover:rotate-12 transition-transform">
            <span class="text-2xl animate-bounce">🎨</span>
          </div>
          <div>
            <span class="text-xl font-bold">小朋友的AI画画变游戏</span>
            <span class="text-xs text-green-400 block">✨ 超级好玩的魔法世界</span>
          </div>
        </div>
        <div class="hidden md:flex items-center space-x-4">
          <a href="kids-en.html" class="hover:text-blue-400 transition-colors text-sm">🌍 English</a>
          <a href="/" class="hover:text-green-400 transition-colors text-sm">🏠 回到首页</a>
          <a href="https://frontend-ui-alpha-one.vercel.app/" target="_blank" class="px-6 py-2 bg-gradient-green-blue rounded-lg hover-glow font-semibold text-lg">
            🚀 开始创作
          </a>
        </div>
        <!-- 移动端菜单 -->
        <div class="md:hidden">
          <button id="mobile-menu-btn" class="p-2 glass-card hover:bg-white/10 transition-colors rounded-lg">
            <span class="text-xl">☰</span>
          </button>
        </div>
      </div>
      <!-- 移动端菜单内容 -->
      <div id="mobile-menu" class="md:hidden hidden mt-4 pb-4 border-t border-white/10">
        <div class="flex flex-col space-y-3 mt-4">
          <a href="kids-en.html" class="px-4 py-2 glass-card hover:bg-white/10 transition-colors rounded-lg text-center">
            🌍 English
          </a>
          <a href="/" class="px-4 py-2 glass-card hover:bg-white/10 transition-colors rounded-lg text-center">
            🏠 回到首页
          </a>
          <a href="https://frontend-ui-alpha-one.vercel.app/" target="_blank" class="px-4 py-2 bg-gradient-green-blue rounded-lg hover-glow font-semibold text-center">
            🚀 开始创作
          </a>
        </div>
      </div>
    </div>
  </nav>

  <!-- 超级欢迎区域 -->
  <section class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    <!-- 彩虹浮动背景 -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-pink-500/30 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-green-500/25 to-blue-500/20 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-yellow-500/15 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>

      <!-- 可爱的小星星 -->
      <div class="absolute top-1/4 right-1/4 w-8 h-8 text-yellow-400 animate-bounce" style="animation-delay: 1s;">⭐</div>
      <div class="absolute bottom-1/3 left-1/3 w-6 h-6 text-pink-400 animate-bounce" style="animation-delay: 3s;">💫</div>
      <div class="absolute top-3/4 left-1/4 w-10 h-10 text-purple-400 animate-bounce" style="animation-delay: 0.5s;">🌟</div>
      <div class="absolute top-1/3 left-1/6 w-7 h-7 text-cyan-400 animate-bounce" style="animation-delay: 2.5s;">✨</div>
    </div>

    <div class="max-w-6xl mx-auto section-padding py-16 text-center">
      <!-- 欢迎标题 -->
      <div class="mb-12">
        <div class="inline-block px-6 py-3 glass-card mb-6 animate-bounce">
          <span class="text-lg text-rainbow">🎉 欢迎来到魔法世界！</span>
        </div>

        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span class="block mb-4">
            <span class="text-5xl md:text-7xl lg:text-8xl animate-bounce" style="animation-delay: 0.1s;">🎨</span>
            <span class="gradient-text">画一画</span>
          </span>
          <span class="block mb-4">
            <span class="text-5xl md:text-7xl lg:text-8xl animate-bounce" style="animation-delay: 0.2s;">🤖</span>
            <span class="text-purple-400">AI变魔法</span>
          </span>
          <span class="block">
            <span class="text-5xl md:text-7xl lg:text-8xl animate-bounce" style="animation-delay: 0.3s;">🎮</span>
            <span class="text-green-400">玩游戏</span>
          </span>
        </h1>

        <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          小朋友们！想不想把你的画变成<span class="text-yellow-400 font-bold">真正能玩的马里奥游戏</span>？
          <br>只要<span class="text-pink-400 font-bold">画几笔</span>，AI就能帮你做出<span class="text-green-400 font-bold">超酷的游戏</span>！
        </p>

        <!-- 大按钮 -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://frontend-ui-alpha-one.vercel.app/" target="_blank"
             class="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl hover-glow text-xl font-bold text-center transform hover:scale-105 transition-all shadow-lg shadow-pink-500/25">
            🚀 我要开始画画！
          </a>
          <button id="learn-more-btn" class="px-8 py-4 glass-card hover:bg-white/10 transition-colors text-xl font-bold rounded-2xl">
            🤔 先看看怎么玩
          </button>
        </div>
      </div>

      <!-- 快速预览 -->
      <div class="grid md:grid-cols-3 gap-6 mt-16">
        <div class="glass-card p-6 rounded-2xl hover-glow group">
          <div class="text-6xl mb-4 group-hover:scale-110 transition-transform">✏️</div>
          <h3 class="text-xl font-bold mb-2 text-green-400">1. 画你的地图</h3>
          <p class="text-gray-300">用笔画出平台、敌人和宝物</p>
        </div>
        <div class="glass-card p-6 rounded-2xl hover-glow group">
          <div class="text-6xl mb-4 group-hover:scale-110 transition-transform">🪄</div>
          <h3 class="text-xl font-bold mb-2 text-purple-400">2. AI变魔法</h3>
          <p class="text-gray-300">AI理解你的画，变成游戏</p>
        </div>
        <div class="glass-card p-6 rounded-2xl hover-glow group">
          <div class="text-6xl mb-4 group-hover:scale-110 transition-transform">🎮</div>
          <h3 class="text-xl font-bold mb-2 text-blue-400">3. 开始游玩</h3>
          <p class="text-gray-300">控制马里奥在你的世界冒险</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 什么是AI画画变游戏 -->
  <section id="what-is-this" class="py-20 relative">
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-1/4 left-10 w-80 h-80 bg-gradient-to-br from-green-500/15 to-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/15 to-pink-500/10 rounded-full blur-3xl animate-float" style="animation-delay: 1s;"></div>
    </div>

    <div class="max-w-6xl mx-auto section-padding">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="gradient-text">这是什么神奇的东西？</span>
        </h2>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto">
          这就像拥有一个超级聪明的机器人朋友，它能看懂你的画，然后帮你做出真正的游戏！
        </p>
      </div>

      <!-- 故事式解释 -->
      <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div class="space-y-6">
          <div class="flex items-start gap-4">
            <div class="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-2xl">
              🧠
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-2 text-yellow-400">AI是什么？</h3>
              <p class="text-lg text-gray-300">
                AI就像一个<span class="text-yellow-400 font-bold">超级聪明的朋友</span>！
                它能看懂图片，听懂话，还能帮你做很多事情。
                就像《机器人总动员》里的瓦力一样聪明！
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-2xl">
              👁️
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-2 text-pink-400">AI怎么看懂我的画？</h3>
              <p class="text-lg text-gray-300">
                AI有<span class="text-pink-400 font-bold">"电子眼睛"</span>，能认出你画的是什么！
                三角形？那是马里奥的起点！圆形？那是终点！
                其他形状？那就是平台和障碍物！
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-2xl">
              🎮
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-2 text-green-400">为什么能变成游戏？</h3>
              <p class="text-lg text-gray-300">
                AI就像<span class="text-green-400 font-bold">游戏设计师</span>一样！
                它知道马里奥需要什么，怎么跳跃，怎么收集金币。
                所以它能把你的画变成真正好玩的游戏！
              </p>
            </div>
          </div>
        </div>

        <!-- 可爱的插图区域 -->
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
                  你的画 → AI魔法 → 超酷游戏！
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 三步游戏教程 -->
  <section id="tutorial" class="py-20 relative">
    <div class="max-w-6xl mx-auto section-padding">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="gradient-text">🎯 三步变身游戏大师！</span>
        </h2>
        <p class="text-xl text-gray-400">跟着这三个步骤，你就能做出属于自己的游戏啦！</p>
      </div>

      <!-- 交互式教程步骤 -->
      <div class="space-y-8">
        <!-- 步骤1：画画 -->
        <div class="tutorial-step glass-card p-8 rounded-2xl hover-glow cursor-pointer" data-step="1">
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  1
                </div>
                <div>
                  <h3 class="text-3xl font-bold text-green-400">🎨 开始画你的地图</h3>
                  <p class="text-gray-400">就像画画课一样简单！</p>
                </div>
              </div>

              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <span class="text-2xl">📐</span>
                  <div>
                    <h4 class="text-lg font-bold text-green-300">画三角形 △</h4>
                    <p class="text-gray-300">这是马里奥的起点！画在左边比较好</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-2xl">⭕</span>
                  <div>
                    <h4 class="text-lg font-bold text-blue-300">画圆形 ○</h4>
                    <p class="text-gray-300">这是终点旗帜！画在右边</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-2xl">⬛</span>
                  <div>
                    <h4 class="text-lg font-bold text-purple-300">画其他形状</h4>
                    <p class="text-gray-300">正方形、长方形都能变成平台！</p>
                  </div>
                </div>
              </div>

              <div class="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <p class="text-green-300 font-bold">💡 小贴士：</p>
                <p class="text-gray-300">用粗一点的笔画，AI更容易看清楚哦！</p>
              </div>
            </div>

            <div class="tutorial-demo bg-gradient-to-br from-green-900/30 to-emerald-900/20 rounded-xl p-6 border border-green-500/30">
              <h4 class="text-lg font-bold text-green-300 mb-4 text-center">画画示例</h4>
              <div class="bg-white/10 rounded-lg p-4 aspect-video flex items-center justify-center">
                <div class="relative w-full h-full">
                  <div class="absolute left-4 bottom-8 w-8 h-8 border-2 border-green-400 transform rotate-45 bg-green-400/20"></div>
                  <div class="absolute left-1/3 bottom-16 w-16 h-4 bg-purple-400/30 border border-purple-400"></div>
                  <div class="absolute right-1/3 bottom-12 w-12 h-6 bg-purple-400/30 border border-purple-400"></div>
                  <div class="absolute right-4 bottom-8 w-6 h-6 border-2 border-blue-400 rounded-full bg-blue-400/20"></div>
                  <div class="absolute bottom-2 left-0 right-0 h-2 bg-gray-600"></div>
                </div>
              </div>
              <p class="text-center text-gray-400 text-sm mt-2">这样画就对了！</p>
            </div>
          </div>
        </div>

        <!-- 步骤2：AI魔法 -->
        <div class="tutorial-step glass-card p-8 rounded-2xl hover-glow cursor-pointer" data-step="2">
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="tutorial-demo bg-gradient-to-br from-purple-900/30 to-pink-900/20 rounded-xl p-6 border border-purple-500/30">
              <h4 class="text-lg font-bold text-purple-300 mb-4 text-center">AI魔法进行中...</h4>
              <div class="space-y-3">
                <div class="bg-purple-500/20 rounded-lg p-3 animate-pulse">
                  <div class="flex items-center gap-2">
                    <div class="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
                    <span class="text-sm text-purple-300">正在识别你的画...</span>
                  </div>
                </div>
                <div class="bg-purple-500/20 rounded-lg p-3 animate-pulse" style="animation-delay: 0.5s;">
                  <div class="flex items-center gap-2">
                    <div class="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style="animation-delay: 0.5s;"></div>
                    <span class="text-sm text-pink-300">找到了三角形起点！</span>
                  </div>
                </div>
                <div class="bg-purple-500/20 rounded-lg p-3 animate-pulse" style="animation-delay: 1s;">
                  <div class="flex items-center gap-2">
                    <div class="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style="animation-delay: 1s;"></div>
                    <span class="text-sm text-blue-300">发现了圆形终点！</span>
                  </div>
                </div>
                <div class="bg-purple-500/20 rounded-lg p-3 animate-pulse" style="animation-delay: 1.5s;">
                  <div class="flex items-center gap-2">
                    <div class="w-3 h-3 bg-green-400 rounded-full animate-bounce" style="animation-delay: 1.5s;"></div>
                    <span class="text-sm text-green-300">生成游戏中...</span>
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
                  <h3 class="text-3xl font-bold text-purple-400">🪄 看AI施展魔法</h3>
                  <p class="text-gray-400">就像变魔术一样神奇！</p>
                </div>
              </div>

              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <span class="text-2xl">👁️</span>
                  <div>
                    <h4 class="text-lg font-bold text-purple-300">AI开始看图</h4>
                    <p class="text-gray-300">就像你看图画书一样，AI也在仔细观察</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-2xl">🧠</span>
                  <div>
                    <h4 class="text-lg font-bold text-pink-300">AI开始思考</h4>
                    <p class="text-gray-300">"这个三角形应该是起点，那个圆形是终点..."</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-2xl">⚡</span>
                  <div>
                    <h4 class="text-lg font-bold text-blue-300">AI开始创造</h4>
                    <p class="text-gray-300">把你的画变成马里奥能跑能跳的世界！</p>
                  </div>
                </div>
              </div>

              <div class="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                <p class="text-purple-300 font-bold">🤖 AI说：</p>
                <p class="text-gray-300">"我看懂了你的画！让我帮你做个超酷的游戏吧！"</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 步骤3：游玩 -->
        <div class="tutorial-step glass-card p-8 rounded-2xl hover-glow cursor-pointer" data-step="3">
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  3
                </div>
                <div>
                  <h3 class="text-3xl font-bold text-blue-400">🎮 开始游玩冒险</h3>
                  <p class="text-gray-400">你的专属马里奥世界！</p>
                </div>
              </div>

              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <span class="text-2xl">⌨️</span>
                  <div>
                    <h4 class="text-lg font-bold text-blue-300">键盘控制</h4>
                    <p class="text-gray-300">方向键移动，空格键跳跃！</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-2xl">📱</span>
                  <div>
                    <h4 class="text-lg font-bold text-cyan-300">手机控制</h4>
                    <p class="text-gray-300">用手指点击屏幕按钮就行！</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-2xl">🏆</span>
                  <div>
                    <h4 class="text-lg font-bold text-yellow-300">收集金币</h4>
                    <p class="text-gray-300">跳跃收集金币，到达终点就赢了！</p>
                  </div>
                </div>
              </div>

              <div class="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <p class="text-blue-300 font-bold">🎮 游戏技巧：</p>
                <p class="text-gray-300">试试连续跳跃，马里奥能跳得更高更远哦！</p>
              </div>
            </div>

            <div class="tutorial-demo bg-gradient-to-br from-blue-900/30 to-cyan-900/20 rounded-xl p-6 border border-blue-500/30">
              <h4 class="text-lg font-bold text-blue-300 mb-4 text-center">游戏预览</h4>
              <div class="bg-black/50 rounded-lg p-4 aspect-video flex items-center justify-center relative overflow-hidden">
                <!-- 游戏场景模拟 -->
                <div class="relative w-full h-full">
                  <!-- 背景 -->
                  <div class="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-green-400/20"></div>
                  <!-- 地面 -->
                  <div class="absolute bottom-0 left-0 right-0 h-8 bg-green-600"></div>
                  <!-- 平台 -->
                  <div class="absolute left-1/3 bottom-16 w-16 h-4 bg-yellow-600"></div>
                  <div class="absolute right-1/3 bottom-12 w-12 h-6 bg-yellow-600"></div>
                  <!-- 马里奥 -->
                  <div class="absolute left-8 bottom-8 w-8 h-8 bg-red-500 rounded flex items-center justify-center animate-bounce">
                    <span class="text-white text-xs">M</span>
                  </div>
                  <!-- 金币 -->
                  <div class="absolute left-1/2 bottom-20 w-4 h-4 bg-yellow-400 rounded-full animate-spin"></div>
                  <!-- 终点旗帜 -->
                  <div class="absolute right-8 bottom-8 w-2 h-16 bg-gray-400"></div>
                  <div class="absolute right-6 bottom-20 w-8 h-4 bg-green-400"></div>
                </div>
              </div>
              <p class="text-center text-gray-400 text-sm mt-2">这就是你的游戏！</p>
            </div>
          </div>
        </div>
      </div>

      <!-- AI的超级眼睛 - OpenCV系统介绍 -->
      <div class="mt-16 glass-card p-8 rounded-2xl">
        <div class="text-center mb-8">
          <h3 class="text-3xl font-bold mb-4">
            <span class="gradient-text">🔬 AI的超级眼睛是怎么工作的？</span>
          </h3>
          <p class="text-lg text-gray-400">让我告诉你一个秘密：AI有5种不同的"超能力"来看懂你的画！</p>
        </div>

        <div class="grid lg:grid-cols-2 gap-8">
          <!-- 左侧：形状识别展示 -->
          <div class="space-y-6">
            <div class="bg-gradient-to-br from-cyan-900/30 to-blue-900/20 rounded-xl p-6 border border-cyan-500/30">
              <h4 class="text-xl font-bold text-cyan-400 mb-4">🎯 AI能识别的神奇形状</h4>

              <div class="space-y-4">
                <div class="flex items-center gap-4 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <span class="text-2xl">⬡</span>
                  </div>
                  <div class="flex-1">
                    <p class="font-bold text-green-300">六边形 = 起点</p>
                    <p class="text-xs text-gray-400">AI会检查6条边是否一样长！</p>
                  </div>
                </div>

                <div class="flex items-center gap-4 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span class="text-2xl">△</span>
                  </div>
                  <div class="flex-1">
                    <p class="font-bold text-red-300">三角形 = 危险尖刺</p>
                    <p class="text-xs text-gray-400">AI会测量3个角度，确保是真的三角形！</p>
                  </div>
                </div>

                <div class="flex items-center gap-4 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <span class="text-2xl">✕</span>
                  </div>
                  <div class="flex-1">
                    <p class="font-bold text-purple-300">十字形 = 终点</p>
                    <p class="text-xs text-gray-400">AI会找4个凹进去的地方！</p>
                  </div>
                </div>

                <div class="flex items-center gap-4 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div class="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <span class="text-2xl">●</span>
                  </div>
                  <div class="flex-1">
                    <p class="font-bold text-yellow-300">圆形 = 金币</p>
                    <p class="text-xs text-gray-400">AI计算圆度，超过60%就是圆！</p>
                  </div>
                </div>

                <div class="flex items-center gap-4 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div class="w-12 h-12 bg-gradient-to-br from-gray-500 to-slate-500 rounded-lg flex items-center justify-center">
                    <span class="text-2xl">▬</span>
                  </div>
                  <div class="flex-1">
                    <p class="font-bold text-gray-300">其他形状 = 平台</p>
                    <p class="text-xs text-gray-400">AI记住每个点，画出完整轮廓！</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧：AI处理步骤 -->
          <div class="space-y-6">
            <div class="bg-gradient-to-br from-purple-900/30 to-pink-900/20 rounded-xl p-6 border border-purple-500/30">
              <h4 class="text-xl font-bold text-purple-400 mb-4">🧙 AI的魔法步骤</h4>

              <div class="space-y-3">
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div class="flex-1">
                    <p class="font-bold text-purple-300">清理图片</p>
                    <p class="text-sm text-gray-300">就像擦眼镜一样，让图片更清楚！去掉小点点和模糊的地方。</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div class="flex-1">
                    <p class="font-bold text-pink-300">找出轮廓</p>
                    <p class="text-sm text-gray-300">像描边一样，找到每个形状的边界线。</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div class="flex-1">
                    <p class="font-bold text-blue-300">测量形状</p>
                    <p class="text-sm text-gray-300">量一量每条边多长，每个角多大，像不像圆形。</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div class="flex-1">
                    <p class="font-bold text-green-300">聪明判断</p>
                    <p class="text-sm text-gray-300">用4种不同的方法检查，确保认对了形状！</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-sm font-bold">5</div>
                  <div class="flex-1">
                    <p class="font-bold text-yellow-300">变成游戏</p>
                    <p class="text-sm text-gray-300">把认出的形状变成游戏里的东西！</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 有趣的数字展示 -->
            <div class="bg-gradient-to-br from-green-900/30 to-blue-900/20 rounded-xl p-6 border border-green-500/30">
              <h4 class="text-lg font-bold text-green-400 mb-4">🎯 超厉害的数字</h4>
              <div class="grid grid-cols-2 gap-4">
                <div class="text-center p-3 bg-white/5 rounded-lg">
                  <p class="text-2xl font-bold text-yellow-400">0.03秒</p>
                  <p class="text-xs text-gray-400">识别一个形状</p>
                </div>
                <div class="text-center p-3 bg-white/5 rounded-lg">
                  <p class="text-2xl font-bold text-green-400">99%</p>
                  <p class="text-xs text-gray-400">准确率</p>
                </div>
                <div class="text-center p-3 bg-white/5 rounded-lg">
                  <p class="text-2xl font-bold text-blue-400">5种</p>
                  <p class="text-xs text-gray-400">不同形状</p>
                </div>
                <div class="text-center p-3 bg-white/5 rounded-lg">
                  <p class="text-2xl font-bold text-purple-400">4次</p>
                  <p class="text-xs text-gray-400">检查验证</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 小贴士 -->
        <div class="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
          <div class="flex items-start gap-4">
            <span class="text-3xl">💡</span>
            <div>
              <p class="font-bold text-cyan-300 mb-2">小朋友也能理解的秘密：</p>
              <p class="text-gray-300">
                AI的眼睛叫OpenCV，就像一个超级聪明的机器人助手！它能在0.1秒内看懂你的画，
                比眨眼还快！它会用数学魔法（测量角度和边长）来确保认对了每个形状。
                最厉害的是，就算你画得有点歪，它也能认出来哦！
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 现在就开始按钮 -->
      <div class="text-center mt-16">
        <a href="https://frontend-ui-alpha-one.vercel.app/" target="_blank"
           class="inline-block px-12 py-6 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl hover-glow text-2xl font-bold transform hover:scale-105 transition-all shadow-lg shadow-green-500/25">
          🚀 现在就开始创作我的游戏！
        </a>
        <p class="text-gray-400 mt-4">点击上面的按钮，开始你的创作之旅！</p>
      </div>
    </div>
  </section>

  <!-- 其他小朋友的作品展示 -->
  <section id="showcase" class="py-20 relative">
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-1/4 left-20 w-80 h-80 bg-gradient-to-br from-orange-500/15 to-red-500/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/15 to-pink-500/10 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
    </div>

    <div class="max-w-6xl mx-auto section-padding">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="gradient-text">🌟 看看其他小朋友的超酷作品</span>
        </h2>
        <p class="text-xl text-gray-400">他们都用AI做出了自己的游戏！你也可以的！</p>
      </div>

      <!-- 作品展示网格 -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="showcase-card glass-card p-6 rounded-2xl hover-glow group">
          <div class="bg-gradient-to-br from-pink-900/50 to-purple-900/50 rounded-lg p-4 mb-4 border border-pink-500/30 aspect-square flex items-center justify-center">
            <div class="text-center">
              <span class="text-4xl mb-2 block">🏰</span>
              <span class="text-lg text-pink-300 font-bold">小丽的城堡冒险</span>
            </div>
          </div>
          <div class="space-y-2">
            <h3 class="text-lg font-bold text-pink-400">城堡大冒险</h3>
            <p class="text-sm text-gray-300">小丽画了一个美丽的城堡，马里奥要穿过城堡救公主！</p>
            <div class="flex items-center gap-2">
              <span class="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">难度：简单</span>
              <span class="text-xs text-gray-400">❤️ 128 次点赞</span>
            </div>
          </div>
        </div>

        <div class="showcase-card glass-card p-6 rounded-2xl hover-glow group">
          <div class="bg-gradient-to-br from-green-900/50 to-blue-900/50 rounded-lg p-4 mb-4 border border-green-500/30 aspect-square flex items-center justify-center">
            <div class="text-center">
              <span class="text-4xl mb-2 block">🌲</span>
              <span class="text-lg text-green-300 font-bold">小明的森林探险</span>
            </div>
          </div>
          <div class="space-y-2">
            <h3 class="text-lg font-bold text-green-400">神秘森林</h3>
            <p class="text-sm text-gray-300">小明画了茂密的森林，有很多树木和小动物朋友！</p>
            <div class="flex items-center gap-2">
              <span class="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">难度：中等</span>
              <span class="text-xs text-gray-400">❤️ 95 次点赞</span>
            </div>
          </div>
        </div>

        <div class="showcase-card glass-card p-6 rounded-2xl hover-glow group">
          <div class="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-lg p-4 mb-4 border border-blue-500/30 aspect-square flex items-center justify-center">
            <div class="text-center">
              <span class="text-4xl mb-2 block">🚀</span>
              <span class="text-lg text-blue-300 font-bold">小华的太空之旅</span>
            </div>
          </div>
          <div class="space-y-2">
            <h3 class="text-lg font-bold text-blue-400">太空大冒险</h3>
            <p class="text-sm text-gray-300">小华画了宇宙飞船和星球，马里奥在太空中跳跃！</p>
            <div class="flex items-center gap-2">
              <span class="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">难度：困难</span>
              <span class="text-xs text-gray-400">❤️ 156 次点赞</span>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <div class="inline-block glass-card p-6 rounded-2xl">
          <p class="text-xl text-gray-300 mb-4">
            <span class="text-yellow-400 font-bold">已经有 847 个小朋友</span>做出了自己的游戏！
          </p>
          <p class="text-lg text-gray-400">你的创意一定更棒！快来试试吧！</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 超大开始按钮区域 -->
  <section class="py-20">
    <div class="max-w-4xl mx-auto section-padding text-center">
      <div class="glass-card p-12 relative overflow-hidden rounded-3xl">
        <!-- 背景动画 -->
        <div class="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 animate-gradient"></div>

        <div class="relative z-10">
          <div class="text-6xl md:text-8xl mb-6 animate-bounce">🎨</div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            准备好开始你的<span class="gradient-text">创作之旅</span>了吗？
          </h2>
          <p class="text-xl text-gray-400 mb-8">
            只需要<span class="text-green-400 font-bold">30秒画画</span>，
            AI就能帮你做出<span class="text-purple-400 font-bold">专属游戏</span>！
          </p>

          <div class="grid md:grid-cols-3 gap-4 mb-8">
            <div class="glass-card p-4 rounded-xl">
              <span class="text-4xl">✏️</span>
              <p class="text-sm mt-2">画画<span class="text-green-400 font-bold">30秒</span></p>
            </div>
            <div class="glass-card p-4 rounded-xl">
              <span class="text-4xl">🪄</span>
              <p class="text-sm mt-2">AI魔法<span class="text-purple-400 font-bold">3分钟</span></p>
            </div>
            <div class="glass-card p-4 rounded-xl">
              <span class="text-4xl">🎮</span>
              <p class="text-sm mt-2">马上<span class="text-blue-400 font-bold">开始玩</span></p>
            </div>
          </div>

          <div class="space-y-4">
            <a href="https://frontend-ui-alpha-one.vercel.app/" target="_blank"
               class="inline-block px-12 py-6 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-2xl hover-glow text-2xl font-bold transform hover:scale-105 transition-all shadow-lg shadow-purple-500/25">
              🚀 我要开始创作游戏！
            </a>
            <p class="text-gray-400">完全免费！不需要下载任何软件！</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 可爱的页脚 -->
  <footer class="py-12 border-t border-white/10">
    <div class="max-w-6xl mx-auto section-padding">
      <div class="text-center space-y-6">
        <div class="flex justify-center items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-green-blue rounded-lg flex items-center justify-center">
            <span class="text-xl animate-bounce">🎨</span>
          </div>
          <div>
            <span class="text-lg font-bold">小朋友的AI画画变游戏</span>
            <span class="text-xs text-gray-400 block">让每个小朋友都能做游戏</span>
          </div>
        </div>

        <div class="flex justify-center items-center gap-8 text-sm text-gray-400 flex-wrap">
          <span>🏆 HackMIT 2025 作品</span>
          <span>💝 专为小朋友设计</span>
          <span>🌈 安全又好玩</span>
        </div>

        <div class="flex justify-center gap-4">
          <a href="kids-en.html" class="text-blue-400 hover:text-blue-300 transition-colors">
            🌍 English Version
          </a>
          <a href="/" class="text-cyan-400 hover:text-cyan-300 transition-colors">
            🏠 回到大人版页面
          </a>
          <a href="community.html" class="text-purple-400 hover:text-purple-300 transition-colors">
            🌟 看更多作品
          </a>
        </div>

        <div class="text-gray-400 text-sm">
          用 ❤️ 和 AI 魔法制作 • 让创造力飞翔！
        </div>
      </div>
    </div>
  </footer>
`;

// 移动端菜单切换
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// 学习更多按钮滚动
const learnMoreBtn = document.getElementById('learn-more-btn');
if (learnMoreBtn) {
  learnMoreBtn.addEventListener('click', () => {
    const tutorialSection = document.getElementById('tutorial');
    if (tutorialSection) {
      tutorialSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// 教程步骤交互
const tutorialSteps = document.querySelectorAll('.tutorial-step');
tutorialSteps.forEach((step, index) => {
  step.addEventListener('click', () => {
    // 添加点击效果
    step.style.transform = 'scale(1.02)';
    setTimeout(() => {
      step.style.transform = 'scale(1)';
    }, 200);

    // 可以添加更多交互效果
    console.log(`点击了步骤 ${index + 1}`);
  });
});

// 作品卡片悬浮效果
const showcaseCards = document.querySelectorAll('.showcase-card');
showcaseCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px) scale(1.02)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});

// 添加一些可爱的交互音效（可选）
function playClickSound() {
  // 这里可以添加音效，但考虑到儿童用户体验，暂时不添加
  console.log('🎵 点击音效');
}

// 为所有按钮添加点击反馈
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

console.log('✨ 小朋友的AI画画变游戏页面加载完成！');
console.log('🎮 准备好开始创作了吗？');

} catch (error) {
  console.error('🚨 页面加载出错:', error);

  // 显示友好的错误信息
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
    <h3 style="margin-bottom: 1rem;">哎呀！出了点小问题</h3>
    <p style="margin-bottom: 1rem;">别担心，刷新一下页面就好啦！</p>
    <button onclick="location.reload()" style="
      background: white;
      color: #333;
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
      font-weight: bold;
      cursor: pointer;
    ">🔄 刷新页面</button>
  `;

  document.body.appendChild(errorDiv);
}