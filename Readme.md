# Government Polytechnic for Women, Siddipet - Website

A modern, interactive, and responsive website for GPWS Siddipet with excellent UI/UX design.

## 🌟 Features

### Design & UI/UX
- **Modern, Clean Design**: Contemporary gradient-based color scheme with purple theme
- **Smooth Animations**: Fade-in effects, hover animations, and scroll-triggered reveals
- **Fully Responsive**: Mobile-first design that works on all devices
- **Interactive Elements**: Hover effects, click interactions, and dynamic content
- **Accessibility**: Keyboard navigation, proper ARIA labels, and semantic HTML

### Sections
1. **Hero Section**: Eye-catching landing with animated content and scroll indicator
2. **Statistics**: Animated counter cards showing key metrics
3. **About Us**: Information about the institution with principal details
4. **Departments**: Detailed cards for CSE, EEE, and Civil Engineering
5. **Vision & Mission**: Institution's goals and objectives
6. **Facilities**: Showcase of campus facilities with images
7. **Gallery**: Interactive photo gallery with lightbox effect
8. **Contact Form**: Functional form with validation and success notifications
9. **Footer**: Comprehensive footer with links and social media

### Interactive Features
- ✅ Sticky navigation with scroll effects
- ✅ Scroll progress bar at top
- ✅ Smooth scrolling between sections
- ✅ Animated counters for statistics
- ✅ Image gallery with lightbox
- ✅ Form submission with notifications
- ✅ Mobile hamburger menu
- ✅ Parallax effects on hero section
- ✅ Hover effects on all interactive elements

## 📁 File Structure

```
gpws-website/
│
├── index.html          # Main HTML file
├── style.css           # All styles and animations
├── script.js           # JavaScript functionality
├── README.md           # This file
│
└── images/             # Image folder (create this)
    ├── logo.png
    ├── campus-hero.jpg
    ├── campus-building.jpg
    ├── principal.jpg
    ├── cse-dept.jpg
    ├── eee-dept.jpg
    ├── civil-dept.jpg
    ├── library.jpg
    ├── lab.jpg
    ├── hostel.jpg
    ├── sports.jpg
    ├── gallery-1.jpg to gallery-6.jpg
    └── map.jpg
```

## 🚀 Quick Start

### 1. Download Files
Save the following files in a folder:
- `index.html`
- `style.css`
- `script.js`

### 2. Create Images Folder
Create a folder named `images` in the same directory as your HTML file.

### 3. Add Images
Add the following images to the `images` folder:

**Required Images:**
- `logo.png` - College logo (50x50px recommended)
- `campus-hero.jpg` - Main hero background (1920x1080px)
- `campus-building.jpg` - Campus building photo (800x600px)
- `principal.jpg` - Principal's photo (300x300px)
- `cse-dept.jpg` - CSE department image (600x400px)
- `eee-dept.jpg` - EEE department image (600x400px)
- `civil-dept.jpg` - Civil department image (600x400px)
- `library.jpg` - Library photo (600x400px)
- `lab.jpg` - Laboratory photo (600x400px)
- `hostel.jpg` - Hostel photo (600x400px)
- `sports.jpg` - Sports facility photo (600x400px)
- `gallery-1.jpg` to `gallery-6.jpg` - Campus life photos (600x400px each)
- `map.jpg` - Campus location map (400x200px)

**Note:** If images are not available, the website uses fallback images from Unsplash. However, for best results, use actual college photos.

### 4. Open Website
Simply open `index.html` in a web browser.

## 🎨 Customization Guide

### Colors
Edit the CSS variables in `style.css`:
```css
:root {
  --primary-color: #600080;      /* Main purple */
  --primary-dark: #4a0063;       /* Dark purple */
  --primary-light: #8b00c7;      /* Light purple */
  --secondary-color: #2c003e;    /* Footer dark */
  --accent-color: #ff6b9d;       /* Accent pink */
}
```

### Content
Edit `index.html` to update:
- College name and details
- Principal information
- Department details
- Contact information
- Statistics numbers
- Vision and mission statements

### Images
Replace placeholder images in the `images` folder with actual college photos.

### Fonts
Current font: Segoe UI (system font)
To change, add Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
```
Then update CSS:
```css
body {
  font-family: 'Poppins', sans-serif;
}
```

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11 (limited support)

## 💡 Tips for Best Performance

### Image Optimization
1. Compress images before upload (use TinyPNG or similar)
2. Recommended formats: JPG for photos, PNG for logos
3. Max file size: 200KB per image

### Hosting Recommendations
- **Free**: GitHub Pages, Netlify, Vercel
- **Paid**: AWS S3, DigitalOcean, Hostinger

### SEO Optimization
Add to `<head>` in HTML:
```html
<meta name="description" content="Government Polytechnic for Women, Siddipet - Top 5 Women's Polytechnic in Telangana">
<meta name="keywords" content="GPWS, Siddipet, Women Polytechnic, Engineering, Telangana">
<meta property="og:title" content="GPWS Siddipet">
<meta property="og:description" content="Empowering women through technical education">
<meta property="og:image" content="images/campus-hero.jpg">
```

## 📝 Form Configuration

The contact form currently shows a success notification. To connect it to a backend:

### Option 1: Formspree (Easiest)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Google Forms
Embed a Google Form or use Google Apps Script

### Option 3: Custom Backend
Update the `script.js` form submission handler to send data to your server

## 🐛 Troubleshooting

**Images not loading?**
- Check file paths are correct
- Ensure image files are in the `images` folder
- Check image file names match exactly (case-sensitive)

**Menu not working on mobile?**
- Ensure JavaScript file is linked correctly
- Check browser console for errors

**Animations not smooth?**
- Clear browser cache
- Update browser to latest version

## 📞 Support & Contact

For technical support or questions about the website:
- Email: info@gpwsiddipet.edu.in
- Phone: +91 8728 234567

## 📄 License

© 2024 Government Polytechnic for Women, Siddipet. All rights reserved.

---

## 🎓 Future Enhancements

Potential features to add:
- [ ] Online admission portal
- [ ] Student login dashboard
- [ ] Faculty directory
- [ ] Event calendar
- [ ] Blog/News section
- [ ] Alumni portal
- [ ] Placement statistics dashboard
- [ ] Virtual campus tour
- [ ] Multi-language support
- [ ] Dark mode toggle

---

**Made with ❤️ for Women Empowerment**

here you can get live og projct:
https://lohithya07.github.io/smart-chatbot-integrated-college-website
