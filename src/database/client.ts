import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase";

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    throw new Error("FATAL: NEXT_PUBLIC_SUPABASE_URL not found.");
}

if (!process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) {
    throw new Error("FATAL: NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY not found.");
}

const sbClient = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
);

export default sbClient;
