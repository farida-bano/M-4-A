// pages/api/auth.js

export default function handler(req, res) {
     const { username, password } = req.body;
   
     // Hardcoded user credentials for demonstration purposes
     if (username === 'admin' && password === 'password') {
       res.status(200).json({ message: 'Login successful' });
     } else {
       res.status(401).json({ message: 'Invalid credentials' });
     }
   }
   