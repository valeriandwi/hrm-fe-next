import { EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import JobDescription from "../Description";
import AppDrawer from "@/components/shared/AppDrawer";
import withEditJobForm from "../../hocs/withEditJobForm";
import JobForm from "../../JobForm";
import useDrawer from "@/hooks/useDrawer";

const EditJobForm = withEditJobForm(JobForm);

const JobDetails: React.FC = () => {
  const [{ openDrawer }, toggleDrawer] = useDrawer();

  return (
    <>
      <div className="flex justify-end">
        <Button type="default" onClick={toggleDrawer} icon={<EditOutlined />}>
          Edit
        </Button>
      </div>
      <JobDescription />
      <AppDrawer
        open={openDrawer}
        placement="right"
        size="large"
        onClose={toggleDrawer}
        style={{ padding: "0px" }}
      >
        <EditJobForm />
      </AppDrawer>
    </>
  );
};

export default JobDetails;
