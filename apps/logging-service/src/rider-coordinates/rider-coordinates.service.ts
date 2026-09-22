import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate } from './schema/rider-coordinates.schema';
import { Model } from 'mongoose';
import { createCoordinatesDto } from './dto/create-coordinates.dto';

@Injectable()
export class RiderCoordinatesService {
    constructor(
        @InjectModel(RiderCoordinate.name)
        private riderCoordinateModel: Model<RiderCoordinate>
    ) { }

    async saveRiderCoordinates(dto: createCoordinatesDto) {
        try {
            await this.riderCoordinateModel.create(dto);
            return {
                success: true,
                message: 'Coordinates saved successfully'
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getAllRiderCoordinates() {
        try {
            return await this.riderCoordinateModel.find();
        } catch (error) {
            console.log(error);
        }
    }
}