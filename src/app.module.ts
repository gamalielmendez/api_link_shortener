import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LinkModule } from './link/link.module';
import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, LinkModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
