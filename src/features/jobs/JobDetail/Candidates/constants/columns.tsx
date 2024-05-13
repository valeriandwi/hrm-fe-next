import { Avatar, Typography } from "antd";

export const columns = [
    {
        title: 'Candidate Name',
        dataIndex: 'candidateName',
        key: 'name',
        render: (value : any) => (
            <div className="flex flex-row items-center space-x-2">
                <Avatar src={`https://i.pravatar.cc/300?u=${value}abc`}/>
                <Typography>{value}</Typography>
            </div>
        )
    },
    {
        title: 'Stages',
        dataIndex: 'stages',
        key: 'stages',
        render : (value : any) => (
            <>
                {value.name}
                <div className="flex space-x-1 w-full">
                    {[1,2,3,4,5].map(number => {
                        if(number > value.number){
                            return <div className="bg-gray-200 w-full"/>
                        }
                        return <div className="bg-green-800 text-white w-full text-center">{number}</div>
                    })}
                </div>
            </>
        )
    },
    {
        title: 'Applied Date',
        dataIndex: 'appliedDate',
        key: 'appliedDate',
    },
    {
        title: 'Hired by',
        dataIndex: 'hiredBy',
        key: 'hiredBy',
        render: (value : any) => (
            <div className="flex flex-row items-center space-x-2">
                <Avatar src={`https://i.pravatar.cc/300?u=${value}abc`}/>
                <Typography>{value}</Typography>
            </div>
        )
    },
];