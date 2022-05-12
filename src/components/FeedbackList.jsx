import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from '../components/shared/Spinner'

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext)

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      {feedback.map((item) => (
        <div key={item.id}>
          Rating:{item.rating} - {item.text}
        </div>
      ))}
    </div>
  )
}

export default FeedbackList
