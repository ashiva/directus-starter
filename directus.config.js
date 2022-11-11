
module.exports = function (env) {
    return {
        // Railway inputs
        ADMIN_EMAIL: env.ADMIN_EMAIL,
        ADMIN_PASSWORD: env.ADMIN_PASSWORD,
        KEY: env.KEY,
        SECRET: env.SECRET,

        // Reference: https://docs.railway.app/deploy/exposing-your-app
        PORT: env.PORT,

        // Reference: https://docs.railway.app/develop/variables#railway-provided-variables
        PUBLIC_URL: `http://0.0.0.0:${env.PORT}`,

        // Database variables from Railway PostgreSQL Plugin
        // Reference: https://docs.railway.app/plugins/postgresql
        DB_CLIENT: 'pg',
        DB_HOST: env.DB_HOST,
        DB_PORT: env.DB_PORT,
        DB_DATABASE: env.DB_DATABASE,
        DB_USER: env.DB_USER,
        DB_PASSWORD: env.DB_PASSWORD,
        
        // S3 Settings
        STORAGE_LOCATIONS: 's3',
        STORAGE_S3_DRIVER: 's3',
        STORAGE_S3_ROOT: '/cms',
        STORAGE_S3_HEALTHCHECK_THRESHOLD: 750,
        STORAGE_S3_KEY: env.S3_KEY,
        STORAGE_S3_SECRET: env.S3_SECRET,
        STORAGE_S3_BUCKET: 'freehumans',
        STORAGE_S3_REGION: 'us-west-2',
        STORAGE_S3_ENDPOINT: 'http://s3.us-west-2.amazonaws.com',
    };
};
