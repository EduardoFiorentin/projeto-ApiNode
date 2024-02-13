interface IAddress {
    email: string,
    name: string,
}

export interface IMessage {
    to: IAddress,
    from: IAddress,
    subject: string,
    body: string
}

// metodos que o módulo de envio de email deve ter ("contrato")
export interface IMailProvider {
    sendMail(message: IMessage): Promise<void>
}