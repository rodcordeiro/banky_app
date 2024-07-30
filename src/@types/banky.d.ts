declare global {
  export namespace Banky {
    export interface Account {
      ammount: number;
      createdAt: string;
      id: string;
      name: string;
      paymentType: PaymentType;
      threshold: number;
      updatedAt: string;
    }

    export interface PaymentType {
      createdAt: string;
      id: string;
      name: string;
      updatedAt: string;
    }
  }
}
export {};
