import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";

const { TextArea } = Input;

type JobDetailFormProps = {
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

const JobDetailForm: React.FC<JobDetailFormProps> = ({ setIsEdit }) => {
  return (
    <div className="flex flex-col space-y-2">
      <Form autoComplete="off" layout="vertical">
        <Form.Item
          label="Job Description"
          name="jobDescription"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <TextArea />
        </Form.Item>
        <Form.Item
          label="Qualifications"
          name="qualifications"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <div className="flex flex-row space-x-2">
            <Input />
            <Button>
              <PlusOutlined />
            </Button>
          </div>
        </Form.Item>
        <Form.Item
          label="Skill Requirement"
          name="skillRequirement"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <div className="flex flex-row space-x-2">
            <Input />
            <Button>
              <PlusOutlined />
            </Button>
          </div>
        </Form.Item>
        <Form.Item className="flex justify-center">
          <Button className="mr-2" onClick={() => setIsEdit(false)}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default JobDetailForm;
