/* eslint-disable arrow-body-style */
import MUIDataTable from 'mui-datatables';
import React, { useEffect, useState } from 'react';
import { fakeData } from './data';
import Modal from "@mui/material/Modal";
import { Box } from '@mui/material';
import Slide from '@mui/material/Slide';
import MyModal from './Modal';


const Clients = () => {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        height: "80%",
        display: "block",
        borderRadius: "10px"
    };
    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState();
    const columns = [
        {
            name: 'name',
            label: 'Ism'
        },
        {
            name: "phone",
            label: "Telefon"
        },
        {
            name: 'debt',
            label: 'Qarzi'
        },
        {
            name: 'comment',
            label: 'Kommentariya'
        }
    ];

    const options = {
        filter: true,
        sort: true,
        selectableRows: 'none',
        onRowClick: (rowData, rowIndex) => {
            setModalData(fakeData[rowIndex.dataIndex]);
            setOpen(true);
            console.log(rowIndex.dataIndex);
            console.log(modalData);
        }
    };

    const handleClose = () => setOpen(false)
    return (
        <>
            <div
                style={{
                    backgroundColor: '#e5e5e5',
                    overflow: 'auto',
                    width: '90%',
                    margin: '30px auto'
                }}
            >
                <MUIDataTable
                    title="Mijozlar"
                    data={fakeData}
                    columns={columns}
                    options={options}
                />
            </div>
            <Modal
                onClose={handleClose}
                open={open}
                transition={Slide}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {modalData ?
                        <MyModal modalData={modalData}/>
                        : ""}
                </Box>
            </Modal>
        </>
    );
};
export default Clients;