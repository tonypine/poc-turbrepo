"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
let AppController = class AppController {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    getPostById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prismaService.post.findUnique({ where: { id: Number(id) } });
        });
    }
    getFilteredPosts(take, skip, searchString, orderBy) {
        return __awaiter(this, void 0, void 0, function* () {
            const or = searchString
                ? {
                    OR: [
                        { title: { contains: searchString } },
                        { content: { contains: searchString } },
                    ],
                }
                : {};
            return this.prismaService.post.findMany({
                where: Object.assign({ published: true }, or),
                include: { author: true },
                take: Number(take) || undefined,
                skip: Number(skip) || undefined,
                orderBy: {
                    updatedAt: orderBy,
                },
            });
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prismaService.user.findMany();
        });
    }
    getDraftsByUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prismaService.user
                .findUnique({
                where: { id: Number(id) },
            })
                .posts({
                where: {
                    published: false,
                },
            });
        });
    }
    createDraft(postData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, content, authorEmail } = postData;
            return this.prismaService.post.create({
                data: {
                    title,
                    content,
                    author: {
                        connect: { email: authorEmail },
                    },
                },
            });
        });
    }
    signupUser(userData) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const postData = (_a = userData.posts) === null || _a === void 0 ? void 0 : _a.map((post) => ({
                title: post === null || post === void 0 ? void 0 : post.title,
                content: post === null || post === void 0 ? void 0 : post.content,
            }));
            return this.prismaService.user.create({
                data: {
                    name: (userData === null || userData === void 0 ? void 0 : userData.name) || 'John Doe',
                    age: userData.age,
                    email: userData.email,
                    posts: {
                        create: postData,
                    },
                },
            });
        });
    }
    togglePublishPost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const postData = yield this.prismaService.post.findUnique({
                where: { id: Number(id) },
                select: {
                    published: true,
                },
            });
            return this.prismaService.post.update({
                where: { id: Number(id) || undefined },
                data: { published: !(postData === null || postData === void 0 ? void 0 : postData.published) },
            });
        });
    }
    deletePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prismaService.post.delete({ where: { id: Number(id) } });
        });
    }
    incrementPostViewCount(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prismaService.post.update({
                where: { id: Number(id) },
                data: {
                    viewCount: {
                        increment: 1,
                    },
                },
            });
        });
    }
};
__decorate([
    (0, common_1.Get)('post/:id'),
    __param(0, (0, common_1.Param)('id'))
], AppController.prototype, "getPostById", null);
__decorate([
    (0, common_1.Get)('feed'),
    __param(0, (0, common_1.Query)('take')),
    __param(1, (0, common_1.Query)('skip')),
    __param(2, (0, common_1.Query)('searchString')),
    __param(3, (0, common_1.Query)('orderBy'))
], AppController.prototype, "getFilteredPosts", null);
__decorate([
    (0, common_1.Get)('users')
], AppController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)('user/:id/drafts'),
    __param(0, (0, common_1.Param)('id'))
], AppController.prototype, "getDraftsByUser", null);
__decorate([
    (0, common_1.Post)('post'),
    __param(0, (0, common_1.Body)())
], AppController.prototype, "createDraft", null);
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)())
], AppController.prototype, "signupUser", null);
__decorate([
    (0, common_1.Put)('publish/:id'),
    __param(0, (0, common_1.Param)('id'))
], AppController.prototype, "togglePublishPost", null);
__decorate([
    (0, common_1.Delete)('post/:id'),
    __param(0, (0, common_1.Param)('id'))
], AppController.prototype, "deletePost", null);
__decorate([
    (0, common_1.Put)('/post/:id/views'),
    __param(0, (0, common_1.Param)('id'))
], AppController.prototype, "incrementPostViewCount", null);
AppController = __decorate([
    (0, common_1.Controller)()
], AppController);
exports.AppController = AppController;
