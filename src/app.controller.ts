import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Render,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { Accounts } from './accounts.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @Render('index')
  index
}
