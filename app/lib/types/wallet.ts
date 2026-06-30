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

export type ListBanksParams = {
    country?: string
    currency?: string
}

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

export type Bank = {
        id: number,
        name: string,
        slug: string
        code: string
        longcode: string
        gateway: string
        pay_with_bank: boolean
        supports_transfer: boolean
        active: boolean
        country: string
        currency:string
        type:string
        is_deleted: boolean
        createdAt: string
        updatedAt: string
      }


      export type GetBankListResponse = {
    banks: Bank[]
}

export type GetWalletTransactionResponse = {
    transactions: WalletTransaction[]
}

export type WalletWithdrawalRequest = {
    amount: number
}

export type FundWalletRequest = {
    amount: number;
    callback_url: string;
}

export type FundWalletResponse = {
    access_code: string;
    reference: string;
   authorization_url: string;
}

export type VerifyFundWalletResponse = {
    newBalance: number;
    amount: number;

}

export type WithdawFundResponse = {
    newBalance: number;


}

export type CreateBankRequest = {
  bank_name: string;
  bank_code: string;
  account_number: string
  account_name: string
}

export type AddBankAccoutResponse = {
    withdrawal_account: {
 id: string
      user_id: string
      bank_name: string
      bank_code:string
      account_number: string,
      account_name: string,
      paystack_recipient_code: string,
      created_at: string
      updated_at: string
    }
}

