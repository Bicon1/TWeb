import { Card, Col } from 'antd'
//CustomCard
function CustomCard({title, description}) {

    return (

        <Col span={20}>
            <div style={{ paddingBottom: '6px',paddingTop:'6px'}}>
                <Card title={title} bordered={false}>
                    {description}
                </Card>
            </div>
        </Col>

    )
}

export default CustomCard