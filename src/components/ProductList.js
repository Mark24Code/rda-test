import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';


const ProductList = ({ onDelete, products }) => {
    const columns = [{
        title: "Name",
        dataIndex: "name",
    }, {
        title: "Actions",
        render: (text, record) => ( <
            Popconfirm title = "Delete?"
            onConfirm = {
                () => onDelete(record.id) } > DELETE < /Popconfirm>
        )
    }];

    return ( <
        Table dataSource = { products } columns = { columns } rowKey = "id" >
        < /Table>
    )
};

ProductList.PropTypes = {
    onDelete: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired
}

export default ProductList;
