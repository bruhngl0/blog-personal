import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to = '/'>bruh.ngl</Link>
      <Link to = '/start'>start Here</Link>
      <Link to = '/blog'>Blog</Link>
      <Link to = '/changelog'>Changelog</Link>
      <Link to = '/fundme'>Fund me</Link>
    </div>
  )
}

export default Header
