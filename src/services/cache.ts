import { openDB, IDBPDatabase } from 'idb';

interface CacheDB {
  articles: {
    id: string;
    title: string;
    content: string;
    timestamp: number;
  };
  milestones: {
    id: string;
    babyId: string;
    type: string;
    achieved: boolean;
    date: number;
  };
  userData: {
    id: string;
    data: any;
    lastUpdated: number;
  };
  imageCache: {
    id: string;
    data: any;
    timestamp: number;
  };
}

class CacheService {
  private dbName = 'virtue-baby-cache';
  private version = 1;
  private db: IDBPDatabase<CacheDB> | null = null;

  async init() {
    this.db = await openDB<CacheDB>(this.dbName, this.version, {
      upgrade(db) {
        // Create stores
        if (!db.objectStoreNames.contains('articles')) {
          db.createObjectStore('articles', { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains('milestones')) {
          db.createObjectStore('milestones', { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains('userData')) {
          db.createObjectStore('userData', { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains('imageCache')) {
          db.createObjectStore('imageCache', { keyPath: 'id' });
        }
      },
    });
  }

  async set(storeName: keyof CacheDB, key: string, value: any) {
    if (!this.db) await this.init();
    try {
      const data = {
        id: key,
        ...value,
        lastUpdated: Date.now(),
      };
      await this.db!.put(storeName, data);
      return true;
    } catch (error) {
      console.error('Cache set error:', error);
      return false;
    }
  }

  async get<T = any>(storeName: keyof CacheDB, key: string): Promise<T | null> {
    if (!this.db) await this.init();
    try {
      const data = await this.db!.get(storeName, key);
      return data as T;
    } catch (error) {
      console.error('Cache get error:', error);
      return null;
    }
  }

  async getAll<T = any>(storeName: keyof CacheDB): Promise<T[]> {
    if (!this.db) await this.init();
    try {
      const data = await this.db!.getAll(storeName);
      return data as T[];
    } catch (error) {
      console.error('Cache getAll error:', error);
      return [];
    }
  }

  async remove(storeName: keyof CacheDB, key: string): Promise<boolean> {
    if (!this.db) await this.init();
    try {
      await this.db!.delete(storeName, key);
      return true;
    } catch (error) {
      console.error('Cache remove error:', error);
      return false;
    }
  }

  async clear(storeName: keyof CacheDB): Promise<boolean> {
    if (!this.db) await this.init();
    try {
      await this.db!.clear(storeName);
      return true;
    } catch (error) {
      console.error('Cache clear error:', error);
      return false;
    }
  }

  // Helper method to check if data is stale (older than 24 hours)
  isStale(timestamp: number): boolean {
    const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;
    return Date.now() - timestamp > TWENTY_FOUR_HOURS;
  }
}

export const cacheService = new CacheService();