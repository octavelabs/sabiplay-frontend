import { Toast } from "@/app/components/Alert/toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getErrorMessage } from "../auth/authMutation";
import { GET_WALLET_DETAILS_KEY, GET_WALLET_TRANSACTIONS_KEY } from "@/app/lib/react-query/query-keys";
import { createBankAccount, fundWallet,  verifyFundWallet,  walletWithdrawal } from "@/app/lib/api/wallet";
import { AddBankAccoutResponse, CreateBankRequest,  FundWalletRequest,  FundWalletResponse,  VerifyFundWalletResponse,  WalletWithdrawalRequest, WithdawFundResponse } from "@/app/lib/types/wallet";



export function useFundWalletMutation() {
  return useMutation<FundWalletResponse, Error, FundWalletRequest>({
    mutationFn: (payload) => fundWallet(payload),
    onError: (error: unknown) => {
      Toast("error", getErrorMessage(error, "Failed to fund wallet"));
    },
  });
}

export function useVerifyFundWalletMutation() {
  const queryClient = useQueryClient();
  return useMutation<VerifyFundWalletResponse, Error, {reference: string}>({
    mutationFn: (payload) => verifyFundWallet(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_WALLET_DETAILS_KEY] });
      queryClient.invalidateQueries({ queryKey: [GET_WALLET_TRANSACTIONS_KEY] });
    },
    onError: (error: unknown) => {
      Toast("error", getErrorMessage(error, "Failed to verify wallet funding"));
    },
  });
}

export function useWalletWithdrawalMutation() {
  return useMutation<WithdawFundResponse, Error, WalletWithdrawalRequest>({
    mutationFn: (payload) => walletWithdrawal(payload),
    onError: (error: unknown) => {
      Toast("error", getErrorMessage(error, "Failed to withdraw fund"));
    },
  });
}

export function useCreateBankMutation() {
  return useMutation<AddBankAccoutResponse, Error, CreateBankRequest>({
    mutationFn: (payload) => createBankAccount(payload),
    onError: (error: unknown) => {
      Toast("error", getErrorMessage(error, "Failed to create bank"));
    },
  });
}