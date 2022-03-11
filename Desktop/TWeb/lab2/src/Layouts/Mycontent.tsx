import { Row } from 'antd';
import CustomCard from './CustomCard';
//MyContent
const description = [
    {
        id: 1,
        title: "Card title 1",
        description: "description"
    },
    {
        id: 2,
        title: "Card title 2",
        description: "description"
    },
    {
        id: 3,
        title: "Card title 3",
        description: "description"
    },
    {
        id: 4,
        title: "Card title 4",
        description: "description"
    },
    {
        id: 5,
        title: "Card title 5",
        description: "description"
    },
    {
        id: 6,
        title: "Card title 6",
        description: "description"
    },
    {
        id: 7,
        title: "Card title 7",
        description: "description"
    },
    {
        id: 8,
        title: "Card title 8",
        description: "description"
    },
    {
        id: 9,
        title: "Card title 9",
        description: "description"
    },
]


function Mycontent() {
    return (

        <Row gutter={10} >
            {
                description.map((element, i) => {
                    return (
                        <CustomCard key={element.id} title={element.title} description={element.description}/>
                    )
                })
            }
        </Row>
    )
}

export default Mycontent