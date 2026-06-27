import { Toast } from "@/app/components/Alert/toast";
import { useMutation } from "@tanstack/react-query";
import { getErrorMessage } from "../auth/authMutation";
import { createBankAccount, fundWallet,  walletWithdrawal } from "@/app/lib/api/wallet";
import { CreateBankRequest,  WalletWithdrawalRequest } from "@/app/lib/types/wallet";



// export function useFundWalletMutation() {
//   return useMutation<SignupResponse, Error, SignupRequest>({
//     mutationFn: (payload) => fundWallet(payload),
//     onError: (error: unknown) => {
//       Toast("error", getErrorMessage(error, "Failed to sign up"));
//     },
//   });
// }

// export function useWalletWithdrawalMutation() {
//   return useMutation<SignupResponse, Error, WalletWithdrawalRequest>({
//     mutationFn: (payload) => walletWithdrawal(payload),
//     onError: (error: unknown) => {
//       Toast("error", getErrorMessage(error, "Failed to sign up"));
//     },
//   });
// }

// export function useCreateBankMutation() {
//   return useMutation<GetWalletResponse, Error, CreateBankRequest>({
//     mutationFn: (payload) => createBankAccount(payload),
//     onError: (error: unknown) => {
//       Toast("error", getErrorMessage(error, "Failed to create bank"));
//     },
//   });
// }