import { joi, Use, Context, createParamDecorator, Controller, Description, Get, QuerySchame, Ctx, Query, Post, Body, BodySchame } from 'koast';

@Controller('')
@Description('测试路由')
export default class Test {
  @Get()
  async hi(@Ctx() ctx: Context) {
    return `<h1>Hi, ${ctx.ip}</h1>`;
  }
}
