import { FeedbackProvider } from './context/FeedbackContext'
import FeedbackList from './components/FeedbackList'

function App() {
  return (
    <FeedbackProvider>
      <FeedbackList />
    </FeedbackProvider>
  )
}

export default App
