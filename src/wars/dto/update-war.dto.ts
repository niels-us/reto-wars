import { ApiProperty } from '@nestjs/swagger';
import { IWars } from '../struct/wars.struct';

export class UpdateWarDto implements IWars {
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
