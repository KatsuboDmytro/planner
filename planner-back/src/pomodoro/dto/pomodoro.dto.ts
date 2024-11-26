import { Priority } from "@prisma/client";
import { Transform } from "class-transformer";
import { IsBoolean, isBoolean, IsEmail, IsEnum, IsNumber, IsOptional, IsString, Max, Min, MinLength } from "class-validator";

export class PomodoroSessionDto {
  @IsOptional()
  @IsBoolean()
  isCompleted: boolean;
}

export class PomodoroRoundDto {
  @IsNumber()
  totalSeconds: number;

  @IsBoolean()
  @IsOptional()
  isCompleted: boolean;
}

