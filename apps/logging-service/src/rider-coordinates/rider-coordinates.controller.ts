import { Body, Controller, Get, Post } from '@nestjs/common';
import { createCoordinatesDto } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    constructor(private coordinateService: RiderCoordinatesService) { }

    @Get()
    getRiderCoordinates() {
        return this.coordinateService.getAllRiderCoordinates();
    }

    @Post()
    async saveRiderCoordinates(@Body() dto: createCoordinatesDto) {
        return await this.coordinateService.saveRiderCoordinates(dto);
    }
}
