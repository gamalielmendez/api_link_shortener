import { Injectable } from '@nestjs/common';
import { LinkService } from './link/link.service';

@Injectable()
export class AppService {

  constructor(
    private readonly linkService: LinkService,
  ) { }

  async redirect(code: string) {
    const link = await this.linkService.findOne(code) 
    return link
  }

}