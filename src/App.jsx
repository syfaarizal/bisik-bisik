// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MessageForm from './components/MessageForm';
import MessageFeed from './components/MessageFeed';
import { 
  auth, 
  db, 
  signInAnonymously, 
  onAuthStateChanged, 
  collection, 
  addDoc, 
  serverTimestamp, 
  onSnapshot 
} from './services/firebase';

function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [configError, setConfigError] = useState(false);
  const [user, setUser] = useState(null);

  // Initialize auth
  useEffect(() => {
    let unsubscribeMessages = null;

    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

        const messagesRef = collection(db, 'messages');
        unsubscribeMessages = onSnapshot(
          messagesRef,
          (snapshot) => {
            const messagesData = snapshot.docs
              .map(doc => ({ id: doc.id, ...doc.data() }))
              .sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));

            setMessages(messagesData);
            setLoading(false);
          },
          (error) => {
            console.error(error);
            if (error.code === 'permission-denied') {
              setConfigError(true);
            }
            setLoading(false);
          }
        );
      } else {
        signInAnonymously(auth).catch(console.error);
      }
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeMessages) unsubscribeMessages();
    };
  }, []);

  const handleSubmitMessage = async (messageData) => {
    if (!user) return;
    
    setIsSubmitting(true);
    
    try {
      const messagesRef = collection(db, 'messages');
      
      await addDoc(messagesRef, {
        ...messageData,
        createdAt: serverTimestamp(),
        colorTheme: Math.floor(Math.random() * 3)
      });
      
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Gagal mengirim. Cek koneksi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-soft-red selection:text-white">
      <Navbar />
      
      <main className="flex-grow max-w-4xl mx-auto px-4 py-8 md:py-12 w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <MessageForm onSubmit={handleSubmitMessage} isSubmitting={isSubmitting} />
        
        <div className="md:col-span-7">
          <div className="flex items-center justify-between mb-8 px-2">
            <h2 className="text-2xl font-serif font-bold text-charcoal">Timeline</h2>
            <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1 bg-white border border-gray-200 text-gray-600 rounded-full shadow-sm">
              {messages.length} Bisikan
            </span>
          </div>
          
          <MessageFeed 
            messages={messages} 
            loading={loading} 
            error={false} 
            configError={configError} 
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;