import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ContactSubmission = {
  id?: string;
  name: string;
  phone: string;
  email: string;
  service_type: string;
  message: string;
  shower_config?: any;
  file_urls?: string[];
  created_at?: string;
  status?: "new" | "contacted" | "closed";
};
