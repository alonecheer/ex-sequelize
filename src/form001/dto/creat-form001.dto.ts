import { IsNotEmpty } from 'class-validator';
export class CreateForm001Dto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;
}
