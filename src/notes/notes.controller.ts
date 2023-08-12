import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('notes')
export class NotesController {
  @Get()
  findAll(): string {
    return 'Notes';
  }

  @Get('/stats')
  findStats(): string {
    return 'Stats';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Note #${id}`;
  }

  @Post()
  create(@Body() body: any): string {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any): string {
    return `Note #${id} updated`;
  }
}
