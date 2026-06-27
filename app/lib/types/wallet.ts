export type GetWalletDetailsResponse = {
    wallet: {
      id: string;
      user_id: string;
      balance: number;
      total_won: number;
      total_spent: number;
      total_withdrawn: number
      bank_name: string;
      bank_code: string;
      account_number: string;
      account_name: string;
      bvn_verified: true;
      nin_verified: true;
      created_at: string
    }
};

export type WalletTransaction = {
id: string
        user_id: string;
        type: string;
        amount: number;
        reference: string;
        status: string;
        paystack_reference: string;
        description: string;
        created_at: string;
}

export type GetWalletTransactionResponse = {
    transactions: WalletTransaction[]
}

export type WalletWithdrawalRequest = {
    amount: number
}

export type CreateBankRequest = {
  bank_name: string;
  bank_code: string;
  account_number: string
  account_name: string
}