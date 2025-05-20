const express = require('express');
const path = require('path');
const app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Gupta''s Music Hub',
        sections: {
            flute: {
                songs: [
                    {
                        name: 'Titanic Theme',
                        artist: 'James Horner',
                        difficulty: 'Intermediate',
                        youtubeUrl: 'https://youtube.com'
                    },
                    {
                        name: 'Let It Go',
                        artist: 'Disney',
                        difficulty: 'Beginner',
                        youtubeUrl: 'https://youtube.com'
                    }
                ]
            },
            drums: {
                songs: [
                    {
                        name: 'We Will Rock You',
                        artist: 'Queen',
                        difficulty: 'Beginner',
                        youtubeUrl: 'https://youtube.com'
                    },
                    {
                        name: 'In The Air Tonight',
                        artist: 'Phil Collins',
                        difficulty: 'Intermediate',
                        youtubeUrl: 'https://youtube.com'
                    }
                ]
            }
        }
    });
});

// Additional routes for specific sections
app.get('/flute', (req, res) => {
    res.render('flute', {
        title: 'Flute Section'
    });
});

app.get('/drums', (req, res) => {
    res.render('drums', {
        title: 'Drums Section'
    });
});

// Error handling
app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Page Not Found'
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Handle server errors
process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});
