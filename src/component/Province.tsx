import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import axios from 'axios';
import { async } from '@firebase/util';

const { Option } = Select;

const Province = () => {
    const [provinces, setProvinces] = useState([]);
    const [provinces1, setProvinces1] = useState([]);
    const [provinces2, setProvinces2] = useState([]);
    const [loading, setLoading] = useState(true);
    const [prov, setProv] = useState();
    const [prov1, setProv1] = useState();
    const [prov2, setProv2] = useState();

    const option: any[] | undefined = [];

    useEffect(() => {
        fetchProvinces();
    }, []);

    const fetchProvinces = async () => {
        try {
            const response = await axios.get('https://provinces.open-api.vn/api/p/'); // Replace with the actual province API endpoint
            const data = response.data;
            const provincesData = data.map((country: any) => ({
                id: country.code,
                name: country.name ? Object.values(country.name) : [],
            }));
            setProvinces(provincesData);
            setLoading(false);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const handleChangeProvince = async (value: any) => {
        setProv(value);
        try {
            const response = await axios.get(`https://provinces.open-api.vn/api/p/${value}?depth=2`);
            const data = response.data;
            const provincesData = data.districts.map((country: any) => ({
                id: country.code,
                name: country.name ? Object.values(country.name) : [],
            }));
            setProvinces1(provincesData);
            setLoading(false);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleChangeProvince1 = async (value: any) => {
        setProv1(value);
        try {
            const response = await axios.get(`https://provinces.open-api.vn/api/d/${value}?depth=2`);
            const data = response.data;
            const provincesData = data.wards.map((country: any) => ({
                id: country.code,
                name: country.name ? Object.values(country.name) : [],
            }));
            setProvinces2(provincesData);
            setLoading(false);
        } catch (error) {
            console.error('Error:', error);
        }
    }



    return (
        <>
            <Select className='mb-5' onChange={handleChangeProvince} placeholder="Tỉnh..." loading={loading}>
                {provinces.map((province: any) => (
                    <Option key={province.id} value={province.id}>
                        {province.name}
                    </Option>
                ))}
            </Select>
            <Select disabled={prov == null ? true : false} className='mb-5' onChange={handleChangeProvince1} placeholder="Huyện..." loading={loading}>
                {provinces1.map((province: any) => (
                    <Option key={province.id} value={province.id}>
                        {province.name}
                    </Option>
                ))}
            </Select>
            <Select disabled={prov1 == null ? true : false} onChange={(value: any) => setProv2(value)} className='mb-5' placeholder="Xã..." loading={loading}>
                {provinces2.map((province: any) => (
                    <Option key={province.id} value={province.id}>
                        {province.name}
                    </Option>
                ))}
            </Select>
        </>

    );
};

export default Province;