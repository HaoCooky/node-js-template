import { BaseModule } from './index';
import { Container } from 'typescript-ioc';

export type OtherType<T> = Function & { prototype: T };

export abstract class DI {
  static init(modules: BaseModule[]): void {
    modules.forEach(module => module.configuration());
  }

  static get<T>(key: string | OtherType<T>): T {
    if (typeof key === 'string') {
      return Container.getValue(key);
    } else {
      return Container.get<T>(key);
    }
  }
}

export enum DIKeys {
  Client = 'client'
}
