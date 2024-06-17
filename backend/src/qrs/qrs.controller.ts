import { Controller, Get, Param, Res } from '@nestjs/common';
import { QrsService } from './qrs.service';
import { Response } from 'express';
import QrParamsDto from './dto/qr-params.dto';
import { ApiParam } from '@nestjs/swagger';

@Controller('qrs')
export class QrsController {
  constructor(private readonly qrsService: QrsService) {}

  @Get('generate-for/:link')
  async generateQr(@Param() params: QrParamsDto, @Res() res: Response) {
    try {
      console.log(decodeURIComponent(params.link));
      const linkToQr = await this.qrsService.generateQr(params);
      res.status(200).json({
        qrLink: linkToQr,
      });
    } catch (error) {
      console.log('Error generating QR code: ', error);
      res.status(500).json({
        message: 'Error generating QR code',
      });
    }
  }
}
