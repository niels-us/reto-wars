import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { IPlanet, IPlanets } from '../struct/Planets.struct';

export class GetWrasQueryDTO implements IPlanets {
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  id?: number;

  @IsOptional()
  @ApiProperty({
    required: false,
  })
  name: string;

  @IsOptional()
  @ApiProperty({
    required: false,
  })
  height: string;

  @IsOptional()
  @ApiProperty({
    required: false,
  })
  mass: string;
}

export class PlanetDTO implements IPlanet {
  @IsString()
  name: string;

  @IsString()
  rotation_period: string;

  @IsString()
  orbital_period: string;

  @IsString()
  diameter: string;

  @IsString()
  climate: string;

  @IsString()
  gravity: string;

  @IsString()
  terrain: string;

  @IsString()
  surface_water: string;

  @IsString()
  population: string;

  @IsString()
  residents: string[];

  @IsString()
  films: string[];

  @IsString()
  created: string;

  @IsString()
  edited: string;

  @IsString()
  url: string;
}
