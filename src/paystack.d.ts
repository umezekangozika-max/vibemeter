declare module '@paystack/inline-js' {
  export interface PaystackTransactionOptions {
    key: string;
    email: string;
    amount: number;
    currency?: string;
    reference?: string;
    metadata?: Record<string, any>;
    onSuccess?: (response: any) => void;
    onCancel?: () => void;
    onClose?: () => void;
  }

  export default class PaystackPop {
    constructor();
    newTransaction(options: PaystackTransactionOptions): void;
  }
}
