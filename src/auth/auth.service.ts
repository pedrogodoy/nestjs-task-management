import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayLoad } from './jwt-payload.interface';

@Injectable()
export class AuthService {
    private logger = new Logger('AuthService');

    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService
    ) {}

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.userRepository.signUp(authCredentialsDto);
    }

    async signIn(AuthCredentialsDto: AuthCredentialsDto): Promise<{acessToken: string}> {
        const username = await this.userRepository.validateUserPassword(AuthCredentialsDto);

        if(!username) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload: JwtPayLoad = { username };
        const acessToken = await this.jwtService.sign(payload);
        this.logger.debug(`Generated token withh payload ${JSON.stringify(payload)}`);

        return { acessToken };
    }  
}
