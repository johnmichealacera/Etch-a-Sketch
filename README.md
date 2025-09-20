# Etch-a-Sketch

A web-based digital Etch-a-Sketch drawing application built with vanilla HTML, CSS, and JavaScript. This project was created as part of The Odin Project curriculum.

## 🎨 Features

- **Customizable Grid Size**: Create a drawing grid of any size you prefer
- **Multiple Color Options**: 
  - White Tone
  - Black Tone  
  - Red Tone
  - Rainbow Mode (random colors)
- **Interactive Drawing**: Hover over grid cells to draw
- **Reset Functionality**: Clear your drawing and start fresh
- **Resize Option**: Change the grid size without reloading
- **Background Image**: Features a fun background with opacity overlay

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required!

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/Etch-a-Sketch.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Etch-a-Sketch
   ```

3. Open `index.html` in your web browser:
   ```bash
   # Option 1: Double-click index.html
   # Option 2: Open with browser
   open index.html
   # Option 3: Use a local server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## 🎮 How to Use

1. **Start**: Click the "Start Sketch" button on the homepage
2. **Choose Size**: Enter your desired grid size when prompted (e.g., 16 for a 16x16 grid)
3. **Select Color**: Use the dropdown menu to choose your drawing color
4. **Draw**: Move your mouse over the grid cells to draw
5. **Reset**: Click "Reset" to clear your drawing
6. **Resize**: Click "Resize" to change the grid dimensions

## 🛠️ Technical Details

### File Structure
```
Etch-a-Sketch/
├── index.html          # Main HTML file
├── style.css           # Styling and layout
├── app.js              # JavaScript functionality
└── README.md           # This file
```

### Key Technologies
- **HTML5**: Semantic markup and structure
- **CSS3**: Styling, grid layout, and responsive design
- **Vanilla JavaScript**: DOM manipulation and event handling

### Key Features Implementation
- **Dynamic Grid Creation**: Uses CSS Grid with JavaScript to create custom-sized grids
- **Event-Driven Drawing**: Mouse hover events trigger drawing functionality
- **Color Management**: RGB color system with alpha transparency
- **Dynamic UI**: JavaScript creates the entire interface after initial load

## 🎯 Learning Objectives

This project demonstrates:
- DOM manipulation and dynamic element creation
- Event handling (click, hover, change)
- CSS Grid layout
- JavaScript functions and scope
- User input handling
- Responsive design principles

## 🤝 Contributing

Feel free to contribute to this project! Some ideas for improvements:

- Add more color options
- Implement drawing tools (brush size, shapes)
- Add save/load functionality
- Improve mobile responsiveness
- Add keyboard shortcuts
- Implement touch support for mobile devices

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **The Odin Project** for providing the project specification and learning path
- Inspired by the classic Etch-a-Sketch toy from the Ohio Art Company

---

*Happy Drawing! 🎨*
