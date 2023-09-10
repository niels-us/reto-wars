import { ApiProperty } from '@nestjs/swagger';
import { ICount, IEntityId, IRows } from '../struct/planets.response.struct';

export class EntityIdResponseDTO implements IEntityId {
  @ApiProperty({
    required: true,
  })
  id: number;
}

export class RowsResponseDTO implements IRows {
  @ApiProperty({
    required: true,
  })
  rows: number;
}

export class CountDTO implements ICount {
  @ApiProperty({
    required: true,
  })
  count: number;
}
