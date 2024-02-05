import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const port = process.env.API_PORT || 3000
const globalPrefix = 'api/v1'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix(globalPrefix)
  app.enableCors()
  await app.listen(port)
}
bootstrap()
