import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// http://localhost:3000/api/auth/login