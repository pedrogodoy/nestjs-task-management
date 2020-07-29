import { Controller, Post, Body, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';

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
    teste(@GetUser() user: User) {
        console.log(user);
    }
}