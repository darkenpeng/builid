import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PingController } from './supabase/ping.controller';
import { SupabaseProvider } from './supabase/supabase';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, PingController],
  providers: [AppService, SupabaseProvider],
})
export class AppModule {}
