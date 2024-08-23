import { Form, Input, Select } from "antd";
import type { FormProps } from 'antd';
import NextBack, { Props } from "../../../../components/next-back/NextBack";
import { useGetCategoriesQuery } from "../../../../redux/api/category-api";
import { useForm } from "antd/es/form/Form";


const { Item } = Form;
const { TextArea } = Input;


const BasicInfo = ({ current, handleNext, handleBack }: Props) => {
    const [form] = useForm();
    const { data: categories } = useGetCategoriesQuery()

    type FieldType = {
        name?: string;
    };

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        handleNext();
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            form={form}
            className="flex flex-col flex-1 justify-between"
            name="layout-multiple-horizontal"
            layout="horizontal"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <div className="flex gap-4 mt-4">
                <Item
                    layout="vertical"
                    label="Car Company"
                    name="name"
                    className="flex-1"
                    required
                    rules={[{ required: true }]}
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <Input />
                </Item>
                <Item
                    layout="vertical"
                    label="Car model"
                    name="model"
                    className="flex-1"
                    required
                    rules={[{ required: true }]}
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <Input />
                </Item>
            </div>
            <div className="flex gap-4">
                <Item
                    layout="vertical"
                    label="Car category"
                    name="category"
                    className="flex-1 mt-[-10px]"
                    required
                    rules={[{ required: true }]}
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    {
                        categories?.payload && categories?.payload?.length > 0 &&
                        <Select
                            defaultValue={categories?.payload[0]._id}
                            style={{ width: '100%' }}
                            options={categories?.payload.map(category => ({ value: category._id, label: category.name }))}
                        />
                    }
                </Item>
                <Item
                    layout="vertical"
                    label="Car status"
                    name="status"
                    className="flex-1 mt-[-10px]"
                    required
                    rules={[{ required: true }]}
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <Select
                        defaultValue="active"
                        style={{ width: '100%' }}
                        options={[
                            { value: 'active', label: 'Active' },
                            { value: 'inactive', label: 'Inactive' },
                        ]}
                    />
                </Item>
            </div>
            <div>
                <Item
                    layout="vertical"
                    label="Car description"
                    name="description"
                    className="flex-1"
                    required
                    rules={[{ required: true }]}
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <TextArea
                        showCount
                        maxLength={100}
                        placeholder="disable resize"
                        style={{ height: 120, resize: 'none' }}
                    />
                </Item>
            </div>
            <NextBack current={current} handleNext={handleNext} handleBack={handleBack} />
        </Form>
    )
}

export default BasicInfo
