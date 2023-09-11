import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { IPlanetES } from '../struct/planets.struct';

export class GetWrasQueryDTO implements IPlanetES {
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

  @ApiProperty({ required: false })
  @IsOptional()
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
  @IsString()
  residentes: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  peliculas: string[];

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
