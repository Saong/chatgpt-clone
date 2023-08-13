import { ChatContextProvider } from './context/chatContext';
import SideBar from './components/SideBar';
import ChatView from './components/ChatView';
import { useEffect, useState } from 'react';
import Modal from './components/Modal';
import Setting from './components/Setting';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // const apiKey = window.localStorage.getItem('api-key');
    // const apiKey = "ba3825dd65184b73a9905c3ef503032d"
    // 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
    const apiKey = "ba3825dd65184b73a9905c3ef503032d"
    if (!apiKey) {
      setModalOpen(true);
    }
  }, []);
  return (
    <ChatContextProvider>
      <Modal title='Setting' modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <Setting modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </Modal>
      <div className='flex transition duration-500 ease-in-out'>
        <SideBar />
        <ChatView />
      </div>
    </ChatContextProvider>
  );
};

export default App;
