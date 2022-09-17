
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
        EMAIL_TRANSPORT="smtp",
        EMAIL_SENDMAIL_NEW_LINE="unix",
        EMAIL_SENDMAIL_PATH="/usr/sbin/sendmail",

        EMAIL_SMTP_HOST="mail.luxeda.com",
        EMAIL_SMTP_POOL=true,
        EMAIL_SMTP_PORT=465,
        EMAIL_SMTP_SECURE=false,
        EMAIL_SMTP_IGNORE_TLS=false,
        EMAIL_SMTP_USER=env.EMAIL_SMTP_USER
        EMAIL_SMTP_PASSWORD=env.EMAIL_SMTP_PASSWORD,
    };
};
