import { ApiResponse } from "../types/global";
import { CreateBankRequest, GetWalletDetailsResponse, GetWalletTransactionResponse, WalletWithdrawalRequest } from "../types/wallet";
import { api } from "./client";

export async function getWalletDetails() {
  const res = await api.get<ApiResponse<GetWalletDetailsResponse>>("/wallet");
   return res.data
}

export async function getWalletTransactions() {
  const res = await api.get<ApiResponse<GetWalletTransactionResponse>>("/wallet/transactions");
  return res.data
}

export function fundWallet(payload: any) {
  return api.post("/wallet", payload);
}

export function walletWithdrawal(payload: WalletWithdrawalRequest) {
  return api.post("/wallet/withdraw", payload);
}

export function createBankAccount(payload: CreateBankRequest) {
  return api.post("/wallet/bank", payload);
}