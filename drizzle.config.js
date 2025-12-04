
import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit'

config({ path: '.env.local' });
export default defineConfig({
    schema: "./utils/schema.js",   
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials: {
       url: process.env.NEXT_PUBLIC_DATABASE_URL ,
    }
});

