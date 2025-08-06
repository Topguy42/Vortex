# 🌀 Vortex - Fast Web Access

**Vortex** is a cutting-edge web gateway that provides secure and anonymous internet browsing through advanced proxy technology. Built with modern web standards, Vortex offers a seamless and intuitive browsing experience with enhanced privacy features.

![Vortex Logo](favicon.svg)

## ✨ Features

### 🌐 **Web Proxy**
- **Secure Browsing**: Access websites through our encrypted proxy network
- **Anonymous Navigation**: Browse the web without revealing your identity or location
- **Quick Access**: One-click access to popular websites (YouTube, Reddit, Discord, GitHub, Instagram, TikTok)
- **Smart URL Processing**: Automatic search engine integration for queries
- **Multiple Search Engines**: Google, Bing, DuckDuckGo, Startpage, and Searx support

### 🎮 **Games Collection**
Access 25+ popular online games including:
- **Puzzle Games**: 2048, Tetris, Wordle, Minesweeper
- **Action Games**: Slope, Krunker, Shell Shockers, Hole.io
- **Arcade Classics**: Pac-Man, Snake, Flappy Bird, Chrome Dino, Run 3
- **Multiplayer Games**: Agar.io, Slither.io, Surviv.io, Wings.io
- **Strategy Games**: Chess, Bloons TD, Paper.io 2, Connect 4
- **Sports Games**: Basketball Stars

### 📱 **Popular Apps**
Quick access to essential web applications:
- **Communication**: Discord, WhatsApp Web, Slack, Zoom
- **Productivity**: Google Workspace (Docs, Sheets, Slides), Notion, Trello
- **Entertainment**: Netflix, Spotify Web Player
- **Design**: Figma, Canva
- **Email**: Gmail, Outlook
- **Social**: Twitter/X, Reddit
- **Storage**: Google Drive, Google Photos

### 🛠️ **Built-in Tools**
- **Site Checker**: Verify website status and accessibility
- **DNS Tools**: Network diagnostics and DNS lookup utilities
- **Password Generator**: Create secure passwords with customizable options
- **Filter Bypass**: Advanced techniques for accessing restricted content
- **Referrer Control**: Manage HTTP referrer headers for enhanced privacy
- **Cloaker**: Additional stealth browsing features

### 🔒 **Privacy & Security**
- **About:Blank Mode**: Makes tabs appear blank for stealth browsing
- **Anti-GoGuardian**: Protection against monitoring software
- **Tab Protection**: Prevents unauthorized tab manipulation
- **History Protection**: Automatic browsing history clearing
- **Ad Blocking**: Built-in advertisement and tracker blocking
- **HTTPS Enforcement**: Automatic redirect to secure connections
- **WebRTC Protection**: Prevents IP address leaks

### 🎨 **Customization**
- **10+ Themes**: Dark, Light, Ocean Blue, Purple Galaxy, Forest Green, Crimson Red, Sunset Orange, Rose Pink, Cyberpunk, Matrix Green
- **Theme Preview**: Visual theme selection with live previews
- **Auto Theme**: System-based theme switching
- **Animation Controls**: Enable/disable smooth transitions
- **Compact Mode**: Space-efficient interface option

### ⚡ **Performance**
- **Image Compression**: Bandwidth optimization
- **Smart Caching**: Configurable cache sizes (100MB - Unlimited)
- **Link Preloading**: Faster navigation with hover preloading
- **Advanced User Agent**: Customizable browser identification

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm 7+ or pnpm 9+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/vortex-proxy.git
   cd vortex-proxy
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the server**
   ```bash
   pnpm start
   # or
   npm start
   ```

4. **Access Vortex**
   - Open your browser and navigate to `http://localhost:8080`
   - Start browsing securely through the Vortex gateway

## 💻 Usage

### Basic Browsing
1. Enter any URL or search term in the main search bar
2. Click "Go" or press Enter to navigate through the proxy
3. Use Quick Access shortcuts for popular websites

### Gaming
1. Switch to the "Games" tab
2. Browse or search for games by category
3. Click "Play Now" to launch games through the proxy

### Apps Access
1. Navigate to the "Apps" section
2. Click "Launch App" on any application
3. Access web apps securely through the proxy

### Settings Configuration
1. Open the "Settings" tab
2. Customize privacy, security, and appearance options
3. Save your preferences for persistent configuration

## 🛡️ Security Features

Vortex prioritizes user privacy and security with multiple protection layers:

- **Encrypted Connections**: All traffic is routed through secure proxy servers
- **No Logging**: Browsing history and activities are not stored
- **Advanced Stealth**: Multiple techniques to avoid detection by monitoring software
- **Content Filtering**: Built-in protection against malicious websites
- **Data Protection**: Automatic clearing of sensitive information

## 🔧 Technical Details

### Architecture
- **Frontend**: Modern HTML5, CSS3, and JavaScript
- **Backend**: Node.js with Fastify framework
- **Proxy Engine**: Ultraviolet proxy with BareMux transport
- **WebSocket Support**: Real-time communication capabilities
- **Service Worker**: Advanced caching and offline functionality

### Dependencies
- **Fastify**: High-performance web framework
- **@mercuryworkshop/bare-mux**: Bare multiplexer for proxy transport
- **@mercuryworkshop/epoxy-transport**: Advanced proxy transport layer
- **ws**: WebSocket implementation
- **wisp-server-node**: WISP protocol support

### Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📁 Project Structure

```
vortex/
├── public/                 # Static web assets
│   ├── index.html         # Main application page
│   ├── index.css          # Application styles
│   ├── index.js           # Client-side logic
│   ├── uv/                # Ultraviolet proxy files
│   └── favicon.svg        # Application icon
├── src/
│   └── index.js           # Server entry point
├── package.json           # Project configuration
└── README.md             # This file
```

## 🌟 Contributing

We welcome contributions to make Vortex even better! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Test thoroughly before submitting
- Update documentation for new features
- Ensure browser compatibility

## 📄 License

This project is licensed under the **GPL-3.0-or-later** license. See the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

Vortex is designed for educational purposes and legitimate privacy needs. Users are responsible for complying with their local laws and institutional policies. The developers do not condone or encourage the violation of any terms of service or legal restrictions.

## 🆘 Support

For support, bug reports, or feature requests:

- **Issues**: Open an issue on GitHub
- **Discussions**: Join community discussions
- **Documentation**: Check the project wiki

## 🙏 Acknowledgments

- **Ultraviolet Proxy**: Core proxy technology
- **Mercury Workshop**: Advanced transport protocols
- **Fastify Team**: High-performance web framework
- **Contributors**: Everyone who helps improve Vortex

---

**Made with ❤️ for a free and open internet**

*Navigate the web without limits - Experience the power of Vortex*
