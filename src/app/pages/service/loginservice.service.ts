import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';
import * as bcrypt from 'bcryptjs';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  private supabase: SupabaseClient;
  private auth: SupabaseAuthClient;

  constructor() {
    this.supabase = createClient(
      'https://ceoflgbmuosykixuxuqr.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlb2ZsZ2JtdW9zeWtpeHV4dXFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NDcwMTcsImV4cCI6MjA1NzUyMzAxN30.-HIcrcwsTkj7unhtkStAv0pANHOVUCtbWwghlHjz-4c'
    );
    this.auth = this.supabase.auth;
  }

  getSupabaseClient(): SupabaseClient {
    return this.supabase;
  }

  getAuthClient(): SupabaseAuthClient {
    return this.auth;
  }

  async loginDirect(username: string, password: string): Promise<{ success: boolean; error: any }> {
    try {
      console.log(username, password)
      const { data, error } = await this.supabase
        .from('users')
        .select('password')
        .eq('username', username)
        .single();

      if (error) {
        return { success: false, error: error };
      }

      if (!data) {
        return { success: false, error: { message: 'User not found' } };
      }

      const passwordMatch = await bcrypt.compare(password, data.password);

      if (passwordMatch) {
        return { success: true, error: null };
      } else {
        return { success: false, error: { message: 'Incorrect password' } };
      }
    } catch (error) {
      return { success: false, error: error };
    }
  }

  async getSession() {
    return await this.supabase.auth.getSession();
  }

  async signOut() {
    return await this.supabase.auth.signOut();
  }
}
