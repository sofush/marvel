import express from 'express';
import swaggerUi from 'swagger-ui-express';
import fs from 'node:fs';
import YAML from 'yaml';

const app = express();
const swaggerDocument = fs.readFileSync('./data/swagger.yml', 'utf-8');
const parsedSwaggerDocument = YAML.parse(swaggerDocument);

app.use('/api', swaggerUi.serve, swaggerUi.setup(parsedSwaggerDocument));

export default app;
