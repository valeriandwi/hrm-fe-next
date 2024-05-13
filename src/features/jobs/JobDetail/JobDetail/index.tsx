import { EditOutlined } from "@ant-design/icons";
import { Button, Tag } from "antd";
import Typography from "antd/es/typography/Typography";
import React from "react";
import JobDetailForm from "./Form";

const JobDetails: React.FC = () => {
  const [isEdit, setIsEdit] = React.useState<boolean>(false);

  if (isEdit) {
    return <JobDetailForm setIsEdit={setIsEdit} />;
  }

  return (
    <div className="flex flex-col space-y-2">
      <div>
        <div className="flex justify-between items-center">
          <Typography className="font-semibold">Job Description</Typography>
          <Button type="text" onClick={() => setIsEdit(true)}>
            <EditOutlined /> Edit
          </Button>
        </div>
        <Typography className="text-justify">
          We are looking for a UI/UX designer with a special place in his heart
          for designing and the ability to work in a fast-paced entrepreneurial
          environment. You should get excited about creating beautiful-looking
          consumer products (Apps/ Websites/Graphics) that are simple to use,
          intuitive and responsive.
        </Typography>
      </div>
      <div>
        <Typography className="font-semibold">Qualifications</Typography>
        <ul>
          <li>Bachelor degree in computer science and related fields</li>
          <li>2 years working experience as Frontend Developer</li>
        </ul>
      </div>
      <div>
        <Typography className="font-semibold">Skills Requirement</Typography>
        <Tag color={"blue"}>Frontend Developer</Tag>
      </div>
    </div>
  );
};

export default JobDetails;
