import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { ISpecieES } from '../struct/species.struct';

export class GetWrasQueryDTO implements ISpecieES {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  nombre: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  clasificacion: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  designacion: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  altura_promedio: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  colores_piel: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  colores_de_pelo: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  colores_ojos: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  vida_promedio: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  mundo_natal: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  idioma: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsArray()
  personas: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsArray()
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
