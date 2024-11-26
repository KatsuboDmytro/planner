import { Priority } from "@prisma/client";
import { Transform } from "class-transformer";
import { IsBoolean, isBoolean, IsEmail, IsEnum, IsNumber, IsOptional, IsString, Max, Min, MinLength } from "class-validator";

export class TaskDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean;

  @IsOptional()
  @IsString()
  createdAt?: string;

  @IsEnum(Priority)
  @IsOptional()
  @Transform(({ value }) => ('' + value).toLowerCase())
  priority?: Priority;
}

