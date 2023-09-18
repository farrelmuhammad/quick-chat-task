import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);

  const toggleAdditionalButtons = () => {
    setShowAdditionalButtons(!showAdditionalButtons);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      {/* Quick Start button */}
      <button className="quick-start-button p-4 rounded-full">
        <svg width="18" height="18" viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4427 0.335929C13.3618 0.948634 13.6101 2.19037 12.9974 3.10943L5.73704 14H16C16.7376 14 17.4153 14.406 17.7634 15.0563C18.1114 15.7066 18.0732 16.4957 17.6641 17.1094L8.33077 31.1094C7.71807 32.0285 6.47633 32.2768 5.55727 31.6641C4.63821 31.0514 4.38986 29.8097 5.00257 28.8906L12.263 18H2C1.26241 18 0.584692 17.5941 0.236654 16.9437C-0.111384 16.2934 -0.0732391 15.5043 0.335902 14.8906L9.66924 0.890629C10.2819 -0.0284284 11.5237 -0.276776 12.4427 0.335929Z" fill="white" />
        </svg>
      </button>

      {showAdditionalButtons && (
        <div className="additional-buttons">
          {/* Add your additional buttons here */}
          <button className="additional-button">Button 1</button>
          <button className="additional-button">Button 2</button>
        </div>
      )}
    </div>
  );
}

export default App;