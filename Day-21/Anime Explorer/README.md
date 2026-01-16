# 🎌 Anime Explorer

A modern, beautiful React-based web application for exploring and discovering anime. Built with a stunning dark theme featuring purple/indigo gradients and glassmorphism design effects.

![Anime Explorer](https://via.placeholder.com/800x400/667eea/ffffff?text=Anime+Explorer)

## ✨ Features

- 🔍 **Smart Search** - Search for any anime with real-time results
- 📊 **Trending Anime** - Discover the most popular anime currently
- 🆕 **Latest Releases** - Browse current season anime
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🎨 **Modern UI/UX** - Beautiful dark theme with smooth animations
- 📖 **Detailed Views** - Comprehensive anime information with expandable synopsis
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times

## 🎯 Unique Features & Implementations

### 1. **Glassmorphism Design**
   - Modern glassmorphism effects on anime cards with backdrop blur
   - Semi-transparent backgrounds with subtle borders
   - Smooth hover animations with elevation effects

### 2. **Advanced Synopsis Truncation**
   - Intelligent sentence-based truncation (not just character count)
   - "Read More/Read Less" functionality for better UX
   - Preserves sentence integrity for better readability

### 3. **URL-Based Search State**
   - Search queries are stored in URL parameters
   - Shareable search results via URL
   - Browser back/forward navigation support

### 4. **Gradient Background System**
   - Multi-layer gradient backgrounds (navbar and body)
   - Purple to indigo gradient theme throughout
   - Consistent color palette across all components

### 5. **Smart Navigation**
   - Context-aware navigation with back button
   - Smooth transitions between pages
   - State preservation during navigation

### 6. **Dynamic Content Loading**
   - Conditional rendering based on search vs. trending
   - Automatic data fetching on route changes
   - Loading states for better user feedback

## 📸 Screenshots

### Home Page - Trending Anime
![Home Page](https://via.placeholder.com/1200x600/1a1a2e/ffffff?text=Home+Page+-+Trending+Anime)
*Beautiful dark theme with gradient background showcasing trending anime cards*

### Search Results
![Search Results](https://via.placeholder.com/1200x600/16213e/ffffff?text=Search+Results)
*Search functionality with filtered anime results displayed in a grid layout*

### Latest Anime Page
![Latest Anime](https://via.placeholder.com/1200x600/0f3460/ffffff?text=Latest+Anime)
*Current season anime displayed with the same elegant design*

### Anime Details Page
![Anime Details](https://via.placeholder.com/1200x600/667eea/ffffff?text=Anime+Details)
*Comprehensive anime information with expandable synopsis and beautiful card layout*

## 🛠️ Tech Stack

- **React 19** - Latest React with modern hooks
- **React Router DOM** - Client-side routing
- **Vite** - Next-generation frontend tooling
- **Axios** - HTTP client for API requests
- **Jikan API** - Unofficial MyAnimeList API
- **CSS3** - Modern CSS with gradients, animations, and glassmorphism

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd "Anime Explorer"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🚀 Usage

### Searching for Anime
1. Type your search query in the search bar in the navbar
2. Press Enter or submit the form
3. View search results displayed in a grid layout

### Viewing Trending Anime
- Navigate to the Home page to see trending anime automatically
- Click on any anime card to view detailed information

### Browsing Latest Releases
- Click on "Latest" in the navigation bar
- Browse through current season anime

### Viewing Anime Details
- Click on any anime card
- View comprehensive information including:
  - Title and cover image
  - Episode count
  - Score and rating
  - Genres
  - Full synopsis (with expand/collapse)

## 🎨 Design Highlights

### Color Scheme
- **Primary Gradient**: `#667eea` → `#764ba2` (Purple to Indigo)
- **Background**: Dark blue gradient (`#1a1a2e` → `#0f3460`)
- **Accent Colors**: Purple (`#a78bfa`) for highlights
- **Text**: White and light gray for optimal contrast

### Animations
- Smooth hover effects on cards
- Elevation transitions
- Button hover states
- Backdrop blur effects

### Responsive Breakpoints
- Mobile-first approach
- Grid layout adapts to screen size
- Details page stacks on mobile devices

## 📡 API Information

This project uses the [Jikan API](https://jikan.moe/) - an unofficial MyAnimeList API that provides:
- Top anime listings
- Search functionality
- Current season anime
- Detailed anime information

**Note**: The API has rate limits. Please be respectful with your requests.

## 🎯 Project Structure

```
Anime Explorer/
├── src/
│   ├── components/
│   │   ├── AnimeCard.jsx      # Reusable anime card component
│   │   ├── AnimeCard.css      # Card styling with glassmorphism
│   │   ├── navbar.jsx         # Navigation component
│   │   └── navbar.css         # Navbar with gradient design
│   ├── pages/
│   │   ├── home.jsx           # Home/Trending page
│   │   ├── home.css           # Home page styling
│   │   ├── Latest.jsx         # Latest anime page
│   │   ├── AnimeDetails.jsx   # Detailed anime view
│   │   └── AnimeDetails.css  # Details page styling
│   ├── App.jsx                # Main app component with routing
│   └── main.jsx               # Entry point
├── public/                    # Static assets
└── package.json              # Dependencies
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Key Implementations

1. **State Management**: React hooks for local state management
2. **Routing**: React Router for SPA navigation
3. **API Integration**: Axios for async data fetching
4. **Error Handling**: Try-catch blocks with console logging
5. **Loading States**: Conditional rendering for loading
6. **URL State**: Query parameters for search functionality

## 📝 Future Enhancements

- [ ] Add favorites/watchlist functionality
- [ ] Implement pagination for search results
- [ ] Add filters (genre, year, rating)
- [ ] Dark/Light theme toggle
- [ ] User authentication
- [ ] Reviews and ratings system

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built with ❤️ as part of the Fullstack Journey

---

**Note**: Add your actual screenshots by replacing the placeholder URLs above with your own images. You can take screenshots of:
1. The home page showing trending anime
2. Search results page
3. Latest anime page
4. Anime details page
5. Mobile responsive view

Save them in a `screenshots/` folder and update the image paths accordingly.
