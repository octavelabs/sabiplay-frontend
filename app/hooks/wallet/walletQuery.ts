import { getBankList, getWalletDetails, getWalletTransactions } from "@/app/lib/api/wallet";
import { GET_BANKS_KEY, GET_WALLET_DETAILS_KEY, GET_WALLET_TRANSACTIONS_KEY } from "@/app/lib/react-query/query-keys";
import { ListBanksParams } from "@/app/lib/types/wallet";
import { useQuery } from "@tanstack/react-query";


export function useGetWalletDetailsQuery() {
  return useQuery({
    queryKey: [GET_WALLET_DETAILS_KEY],
    queryFn: () => getWalletDetails(),
    placeholderData: (previousData) => previousData,
  });
}


export function useGetBankListQuery(params: ListBanksParams = {}) {
  return useQuery({
    queryKey: [GET_BANKS_KEY, params],
    queryFn: () => getBankList(params),
    placeholderData: (previousData) => previousData,
  });
}

export function useGetWalletTransactionsQuery() {
  return useQuery({
    queryKey: [GET_WALLET_TRANSACTIONS_KEY],
    queryFn: () => getWalletTransactions(),
    placeholderData: (previousData) => previousData,
  });
}