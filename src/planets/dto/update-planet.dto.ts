import { ApiProperty } from '@nestjs/swagger';
import { IPlanets } from '../struct/Planets.struct';

export class UpdatePlanetsDto implements IPlanets {
  @ApiProperty({
    required: true,
  })
  name: string;

  @ApiProperty({
    required: true,
  })
  height: string;

  @ApiProperty({
    required: true,
  })
  mass: string;
}
