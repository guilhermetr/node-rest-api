import sql from 'mssql'
import config from '../config.js'

const dbSettings = {
    user: config.databaseUser,
    password: config.databasePassword,
    server: config.databaseServer,
    database: config.databaseName,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
}

export async function getConnection() {
    try {
        const connection = sql.connect(dbSettings);        
        return connection;
    } catch (error) {
        console.error(error);
    }
}
