import { BaseError } from "./BaseError";

export class RequestError extends BaseError {
    constructor(
        message: string = "Requisição inválida"
    ) {
        super(400, message)
    }
}