const modules = [
    {
        sequence:1,
        id:'transport_operations',
        label:'Transport Operations',
        children:[
            {
                sequence:1,
                id:'draft_bill',
                label:'Draft Bill',
                path:'/transport-draftbill'
            },
            {
                sequence:2,
                id:'revenue_leak',
                label:'Revenue Leak',
                path:'/transport-revenue-leak'
            },
            {
                sequence:3,
                id:'transmittal',
                label:'Transmittal',
                path:'/transport-transmittal'
            },
            {
                sequence:4,
                id:'contract',
                label:'Contract',
                path:'/transport-contract'
            },
            {
                sequence:5,
                id:'tariff',
                label:'Tariff',
                path:'/transport-tariff'
            }
        ]
    },
    {
        sequence:2,
        id:'warehouse_operations',
        label:'Warehouse Operations',
        children:[
            {
                sequence:1,
                id:'draft_bill',
                label:'Draft Bill',
                path:'/warehouse-draftbill'
            },
            {
                sequence:2,
                id:'revenue_leak',
                label:'Revenue Leak',
                path:'/warehouse-revenue-leak'
            },
            {
                sequence:3,
                id:'transmittal',
                label:'Transmittal',
                path:'/warehouse-transmittal'
            },
            {
                sequence:4,
                id:'contract',
                label:'Contract',
                path:'/warehouse-contract'
            },
            {
                sequence:5,
                id:'tariff',
                label:'Tariff',
                path:'/warehouse-tariff'
            }
        ]
    },
    {
        sequence:3,
        id:'data_management',
        label:'Data Management',
        children:[
            {
                sequence:1,
                id:'geography',
                label:'Geography',
                path:'/geography'
            },
            {
                sequence:2,
                id:'vendors',
                label:'Vendors',
                path:'/vendors'
            },
            {
                sequence:3,
                id:'principal',
                label:'Principal',
                path:'/principal'
            },
            {
                sequence:4,
                id:'ship_point',
                label:'Ship Point',
                path:'/ship point'
            },
            {
                sequence:5,
                id:'location',
                label:'Location',
                path:'/location'
            },
            {
                sequence:6,
                id:'quick_code',
                label:'Quick Code',
                path:'/quick-code'
            },
            {
                sequence:7,
                id:'algorithm',
                label:'Algorithm',
                path:'/algorithm'
            }
        ]
    },
    {
        sequence:4,
        id:'administration',
        label:'Administration',
        children:[
            {
                sequence:1,
                id:'users',
                label:'Users',
                path:'/users',
            },
            {
                sequence:2,
                id:'roles',
                label:'Roles',
                path:'/roles'
            },
            {
                sequence:3,
                id:'scheduler',
                label:'Scheduler',
                path:'/scheduler'
            }
        ]
    }
]

export default modules