import { OnModuleInit, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@mact/prisma-client';
export declare class PrismaService extends PrismaClient implements OnModuleInit {
    onModuleInit(): Promise<void>;
    enableShutdownHooks(app: INestApplication): Promise<void>;
}
