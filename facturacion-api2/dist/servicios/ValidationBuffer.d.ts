import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class ValidationBuffer implements ValidatorConstraintInterface {
    validate(value: any, validationArguments?: ValidationArguments): boolean | Promise<boolean>;
    defaultMessage(arg: ValidationArguments): string;
}
