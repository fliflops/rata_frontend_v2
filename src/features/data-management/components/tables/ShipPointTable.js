import React from 'react'
import {Paginated} from 'components/table';
import {createColumnHelper} from '@tanstack/react-table';

const ShipPointTable = () => {
    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor('stc_code',{
            header:'STC',
        }),
        columnHelper.accessor('stc_description',{
            header:'Description'
        }),
        columnHelper.accessor('stc_name',{
            header:'Name'
        }),
        columnHelper.accessor('stc_address',{
            header:'Address'
        }),
        columnHelper.accessor('is_active',{
            header:'Is Active',
            cell: props => props.getValue() ? 'true' : 'false'
        }),
    ]

    return (
        <Paginated
            title={'Geography'}
            route={'/v2/data-management/ship-point'}
            columns={columns}
        /> 
    )
}

export default ShipPointTable