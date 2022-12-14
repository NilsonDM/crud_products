const dotenv = require('dotenv')
dotenv.config()

const config = {
    port: process.env.PORT || 5000 ,
    nodeEnv: process.env.NODE_ENV || 'development',
    db:{
        port: process.env.DB_PORT || 5432,
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || 'Natalia12345',
        host: process.env.DB_HOST || 'localhost',
        name: process.env.DB_NAME
    }
}

module.exports = config