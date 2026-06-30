import { ApiResponse, SabiResponse } from "../types/global";
import { AddBankAccoutResponse, CreateBankRequest, FundWalletRequest, FundWalletResponse, GetBankListResponse, GetWalletDetailsResponse, GetWalletTransactionResponse, ListBanksParams, VerifyFundWalletResponse, WalletWithdrawalRequest, WithdawFundResponse } from "../types/wallet";
import { api } from "./client";

export async function getWalletDetails() {
  const res = await api.get<ApiResponse<GetWalletDetailsResponse>>("/wallet");
   return res.data
}


export async function getBankList(
  params: ListBanksParams = {},
) {
  const res = await api.get<ApiResponse<GetBankListResponse>>(`/wallet/banks`, {
    query: params
  });
  return res.data
}

export async function getWalletTransactions() {
  const res = await api.get<ApiResponse<GetWalletTransactionResponse>>("/wallet/transactions");
  return res.data
}

export async function fundWallet(payload: FundWalletRequest): Promise<FundWalletResponse> {
  const res = await api.post<SabiResponse<FundWalletResponse>>("/wallet/initialize", payload);
  return res.data;
}

export async function verifyFundWallet(payload: {reference: string}): Promise<VerifyFundWalletResponse> {
  const res = await api.post<SabiResponse<VerifyFundWalletResponse>>("/wallet/verify", payload);
  return res.data;
}

export function walletWithdrawal(payload: WalletWithdrawalRequest): Promise<WithdawFundResponse> {
  return api.post("/wallet/withdraw", payload);
}

export function createBankAccount(payload: CreateBankRequest): Promise<AddBankAccoutResponse> {
  return api.post("/wallet/bank", payload);
}