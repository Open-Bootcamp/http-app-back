import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './entities/cat.entity';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCats(): Cat[] {
    return this.catsService.findAll();
  }

  @Get(':code')
  getCatByCode(@Param('code', ParseIntPipe) code: number): Cat {
    return this.catsService.findOneByCode(code);
  }
}
