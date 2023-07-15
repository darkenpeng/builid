import { Controller, Get, Inject, Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
@Controller('ping')
export class PingController {
  constructor(@Inject('SUPABASE') private supabase: SupabaseClient) {}

  @Get()
  async ping(): Promise<any[]> {
    const { data } = await this.supabase.from('temp').select('*');
    console.log(data);
    return data;
  }
}
