import Typography from "antd/es/typography/Typography";
import React from "react";
import CandidateProfile from "../../../Candidates/CandidateProfile";
import useDrawer from "../../../../hooks/useDrawer";
import TableCandidates from "../../../Candidates/Table";
import AppDrawer from "@/components/shared/AppDrawer";

const Candidates: React.FC = () => {
  const [{ openDrawer }, toggleDrawer] = useDrawer();

  return (
    <div>
      <div className="mb-4">
        <Typography className="font-semibold">Total Candidates : 24</Typography>
      </div>
      <TableCandidates toggleDrawer={toggleDrawer} />
      <AppDrawer
        open={openDrawer}
        placement="right"
        size="large"
        onClose={toggleDrawer}
        style={{ padding: "0px" }}
      >
        <CandidateProfile />
      </AppDrawer>
    </div>
  );
};

export default Candidates;
