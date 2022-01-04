import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'antd'

const Layout = ({ children }) => (
  <Col span={12} offset={6}>
    <ul
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        listStyle: 'none'
      }}
    >
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
    </ul>
    {children}
  </Col>
)

export default Layout
