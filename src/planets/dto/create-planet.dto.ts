import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { IPlanetES } from '../struct/Planets.struct';

export class CreatePlanetsDto implements IPlanetES {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  nombre: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  periodo_rotacion: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  periodo_orbital: string;

  @IsString()
  diametro: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  clima: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  gravedad: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  terreno: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  agua_superficial: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  poblacion: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsArray()
  residentes: [string];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsArray()
  peliculas: [string];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  creado: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  editado: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  url: string;
}
