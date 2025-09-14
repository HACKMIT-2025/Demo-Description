# 🎮 HackMIT 2025 - AI-Powered Mario Level Generator

A complete end-to-end system that transforms hand-drawn sketches into playable Mario levels using advanced AI and computer vision technologies.

## 🌟 Live Demo

**🎮 Play the Mario Game**: [https://frontend-ui-alpha-one.vercel.app](https://frontend-ui-alpha-one.vercel.app)

## 📁 Project Overview

This project consists of four integrated modules that work together to create an innovative AI-powered game generation experience:

### 🔍 Backend-opencv
**Image Recognition API - FastAPI application for hand-drawn shape recognition**

- **Live API**: https://25hackmit--image-recognition-api-process-base64.modal.run
- **Technology**: FastAPI, OpenCV, Modal Cloud Platform
- **Features**:
  - Detects triangles as starting points
  - Detects circles as end points
  - Identifies shapes as rigid bodies (walls/obstacles)
  - Simplifies contours for game performance optimization
  - RESTful API with JSON responses
  - CORS enabled for cross-origin requests

### 🧠 Backend_Llava
**LLaVA Hand-drawn Image Recognition Service**

- **Technology**: LLaVA 1.5, Modal Cloud Platform with H100 GPU
- **Features**:
  - High-performance GPU inference using H100 GPUs
  - Pay-per-use billing with automatic scaling
  - Hand-drawn image specialized recognition
  - Multiple input methods (file upload and Base64 encoding)
  - Chinese language support
  - Advanced image analysis and detailed descriptions

### 🎨 Frontend-UI
**AI Chat Interface with Dual AI Integration**

- **Live Demo**: [https://frontend-ui-alpha-one.vercel.app](https://frontend-ui-alpha-one.vercel.app)
- **Technology**: React, TypeScript, Vite, TailwindCSS
- **Features**:
  - **Text Chat**: Cerebras Llama 3.1 70B via OpenRouter
  - **Image Recognition**: Anthropic Claude 3.5 Sonnet
  - Context-aware conversations
  - Advanced image analysis capabilities
  - Responsive design and modern UI
  - **Mario Game Integration**: Embedded game window for seamless gameplay

### 🍄 Frontend_Mario
**Mario Game Engine with API Integration**

- **Technology**: TypeScript, Vite, HTML5 Canvas, Physics Engine
- **Features**:
  - Complete Mario-style physics and collision detection
  - Dynamic level loading from backend APIs
  - Multiple access modes (standalone, full UI, embeddable iframe)
  - Cross-origin ready with CORS configuration
  - PostMessage communication for parent-child integration
  - Real-time level generation from image recognition data

## 🔄 System Architecture

```
Hand-drawn Sketch → Backend-opencv (Shape Detection) → Backend_Llava (AI Analysis) → Frontend-UI (Chat Interface) → Frontend_Mario (Game Engine) → Playable Mario Level
```

### Data Flow
1. **User Input**: Hand-drawn sketch uploaded through Frontend-UI
2. **Shape Detection**: Backend-opencv processes image and identifies game elements
3. **AI Analysis**: Backend_Llava provides detailed image understanding
4. **Level Generation**: Data is sent to Frontend_Mario game engine
5. **Gameplay**: User can immediately play the generated level

## 🚀 Quick Start

### 1. Backend Services
```bash
# Backend-opencv (Modal deployment)
cd Backend-opencv
modal deploy modal_app.py

# Backend_Llava (Modal deployment)
cd Backend_Llava
python deploy.py
```

### 2. Frontend Applications
```bash
# Frontend-UI
cd Frontend-UI
npm install
npm run dev

# Frontend_Mario
cd Frontend_Mario/mario-game
npm install
npm run dev
```

## 🎯 Key Features

### 🤖 AI-Powered Level Generation
- Advanced computer vision for shape recognition
- LLaVA integration for intelligent image understanding
- Real-time conversion from sketches to playable levels

### 🎮 Complete Game Experience
- Full Mario-style physics engine
- Dynamic obstacle and enemy placement
- Coin collection and scoring system
- Multiple game modes and difficulty levels

### 💬 Interactive Chat Interface
- Dual AI system (text + image)
- Real-time game integration
- Responsive design across devices
- Seamless user experience

### 🌐 Production-Ready Deployment
- Modal cloud platform for scalable backend services
- Vercel deployment for frontend applications
- CORS-enabled cross-origin communication
- Iframe embedding capabilities

## 🛠 Technology Stack

### Backend
- **FastAPI** - Modern, fast web framework
- **OpenCV** - Computer vision and image processing
- **LLaVA 1.5** - Large Language and Vision Assistant
- **Modal** - Serverless cloud platform with GPU support

### Frontend
- **React + TypeScript** - Modern web development
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **HTML5 Canvas** - High-performance game rendering

### AI Services
- **Cerebras Llama 3.1 70B** - Text generation via OpenRouter
- **Anthropic Claude 3.5 Sonnet** - Image recognition
- **LLaVA 1.5** - Vision-language understanding

## 🌟 Demo Scenarios

### Scenario 1: Quick Sketch to Game
1. Open the Frontend-UI at https://frontend-ui-alpha-one.vercel.app
2. Draw a simple level with platforms, enemies, and coins
3. Upload the image through the chat interface
4. Watch as AI generates a playable Mario level
5. Play immediately in the embedded game window

### Scenario 2: Complex Level Design
1. Create detailed sketches with multiple game elements
2. Use both shape detection and AI analysis for optimization
3. Generate sophisticated multi-platform levels
4. Test and iterate on level design in real-time

### Scenario 3: Educational Use
1. Demonstrate AI and computer vision concepts
2. Show real-time image processing and game generation
3. Interactive learning through game creation
4. STEM education through creative technology

## 🎖 HackMIT 2025 Innovation

This project showcases cutting-edge technology integration:
- **Advanced AI**: Multiple AI models working in harmony
- **Real-time Processing**: Instant sketch-to-game conversion
- **Cloud Computing**: Scalable serverless architecture
- **Interactive Gaming**: Seamless user experience
- **Cross-platform**: Web-based accessibility

## 📞 Support & Development

- **Main Application**: [https://frontend-ui-alpha-one.vercel.app](https://frontend-ui-alpha-one.vercel.app)
- **API Health Check**: https://25hackmit--image-recognition-api-health.modal.run
- **Repository**: HackMIT 2025 Team Project
- **License**: MIT

---

*Built with ❤️ for HackMIT 2025 - Transforming creativity into interactive experiences through AI*