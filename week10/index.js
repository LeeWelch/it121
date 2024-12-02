import http from 'http';
import fs from 'fs';

http.createServer((req,res) => {
    let path = req.url.toLowerCase();
    switch (path) {
        case '/':
            fs.readFile('home.html', (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });
            break;

        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
                    <title>About Page</title>
                    <h1>About Me</h1>
                    <p>Hello! I'm Lee Welch, a web development student in my second year at Seattle Central College. </p>
                    <p>Python is my favorite language, I've also learned HTML, CSS, PHP, Java and am working on JavaScript in this class.</p>
                    <p>My goal is to finish my program at SCC and enroll in a Bachelor's program at North Seattle College.</p>
                `);
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not found');
            break;
    }
}).listen(process.env.PORT || 3000, () => {
    console.log('Server running at http://localhost:3000/')
});   
