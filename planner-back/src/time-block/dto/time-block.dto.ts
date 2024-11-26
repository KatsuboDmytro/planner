import { Priority } from "@prisma/client";
import { Transform } from "class-transformer";
import { IsBoolean, isBoolean, IsEmail, IsEnum, IsNumber, IsOptional, IsString, Max, Min, MinLength } from "class-validator";

export class TimeBlockDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  color?: string;

  @IsNumber()
  duration: number;

  @IsNumber()
  @IsOptional()
  order: number;
}

