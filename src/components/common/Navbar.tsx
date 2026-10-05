import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { UserRole } from '../../types';
import { Bell, PlusCircle, CheckCircle2, ChevronDown, ShieldCheck, HeartHandshake, Briefcase, UserCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    currentView,
    setCurrentView,
    currentUser,
    switchRole,
    unreadNotificationsCount,
    notifications,
    markNotificationAsRead,
    markAllNotificationsAsRead
  } = useApp();

  const [roleMenuOpen, setRoleMenuOpen] = useState(false);
  const [notifMenuOpen, setNotifMenuOpen] = useState(false);

  const roles: { role: UserRole; title: string; desc: string; icon: React.ReactNode }[] = [
    { role: 'donor', title: 'Saxovatpesha / Donor', desc: 'Mablag‘ ajratish va ta’sirni kuzatish', icon: <HeartHandshake className="w-4 h-4 text-emerald-600" /> },
    { role: 'owner', title: 'Loyiha muallifi', desc: 'Yosh tadbirkor / Tashabbuskor', icon: <Briefcase className="w-4 h-4 text-blue-600" /> },
    { role: 'org', title: 'Muassasa / Maktab', desc: 'Maktab vasiyligi / NNT / Mahalla', icon: <UserCheck className="w-4 h-4 text-indigo-600" /> },
    { role: 'admin', title: 'Tekshiruvchi / Auditor', desc: 'Trust Engine & Ekspertiza paneli', icon: <ShieldCheck className="w-4 h-4 text-amber-600" /> }
  ];

  const navLinks = [
    { id: 'home', label: 'Bosh sahifa' },
    { id: 'projects', label: 'Muammolar' },
    { id: 'youth', label: 'Yoshlar dasturi' },
    { id: 'solutions', label: 'Yechimlar markazi' },
    { id: 'business', label: 'Yosh tadbirkor' },
    { id: 'mahalla', label: 'Digital Mahalla' },
    { id: 'transparency', label: 'Ochiq mablag‘lar' },
    { id: 'impact', label: 'Mening ta’sirim' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => setCurrentView('home')}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
          >
            <span className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-emerald-800 transition-colors">
              Y
            </span>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              Yordam<span className="text-emerald-700">Pay</span>
            </span>
          </button>

          {/* Zone 2: 4-7 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map(link => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setCurrentView(link.id)}
                  className={`cursor-pointer whitespace-nowrap transition-colors py-1 relative ${
                    isActive
                      ? 'text-emerald-700 font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" />
                  )}
                </button>
              );
            })}
            {currentUser.role === 'admin' && (
              <button
                onClick={() => setCurrentView('admin')}
                className={`cursor-pointer whitespace-nowrap px-2.5 py-1 rounded text-xs font-semibold uppercase tracking-wider transition-colors ${
                  currentView === 'admin'
                    ? 'bg-amber-100 text-amber-900'
                    : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                }`}
              >
                Admin Panel
              </button>
            )}
          </nav>

          {/* Zone 3: 1-2 primary actions & Role switcher */}
          <div className="flex items-center gap-3">
            {/* Notifications button */}
            <div className="relative">
              <button
                onClick={() => setNotifMenuOpen(!notifMenuOpen)}
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors relative cursor-pointer"
                title="Bildirishnomalar"
                aria-label="Bildirishnomalar"
              >
                <Bell className="w-5 h-5" />
                {unreadNotificationsCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white" />
                )}
              </button>

              {/* Notifications Dropdown */}
              {notifMenuOpen && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-xl border border-slate-200 py-3 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Bildirishnomalar ({notifications.length})
                    </span>
                    {unreadNotificationsCount > 0 && (
                      <button
                        onClick={markAllNotificationsAsRead}
                        className="text-xs text-emerald-700 hover:underline cursor-pointer"
                      >
                        Barchasini o‘qilgan qilish
                      </button>
                    )}
                  </div>
                  <div className="max-h-72 overflow-y-auto divide-y divide-slate-100">
                    {notifications.map(n => (
                      <div
                        key={n.id}
                        onClick={() => {
                          markNotificationAsRead(n.id);
                          if (n.projectId) {
                            setCurrentView('project-detail', n.projectId);
                            setNotifMenuOpen(false);
                          }
                        }}
                        className={`p-3 text-left hover:bg-slate-50 cursor-pointer transition-colors ${
                          !n.read ? 'bg-emerald-50/50' : ''
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-xs font-semibold text-slate-900">{n.title}</p>
                          <span className="text-[10px] text-slate-400 shrink-0">{n.timestamp}</span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 line-clamp-2">{n.message}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Role Switcher Pill for Judge/Reviewer Convenience */}
            <div className="relative">
              <button
                onClick={() => setRoleMenuOpen(!roleMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200/80 rounded-lg text-xs font-medium text-slate-700 transition-colors cursor-pointer border border-slate-200"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="truncate max-w-[120px] sm:max-w-none">
                  Rol: {currentUser.role === 'donor' ? 'Donor' : currentUser.role === 'owner' ? 'Muallif' : currentUser.role === 'org' ? 'Muassasa' : 'Admin / Audit'}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </button>

              {roleMenuOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50">
                  <div className="px-3 py-1.5 border-b border-slate-100 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Demo Rolini Tanlang
                  </div>
                  {roles.map(r => (
                    <button
                      key={r.role}
                      onClick={() => {
                        switchRole(r.role);
                        setRoleMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2.5 flex items-start gap-2.5 hover:bg-slate-50 transition-colors cursor-pointer ${
                        currentUser.role === r.role ? 'bg-emerald-50/60 font-semibold' : ''
                      }`}
                    >
                      <div className="mt-0.5">{r.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-slate-900 flex items-center justify-between">
                          <span>{r.title}</span>
                          {currentUser.role === r.role && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5 truncate">
                          {r.desc}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Create Project CTA Button */}
            <button
              onClick={() => setCurrentView('create-project')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-colors cursor-pointer whitespace-nowrap"
            >
              <PlusCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Loyiha yaratish</span>
              <span className="sm:hidden">Yaratish</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div className="lg:hidden flex items-center justify-start gap-2 py-2 overflow-x-auto no-scrollbar border-t border-slate-100 text-xs font-medium text-slate-600">
          {navLinks.map(link => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setCurrentView(link.id)}
                className={`px-2.5 py-1 rounded-md shrink-0 cursor-pointer ${
                  isActive ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          {currentUser.role === 'admin' && (
            <button
              onClick={() => setCurrentView('admin')}
              className={`px-2.5 py-1 rounded-md shrink-0 cursor-pointer ${
                currentView === 'admin' ? 'bg-amber-100 text-amber-900 font-semibold' : 'bg-amber-50 text-amber-800'
              }`}
            >
              Admin
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
