import { Injectable, NotFoundException } from '@nestjs/common';
import * as catData from './../../catData.json';

@Injectable()
export class CatsService {
  private cats = catData;

  findAll() {
    return this.cats;
  }

  findOneByCode(code: number) {
    const cat = this.cats.find((cat) => cat.code === code);
    if (!cat) throw new NotFoundException(`Status Code ${code} not found`);
    return cat;
  }
}
