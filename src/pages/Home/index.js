import React, { useEffect, useState } from 'react'
import { List, Avatar, Skeleton, Card, Input } from 'antd'
import { ProjectOutlined } from '@ant-design/icons'
import request from '../../common/request'
const { Meta } = Card

const Home = () => {
  const [projects, setProjects] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    request('http://127.0.0.1:8000/projects').then((response) => {
      setProjects(response)
      setIsLoading(false)
    })
  }, [])

  return (
    <div style={{ paddingTop: '50px' }}>
      <Input
        placeholder='Search project'
        value={searchValue}
        onChange={(e) => {
          const searchVal = e.target.value
          setSearchValue(searchVal)
        }}
      />
      {isLoading ? (
        <>
          <Skeleton loading={isLoading} avatar active>
            <Meta
              avatar={<Avatar icon={<ProjectOutlined />} />}
              title='Card title'
              description='This is the description'
            />
          </Skeleton>
          <Skeleton loading={isLoading} avatar active>
            <Meta
              avatar={<Avatar icon={<ProjectOutlined />} />}
              title='Card title'
              description='This is the description'
            />
          </Skeleton>
        </>
      ) : (
        <List
          itemLayout='horizontal'
          dataSource={
            searchValue
              ? projects.filter(
                  ({ ProjectName, ProjectAddress }) =>
                    `${ProjectAddress}${ProjectName}`
                      .toLowerCase()
                      .indexOf(searchValue.toLowerCase()) !== -1
                )
              : projects
          }
          renderItem={(
            {
              ProjectID,
              ProjectAddress,
              ProjectName,
              ProjectTotalApartments,
              ScrapingDate,
            },
            index
          ) => (
            <List.Item
              key={ProjectID}
              extra={<img width={272} alt='logo' src='/project.jpeg' />}
            >
              <List.Item.Meta
                avatar={<Avatar icon={<ProjectOutlined />} />}
                title={
                  <a href='https://ant.design'>
                    <h2>{ProjectName}</h2>
                    <div>{ProjectTotalApartments} apartments</div>
                    <div> {ProjectAddress}</div>
                  </a>
                }
                description={ScrapingDate}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  )
}

export default Home
