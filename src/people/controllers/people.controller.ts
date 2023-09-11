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
import { PeoplesService } from '../services/peoples.service';
import { CreatePeoplesDto } from '../dto/create-peoples.dto';
import { UpdatePeoplesDto } from '../dto/update-pleoples.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetWrasQueryDTO } from '../dto/select-peoples.dto';
import { IPeopleES } from '../struct/peoples.struct';
import { IEntityId, IRows } from '../../core/struc/response.struct';
import {
  EntityIdResponseDTO,
  RowsResponseDTO,
} from '../../core/dto/response.dto';

@Controller('Peoples')
export class PeoplesController {
  constructor(private readonly peoplesService: PeoplesService) {}

  @Post()
  @ApiTags('Peoples')
  @ApiOperation({ summary: 'Create by query' })
  @ApiResponse({
    status: 201,
    description: 'Successful.',
    type: EntityIdResponseDTO,
  })
  @ApiResponse({
    status: 400,
    description: 'Error bad request.',
  })
  async create(@Body() body: CreatePeoplesDto): Promise<IEntityId> {
    const response = await this.peoplesService.create(body);
    if (response.error) {
      throw new InternalServerErrorException();
    }
    return response.data;
  }

  @Get()
  @ApiTags('Peoples')
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
  async findAll(@Query() query: GetWrasQueryDTO): Promise<IPeopleES[]> {
    const response = this.peoplesService.findAll(query);
    if ((await response).error) {
      throw new InternalServerErrorException();
    }
    return (await response).data;
  }

  @Get(':id')
  @ApiTags('Peoples')
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
  async findOne(@Param('id') id: number): Promise<IPeopleES> {
    const response = await this.peoplesService.findOne(id);
    if (response.error) {
      throw new InternalServerErrorException();
    }
    if (!response.data) {
      throw new NotFoundException();
    }
    return response.data;
  }

  @Get('translate/SWAPI/:id')
  @ApiTags('Peoples')
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
  async findOnePeoples(@Param('id') id: number) {
    const response = await this.peoplesService.findOnePeoples(id);
    if (response.error) {
      throw new InternalServerErrorException();
    }
    if (!response.data) {
      throw new NotFoundException();
    }
    return response.data;
  }

  @Patch(':id')
  @ApiTags('Peoples')
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
    @Body() body: UpdatePeoplesDto,
  ): Promise<IRows> {
    const response = await this.peoplesService.update(id, body);
    if (response.error) {
      throw new InternalServerErrorException();
    }
    return response.data;
  }

  @Delete(':id')
  @ApiTags('Peoples')
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
    const response = await this.peoplesService.remove(id);
    if (response.error) {
      throw new InternalServerErrorException();
    }
    return response.data;
  }
}
