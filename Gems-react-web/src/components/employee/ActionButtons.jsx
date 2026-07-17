import React, { useState } from 'react';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { checkIn, checkOut } from '../../api/attendanceApi';

const ActionButtons = ({ status }) => {
  const [loading, setLoading] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status || 'Present');
  const [notification, setNotification] = useState(null);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleAction = async (type) => {
    setLoading(true);
    try {
      if (type === 'checkIn') {
        await checkIn();
        setCurrentStatus('Checked In');
      } else if (type === 'checkOut') {
        await checkOut();
        setCurrentStatus('Checked Out');
      }
      showNotification(`Successfully ${type === 'checkIn' ? 'Checked In' : 'Checked Out'}`);
    } catch (error) {
      console.error("Action failed", error);
      showNotification("Failed to perform action");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="glass-card p-5 flex flex-col h-full justify-center">
        <h3 className="text-lg font-semibold text-white mb-4 font-cinzel">Quick Actions</h3>
        <div className="grid grid-cols-1 gap-3">
          <button
            onClick={() => handleAction('checkIn')}
            disabled={loading || currentStatus === 'Checked In'}
            className="flex items-center justify-center px-4 py-3 bg-gold-primary hover:bg-gold-secondary disabled:bg-white/10 disabled:text-gray-500 text-black rounded-lg transition-colors font-semibold"
          >
            <Clock className="w-5 h-5 mr-2" />
            {loading && currentStatus !== 'Checked In' ? 'Processing...' : 'Check In'}
          </button>
          
          <button
            onClick={() => handleAction('checkOut')}
            disabled={loading || currentStatus === 'Checked Out'}
            className="flex items-center justify-center px-4 py-3 bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:text-gray-600 text-white border border-white/20 rounded-lg transition-colors font-medium"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Check Out
          </button>
        </div>
      </div>

      {notification && (
        <div className="fixed bottom-6 right-6 bg-gold-primary text-black px-6 py-3 rounded-xl shadow-lg shadow-black/50 font-semibold flex items-center animate-in slide-in-from-bottom-5 fade-in duration-300 z-50">
          <CheckCircle className="w-5 h-5 mr-3" />
          {notification}
        </div>
      )}
    </>
  );
};

export default ActionButtons;
