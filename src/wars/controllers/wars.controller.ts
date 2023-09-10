import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WarsService } from '../services/wars.service';
import { CreateWarDto } from '../dto/create-war.dto';
import { UpdateWarDto } from '../dto/update-war.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('wars')
export class WarsController {
  constructor(private readonly warsService: WarsService) {}

  @Post()
  @ApiTags('wars')
  @ApiOperation({ summary: 'Create by query' })
  @ApiResponse({
    status: 201,
    description: 'Successful.',
    // type: [ProgramDetailResponse],
  })
  @ApiResponse({
    status: 400,
    description: 'Error bad request.',
  })
  async create(@Body() body: CreateWarDto) {
    const response = await this.warsService.create(body);
    return response.data;
  }

  @Get()
  @ApiTags('wars')
  @ApiOperation({ summary: 'List by query' })
  @ApiResponse({
    status: 201,
    description: 'Successful.',
    // type: [ProgramDetailResponse],
  })
  @ApiResponse({
    status: 400,
    description: 'Error bad request.',
  })
  findAll() {
    return this.warsService.findAll();
  }

  @Get(':id')
  @ApiTags('wars')
  @ApiOperation({ summary: 'List by query' })
  @ApiResponse({
    status: 201,
    description: 'Successful.',
    // type: [ProgramDetailResponse],
  })
  @ApiResponse({
    status: 400,
    description: 'Error bad request.',
  })
  findOne(@Param('id') id: string) {
    return this.warsService.findOne(+id);
  }

  @Patch(':id')
  @ApiTags('wars')
  @ApiOperation({ summary: 'Update by parenId' })
  @ApiResponse({
    status: 201,
    description: 'Successful.',
    // type: [ProgramDetailResponse],
  })
  @ApiResponse({
    status: 400,
    description: 'Error bad request.',
  })
  update(@Param('id') id: string, @Body() updateWarDto: UpdateWarDto) {
    return this.warsService.update(+id, updateWarDto);
  }

  @Delete(':id')
  @ApiTags('wars')
  @ApiOperation({ summary: 'Delete by id' })
  @ApiResponse({
    status: 201,
    description: 'Successful.',
    // type: [ProgramDetailResponse],
  })
  @ApiResponse({
    status: 400,
    description: 'Error bad request.',
  })
  remove(@Param('id') id: string) {
    return this.warsService.remove(+id);
  }
}
