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
import { SpeciesService } from '../services/species.service';
import { CreateSpeciesDto } from '../dto/create-species.dto';
import { UpdateSpeciesDto } from '../dto/update-species.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetWrasQueryDTO } from '../dto/select-species.dto';
import { ISpecieES } from '../struct/species.struct';
import { IEntityId, IRows } from '../../core/struc/response.struct';
import {
  EntityIdResponseDTO,
  RowsResponseDTO,
} from '../../core/dto/response.dto';

@Controller('Species')
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) {}

  @Post()
  @ApiTags('Species')
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
  async create(@Body() body: CreateSpeciesDto): Promise<IEntityId> {
    const response = await this.speciesService.create(body);
    if (response.error) {
      throw new InternalServerErrorException();
    }
    return response.data;
  }

  @Get()
  @ApiTags('Species')
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
  async findAll(@Query() query: GetWrasQueryDTO): Promise<ISpecieES[]> {
    const response = this.speciesService.findAll(query);
    if ((await response).error) {
      throw new InternalServerErrorException();
    }
    return (await response).data;
  }

  @Get(':id')
  @ApiTags('Species')
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
  async findOne(@Param('id') id: number): Promise<ISpecieES> {
    const response = await this.speciesService.findOne(id);
    if (response.error) {
      throw new InternalServerErrorException();
    }
    if (!response.data) {
      throw new NotFoundException();
    }
    return response.data;
  }

  @Get('translate/SWAPI/:id')
  @ApiTags('Species')
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
  async findOneSpecies(@Param('id') id: number) {
    const response = await this.speciesService.findOneSpecies(id);
    if (response.error) {
      throw new InternalServerErrorException();
    }
    if (!response.data) {
      throw new NotFoundException();
    }
    return response.data;
  }

  @Patch(':id')
  @ApiTags('Species')
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
    @Body() body: UpdateSpeciesDto,
  ): Promise<IRows> {
    const response = await this.speciesService.update(id, body);
    if (response.error) {
      throw new InternalServerErrorException();
    }
    return response.data;
  }

  @Delete(':id')
  @ApiTags('Species')
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
    const response = await this.speciesService.remove(id);
    if (response.error) {
      throw new InternalServerErrorException();
    }
    return response.data;
  }
}
