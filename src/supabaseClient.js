import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://rwdzrothlndvupzbffdx.supabase.co"; // Replace with your Supabase URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3ZHpyb3RobG5kdnVwemJmZmR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzNjk5MTYsImV4cCI6MjA1NTk0NTkxNn0.amf-LKWY1LwF_D6B0MF6C0QbnwFzEwZL4X1iXnqMkYU"; // Replace with your Supabase anon key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
