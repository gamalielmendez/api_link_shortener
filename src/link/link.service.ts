import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { Link } from './entities/link.entity';
import { Op } from 'sequelize';

@Injectable()
export class LinkService {

  private links: Link[] = []

  constructor(
    @Inject('LINKS_REPOSITORY')
    private linkRepository: typeof Link
  ) { }

  async create(createLinkDto: CreateLinkDto) {

    const exist = await this.linkRepository.findOne({
      where: {
        url: createLinkDto.url
      }
    })

    if (exist) {
      return exist
    }

    const endDate = new Date();
    endDate.setFullYear(endDate.getFullYear() + 1);
    const endDateString = endDate.toISOString().slice(0, 19).replace('T', ' ');
    const shortId = Math.random().toString(36).slice(2, 8);
    const link = { short_url: shortId, url: createLinkDto.url, end_date: endDateString }

    return await this.linkRepository.create(link);

  }

  findAll() {
    return this.linkRepository.findAll();
  }

  async findOne(short_url: String) {

    const currentDate = new Date();
    const currentDateString = currentDate.toISOString().slice(0, 19).replace('T', ' ');

    const link = await this.linkRepository.findOne({
      where: {
        short_url: short_url,
        end_date: {
          [Op.gt]: currentDateString
        }
      }
    })

    if (!link) throw new NotFoundException(`Url with id '${short_url}' not found.`)

    return link

  }

}
