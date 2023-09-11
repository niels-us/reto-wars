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
import { PlanetsService } from '../services/planets.service';
import { CreatePlanetsDto } from '../dto/create-planets.dto';
import { UpdatePlanetsDto } from '../dto/update-planets.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetWrasQueryDTO } from '../dto/select-planets.dto';
import { IPlanetES } from '../struct/planets.struct';
import { IEntityId, IRows } from '../../core/struc/response.struct';
import {
  EntityIdResponseDTO,
  RowsResponseDTO,
} from '../../core/dto/response.dto';

@Controller('planets')
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}

  @Post()
  @ApiTags('planets')
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
  async create(@Body() body: CreatePlanetsDto): Promise<IEntityId> {
    const response = await this.planetsService.create(body);
    if (response.error) {
      throw new InternalServerErrorException();
    }
    return response.data;
  }

  @Get()
  @ApiTags('planets')
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
  async findAll(@Query() query: GetWrasQueryDTO): Promise<IPlanetES[]> {
    const response = this.planetsService.findAll(query);
    if ((await response).error) {
      throw new InternalServerErrorException();
    }
    return (await response).data;
  }

  @Get(':id')
  @ApiTags('planets')
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
  async findOne(@Param('id') id: number): Promise<IPlanetES> {
    const response = await this.planetsService.findOne(id);
    if (response.error) {
      throw new InternalServerErrorException();
    }
    if (!response.data) {
      throw new NotFoundException();
    }
    return response.data;
  }

  @Get('translate/SWAPI/:id')
  @ApiTags('planets')
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
  async findOnePlanets(@Param('id') id: number) {
    const response = await this.planetsService.findOnePlanets(id);
    if (response.error) {
      throw new InternalServerErrorException();
    }
    if (!response.data) {
      throw new NotFoundException();
    }
    return response.data;
  }

  @Patch(':id')
  @ApiTags('planets')
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
    @Body() body: UpdatePlanetsDto,
  ): Promise<IRows> {
    const response = await this.planetsService.update(id, body);
    if (response.error) {
      throw new InternalServerErrorException();
    }
    return response.data;
  }

  @Delete(':id')
  @ApiTags('planets')
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
    const response = await this.planetsService.remove(id);
    if (response.error) {
      throw new InternalServerErrorException();
    }
    return response.data;
  }
}
