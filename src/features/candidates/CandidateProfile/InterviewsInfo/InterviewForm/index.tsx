import AppButton from "@/components/shared/AppButton";
import { DatePicker, Form, Input, TimePicker } from "antd";
import React from "react";

const InterviewForm: React.FC = () => {
  return (
    <Form layout="vertical">
      <Form.Item name="purpose" label="Purpose">
        <Input placeholder="Purpose" />
      </Form.Item>
      <Form.Item name="linkMeeting" label="Link Meeting">
        <Input placeholder="Link Meeting" />
      </Form.Item>
      <Form.Item name="meetingDate" label="Meeting Date">
        <DatePicker className="w-full" />
      </Form.Item>
      <Form.Item name="meetingTime" label="Meeting Time">
        <TimePicker.RangePicker className="w-full" />
      </Form.Item>

      <Form.Item className="justify-center flex">
        <AppButton type="default" className="mr-2">
          Cancel
        </AppButton>
        <AppButton type="primary">Submit</AppButton>
      </Form.Item>
    </Form>
  );
};

export default InterviewForm;
