"use client";
import { Button, Divider, Form, Input, Select, Typography } from "antd";
import React from "react";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import dynamic from "next/dynamic";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

export interface IJobFormProps {
  isEdit?: boolean;
  onSubmit: () => void;
}

const JobForm: React.FC<IJobFormProps> = ({ isEdit = false, onSubmit }) => {
  const quillModules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
  };

  const quillFormats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
  ];

  return (
    <>
      <div className="bg-gray-100 px-4 py-4">
        <Typography className="font-bold text-2xl">
          {isEdit ? "Edit" : "Add"} Job
        </Typography>
      </div>
      <Divider className="p-0 m-0" />
      <div className="p-4">
        <Form layout="vertical" autoComplete="off">
          <Form.Item label="Job Title" name="jobTitle">
            <Input placeholder="ex : Human Resources" />
          </Form.Item>
          <div className="grid grid-cols-3 gap-4">
            <Form.Item label="Job Type" name="jobType">
              <Select
                placeholder="Full Time / Part Time / Contract"
                options={[
                  { key: "full-time", label: "Full Time" },
                  { key: "part-time", label: "Part Time" },
                  { key: "contract", label: "Contract" },
                ]}
              />
            </Form.Item>
            <Form.Item label="Year of Experience" name="jobTitle">
              <Input placeholder="0" type="number" addonAfter={<>years</>} />
            </Form.Item>
            <Form.Item label="Location" name="location">
              <Input placeholder="ex : Jakarta, Indonesia" />
            </Form.Item>
          </div>
          <Form.Item label="Company Overview" name="companyOverview">
            <Input.TextArea
              rows={6}
              placeholder="ex : X Company is a leading tech company specializing in innovative web and mobile solutions. With a strong focus on creating high-quality, user-friendly applications, we cater to the needs of a diverse client base. Our team of passionate developers works on cutting-edge projects that shape the future of technology. We are committed to fostering a collaborative and inclusive work environment where creativity and innovation thrive. Join us and be part of a company that values growth, excellence, and making a positive impact through technology."
            />
          </Form.Item>
          <Form.Item label="Job Description" name="jobDescription">
            <QuillEditor
              modules={quillModules}
              formats={quillFormats}
              className="w-full bg-white"
              placeholder="ex : Responsibilities / Requirements / Benefits"
            />
          </Form.Item>
          <Form.Item className="flex justify-center">
            <Button htmlType="button" type="primary" danger className="mr-2">
              Cancel
            </Button>
            <Button htmlType="submit" type="primary">
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default JobForm;
