/*
Express server setup
EJS template engine configuration
Static file serving
Basic routes for home, flute, and drums sections
Sample data structure for songs
Error handling
Server startup configuration
*/

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
        title: 'Ridhi & Dhruv - Da Young Musicians Hub',
        children: {
            child1: {
                name: 'Ridhi - The Flutist',
                age: '13',
                instruments: ['Flute'],
                about: 'Passionate about music and learning flute. Enjoys classical and modern tunes.',
                achievements: ['MTAC Honors L5 ', 'First Chair - in Middle School : 8th Grade']
            },
            child2: {
                name: 'Dhruv - The Rockstar',
                age: '10',
                instruments: ['Drums'],
                about: 'Enthusiastic drummer with natural rhythm. Loves creating beats - BoomBox.',
                achievements: ['Mastered 15+ Songs so far', 'Basic rhythm mastery']
            }
        },
        sections: {
            flute: {
                songs: [
                    {
                        name: 'Titanic Theme',
                        artist: 'James Horner',
                        difficulty: 'Intermediate',
                        youtubeUrl: 'https://www.youtube.com/watch?v=K69ix4ehy70'
                    }
                ]
            },
            drums: {
                songs: [
                    {
                        name: 'We Will Rock You',
                        artist: 'Queen',
                        difficulty: 'Beginner',
                        youtubeUrl: 'https://www.youtube.com/watch?v=2YA0D5VmyXM'
                    }
                ]
            }
        }
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

