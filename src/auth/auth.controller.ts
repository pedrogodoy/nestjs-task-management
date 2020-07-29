import { Controller, Post, Body, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}

    @Post('/signup')
    signUp(@Body(ValidationPipe) auhCredentialsDto: AuthCredentialsDto): Promise<void>{
        return this.authService.signUp(auhCredentialsDto);
    }

    @Post('signin')
    signIn(@Body(ValidationPipe) auhCredentialsDto: AuthCredentialsDto): Promise<{acessToken: string}> {
        return this.authService.signIn(auhCredentialsDto);
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    teste(@Req() req) {
        console.log(req);
    }
}