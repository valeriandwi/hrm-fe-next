import { Typography } from "antd";
import { ColumnsType } from "antd/es/table";

export const columns: ColumnsType<any> = [
    {
      title: 'Jobs',
      dataIndex: 'jobs',
      key: 'jobs',
      render: (value : any) => (
        <>
          <Typography className='font-semibold'>{value.name}</Typography>
          <Typography className='font-medium'>
            <span className='text-grey-500-color'>Total Applicants : </span> 
            {value.total}
          </Typography>
        </>
      )
    },
    {
      title: 'New Applied',
      dataIndex: 'newApplied',
      key: 'newApplied',
      className: "bg-[#97B4B1] !text-center",
      render : (value : any) => (
        <div>
          <Typography className='text-white-color'>{value} candidates</Typography>
        </div>
      )
    },
    {
      title: 'Screening',
      dataIndex: 'screening',
      key: 'screening',
      className: "bg-[#3E726F] !text-center",
      render : (value : any) => (
        <div>
          <Typography className='text-white-color'>{value} candidates</Typography>
        </div>
      )
    },
    {
      title : 'Interview',
      dataIndex : 'interview',
      key : 'interview',
      className: "bg-[#FB8E02] !text-center",
      render : (value : any) => (
        <div>
          <Typography className='text-white-color'>{value} candidates</Typography>
        </div>
      )
    },
    {
      title : 'Test',
      dataIndex : 'test',
      key : 'test',
      className: "bg-[#C579CE] !text-center",
      render : (value : any) => (
        <div>
          <Typography className='text-white-color'>{value} candidates</Typography>
        </div>
      )
    },{
      title : 'Hired',
      dataIndex : 'hired',
      key : 'hired',
      className: "bg-[#A6C78D] !text-center",
      render : (value : any) => (
        <div>
          <Typography className='text-white-color'>{value} candidates</Typography>
        </div>
      )
    }
];