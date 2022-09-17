import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(
    private readonly catsService: CatsService
  ) {}

  @Get()
  getAllCats() {
    return this.catsService.findAll()
  }

  @Get(':code')
  getCatByCode(@Param('code', ParseIntPipe) code: number) {
    return this.catsService.findOneByCode(code)
  }
}
