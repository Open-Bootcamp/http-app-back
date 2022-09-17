import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CatsService {
  private cats = [
    {
      code: 100,
      title: 'Continue',
      description: 'Description',
      image: 'https://http.cat/images/100.jpg'
    },
    {
      code: 101,
      title: 'Switching Protocols',
      description: 'Description',
      image: 'https://http.cat/images/101.jpg'
    },
    {
      code: 102,
      title: 'Processing',
      description: 'Description',
      image: 'https://http.cat/images/102.jpg'
    },
    {
      code: 200,
      title: 'Ok',
      description: 'Description',
      image: 'https://http.cat/images/200.jpg'
    },
    {
      code: 201,
      title: 'Created',
      description: 'Description',
      image: 'https://http.cat/images/201.jpg'
    },
    {
      code: 202,
      title: 'Accepted',
      description: 'Description',
      image: 'https://http.cat/images/202.jpg'
    },
  ];

  findAll() {
    return this.cats
  }

  findOneByCode(code: number) {
    const cat = this.cats.find(cat => cat.code === code)
    if (!cat) throw new NotFoundException(`Status Code ${code} not found`)
    return cat
  }
}
