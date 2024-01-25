import { config } from 'dotenv'

config();

export default {
    port: process.env.PORT || 3000,
    databaseUser: process.env.DB_USER,
    databasePassword: process.env.DB_PASSWORD,
    databaseServer: process.env.DB_SERVER,
    databaseName: process.env.DB_NAME,
}