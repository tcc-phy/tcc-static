import "server-only";
import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase";

if (!process.env.SUPABASE_URL) {
    throw new Error("FATAL: env SUPABASE_URL not found.");
}

if (!process.env.SUPABASE_SECRET_KEY) {
    throw new Error("FATAL: env SUPABASE_SECRET_KEY not found.");
}

const sbAdmin = createClient<Database>(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SECRET_KEY
);

export default sbAdmin;
