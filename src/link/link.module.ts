import { Module } from '@nestjs/common';
import { LinkService } from './link.service';
import { LinkController } from './link.controller';
import { linksProviders } from './link.providers';

@Module({
  controllers: [LinkController],
  providers: [
    LinkService,
    ...linksProviders,
  ],
  exports: [
    LinkService
  ]
})
export class LinkModule { }
