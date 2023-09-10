import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { WarsService } from '../services/wars.service';
import { CreateWarDto } from '../dto/create-war.dto';
import { UpdateWarDto } from '../dto/update-war.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetWrasQueryDTO } from '../dto/select-war.dto';
import { IWars } from '../struct/wars.struct';
import { IEntityId, IRows } from '../struct/wars.response.struct';
import { RowsResponseDTO } from '../dto/wars.response.dto';

@Controller('wars')
export class WarsController {
  constructor(private readonly warsService: WarsService) {}

  @Post()
  @ApiTags('wars')
  @ApiOperation({ summary: 'Create by query' })
  @ApiResponse({
    status: 201,
    description: 'Successful.',
    type: [CreateWarDto],
  })
  @ApiResponse({
    status: 400,
    description: 'Error bad request.',
  })
  async create(@Body() body: CreateWarDto): Promise<IEntityId> {
    const response = await this.warsService.create(body);
    if (response.error) {
      throw new InternalServerErrorException();
    }
    return response.data;
  }

  @Get()
  @ApiTags('wars')
  @ApiOperation({ summary: 'List by query' })
  @ApiResponse({
    status: 201,
    description: 'Successful.',
    type: [GetWrasQueryDTO],
  })
  @ApiResponse({
    status: 400,
    description: 'Error bad request.',
  })
  async findAll(@Query() query: GetWrasQueryDTO): Promise<IWars[]> {
    const response = this.warsService.findAll(query);
    if ((await response).error) {
      throw new InternalServerErrorException();
    }
    return (await response).data;
  }

  @Get(':id')
  @ApiTags('wars')
  @ApiOperation({ summary: 'List by query' })
  @ApiResponse({
    status: 201,
    description: 'Successful.',
    type: [GetWrasQueryDTO],
  })
  @ApiResponse({
    status: 400,
    description: 'Error bad request.',
  })
  async findOne(@Param('id') id: number): Promise<IWars> {
    const response = await this.warsService.findOne(id);
    if (response.error) {
      throw new InternalServerErrorException();
    }
    if (!response.data) {
      throw new NotFoundException();
    }
    return response.data;
  }

  @Get('test/:id')
  @ApiTags('wars')
  @ApiOperation({ summary: 'List by query' })
  @ApiResponse({
    status: 201,
    description: 'Successful.',
    type: [GetWrasQueryDTO],
  })
  @ApiResponse({
    status: 400,
    description: 'Error bad request.',
  })
  async findOneWars(@Param('id') id: number) {
    const response = await this.warsService.findOneWars(id);
    // if (response.error) {
    //   throw new InternalServerErrorException();
    // }
    // if (!response.data) {
    //   throw new NotFoundException();
    // }
    return response.data;
  }

  @Patch(':id')
  @ApiTags('wars')
  @ApiOperation({ summary: 'Update by parenId' })
  @ApiResponse({
    status: 201,
    description: 'Successful.',
    type: RowsResponseDTO,
  })
  @ApiResponse({
    status: 400,
    description: 'Error bad request.',
  })
  async update(
    @Param('id') id: number,
    @Body() body: UpdateWarDto,
  ): Promise<IRows> {
    const response = await this.warsService.update(id, body);
    if (response.error) {
      throw new InternalServerErrorException();
    }
    return response.data;
  }

  @Delete(':id')
  @ApiTags('wars')
  @ApiOperation({ summary: 'Delete by id' })
  @ApiResponse({
    status: 201,
    description: 'Successful.',
    type: RowsResponseDTO,
  })
  @ApiResponse({
    status: 400,
    description: 'Error bad request.',
  })
  async remove(@Param('id') id: number): Promise<IRows> {
    const response = await this.warsService.remove(id);
    if (response.error) {
      throw new InternalServerErrorException();
    }
    return response.data;
  }
}
