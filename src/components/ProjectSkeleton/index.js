import { ProjectOutlined } from '@ant-design/icons'
import { Skeleton, Card, Avatar} from 'antd'
import React from 'react'

const { Meta } = Card

const ProjectSkeleton = () => (
  <Skeleton loading avatar active>
    <Meta
      avatar={<Avatar icon={<ProjectOutlined />} />}
      title='Card title'
      description='This is the description'
    />
  </Skeleton>
)

export default ProjectSkeleton
