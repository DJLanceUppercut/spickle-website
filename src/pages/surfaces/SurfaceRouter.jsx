import { useParams, Navigate } from 'react-router-dom'
import { surfaces } from '../../data/surfaces'
import SurfacePage from '../../components/SurfacePage'

export default function SurfaceRouter() {
  const { slug } = useParams()
  const surface = surfaces.find(s => s.slug === slug)
  if (!surface) return <Navigate to="/404" replace />
  return <SurfacePage surface={surface} />
}
