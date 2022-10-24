import { BaseError } from "./BaseError";

export class UnauthorizedError extends BaseError {
    constructor(
        message: string = "Credenciais inválidas"
    ) {
        super(401, message)
    }
}