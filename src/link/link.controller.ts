import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { LinkService } from './link.service';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';

@Controller('/link')
export class LinkController {
  constructor(private readonly linkService: LinkService) { }

  @Post()
  create(@Body() createLinkDto: CreateLinkDto) {
    return this.linkService.create(createLinkDto);
  }

  @Get("/list")
  findAll() {
    return this.linkService.findAll();
  }

}
