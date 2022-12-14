import React from 'react'
import {Paginated} from 'components/table';
import {createColumnHelper} from '@tanstack/react-table';
import { Button } from '@chakra-ui/react';
import { useLocation, useNavigate, createSearchParams } from 'react-router-dom';

const TariffTable = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const columnHelper = createColumnHelper()
    const columns = [
        columnHelper.accessor('tariff_id',{
            header:'Tariff ID',
            cell:props => {
                const data = props.getValue();
                return<Button 
                    size={'xs'} 
                    variant={'link'} 
                    colorScheme='telegram'
                    onClick={()=>{
                        navigate({
                            pathname:`${location.pathname}/edit`,
                            search:`?${createSearchParams({
                                tariff_id: data
                            })}`
                        })}
                }>{data}</Button>
            }
        }),
        
        columnHelper.accessor('tariff_desc',{
            header:'Description'
        }),
        
        columnHelper.accessor('tariff_status',{
            header:'Status'
        }),
        
        columnHelper.accessor('class_of_store',{
            header:'Class of Store'
        }),
        
        columnHelper.accessor('service_type',{
            header:'Service Type'
        }),
        
        columnHelper.accessor('sub_service_type',{
            header:'Sub Service Type'
        }),

        columnHelper.accessor('min_billable_unit',{
            header:'MBU'
        }),
        
        columnHelper.accessor('min_value',{
            header:'Min Value'
        }),
            
        columnHelper.accessor('location',{
            header:'Location'
        }),
        
        columnHelper.accessor('from_geo_type',{
            header:'From Geo Type'
        }),
        
        columnHelper.accessor('from_geo',{
            header:'From Geo'
        }),
        
        columnHelper.accessor('to_geo_type',{
            header:'To Geo Type'
        }),
        
        columnHelper.accessor('to_geo',{
            header:'To Geo'
        }),
    ]

    return (
        <>
            <Paginated title='Tariffs' columns={columns} route='/contract-tariff/tariff'/>
        </>
    )
}

export default TariffTable