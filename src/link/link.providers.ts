import { Link } from './entities/link.entity';

export const linksProviders = [
  {
    provide: 'LINKS_REPOSITORY',
    useValue: Link,
  },
];