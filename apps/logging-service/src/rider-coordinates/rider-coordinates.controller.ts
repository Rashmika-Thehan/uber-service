import { Body, Controller, Get, Post } from '@nestjs/common';
import { createCoordinatesDto } from './dto/create-coordinates.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    @Get()
    getRiderCoordinates() {
        return "Hello i am from rider coordinates"
    }

    @Post()
    saveRiderCoordinates(@Body() dto: createCoordinatesDto) {
        return dto;
    }
}
