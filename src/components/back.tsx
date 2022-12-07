import { Link } from 'react-router-dom'

export default function Back() {
  return (
    <button className='btn-primary'>
      <Link to="/">Back</Link>
    </button>
  )
}
