import {apiSlice} from '../api.slice';

export const contractApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTransportContract: builder.query({
            query:(params) => ({
                url:`v2/contract/contract-id/${params.contract_id}`,
                method:'GET',
            }),
            providesTags:['Contract']
        }),
        updateTransportContract: builder.mutation({
            query:(params) => ({
                url: `v2/contract/contract-id/${params.contract_id}`,
                method:'PUT'
            }),
            invalidatesTags:['Contract']
        }),
        updateTransportContractTariff: builder.mutation({
            query:(params) => ({
                url: `v2/contract/contract-tariff`,
                method:'PUT',
                params:{
                    ...params.query
                }
            }),
            invalidatesTags:['Pagination']
        }),
        updateTransportContractValidity: builder.mutation({
            query:({contract_id,...data}) => ({
                url: 'v2/contract/validity/'+contract_id,
                method: 'POST',
                body: {
                    ...data
                }
            }),
            invalidatesTags: ['Contract'] 
        })
    })
})


export const {
    useGetTransportContractQuery,
    useUpdateTransportContractMutation,
    useUpdateTransportContractTariffMutation,
    useUpdateTransportContractValidityMutation
} = contractApiSlice;