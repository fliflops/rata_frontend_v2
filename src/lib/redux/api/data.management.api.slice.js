import {apiSlice} from '../api.slice';

export const dataManagementSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        updateData: builder.mutation({
            query: (params) => ({
                url:`v2/data-management/${params.route}`,
                method:'PUT',
                params:{
                    ...params.query
                },
                body: {
                    ...params.body
                }
            }),
            invalidatesTags:['Pagination']
        }),
        createData: builder.mutation({
            query: (params) => ({
                url:`v2/data-management/${params.route}`,
                method:'POST',
                params:{
                    ...params.query
                },
                body: {
                    ...params.body
                }
            }),
            invalidatesTags:['Pagination']
        }),
        getDataDetails: builder.query({
            query:(params) => ({
                url: `v2/data-management/${params.route}`,
                method:'GET'
            })
            
        }),
        getShipPoint: builder.query({
            query:(stc) => ({
                url: 'v2/data-management/ship-point/'+String(stc).toLowerCase(),
                method:'GET'   
            }),
            providesTags:['ShipPoint']
        }),
        updateShipPoint: builder.mutation({
            query:({stc, body}) => ({
                url:'v2/data-management/ship-point/'+String(stc).toLowerCase(),
                method:'PUT',
                body
            }),
            invalidatesTags:['ShipPoint'] 
        }),
        // updateCostAlloc: builder.mutation({
        //     query: ({id, is_active})=>({
        //         url: 'v2/data-management/cost-allocation',
        //         method:'PUT',
        //         params:{
        //             is_active
        //         }
        //     }),
        //     invalidatesTags:['Pagination']
        // })
    })

})

export const {
    useUpdateDataMutation,
    useCreateDataMutation,   
    useGetDataDetailsQuery,
    useGetShipPointQuery,
    useUpdateShipPointMutation                              
} = dataManagementSlice