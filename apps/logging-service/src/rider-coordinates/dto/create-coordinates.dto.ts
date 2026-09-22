import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class createCoordinatesDto {
    @IsNumber()
    @IsNotEmpty()
    latitude: number;

    @IsNumber()
    @IsNotEmpty()
    longitude: number;

    @IsString()
    @IsNotEmpty()
    rider: string;
}