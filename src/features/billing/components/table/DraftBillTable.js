import React from 'react';
import { Paginated } from 'components/table';
import { useFormikContext } from 'formik';
import { createColumnHelper } from '@tanstack/react-table';

const DraftBillTable = () => {
    const {values:{from,to,customer,service_type}} = useFormikContext()

    const columnHelper = createColumnHelper();

    const columns = React.useMemo(() => [
        columnHelper.accessor('draft_bill_no',{
            header:'Draft Bill',
            // cell:props => {
            //     const data = props.getValue();
            //     const handleClick = () => {
            //         handleGetDetails(props.row.original)
            //     }
            //     return <Button variant='link' colorScheme={'blue'} size='xs' onClick={handleClick}>{data}</Button>
            // }
        }),
        columnHelper.accessor('contract_type',{
            header:'Contract Type'
        }),
        columnHelper.accessor('draft_bill_date',{
            header:'Draft Bill Date'
        }),
        columnHelper.accessor('trip_no',{
            header:'Trip No'
        }),
        columnHelper.accessor('delivery_date',{
            header:'Delivery Date'
        }),
        columnHelper.accessor('customer',{
            header:'Customer'
        }),
        columnHelper.accessor('service_type',{
            header:'Service Type'
        }),
        columnHelper.accessor('sub_service_type',{
            header:'Sub Service Type'
        }),
        columnHelper.accessor('contract_id',{
            header:'Contract ID'
        }),
        columnHelper.accessor('tariff_id',{
            header:'Tariff ID'
        }),
        columnHelper.accessor('vendor',{
            header:'Vendor'
        }),
        columnHelper.accessor('location',{
            header:'Location'
        }),
        columnHelper.accessor('rate',{
            header:'Rate'
        }),
        columnHelper.accessor('vehicle_type',{
            header:'Vehicle Type'
        }),
        columnHelper.accessor('stc_from',{
            header:'STC From'
        }),
        columnHelper.accessor('stc_to',{
            header:'STC To'
        }),
        columnHelper.accessor('min_billable_value',{
            header:'Min. Value'
        }),
        columnHelper.accessor('max_billable_value',{
            header:'Max. Value'
        }),
        columnHelper.accessor('min_billable_unit',{
            header:'Min. Billable Unit'
        }),
        columnHelper.accessor('total_charges',{
            header:'Total Charges'
        }),
        columnHelper.accessor('status',{
            header:'Status'
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ],[])

    return (
       <>
        <Paginated
            title='Draft Bill'
            columns={columns}
            route={'/v2/billing/draft-bill'}
            customFilters={{
                from,
                to,
                customer: customer?.value || '',
                service_type: service_type?.value || ''
            }}
        />
       </>
    )
}

export default DraftBillTable