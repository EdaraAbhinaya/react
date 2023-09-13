import express from 'express';
import cors from 'cors';
import productRoutes from './src/routes/productRoute';

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

// Register product routes
app.use('/api', productRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
