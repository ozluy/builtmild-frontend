import React, { useEffect, useState } from 'react'
import { List, Input } from 'antd'
import request from '../../common/request'
import Project from '../../components/Project'
import ProjectSkeleton from '../../components/ProjectSkeleton'

const HomePage = () => {
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
          <ProjectSkeleton />
          <ProjectSkeleton />
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
          renderItem={(project, index) => (
            <Project key={project.ProjectID} project={project} />
          )}
        />
      )}
    </div>
  )
}

export default HomePage
