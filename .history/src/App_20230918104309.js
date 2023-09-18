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
      <div className='fixed bottom-6 right-6'>
        <button className="bg-blue-500 text-white cursor-pointer transition hover:bg-blue-700 p-4 rounded-full" onClick={toggleAdditionalButtons}>
          <svg width="18" height="18" viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4427 0.335929C13.3618 0.948634 13.6101 2.19037 12.9974 3.10943L5.73704 14H16C16.7376 14 17.4153 14.406 17.7634 15.0563C18.1114 15.7066 18.0732 16.4957 17.6641 17.1094L8.33077 31.1094C7.71807 32.0285 6.47633 32.2768 5.55727 31.6641C4.63821 31.0514 4.38986 29.8097 5.00257 28.8906L12.263 18H2C1.26241 18 0.584692 17.5941 0.236654 16.9437C-0.111384 16.2934 -0.0732391 15.5043 0.335902 14.8906L9.66924 0.890629C10.2819 -0.0284284 11.5237 -0.276776 12.4427 0.335929Z" fill="white" />
          </svg>
        </button>
      </div>


      {showAdditionalButtons && (
        <div className="fixed bottom-6 right-20 flex justify-between">
          <button className="bg-gray-200 text-white cursor-pointer transition hover:bg-blue-700 p-4 rounded-full">
            <svg width="18" height="18" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4443 0.110657H1.9999C1.38879 0.110657 0.888794 0.610657 0.888794 1.22177V16.7773L5.33324 12.3329H16.4443C17.0555 12.3329 17.5555 11.8329 17.5555 11.2218V1.22177C17.5555 0.610657 17.0555 0.110657 16.4443 0.110657ZM15.3332 2.3328V10.1106H4.41103L3.75547 10.7661L3.11103 11.4106V2.3328H15.3332ZM19.7777 4.55512H21.9999C22.611 4.55512 23.111 5.05512 23.111 5.66623V22.3329L18.6666 17.8885H6.44435C5.83324 17.8885 5.33324 17.3885 5.33324 16.7773V14.5551H19.7777V4.55512Z" fill="#8885FF" />
            </svg>
          </button>
          <button className="bg-gray-200 text-white cursor-pointer transition hover:bg-blue-700 p-4 rounded-full">
            <svg width="18" height="18" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4443 0.110657H1.9999C1.38879 0.110657 0.888794 0.610657 0.888794 1.22177V16.7773L5.33324 12.3329H16.4443C17.0555 12.3329 17.5555 11.8329 17.5555 11.2218V1.22177C17.5555 0.610657 17.0555 0.110657 16.4443 0.110657ZM15.3332 2.3328V10.1106H4.41103L3.75547 10.7661L3.11103 11.4106V2.3328H15.3332ZM19.7777 4.55512H21.9999C22.611 4.55512 23.111 5.05512 23.111 5.66623V22.3329L18.6666 17.8885H6.44435C5.83324 17.8885 5.33324 17.3885 5.33324 16.7773V14.5551H19.7777V4.55512Z" fill="#8885FF" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
