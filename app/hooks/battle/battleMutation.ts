// import { Toast } from "@/app/components/Alert/toast";
// import { useMutation } from "@tanstack/react-query";
// import { getErrorMessage } from "../auth/authMutation";


// export function useWalletWithdrawalMutation() {
//   return useMutation<WithdawFundResponse, Error, WalletWithdrawalRequest>({
//     mutationFn: (payload) => walletWithdrawal(payload),
//     onError: (error: unknown) => {
//       Toast("error", getErrorMessage(error, "Failed to sign up"));
//     },
//   });
// }