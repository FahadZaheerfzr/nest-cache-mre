import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  async getHello(): Promise<string> {
    const cachedData: string = await this.cacheManager.get('key');
    if (cachedData) {
      return cachedData;
    }

    await this.cacheManager.set('key', 'Hello World from Cache!');
    return 'Hello World!';
  }
}
