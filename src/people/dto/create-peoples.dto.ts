import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { IPeopleES } from '../struct/peoples.struct';

export class CreatePeoplesDto implements IPeopleES {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  nombre: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  altura: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  masa: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  color_pelo: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  color_piel: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  color_ojos: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  ano_nacimiento: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  genero: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  mundo_natal: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsArray()
  peliculas: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsArray()
  especie: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsArray()
  vehiculos: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsArray()
  naves_espaciales: string[];

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
