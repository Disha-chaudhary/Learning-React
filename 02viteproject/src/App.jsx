import './App.css'
import { Bookmark } from 'lucide-react'

function App() {
  return (
    <div className="parent">

      <div className="card">

        <div className="top">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQZwfIF1UdjlMBtjg4fmlfdGU0suXMgG5qA&s"
            alt="company"
          />
          <button>
            Save <Bookmark size={16} />
          </button>
        </div>

        <div className="center">
          <h3>
            Amazon <span>5 days ago</span>
          </h3>
          <h2>Senior UI/UX designer</h2>

          <div className="tags">
            <h4>Part time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai, India</p>
          </div>
          <button>Apply</button>
        </div>

      </div>
      <div className="card">

        <div className="top">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQZwfIF1UdjlMBtjg4fmlfdGU0suXMgG5qA&s"
            alt="company"
          />
          <button>
            Save <Bookmark size={16} />
          </button>
        </div>

        <div className="center">
          <h3>
            Amazon <span>5 days ago</span>
          </h3>
          <h2>Senior UI/UX designer</h2>

          <div className="tags">
            <h4>Part time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai, India</p>
          </div>
          <button>Apply</button>
        </div>

      </div>

    </div>
  )
}

export default App
