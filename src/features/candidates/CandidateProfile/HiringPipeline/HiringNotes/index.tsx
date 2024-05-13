import { Avatar, Card, Divider, List, Typography } from "antd";
import React from "react";

const HiringNotes: React.FC = () => {
  const data = [
    {
      recruiterName: "John Doe",
      createdDate: "13 Mar 2023",
    },
    {
      recruiterName: "Maria",
      createdDate: "13 Mar 2023",
    },
  ];

  return (
    <Card bodyStyle={{ padding: 0 }}>
      <div className="flex justify-between p-4">
        <Typography className="font-bold">Notes</Typography>
      </div>
      <Divider className="!mt-2" />
      <div className="pb-4">
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                  />
                }
                title={
                  <div className="flex flex-row">
                    {item.recruiterName}{" "}
                    <Typography className="ml-2 text-gray-500">
                      {item.createdDate}
                    </Typography>
                  </div>
                }
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </List.Item>
          )}
        />
      </div>
    </Card>
  );
};

export default HiringNotes;
