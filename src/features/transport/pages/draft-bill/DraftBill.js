import React from 'react';
import {SubHeader,Container} from 'layouts';
import DraftBillTable from '../../components/tables/DraftBillTable';
import { useDisclosure } from '@chakra-ui/react';
import DraftBillModal from 'features/transport/components/modals/DraftBillModal';

const DraftBill = () => {
    const {isOpen,onClose,onOpen} =useDisclosure();
    const [draftBillDetails, setDraftBillDetails] = React.useState(null)

    const handleGetDetails = (data) => {
        console.log(data)
        setDraftBillDetails(data)
        onOpen()
    }

    return (
        <>
            <SubHeader title={'Draft Bills'}>
            </SubHeader>
            <Container>
                <DraftBillTable 
                    handleGetDetails = {handleGetDetails}
                />

            </Container>
            <DraftBillModal isOpen={isOpen} onClose={onClose} data={draftBillDetails}/>
        </>
    )
}

export default DraftBill