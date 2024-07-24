import { List, Typography } from "antd";
import React from "react";

const NotificationList: React.FC = () => {
  return (
    <div className="p-4">
      <Typography className="font-bold text-xl mb-8">Notifications</Typography>
      <div className="mb-4">
        <Typography className="font-bold text-lg mb-1">Today</Typography>
        <List
          itemLayout="horizontal"
          dataSource={[
            {
              description: "Ant Design Title 1",
              createdDate: "Now",
            },
            {
              description: "Ant Design Title 2",
              createdDate: "2 seconds ago",
            },
            {
              description: "Ant Design Title 3",
              createdDate: "5 minutes ago",
            },
            {
              description: "Ant Design Title 4",
              createdDate: "10 minutes ago",
            },
          ]}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                description={
                  <>
                    <Typography className="text-gray-700">
                      {item.description}
                    </Typography>
                    {item.createdDate}
                  </>
                }
              />
            </List.Item>
          )}
        />
      </div>
      <div className="mb-4">
        <Typography className="font-bold text-lg mb-1">Yesterday</Typography>
        <List
          itemLayout="horizontal"
          dataSource={[
            {
              description: "Ant Design Title 1",
              createdDate: "Now",
            },
            {
              description: "Ant Design Title 2",
              createdDate: "2 seconds ago",
            },
            {
              description: "Ant Design Title 3",
              createdDate: "5 minutes ago",
            },
            {
              description: "Ant Design Title 4",
              createdDate: "10 minutes ago",
            },
          ]}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                description={
                  <>
                    <Typography className="text-gray-700">
                      {item.description}
                    </Typography>
                    {item.createdDate}
                  </>
                }
              />
            </List.Item>
          )}
        />
      </div>
      <div className="mb-4">
        <Typography className="font-bold text-lg mb-1">
          Wednesday, 25 July 2024
        </Typography>
        <List
          itemLayout="horizontal"
          dataSource={[
            {
              description: "Ant Design Title 1",
              createdDate: "Now",
            },
            {
              description: "Ant Design Title 2",
              createdDate: "2 seconds ago",
            },
            {
              description: "Ant Design Title 3",
              createdDate: "5 minutes ago",
            },
            {
              description: "Ant Design Title 4",
              createdDate: "10 minutes ago",
            },
          ]}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                description={
                  <>
                    <Typography className="text-gray-700">
                      {item.description}
                    </Typography>
                    {item.createdDate}
                  </>
                }
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default NotificationList;
