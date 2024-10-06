import logo from './logo.svg';
import './App.css';

export default function Profile() {
  return (
    <div>
      <div className="post-card">
        <div className="post-content">
        <p>This is the content of the post...</p>
          <u>
            <li>Item 1</li>
            <li>Item 2</li>
          </u>
        </div>
      </div>
      <div className="post-card">
        <div className="post-content">
         
          <span>Posted on: January 1, 2023</span>
        </div>
      </div>
    </div>
  );
}

