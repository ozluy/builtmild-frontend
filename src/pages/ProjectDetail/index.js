import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import request from '../../common/request'
import Project from '../../components/Project'
import ProjectSkeleton from '../../components/ProjectSkeleton'


const ProjectDetailPage = (props) => {
  const { projectId } = useParams()
  const [project, setProject] = useState()

  useEffect(() => {
    if (projectId) {
      request(`http://127.0.0.1:8000/project/${projectId}/`).then((data) => {
        setProject(data)
      })
    }
  }, [projectId])

  return project ? (
    <Project key={project.ProjectID} project={project} />
  ) : (
    <ProjectSkeleton />
  )
}

export default ProjectDetailPage
