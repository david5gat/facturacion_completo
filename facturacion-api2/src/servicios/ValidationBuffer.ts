import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { buffer } from 'stream/consumers';


@ValidatorConstraint({name: "IsBuffer", async : true})
   
export class ValidationBuffer implements ValidatorConstraintInterface{

    validate(value: any, validationArguments?: ValidationArguments): boolean | Promise<boolean> {

        const Isbuffer =  Buffer.isBuffer(value)

        if(!Isbuffer){
            try {
                return Isbuffer
            } catch (error) {
                console.log(error);
                
            }
        }

        
    }

    defaultMessage(arg : ValidationArguments){
        return `here was expecting buffer`;
    }
} 