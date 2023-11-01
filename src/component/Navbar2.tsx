import { BellOutlined, ProfileOutlined, ShoppingCartOutlined,UserOutlined,MailOutlined,PhoneOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Badge, Dropdown, Image, Modal, Space, Form, Drawer, Input, Select, DatePicker, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


interface NavbarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (value: boolean) => void;
}

const Navbar2: React.FC<NavbarProps> = ({ _isSidebarOpen, _setIsSidebarOpen }: any) => {
    const access = localStorage.getItem("access_token");
    const navigate = useNavigate();
    const [changePW, setChangePW] = useState(false);
    const dispatch = useDispatch<any>();
    const [changeProfile, setChangeProfile] = useState(false);
    const [form] = Form.useForm();

    const iconNotifi = () => {
        return (
            <Space size="middle" style={{ marginRight: 15 }}>
                <Badge size="small" count={5}>
                    <ShoppingCartOutlined
                        style={{ fontSize: "20px", cursor: "pointer" }}
                        onClick={() => navigate("/book-wishlist")}
                    />
                </Badge>
                <Badge dot={true}>
                    <BellOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
                </Badge>
            </Space>
        );
    };

    const onFinish = (values: any) => {
        console.log(values)
        return values;
    };

    const handleProfile = (_e: any) => {
        setChangeProfile(true);
    };

    const handleLogout = (_e: any) => {
        localStorage.clear();
        navigate("/");
    };

    const items: MenuProps["items"] = [
        {
            label: "Update profile",
            key: "1",
            onClick: handleProfile,
        },
        {
            label: "Logout",
            key: "2",
            onClick: handleLogout,
        },
    ];

    return (
        <div style={{ padding: "10px 40px 10px 400px", marginBottom: "0" }}>
            {/* <Search
                placeholder="Enter book name to search...."
                allowClear
                enterButton="Search"
                size="large"
            onSearch={onSearch}
            /> */}
            <div style={{ float: "right", display: "flex", alignItems: "center" }}>
                {access !== null ? (
                    <>
                        {iconNotifi()}
                        <Image
                            style={{
                                float: "left",
                                border: "1px solid #fff",
                                borderRadius: "50%",
                            }}
                            width={25}
                            preview={false}
                            src="https://cdn.eduncle.com/library/scoop-files/2020/6/image_1593346767460.jpg"
                        />
                        <Dropdown menu={{ items }} placement="bottomRight" trigger={["click"]} arrow>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space
                                    style={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        marginLeft: 5,
                                    }}
                                >
                                    Hello admin!
                                    <ProfileOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                        <Drawer title="Personal Profile" placement="right" open={changeProfile} onClose={() => setChangeProfile(false)}>
                            <div>
                                <Form
                                    name="normal_login"
                                    className="login-form"
                                    layout="vertical"
                                    form={form}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                >
                                    <Form.Item
                                        name="fullName"
                                        label="FullName"

                                    >
                                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Full Name" />
                                    </Form.Item>
                                    <Form.Item
                                        name="email"
                                        label="E-mail"
                                        rules={[
                                            {
                                                type: "email",
                                                message: "The input is not valid E-mail!",
                                            },
                                        ]}
                                    >
                                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                                    </Form.Item>
                                    <Form.Item
                                        name="phone"
                                        label="Phone"
                                    >
                                        <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Phone" />
                                    </Form.Item>
                                    <Form.Item
                                        name="gender"
                                        label="Gender"
                                    >
                                        <Select
                                            showSearch
                                            placeholder="Search to Select"
                                            optionFilterProp="children"
                                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                            filterSort={(optionA, optionB) =>
                                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                            }
                                            options={[
                                                {
                                                    value: '0',
                                                    label: 'Other',
                                                },
                                                {
                                                    value: '1',
                                                    label: 'Male',
                                                },
                                                {
                                                    value: '2',
                                                    label: 'Female',
                                                },
                                            ]}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name="dob"
                                        label="Date of Birth"
                                    >
                                        <DatePicker format={"YYYY-MM-DD"} />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                            Update
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </Drawer>
                    </>
                ) : (
                    <>
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/login");
                            }}
                        >
                            <Space
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    marginLeft: 5,
                                }}
                            >
                                Login
                            </Space>
                        </a>
                        <p>/</p>
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/register");
                            }}
                        >
                            <Space
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    marginLeft: 5,
                                }}
                            >
                                Register
                            </Space>
                        </a>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar2;
