import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateWarDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  height: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  mass: string;

  // @ApiProperty({ required: false })
  // @IsOptional()
  // @IsString()
  // hair_color: string;

  // @ApiProperty({ required: false })
  // @IsOptional()
  // @IsString()
  // skin_color: string;

  // @ApiProperty({ required: false })
  // @IsOptional()
  // @IsString()
  // eye_color: string;

  // @ApiProperty({ required: false })
  // @IsOptional()
  // @IsString()
  // birth_year: string;

  // @ApiProperty({ required: false })
  // @IsOptional()
  // @IsString()
  // gender: string;

  // @ApiProperty({ required: false })
  // @IsOptional()
  // @IsString()
  // homeworld: string;

  // @ApiProperty({ required: false })
  // @IsOptional()
  // @IsString()
  // films: string[];

  // @ApiProperty({ required: false })
  // @IsOptional()
  // @IsString()
  // species: string[];

  // @ApiProperty({ required: false })
  // @IsOptional()
  // @IsString()
  // vehicles: string[];

  // @ApiProperty({ required: false })
  // @IsOptional()
  // @IsString()
  // starships: string[];

  // @ApiProperty({ required: false })
  // @IsOptional()
  // @IsString()
  // created: string;

  // @ApiProperty({ required: false })
  // @IsOptional()
  // @IsString()
  // edited: string;

  // @ApiProperty({ required: false })
  // @IsOptional()
  // @IsString()
  // url: string;
}
