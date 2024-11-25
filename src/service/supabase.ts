import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://unyxrkunsanaqhlzuroh.supabase.co";
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVueXhya3Vuc2FuYXFobHp1cm9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwNDkzODIsImV4cCI6MjA0NzYyNTM4Mn0.vsGGXz4jqfIlovhqRmus50Wwu07DkyVICCmnI_wOhHA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;