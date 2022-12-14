import { User as UserModel, Post as PostModel, Prisma } from '@mact/prisma-client';
import { PrismaService } from './prisma.service';
export declare class AppController {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getPostById(id: string): Promise<PostModel | null>;
    getFilteredPosts(take?: number, skip?: number, searchString?: string, orderBy?: 'asc' | 'desc'): Promise<PostModel[]>;
    getAllUsers(): Promise<UserModel[]>;
    getDraftsByUser(id: string): Promise<PostModel[]>;
    createDraft(postData: {
        title: string;
        content?: string;
        authorEmail: string;
    }): Promise<PostModel>;
    signupUser(userData: {
        name?: string;
        email: string;
        age: number;
        posts?: Prisma.PostCreateInput[];
    }): Promise<UserModel>;
    togglePublishPost(id: string): Promise<PostModel>;
    deletePost(id: string): Promise<PostModel>;
    incrementPostViewCount(id: string): Promise<PostModel>;
}
