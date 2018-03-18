import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';
import { Row, Col, Button, Icon } from 'antd';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
        <Row>
            <Col span={24} align="center">
                <h2>List of Products</h2>
            </Col>
        </Row>
        <Row>
            <Col xs={{ span: 22, offset: 1 }} lg={{ span: 12, offset: 6 }}>
                <ProductList onDelete={handleDelete} products={products} />
            </Col>
        </Row>
        <Row>
            <Col span={24} align="center">
                <Button type="primary" href="/#/">
                    <Icon type="left" />Go back
                </Button>
            </Col>
        </Row>
    </div>
  );
};

// export default Products;
export default connect(({ products }) => ({
  products,
}))(Products);