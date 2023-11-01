import { useEffect, useState } from 'react';
import { Button, List, Radio, Typography } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { HeartOutlined } from '@ant-design/icons';


const { Title } = Typography;

const data = [
    { img: 'https://picsum.photos/id/1/200/300', title: 'Kỹ Sư Hệ Thống CNTT (System Engineer) - Lương Từ 15 - 35 Triệu', description: 'TẬP ĐOÀN CÔNG NGHIỆP - VIỄN THÔNG QUÂN ĐỘI' },
    { img: 'https://picsum.photos/id/20/200/300', title: 'Nhân Viên Content Marketing (Lương Từ 10 Triệu Trở Lên)', description: 'CÔNG TY TNHH ĐỒ GỖ NỘI THẤT MỸ Á' },
    { img: 'https://picsum.photos/id/21/200/300', title: 'Giám Đốc Kinh Doanh Khu Vực - Thu Nhập 30 -100 Triệu', description: 'CÔNG TY TNHH BẢO HIỂM NHÂN THỌ SUN LIFE VIỆT NAM' },
    { img: 'https://picsum.photos/id/33/200/300', title: 'Nhân Viên Kinh Doanh (Không Đi Thị Trường, Lương Từ 15 - 20 Triệu, Hà Đông)', description: 'CÔNG TY TNHH GIB VIỆT NAM' },
    { img: 'https://picsum.photos/id/44/200/300', title: 'Chuyên Viên Đào Tạo Lĩnh Vực Dược Mỹ Phẩm (Nữ) - Tại Hà Nội - Thu Nhập Hấp Dẫn', description: 'Công ty cổ phần Vinbeauty' },
    { img: 'https://picsum.photos/id/55/200/300', title: 'Nhân Viên Bán Hàng Qua Điện Thoại', description: 'CÔNG TY CỔ PHẦN CUNG ỨNG NHÂN LỰC TOÀN CẦU NIC' },
];


const options = [
    { label: 'Liên quan', value: 'Apple' },
    { label: 'Ngày đăng', value: 'Pear' },
    { label: 'Ngày cập nhật', value: 'Orange' },
    { label: 'Cần tuyển gấp', value: 'haha' },
];


const SearchProject = () => {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [value1, setValue1] = useState('Apple');

    const onChange1 = ({ target: { value } }: RadioChangeEvent) => {
        console.log(value);
        setValue1(value);
    };

    const CustomItemRenderer = ({ item }: any) => {
        return (
            <List.Item
                className="zoomable-item"
                style={{ transition: 'transform 0.3s', border: '1px solid #ccc', background: '#fff' }}
                actions={[
                    <Button type="primary">Ứng tuyển</Button>,
                    <Button icon={<HeartOutlined />} />,
                ]}>
                <div>
                    <img
                    className='mr-3'
                        width={100}
                        height={100}
                        alt="logo"
                        src={item.img}
                    />
                </div>
                <List.Item.Meta
                    title={item.title}
                    description={item.description}
                />
            </List.Item>
        );
    };


    const loadMore = () =>
    (
        <>

            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    marginBottom: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button>loading more</Button>
            </div>

        </>
    )

    const header = () => {
        return (
            <div className='flex flex-row items-center'>
                <Title className='text-center pr-6' level={5} style={{ marginBottom: 0 }}>
                    Ưu tiên hiển thị theo:
                </Title>
                <Radio.Group options={options} onChange={onChange1} value={value1} />

            </div>)
    }

    return (
        <div className=" px-4 md:px-96 py-20 bg-slate-200">
            <Title level={3}>
                Tuyển dụng 17.126 việc làm tại Hà Nội [Update 01/11/2023]
            </Title>

            <List
                size="large"
                header={header()}
                loadMore={loadMore()}
                dataSource={data}
                renderItem={(item) => <CustomItemRenderer item={item} />}
            />

        </div>
    );
};

export default SearchProject;