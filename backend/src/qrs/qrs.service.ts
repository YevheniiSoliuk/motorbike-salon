import { Injectable } from '@nestjs/common';
import QrParamsDto from './dto/qr-params.dto';
import QRCode from 'qrcode';

@Injectable()
export class QrsService {
  async generateQr(params: QrParamsDto) {
    const { link } = params;

    return await QRCode.toDataURL(decodeURIComponent(link));
  }
}
