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
    export interface Paginated<T> {
      items: T[];
      meta: Meta;
    }

    export interface Meta {
      currentPage: number;
      hasNext: boolean;
      itemCount: number;
      itemsPerPage: number;
      totalItems: number;
      totalPages: number;
    }

    export interface Transaction {
      account: Account;
      category: object;
      createdAt: string;
      date: string;
      description: string;
      id: string;
      updatedAt: string;
      value: number;
    }
  }
}
export {};
