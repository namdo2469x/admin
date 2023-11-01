import { BellOutlined, ProfileOutlined, UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Badge, Button, DatePicker, Drawer, Dropdown, Form, Image, Input, Select, Space, notification } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Province from "./Province";

// import { getUser, token } from "../store/userStore";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Search from "antd/es/input/Search";

interface NavbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

const Navbar = () => {
  const access = localStorage.getItem("access_token");
  const navigate = useNavigate();
  const [changeProfile, setChangeProfile] = useState(false);
  const dispatch = useDispatch<any>();
  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm();


  useEffect(() => {
    // dispatch(getUser());
    // dispatch(token(access));
  }, [dispatch]);

  const onFinish = (values: any) => {
    console.log(values)
    return values;
  };


  const handleChangeProfile = (_e: any) => {
    setChangeProfile(true);
  };

  const handleLogout = (_e: any) => {
    localStorage.clear();
    navigate("/");
    notification.success({
      message: "Logout successfully!",
    });
  };

  const items: MenuProps["items"] = [
    {
      label: "Update Profile",
      key: "1",
      onClick: handleChangeProfile,
    },
    {
      label: "Logout",
      key: "2",
      onClick: handleLogout,
    },
  ];

  const iconNotifi = () => {
    return (
      <Space size="middle" style={{ marginRight: 15 }}>
        <Badge dot={true}>
          <BellOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
        </Badge>
      </Space>
    );
  };

  const handleSearchProject = (_e: any) => {
    navigate("/searchproject/name=")
  }

  return (
    <nav className="bg-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-64">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0 flex">
              <img className="cursor-pointer" src="./icon/logo.svg" alt="Workflow" onClick={() => navigate('/')} />
              <Search
                placeholder="What service are you looking for today?"
                enterButton
                size="large"
                className="ml-4 w-72 md:w-96"
                onSearch={handleSearchProject}
              />
            </div>
            <div className="hidden md:block text-base font-semibold ">
              <div className="ml-10 flex items-baseline space-x-4">

                {access == null ? (<>
                  <a className="px-3 py-2 no-underline text-black" href="/login" >
                    Sign in
                  </a>

                  <Button type="primary" ghost>
                    <a className="no-underline" href="/register" >
                      Join
                    </a>
                  </Button></>) : (<>
                    <a className="px-3 py-2 no-underline text-black" href="/dashboard" >
                      Dashboard
                    </a>

                    <span className="px-3 py-2  ">Team</span>
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
                    <Dropdown className="cursor-pointer" menu={{ items }} placement="bottomRight" trigger={["click"]} arrow>
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
                          <Form.Item
                            name="address"
                            label="Address">
                            <Province />
                          </Form.Item>
                          <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                              Update
                            </Button>
                          </Form.Item>
                        </Form>
                      </div>
                    </Drawer>

                  </>)}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-base">
              <span className=" text-white block px-3 py-2 text-base cursor-pointer">Dashboard</span>

              <span className="  block px-3 py-2 text-base cursor-pointer">Team</span>

              <span className="  block px-3 py-2 text-base cursor-pointer">Projects</span>

              <span className="  block px-3 py-2 text-base cursor-pointer">Calendar</span>

              <span className="  block px-3 py-2 text-base cursor-pointer">Reports</span>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;