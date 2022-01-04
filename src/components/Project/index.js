import React from 'react'
import { Avatar, List } from 'antd'
import { ProjectOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Project = ({
  project: {
    ProjectID,
    ProjectName,
    ProjectTotalApartments,
    ProjectAddress,
    ScrapingDate,
  },
}) => (
  <List.Item extra={<img width={272} alt='logo' src='/project.jpeg' />}>
    <List.Item.Meta
      avatar={<Avatar icon={<ProjectOutlined />} />}
      title={
        <Link to={`/project-detail/${ProjectID}`}>
          <h2>{ProjectName}</h2>
          <div>{ProjectTotalApartments} apartments</div>
          <div> {ProjectAddress}</div>
        </Link>
      }
      description={ScrapingDate}
    />
  </List.Item>
)

export default Project
