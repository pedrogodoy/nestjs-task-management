import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common'
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  
  // if(process.env.NODE_ENV === 'devlopment'){
  //   app.enableCors();
  // }

  // const serverConfig = config.get('server');

  const port = 3000;
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
