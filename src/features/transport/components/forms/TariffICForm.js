import React from 'react';
import Label from 'components/Label';
import {tariffICSchema} from '../../validations';
import {Button,Flex} from '@chakra-ui/react';
import {Form,FormNumberInput} from 'components/form';
import {FormSelect} from 'components/select';

import {useCreateTariffICMutation} from 'lib/redux/api/tariff.api.slice';

const TariffICForm = ({data,handleAdd}) => {
  const [createIC,{isLoading}] = useCreateTariffICMutation()

  const handleSubmit = async (values,{resetForm})=>{

      handleAdd({
        tariff_id:    values.tariff_id,  
        vendor_group: values.vendor_group.value, 
        vehicle_type: data.vehicle_type,
        uom:          data.uom,
        min_value:    values.min_value,
        max_value:    values.max_value,
        rate:         values.rate,
        algo_status:  'ACTIVE'    
      })

      resetForm();
  }

  return (
    <Form 
      schema={tariffICSchema}
      onSubmit={handleSubmit}
      initialValues={{
        tariff_id:data?.tariff_id || '',
        vendor_group:null,
        vehicle_type:data.vehicle_type,
        uom:data.uom,
        min_value:0,
        max_value:0,
        rate:0
      }}
      >
      {({errors,touched}) => (
          <Flex direction={'column'} gap='2'>
            <Label label={'Tariff ID'} value={data?.tariff_id || ''}/>
            <Label label='Vehicle Type' value={data?.vehicle_type || ''}/> 
            <Label label={'UOM'} value={data.uom}/>
            <FormSelect 
              label={'Vendor Location'} 
              name='vendor_group'  
              route='vendor-group'
              filter={{
                location:data?.location
              }}
              error={errors.vendor_group} touched={touched.vendor_group}/>
              <FormNumberInput
                label={'Rate'}
                name='rate'
                error={errors.rate} touched={touched.rate}
              />
              <Flex gap='2'>
                {/* <FormSelect 
                  label={'UOM'} 
                  name='uom'  
                  route='quick-code'
                  filter={{
                    type:'MBU'
                  }}
                  error={errors.uom} touched={touched.uom}
                /> */}
                <FormNumberInput
                  label={'Min Value'}
                  name='min_value'
                  error={errors.min_value} touched={touched.min_value}
                />
                <FormNumberInput
                  label={'Max Value'}
                  name='max_value'
                  error={errors.max_value} touched={touched.max_value}
                />
              </Flex>
              <br/>
              <Button type='submit' colorScheme={'orange'} isLoading={isLoading}>Confirm</Button>
          </Flex>
      )}
    </Form>
  )
}

export default TariffICForm