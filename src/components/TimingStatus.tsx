import React, { useState, useEffect } from 'react';
import { Clock, Calendar } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const TimingStatus: React.FC = () => {
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentDecimal = hours + minutes / 60;

      if (day === 0) {
        if (currentDecimal >= GYM_DETAILS.timings.sundayOpenHour && currentDecimal < GYM_DETAILS.timings.sundayCloseHour) {
          setIsOpenNow(true);
          setStatusMessage('OPEN NOW • Closes at 12:00 PM today');
        } else {
          setIsOpenNow(false);
          setStatusMessage(currentDecimal < 7 ? 'CLOSED • Opens at 7:00 AM today' : 'CLOSED • Opens 6:00 AM tomorrow (Mon)');
        }
      } else {
        if (currentDecimal >= GYM_DETAILS.timings.weekdayOpenHour && currentDecimal < GYM_DETAILS.timings.weekdayCloseHour) {
          setIsOpenNow(true);
          setStatusMessage('OPEN NOW • Closes at 10:30 PM today');
        } else {
          setIsOpenNow(false);
          setStatusMessage(currentDecimal < 6 ? 'CLOSED • Opens at 6:00 AM today' : 'CLOSED • Opens at 6:00 AM tomorrow');
        }
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-[#F8FAFC] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-glass flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Status Left */}
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200">
              <span className={`w-3 h-3 rounded-full ${isOpenNow ? 'bg-[#27AE60] animate-ping' : 'bg-[#EB5757]'}`} />
              <span className={`text-xs font-black uppercase tracking-wider ${isOpenNow ? 'text-[#27AE60]' : 'text-[#EB5757]'}`}>
                {statusMessage}
              </span>
            </div>

            <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
              Gym Operating Hours
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-lg">
              Convenient full-day hours engineered to fit any morning or late evening workout routine.
            </p>
          </div>

          {/* Cards Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
            
            <div className="p-5 rounded-3xl bg-[#050507] text-white border border-white/10 flex items-center gap-4 shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#F5A623] to-[#F2994A] text-black flex items-center justify-center font-bold shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-black text-[#F5A623] uppercase tracking-wider">Monday – Saturday</p>
                <p className="font-heading font-black text-lg text-white">6:00 AM – 10:30 PM</p>
                <p className="text-[10px] text-slate-400 font-medium">Open Full Day Access</p>
              </div>
            </div>

            <div className="p-5 rounded-3xl bg-[#F0F9FF] border border-[#29ABE2]/30 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#29ABE2] text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-black text-[#29ABE2] uppercase tracking-wider">Sunday Special</p>
                <p className="font-heading font-black text-lg text-slate-900">7:00 AM – 12:00 PM</p>
                <p className="text-[10px] text-slate-600 font-medium">Gents Steam Session Available</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
