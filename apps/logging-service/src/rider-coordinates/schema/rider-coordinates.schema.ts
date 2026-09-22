// lat., lng., rider
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type RiderCoordinateDocument = HydratedDocument<RiderCoordinate>;

@Schema()
export class RiderCoordinate {
    @Prop({ type: Number, required: true })
    latitude: number;

    @Prop({ type: Number, required: true })
    longitude: number;

    @Prop({ required: true })
    rider: string;
}

export const RiderCoordinateSchema = SchemaFactory.createForClass(RiderCoordinate);
RiderCoordinateSchema.index({ latitude: 1, longitude: 1 });