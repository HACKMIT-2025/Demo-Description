import './docs.css';

// Navigation structure
const navigationStructure = {
  'Getting Started': {
    'introduction': 'Introduction',
    'installation': 'Installation',
    'quick-start': 'Quick Start',
    'basic-concepts': 'Basic Concepts'
  },
  'API Reference': {
    'core-methods': 'Core Methods',
    'level-building': 'Level Building',
    'helper-methods': 'Helper Methods',
    'game-control': 'Game Control',
    'import-export': 'Import/Export',
    'ai-integration': 'AI Integration'
  },
  'Examples': {
    'simple-level': 'Simple Level',
    'complex-level': 'Complex Level',
    'ai-integration-example': 'AI Integration',
    'theme-variations': 'Theme Variations'
  },
  'Architecture': {
    'core-components': 'Core Components',
    'data-flow': 'Data Flow',
    'plugin-system': 'Plugin System'
  },
  'Advanced': {
    'custom-themes': 'Custom Themes',
    'performance': 'Performance',
    'best-practices': 'Best Practices'
  }
};

// Content data
const contentData: Record<string, any> = {
  'introduction': {
    title: 'Mario Game Engine',
    description: 'A modular, API-driven game engine for creating Mario-style platform games',
    content: `
      <div class="docs-section">
        <h2 class="docs-section-title">Welcome to Mario Game Engine</h2>
        <p class="docs-text">
          The Mario Game Engine is a powerful, modular platform game creation system designed for both
          <strong>manual level construction</strong> and <strong>AI-driven automatic generation</strong>
          from image recognition data.
        </p>

        <div class="docs-card docs-success-card">
          <h4 style="margin-top: 0; color: var(--color-accent-green);">Key Features</h4>
          <ul style="margin-bottom: 0; color: rgba(255, 255, 255, 0.8);">
            <li>🎮 Simple, chainable API design</li>
            <li>🤖 Built-in AI integration support</li>
            <li>⚡ Real-time physics and collision detection</li>
            <li>🎨 Multiple visual themes and styles</li>
            <li>💾 Level import/export capabilities</li>
            <li>🚀 WebGL-powered rendering</li>
          </ul>
        </div>

        <div class="docs-card docs-info-card">
          <h4 style="margin-top: 0; color: var(--color-accent-blue);">Perfect For</h4>
          <p style="margin-bottom: 0; color: rgba(255, 255, 255, 0.8);">
            Game developers, AI researchers, educational projects, and anyone interested in
            creating retro-style platform games with modern technology.
          </p>
        </div>
      </div>
    `
  },
  'installation': {
    title: 'Installation',
    description: 'Get started with Mario Game Engine in your project',
    content: `
      <div class="docs-section">
        <h2 class="docs-section-title">Installation</h2>

        <h3 class="docs-subsection-title">Prerequisites</h3>
        <p class="docs-text">Before installing the Mario Game Engine, ensure you have:</p>
        <ul class="docs-text">
          <li>Node.js 16+ installed</li>
          <li>A modern web browser with WebGL support</li>
          <li>Basic knowledge of JavaScript/TypeScript</li>
        </ul>

        <h3 class="docs-subsection-title">NPM Installation</h3>
        <div class="docs-code-block">
          <div class="docs-code-header">
            <div class="docs-code-title">
              <span>📦</span>
              Install dependencies
              <span class="docs-code-lang">bash</span>
            </div>
            <button class="docs-copy-button" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code>npm install
npm run dev</code></pre>
        </div>

        <h3 class="docs-subsection-title">CDN Usage</h3>
        <p class="docs-text">For quick prototyping, you can include the engine via CDN:</p>
        <div class="docs-code-block">
          <div class="docs-code-header">
            <div class="docs-code-title">
              <span>🌐</span>
              CDN inclusion
              <span class="docs-code-lang">html</span>
            </div>
            <button class="docs-copy-button" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code>&lt;script src="https://cdn.jsdelivr.net/npm/mario-game-engine@latest/dist/mario-engine.js"&gt;&lt;/script&gt;</code></pre>
        </div>

        <h3 class="docs-subsection-title">Verify Installation</h3>
        <p class="docs-text">Test your installation with this simple example:</p>
        <div class="docs-code-block">
          <div class="docs-code-header">
            <div class="docs-code-title">
              <span>✅</span>
              Verification test
              <span class="docs-code-lang">javascript</span>
            </div>
            <button class="docs-copy-button" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code>import { GameAPI } from './src/engine/index.ts';

// Create a simple test
const engine = new GameAPI('my-canvas', {
    width: 800,
    height: 600
});

console.log('Mario Game Engine loaded successfully!');</code></pre>
        </div>
      </div>
    `
  },
  'quick-start': {
    title: 'Quick Start',
    description: 'Create your first Mario-style game in minutes',
    content: `
      <div class="docs-section">
        <h2 class="docs-section-title">Quick Start Guide</h2>

        <p class="docs-text">
          Get up and running with a complete Mario-style game in just a few minutes.
        </p>

        <h3 class="docs-subsection-title">Step 1: Create HTML Canvas</h3>
        <div class="docs-code-block">
          <div class="docs-code-header">
            <div class="docs-code-title">
              <span>📄</span>
              index.html
              <span class="docs-code-lang">html</span>
            </div>
            <button class="docs-copy-button" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;My Mario Game&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;canvas id="game-canvas"&gt;&lt;/canvas&gt;
    &lt;script src="game.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
        </div>

        <h3 class="docs-subsection-title">Step 2: Initialize the Engine</h3>
        <div class="docs-code-block">
          <div class="docs-code-header">
            <div class="docs-code-title">
              <span>⚙️</span>
              game.js
              <span class="docs-code-lang">javascript</span>
            </div>
            <button class="docs-copy-button" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code>import { GameAPI } from './src/engine/index.ts';

// Initialize the game engine
const gameAPI = new GameAPI('game-canvas', {
    width: 1024,
    height: 576,
    gravity: 0.5,
    fps: 60
});</code></pre>
        </div>

        <h3 class="docs-subsection-title">Step 3: Build Your First Level</h3>
        <div class="docs-code-block">
          <div class="docs-code-header">
            <div class="docs-code-title">
              <span>🏗️</span>
              Level creation
              <span class="docs-code-lang">javascript</span>
            </div>
            <button class="docs-copy-button" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code>// Build a simple level with method chaining
gameAPI
    .clearLevel()                                    // Clear any existing level
    .addPlatform(0, 500, 1000, 76, 'ground')        // Ground platform
    .addPlatform(300, 400, 100, 20, 'platform')     // Floating platform
    .addPipe(600, 400, 100)                         // Green pipe obstacle
    .addCoinRow(320, 350, 5, 40)                    // Row of 5 coins
    .addEnemy(500, 450, 'goomba')                   // Goomba enemy
    .addEnemy(750, 450, 'koopa')                    // Koopa enemy
    .addPowerUp(350, 300, 'mushroom')               // Power-up mushroom
    .setPlayerStart(100, 400)                       // Player starting position
    .buildLevel()                                   // Compile the level
    .startGame();                                   // Start the game loop</code></pre>
        </div>

        <div class="docs-card docs-success-card">
          <h4 style="margin-top: 0; color: var(--color-accent-green);">🎉 Congratulations!</h4>
          <p style="margin-bottom: 0; color: rgba(255, 255, 255, 0.8);">
            You've created your first Mario-style platform game! The game features a playable character,
            platforms to jump on, enemies to avoid, coins to collect, and power-ups to enhance gameplay.
          </p>
        </div>

        <h3 class="docs-subsection-title">Game Controls</h3>
        <div class="docs-params-table" style="margin-top: 1rem;">
          <table style="width: 100%;">
            <thead>
              <tr>
                <th>Control</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>Arrow Keys</code></td>
                <td>Move left/right</td>
              </tr>
              <tr>
                <td><code>Space</code></td>
                <td>Jump</td>
              </tr>
              <tr>
                <td><code>Shift</code></td>
                <td>Run (hold)</td>
              </tr>
              <tr>
                <td><code>P</code></td>
                <td>Pause/Resume</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="docs-subsection-title">Next Steps</h3>
        <p class="docs-text">Now that you have a basic game running, explore these topics:</p>
        <ul class="docs-text">
          <li><a href="#ai-integration" class="docs-link">AI Integration</a> - Generate levels from images</li>
          <li><a href="#complex-level" class="docs-link">Complex Levels</a> - Advanced level building techniques</li>
          <li><a href="#theme-variations" class="docs-link">Themes</a> - Visual customization options</li>
          <li><a href="#import-export" class="docs-link">Import/Export</a> - Save and load level data</li>
        </ul>
      </div>
    `
  },
  'core-methods': {
    title: 'Core Methods',
    description: 'Essential methods for game engine initialization and control',
    content: `
      <div class="docs-section">
        <h2 class="docs-section-title">Core Methods</h2>

        <div class="docs-method-title">new GameAPI(canvas, config?)</div>
        <p class="docs-text">Creates a new game engine instance.</p>

        <div class="docs-params-table">
          <table>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Type</th>
                <th>Required</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="docs-param-name">canvas</span></td>
                <td><span class="docs-param-type">string | HTMLCanvasElement</span></td>
                <td><span class="docs-param-required">Required</span></td>
                <td>Canvas element or canvas element ID</td>
              </tr>
              <tr>
                <td><span class="docs-param-name">config</span></td>
                <td><span class="docs-param-type">GameConfig</span></td>
                <td><span class="docs-param-optional">Optional</span></td>
                <td>Configuration object for game settings</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 style="color: white; margin: 1.5rem 0 0.5rem;">GameConfig Properties</h4>
        <div class="docs-params-table">
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="docs-param-name">width</span></td>
                <td><span class="docs-param-type">number</span></td>
                <td>1024</td>
                <td>Canvas width in pixels</td>
              </tr>
              <tr>
                <td><span class="docs-param-name">height</span></td>
                <td><span class="docs-param-type">number</span></td>
                <td>576</td>
                <td>Canvas height in pixels</td>
              </tr>
              <tr>
                <td><span class="docs-param-name">gravity</span></td>
                <td><span class="docs-param-type">number</span></td>
                <td>0.5</td>
                <td>Gravity force applied to entities</td>
              </tr>
              <tr>
                <td><span class="docs-param-name">fps</span></td>
                <td><span class="docs-param-type">number</span></td>
                <td>60</td>
                <td>Target frames per second</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 style="color: white; margin: 1.5rem 0 0.5rem;">Example Usage</h4>
        <div class="docs-code-block">
          <div class="docs-code-header">
            <div class="docs-code-title">
              <span>🎮</span>
              Basic initialization
              <span class="docs-code-lang">javascript</span>
            </div>
            <button class="docs-copy-button" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code>// Using canvas ID (recommended)
const gameAPI = new GameAPI('my-canvas', {
    width: 1024,
    height: 576,
    gravity: 0.5,
    fps: 60
});

// Using canvas element directly
const canvas = document.getElementById('my-canvas');
const gameAPI = new GameAPI(canvas);

// Minimal setup with defaults
const gameAPI = new GameAPI('my-canvas');</code></pre>
        </div>

        <div class="docs-method-title">buildLevel()</div>
        <p class="docs-text">
          Builds and compiles the current level with all added elements.
          <strong>This method must be called before starting the game.</strong>
        </p>

        <div class="docs-params-table">
          <table>
            <thead>
              <tr>
                <th>Returns</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="docs-param-type">this</span></td>
                <td>Returns the GameAPI instance for method chaining</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="docs-code-block">
          <div class="docs-code-header">
            <div class="docs-code-title">
              <span>🏗️</span>
              Building a level
              <span class="docs-code-lang">javascript</span>
            </div>
            <button class="docs-copy-button" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code>gameAPI
    .addPlatform(0, 500, 1000, 76, 'ground')
    .addEnemy(300, 450, 'goomba')
    .buildLevel()  // Compile all elements
    .startGame();  // Start the game</code></pre>
        </div>

        <div class="docs-method-title">startGame()</div>
        <p class="docs-text">Starts the main game loop and begins rendering.</p>

        <div class="docs-code-block">
          <div class="docs-code-header">
            <div class="docs-code-title">
              <span>▶️</span>
              Starting the game
              <span class="docs-code-lang">javascript</span>
            </div>
            <button class="docs-copy-button" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code>// Start the game after building
gameAPI.buildLevel().startGame();

// Or call separately
gameAPI.buildLevel();
gameAPI.startGame();</code></pre>
        </div>

        <div class="docs-method-title">clearLevel()</div>
        <p class="docs-text">Removes all entities and platforms from the current level.</p>

        <div class="docs-code-block">
          <div class="docs-code-header">
            <div class="docs-code-title">
              <span>🧹</span>
              Clearing levels
              <span class="docs-code-lang">javascript</span>
            </div>
            <button class="docs-copy-button" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code>// Clear before building new level
gameAPI
    .clearLevel()
    .addPlatform(0, 500, 800, 76, 'ground')
    .buildLevel();</code></pre>
        </div>

        <div class="docs-card docs-warning-card">
          <h4 style="margin-top: 0; color: #f59e0b;">⚠️ Important Notes</h4>
          <ul style="margin-bottom: 0; color: rgba(255, 255, 255, 0.8);">
            <li>Always call <code>buildLevel()</code> before <code>startGame()</code></li>
            <li>Use <code>clearLevel()</code> when creating multiple levels</li>
            <li>The engine automatically handles canvas resizing</li>
          </ul>
        </div>
      </div>
    `
  },
  'level-building': {
    title: 'Level Building',
    description: 'Methods for creating platforms, enemies, and interactive elements',
    content: `
      <div class="docs-section">
        <h2 class="docs-section-title">Level Building Methods</h2>

        <div class="docs-method-title">addPlatform(x, y, width, height, type?)</div>
        <p class="docs-text">Adds a platform to the level at the specified position and dimensions.</p>

        <div class="docs-params-table">
          <table>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Type</th>
                <th>Required</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="docs-param-name">x</span></td>
                <td><span class="docs-param-type">number</span></td>
                <td><span class="docs-param-required">Required</span></td>
                <td>X position in pixels</td>
              </tr>
              <tr>
                <td><span class="docs-param-name">y</span></td>
                <td><span class="docs-param-type">number</span></td>
                <td><span class="docs-param-required">Required</span></td>
                <td>Y position in pixels</td>
              </tr>
              <tr>
                <td><span class="docs-param-name">width</span></td>
                <td><span class="docs-param-type">number</span></td>
                <td><span class="docs-param-required">Required</span></td>
                <td>Platform width in pixels</td>
              </tr>
              <tr>
                <td><span class="docs-param-name">height</span></td>
                <td><span class="docs-param-type">number</span></td>
                <td><span class="docs-param-required">Required</span></td>
                <td>Platform height in pixels</td>
              </tr>
              <tr>
                <td><span class="docs-param-name">type</span></td>
                <td><span class="docs-param-type">'ground' | 'platform' | 'pipe' | 'underground' | 'question' | 'brick'</span></td>
                <td><span class="docs-param-optional">Optional</span></td>
                <td>Platform visual style (default: 'platform')</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="docs-code-block">
          <div class="docs-code-header">
            <div class="docs-code-title">
              <span>🏗️</span>
              Platform examples
              <span class="docs-code-lang">javascript</span>
            </div>
            <button class="docs-copy-button" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code>// Ground platform
gameAPI.addPlatform(0, 500, 1000, 76, 'ground');

// Floating platforms
gameAPI.addPlatform(300, 400, 100, 20, 'platform');
gameAPI.addPlatform(500, 350, 100, 20, 'platform');

// Question blocks
gameAPI.addPlatform(400, 350, 32, 32, 'question');</code></pre>
        </div>

        <div class="docs-method-title">addEnemy(x, y, type)</div>
        <p class="docs-text">Adds an enemy to the level at the specified position.</p>

        <div class="docs-params-table">
          <table>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Type</th>
                <th>Required</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="docs-param-name">x</span></td>
                <td><span class="docs-param-type">number</span></td>
                <td><span class="docs-param-required">Required</span></td>
                <td>X position in pixels</td>
              </tr>
              <tr>
                <td><span class="docs-param-name">y</span></td>
                <td><span class="docs-param-type">number</span></td>
                <td><span class="docs-param-required">Required</span></td>
                <td>Y position in pixels</td>
              </tr>
              <tr>
                <td><span class="docs-param-name">type</span></td>
                <td><span class="docs-param-type">'goomba' | 'koopa' | 'firebar'</span></td>
                <td><span class="docs-param-required">Required</span></td>
                <td>Type of enemy to spawn</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="docs-code-block">
          <div class="docs-code-header">
            <div class="docs-code-title">
              <span>👾</span>
              Enemy examples
              <span class="docs-code-lang">javascript</span>
            </div>
            <button class="docs-copy-button" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code>// Basic walking enemies
gameAPI.addEnemy(500, 450, 'goomba');
gameAPI.addEnemy(700, 450, 'koopa');

// Stationary fire obstacle
gameAPI.addEnemy(800, 400, 'firebar');</code></pre>
        </div>

        <div class="docs-method-title">addCoin(x, y)</div>
        <p class="docs-text">Adds a collectible coin to the level.</p>

        <div class="docs-params-table">
          <table>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Type</th>
                <th>Required</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="docs-param-name">x</span></td>
                <td><span class="docs-param-type">number</span></td>
                <td><span class="docs-param-required">Required</span></td>
                <td>X position in pixels</td>
              </tr>
              <tr>
                <td><span class="docs-param-name">y</span></td>
                <td><span class="docs-param-type">number</span></td>
                <td><span class="docs-param-required">Required</span></td>
                <td>Y position in pixels</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="docs-method-title">addPowerUp(x, y, type)</div>
        <p class="docs-text">Adds a power-up item to the level.</p>

        <div class="docs-params-table">
          <table>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Type</th>
                <th>Required</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="docs-param-name">x</span></td>
                <td><span class="docs-param-type">number</span></td>
                <td><span class="docs-param-required">Required</span></td>
                <td>X position in pixels</td>
              </tr>
              <tr>
                <td><span class="docs-param-name">y</span></td>
                <td><span class="docs-param-type">number</span></td>
                <td><span class="docs-param-required">Required</span></td>
                <td>Y position in pixels</td>
              </tr>
              <tr>
                <td><span class="docs-param-name">type</span></td>
                <td><span class="docs-param-type">'mushroom' | 'flower' | 'star'</span></td>
                <td><span class="docs-param-required">Required</span></td>
                <td>Type of power-up</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="docs-code-block">
          <div class="docs-code-header">
            <div class="docs-code-title">
              <span>🍄</span>
              Items and power-ups
              <span class="docs-code-lang">javascript</span>
            </div>
            <button class="docs-copy-button" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code>// Coins
gameAPI.addCoin(350, 350);
gameAPI.addCoin(400, 350);

// Power-ups
gameAPI.addPowerUp(600, 300, 'mushroom');  // Makes player bigger
gameAPI.addPowerUp(800, 300, 'flower');   // Fire power
gameAPI.addPowerUp(1000, 300, 'star');    // Invincibility</code></pre>
        </div>

        <div class="docs-method-title">setPlayerStart(x, y)</div>
        <p class="docs-text">Sets the player's starting position in the level.</p>

        <div class="docs-params-table">
          <table>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Type</th>
                <th>Required</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="docs-param-name">x</span></td>
                <td><span class="docs-param-type">number</span></td>
                <td><span class="docs-param-required">Required</span></td>
                <td>X position in pixels</td>
              </tr>
              <tr>
                <td><span class="docs-param-name">y</span></td>
                <td><span class="docs-param-type">number</span></td>
                <td><span class="docs-param-required">Required</span></td>
                <td>Y position in pixels</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="docs-card docs-info-card">
          <h4 style="margin-top: 0; color: var(--color-accent-blue);">💡 Pro Tips</h4>
          <ul style="margin-bottom: 0; color: rgba(255, 255, 255, 0.8);">
            <li>All level building methods return <code>this</code> for method chaining</li>
            <li>Position (0, 0) is at the top-left corner of the canvas</li>
            <li>Y coordinates increase downward (standard web coordinates)</li>
            <li>Always call <code>setPlayerStart()</code> before building the level</li>
          </ul>
        </div>
      </div>
    `
  },
  'ai-integration': {
    title: 'AI Integration',
    description: 'Generate levels automatically from image recognition data',
    content: `
      <div class="docs-section">
        <h2 class="docs-section-title">AI Integration</h2>

        <p class="docs-text">
          The Mario Game Engine includes powerful AI integration capabilities that allow you to
          automatically generate levels from image recognition data. This feature is perfect for
          creating games from hand-drawn sketches or computer vision analysis.
        </p>

        <div class="docs-method-title">generateFromImageData(imageData)</div>
        <p class="docs-text">
          Generates a complete level from an array of detected objects. This method processes
          AI/computer vision output and automatically creates appropriate game elements.
        </p>

        <div class="docs-params-table">
          <table>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Type</th>
                <th>Required</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="docs-param-name">imageData</span></td>
                <td><span class="docs-param-type">ObjectDetection[]</span></td>
                <td><span class="docs-param-required">Required</span></td>
                <td>Array of detected objects from AI analysis</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="docs-subsection-title">ObjectDetection Interface</h3>
        <div class="docs-code-block">
          <div class="docs-code-header">
            <div class="docs-code-title">
              <span>📋</span>
              Type definition
              <span class="docs-code-lang">typescript</span>
            </div>
            <button class="docs-copy-button" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code>interface ObjectDetection {
  type: 'platform' | 'enemy' | 'coin' | 'powerup' | 'pipe' | 'ground' | 'player';
  x: number;                    // X position in pixels
  y: number;                    // Y position in pixels
  width?: number;               // Width (for platforms)
  height?: number;              // Height (for platforms)
  enemyType?: string;           // Enemy variant ('goomba', 'koopa', 'firebar')
  powerType?: string;           // Power-up type ('mushroom', 'flower', 'star')
}</code></pre>
        </div>

        <h3 class="docs-subsection-title">Supported Object Types</h3>
        <div class="docs-params-table">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Required Properties</th>
                <th>Optional Properties</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="docs-param-name">ground</span></td>
                <td>x, y, width, height</td>
                <td>-</td>
                <td>Ground/floor platforms</td>
              </tr>
              <tr>
                <td><span class="docs-param-name">platform</span></td>
                <td>x, y, width, height</td>
                <td>-</td>
                <td>Floating platforms</td>
              </tr>
              <tr>
                <td><span class="docs-param-name">enemy</span></td>
                <td>x, y, enemyType</td>
                <td>-</td>
                <td>Enemy characters</td>
              </tr>
              <tr>
                <td><span class="docs-param-name">coin</span></td>
                <td>x, y</td>
                <td>-</td>
                <td>Collectible coins</td>
              </tr>
              <tr>
                <td><span class="docs-param-name">powerup</span></td>
                <td>x, y, powerType</td>
                <td>-</td>
                <td>Power-up items</td>
              </tr>
              <tr>
                <td><span class="docs-param-name">pipe</span></td>
                <td>x, y</td>
                <td>width, height</td>
                <td>Pipe obstacles</td>
              </tr>
              <tr>
                <td><span class="docs-param-name">player</span></td>
                <td>x, y</td>
                <td>-</td>
                <td>Player starting position</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="docs-subsection-title">Complete Example</h3>
        <div class="docs-code-block">
          <div class="docs-code-header">
            <div class="docs-code-title">
              <span>🤖</span>
              AI level generation
              <span class="docs-code-lang">javascript</span>
            </div>
            <button class="docs-copy-button" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code>// Simulated output from image recognition AI
const detectedObjects = [
  // Ground platforms
  {
    type: 'ground',
    x: 0,
    y: 500,
    width: 2000,
    height: 76
  },

  // Floating platforms
  {
    type: 'platform',
    x: 300,
    y: 400,
    width: 100,
    height: 20
  },
  {
    type: 'platform',
    x: 500,
    y: 350,
    width: 100,
    height: 20
  },

  // Pipe obstacle
  {
    type: 'pipe',
    x: 700,
    y: 400,
    width: 64,
    height: 100
  },

  // Collectibles
  { type: 'coin', x: 350, y: 350 },
  { type: 'coin', x: 550, y: 300 },
  { type: 'coin', x: 750, y: 350 },

  // Enemies
  {
    type: 'enemy',
    x: 400,
    y: 450,
    enemyType: 'goomba'
  },
  {
    type: 'enemy',
    x: 600,
    y: 450,
    enemyType: 'koopa'
  },

  // Power-ups
  {
    type: 'powerup',
    x: 550,
    y: 300,
    powerType: 'mushroom'
  },

  // Player starting position
  {
    type: 'player',
    x: 100,
    y: 400
  }
];

// Generate level from AI data
gameAPI
  .clearLevel()
  .generateFromImageData(detectedObjects)
  .buildLevel()
  .startGame();</code></pre>
        </div>

        <h3 class="docs-subsection-title">Integration with Computer Vision</h3>
        <p class="docs-text">
          The engine is designed to work seamlessly with computer vision libraries and AI services.
          Here's how to integrate with popular CV frameworks:
        </p>

        <div class="docs-code-block">
          <div class="docs-code-header">
            <div class="docs-code-title">
              <span>👁️</span>
              OpenCV integration example
              <span class="docs-code-lang">javascript</span>
            </div>
            <button class="docs-copy-button" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code>import cv from 'opencv4nodejs';

async function processHandDrawnMap(imagePath) {
  // Load and process image
  const image = await cv.imreadAsync(imagePath);

  // Your computer vision logic here
  const detectedObjects = await detectGameElements(image);

  // Convert to game engine format
  const gameData = detectedObjects.map(obj => ({
    type: obj.label,
    x: obj.boundingBox.x,
    y: obj.boundingBox.y,
    width: obj.boundingBox.width,
    height: obj.boundingBox.height,
    enemyType: obj.subtype || 'goomba',
    powerType: obj.subtype || 'mushroom'
  }));

  // Generate game level
  gameAPI
    .clearLevel()
    .generateFromImageData(gameData)
    .buildLevel()
    .startGame();
}</code></pre>
        </div>

        <div class="docs-card docs-success-card">
          <h4 style="margin-top: 0; color: var(--color-accent-green);">🎯 Use Cases</h4>
          <ul style="margin-bottom: 0; color: rgba(255, 255, 255, 0.8);">
            <li><strong>Hand-drawn Level Design:</strong> Convert sketches to playable levels</li>
            <li><strong>Procedural Generation:</strong> Create levels from algorithmic data</li>
            <li><strong>Image-to-Game:</strong> Transform any image into a game level</li>
            <li><strong>Educational Tools:</strong> Teach game design through visual creation</li>
          </ul>
        </div>

        <div class="docs-card docs-warning-card">
          <h4 style="margin-top: 0; color: #f59e0b;">⚠️ Important Notes</h4>
          <ul style="margin-bottom: 0; color: rgba(255, 255, 255, 0.8);">
            <li>The engine automatically validates object positions and prevents overlaps</li>
            <li>If no player position is detected, the default (100, 400) will be used</li>
            <li>Objects outside canvas bounds are automatically clipped or repositioned</li>
            <li>The engine supports up to 1000 objects per level for optimal performance</li>
          </ul>
        </div>
      </div>
    `
  },
  'simple-level': {
    title: 'Simple Level Example',
    description: 'Create a basic platform level with essential elements',
    content: `
      <div class="docs-section">
        <h2 class="docs-section-title">Simple Level Example</h2>

        <p class="docs-text">
          This example demonstrates how to create a basic Mario-style platform level with
          all essential elements including platforms, enemies, collectibles, and power-ups.
        </p>

        <div class="docs-code-block">
          <div class="docs-code-header">
            <div class="docs-code-title">
              <span>🎮</span>
              Complete simple level
              <span class="docs-code-lang">javascript</span>
            </div>
            <button class="docs-copy-button" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code>import { GameAPI } from './src/engine/index.ts';

// Initialize the game engine
const gameAPI = new GameAPI('game-canvas', {
    width: 1024,
    height: 576,
    gravity: 0.5,
    fps: 60
});

// Create a simple level
gameAPI
    .clearLevel()

    // Ground platform - the base of the level
    .addPlatform(0, 500, 1000, 76, 'ground')

    // Floating platforms for jumping
    .addPlatform(300, 400, 100, 20, 'platform')
    .addPlatform(500, 350, 100, 20, 'platform')
    .addPlatform(700, 300, 100, 20, 'platform')

    // Question block with hidden power-up
    .addPlatform(400, 350, 32, 32, 'question')

    // Pipe obstacles
    .addPipe(800, 400, 100)

    // Collectible coins
    .addCoin(350, 350)
    .addCoin(550, 300)
    .addCoin(750, 250)

    // Enemies to avoid
    .addEnemy(400, 450, 'goomba')
    .addEnemy(600, 450, 'koopa')

    // Power-up items
    .addPowerUp(550, 300, 'mushroom')

    // Set player starting position
    .setPlayerStart(100, 400)

    // Build and start the level
    .buildLevel()
    .startGame();                                   </code></pre>
        </div>

        <h3 class="docs-subsection-title">Level Breakdown</h3>

        <div class="docs-card">
          <h4 style="color: var(--color-accent-green); margin-top: 0;">Ground Platform</h4>
          <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 0;">
            The ground platform spans the entire width of the level (1000px) and provides
            the base surface for the player to walk on. It uses the 'ground' texture style.
          </p>
        </div>

        <div class="docs-card">
          <h4 style="color: var(--color-accent-blue); margin-top: 0;">Floating Platforms</h4>
          <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 0;">
            Three progressively higher platforms create a staircase effect, encouraging
            the player to jump from platform to platform to reach higher areas.
          </p>
        </div>

        <div class="docs-card">
          <h4 style="color: var(--color-accent-purple); margin-top: 0;">Interactive Elements</h4>
          <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 0;">
            Question blocks, coins, enemies, and power-ups add gameplay variety and
            challenge. The pipe serves as both an obstacle and visual landmark.
          </p>
        </div>

        <h3 class="docs-subsection-title">Level Layout Visualization</h3>
        <div class="docs-example">
          <div class="docs-example-header">Level Structure (Side View)</div>
          <div class="docs-example-content">
            <pre style="font-family: monospace; font-size: 12px; line-height: 1.2; color: rgba(255,255,255,0.8);">
                              🪙 (750,250)
                        ████████ (700,300)
                    🪙 (550,300)
              🍄 ████████ (500,350)
          🪙 (350,350)                    🚰 (800,400)
    🏃 ████████ (300,400)                 ████
  (100,400)                              ████
                                         ████
    👾        👾                         ████
██████████████████████████████████████████████ (0,500)
            </pre>
          </div>
        </div>

        <h3 class="docs-subsection-title">Gameplay Features</h3>
        <ul class="docs-text">
          <li><strong>Progressive Difficulty:</strong> Platforms get higher, requiring better timing</li>
          <li><strong>Risk vs Reward:</strong> Coins on platforms reward exploration</li>
          <li><strong>Enemy Encounters:</strong> Ground-level enemies provide basic challenge</li>
          <li><strong>Power-up Discovery:</strong> Mushroom enhances player capabilities</li>
          <li><strong>Obstacle Navigation:</strong> Pipe requires jumping or careful movement</li>
        </ul>

        <h3 class="docs-subsection-title">Customization Ideas</h3>
        <div class="docs-code-block">
          <div class="docs-code-header">
            <div class="docs-code-title">
              <span>🎨</span>
              Level variations
              <span class="docs-code-lang">javascript</span>
            </div>
            <button class="docs-copy-button" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code>// Make it easier - lower platforms
.addPlatform(300, 450, 100, 20, 'platform')
.addPlatform(500, 420, 100, 20, 'platform')

// Make it harder - add more enemies
.addEnemy(200, 450, 'goomba')
.addEnemy(650, 450, 'firebar')

// Add more rewards - coin trails
.addCoinRow(200, 400, 3, 50)  // 3 coins, 50px apart

// Different theme - underground style
.addPlatform(0, 500, 1000, 76, 'underground')</code></pre>
        </div>

        <div class="docs-card docs-info-card">
          <h4 style="margin-top: 0; color: var(--color-accent-blue);">💡 Design Tips</h4>
          <ul style="margin-bottom: 0; color: rgba(255, 255, 255, 0.8);">
            <li>Start with a simple ground platform as your foundation</li>
            <li>Create clear paths through the level - avoid dead ends</li>
            <li>Place enemies where they create interesting challenges</li>
            <li>Use coins to guide players along intended routes</li>
            <li>Test jump distances to ensure platforms are reachable</li>
          </ul>
        </div>
      </div>
    `
  }
};

class DocsApp {
  private currentSection: string = 'introduction';
  private mobileMenuOpen: boolean = false;

  constructor() {
    this.init();
  }

  private init() {
    this.render();
    this.setupEventListeners();
    this.setupSearch();
    this.loadSection('introduction');
  }

  private render() {
    const app = document.querySelector('#docs-app')!;

    app.innerHTML = `
      <div class="docs-layout">
        <!-- Mobile Menu Toggle -->
        <button class="docs-mobile-toggle" id="mobile-toggle">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <!-- Sidebar -->
        <nav class="docs-sidebar" id="sidebar">
          <div class="docs-header">
            <div class="docs-logo">
              <div class="docs-logo-icon">🎮</div>
              <div>
                <div class="docs-title">Mario Game Engine</div>
                <div class="docs-subtitle">API Documentation</div>
              </div>
            </div>
            <div class="docs-version">v1.0.0</div>
          </div>

          <div class="docs-search">
            <input
              type="text"
              class="docs-search-input"
              placeholder="Search documentation..."
              id="search-input"
            />
          </div>

          <div class="docs-nav" id="navigation">
            ${this.renderNavigation()}
          </div>
        </nav>

        <!-- Content Area -->
        <main class="docs-content">
          <div class="docs-main" id="main-content">
            <div class="docs-loading">
              <div class="docs-spinner"></div>
            </div>
          </div>
        </main>
      </div>
    `;
  }

  private renderNavigation(): string {
    let html = '';

    for (const [section, items] of Object.entries(navigationStructure)) {
      html += `
        <div class="docs-nav-section">
          <div class="docs-nav-title">${section}</div>
          <ul class="docs-nav-list">
            ${Object.entries(items).map(([key, title]) => `
              <li class="docs-nav-item">
                <a href="#${key}" class="docs-nav-link" data-section="${key}">
                  ${title}
                </a>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    }

    return html;
  }

  private setupEventListeners() {
    // Navigation clicks
    document.addEventListener('click', (e) => {
      const link = (e.target as Element).closest('.docs-nav-link') as HTMLElement;
      if (link) {
        e.preventDefault();
        const section = link.dataset.section!;
        this.loadSection(section);
        this.updateActiveLink(section);

        // Close mobile menu on navigation
        if (window.innerWidth <= 768) {
          this.closeMobileMenu();
        }
      }
    });

    // Mobile menu toggle
    const toggle = document.getElementById('mobile-toggle');
    toggle?.addEventListener('click', () => {
      this.toggleMobileMenu();
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      const sidebar = document.getElementById('sidebar');
      const toggle = document.getElementById('mobile-toggle');

      if (this.mobileMenuOpen &&
          !sidebar?.contains(e.target as Node) &&
          !toggle?.contains(e.target as Node)) {
        this.closeMobileMenu();
      }
    });

    // Handle browser back/forward
    window.addEventListener('popstate', (e) => {
      const section = window.location.hash.slice(1) || 'introduction';
      this.loadSection(section);
      this.updateActiveLink(section);
    });

    // Handle initial hash
    const initialSection = window.location.hash.slice(1) || 'introduction';
    if (initialSection !== 'introduction') {
      this.loadSection(initialSection);
      this.updateActiveLink(initialSection);
    }
  }

  private setupSearch() {
    const searchInput = document.getElementById('search-input') as HTMLInputElement;
    let searchTimeout: NodeJS.Timeout;

    searchInput?.addEventListener('input', (e) => {
      const query = (e.target as HTMLInputElement).value.toLowerCase();

      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        this.filterNavigation(query);
      }, 300);
    });
  }

  private filterNavigation(query: string) {
    const navLinks = document.querySelectorAll('.docs-nav-link');
    const navSections = document.querySelectorAll('.docs-nav-section');

    if (!query) {
      // Show all items
      navLinks.forEach(link => {
        (link as HTMLElement).style.display = 'block';
      });
      navSections.forEach(section => {
        (section as HTMLElement).style.display = 'block';
      });
      return;
    }

    // Filter items
    navSections.forEach(section => {
      const sectionElement = section as HTMLElement;
      const links = sectionElement.querySelectorAll('.docs-nav-link');
      let hasVisibleItems = false;

      links.forEach(link => {
        const linkElement = link as HTMLElement;
        const text = linkElement.textContent?.toLowerCase() || '';

        if (text.includes(query)) {
          linkElement.style.display = 'block';
          hasVisibleItems = true;
        } else {
          linkElement.style.display = 'none';
        }
      });

      sectionElement.style.display = hasVisibleItems ? 'block' : 'none';
    });
  }

  private toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    this.mobileMenuOpen = !this.mobileMenuOpen;

    if (this.mobileMenuOpen) {
      sidebar?.classList.remove('mobile-hidden');
    } else {
      sidebar?.classList.add('mobile-hidden');
    }
  }

  private closeMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    this.mobileMenuOpen = false;
    sidebar?.classList.add('mobile-hidden');
  }

  private loadSection(section: string) {
    const content = contentData[section];
    const mainContent = document.getElementById('main-content');

    if (!content) {
      mainContent!.innerHTML = `
        <div class="docs-content-header">
          <h1 class="docs-page-title">Section Not Found</h1>
          <p class="docs-page-description">The requested documentation section could not be found.</p>
        </div>
      `;
      return;
    }

    mainContent!.innerHTML = `
      <div class="docs-content-header">
        <h1 class="docs-page-title">${content.title}</h1>
        <p class="docs-page-description">${content.description}</p>
      </div>
      ${content.content}
    `;

    // Update URL
    history.pushState(null, '', `#${section}`);
    this.currentSection = section;

    // Scroll to top
    mainContent?.scrollTo(0, 0);

    // Initialize typing animation for new content
    setTimeout(() => this.initializeCodeTyping(), 100);
  }

  private initializeCodeTyping() {
    const codeBlocks = document.querySelectorAll('.docs-code-block pre code');

    codeBlocks.forEach(codeBlock => {
      const originalText = codeBlock.innerHTML;
      codeBlock.innerHTML = '';
      let hasStarted = false;

      function typeCode() {
        if (hasStarted) return;
        hasStarted = true;

        const codeBlockContainer = codeBlock.closest('.docs-code-block');
        codeBlockContainer?.classList.add('typing');

        let index = 0;
        const speed = 12; // Characters per step
        const delay = 25; // Milliseconds between steps

        function step() {
          if (index < originalText.length) {
            // Add cursor effect during typing
            const currentText = originalText.slice(0, index);
            codeBlock.innerHTML = currentText + '<span class="typing-cursor">|</span>';
            index += speed;
            setTimeout(step, delay);
          } else {
            // Remove cursor when done and styling
            codeBlock.innerHTML = originalText;
            codeBlockContainer?.classList.remove('typing');
          }
        }

        step();
      }

      // Start typing when element is in view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasStarted) {
            setTimeout(() => typeCode(), 300); // Small delay for better UX
            observer.disconnect();
          }
        });
      }, {
        threshold: 0.4 // Trigger when 40% of the element is visible
      });

      observer.observe(codeBlock.closest('.docs-code-block') || codeBlock);
    });
  }

  private updateActiveLink(section: string) {
    // Remove active class from all links
    document.querySelectorAll('.docs-nav-link').forEach(link => {
      link.classList.remove('active');
    });

    // Add active class to current section
    const activeLink = document.querySelector(`[data-section="${section}"]`);
    activeLink?.classList.add('active');
  }
}

// Global copy function for code blocks
declare global {
  interface Window {
    copyCode: (button: HTMLButtonElement) => void;
  }
}

window.copyCode = async (button: HTMLButtonElement) => {
  const codeBlock = button.closest('.docs-code-block');
  const code = codeBlock?.querySelector('pre code')?.textContent || '';

  try {
    await navigator.clipboard.writeText(code);
    button.textContent = 'Copied!';
    button.classList.add('copied');

    setTimeout(() => {
      button.textContent = 'Copy';
      button.classList.remove('copied');
    }, 2000);
  } catch (err) {
    console.error('Failed to copy code:', err);
  }
};

// Initialize the app
new DocsApp();