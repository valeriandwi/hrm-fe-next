import { LockOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Card, Col, Divider, Row, Typography } from 'antd'
import React from 'react'

const InactiveJobs : React.FC = () => {
  return (
    <div>
        <Typography className='text-2xl mb-6 mt-3'>7 Inactive Jobs</Typography>
        <Row>
            <Col span={6}>
                <Card className='border-t-2 border-t-gray-500'>
                    <Typography className='text-gray-400 font-semibold'>DEVELOPMENT</Typography>
                    <Typography className='font-semibold'>Product Manager</Typography>
                    <Divider/>
                    <div className='flex flex-row justify-between items-center'>
                        <div>
                            <Typography className='text-gray-500'>
                                <LockOutlined /> Inactive
                            </Typography>
                        </div>
                        <div>
                            <Button type='ghost'>See Details <RightOutlined /></Button>
                        </div>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default InactiveJobs