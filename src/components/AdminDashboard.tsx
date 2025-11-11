import { useState, useEffect } from 'react';
import { Search, Mail, Calendar, MessageSquare, User, RefreshCw, Copy, Check } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import logo from 'figma:asset/58ece3ae699ed2a60521d02495cec62c28ec1e5b.png';

interface ContactSubmission {
  email: string;
  role: string;
  message: string;
  timestamp: string;
}

export function AdminDashboard() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-5262ebd1/contacts`,
        {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        }
      );
      const data = await response.json();
      setSubmissions(data.submissions || []);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const filteredSubmissions = submissions.filter(
    (submission) =>
      submission.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      submission.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      submission.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const getRoleBadgeColor = (role: string) => {
    const colors: Record<string, string> = {
      'Prop Firm': 'from-blue-500/20 to-blue-500/10 text-blue-400 border-blue-500/30',
      'Trader': 'from-green-500/20 to-green-500/10 text-green-400 border-green-500/30',
      'Developer': 'from-purple-500/20 to-purple-500/10 text-purple-400 border-purple-500/30',
      'Just Curious': 'from-pink-500/20 to-pink-500/10 text-pink-400 border-pink-500/30',
    };
    return colors[role] || 'from-gray-500/20 to-gray-500/10 text-gray-400 border-gray-500/30';
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/95 backdrop-blur-lg border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img src={logo} alt="FairTrading" className="h-12 w-auto" />
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <span className="text-sm text-purple-400">Admin Dashboard</span>
              </div>
            </div>
            <button
              onClick={() => window.location.href = '/'}
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              Back to Site
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition" />
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Total Submissions</p>
                    <p className="text-3xl text-white mt-1">{submissions.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition" />
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Prop Firms</p>
                    <p className="text-3xl text-white mt-1">
                      {submissions.filter((s) => s.role === 'Prop Firm').length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-lg flex items-center justify-center">
                    <User className="text-green-400" size={24} />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition" />
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Traders</p>
                    <p className="text-3xl text-white mt-1">
                      {submissions.filter((s) => s.role === 'Trader').length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="text-purple-400" size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Actions */}
          <div className="relative mb-6">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-20" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 w-full sm:w-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search by email, role, or message..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>
                <button
                  onClick={fetchSubmissions}
                  disabled={loading}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
                  Refresh
                </button>
              </div>
            </div>
          </div>

          {/* Submissions Table */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl blur opacity-20" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <div className="flex flex-col items-center gap-4">
                    <RefreshCw className="animate-spin text-blue-400" size={32} />
                    <p className="text-gray-400">Loading submissions...</p>
                  </div>
                </div>
              ) : filteredSubmissions.length === 0 ? (
                <div className="flex items-center justify-center py-20">
                  <div className="text-center">
                    <Mail className="mx-auto text-gray-600 mb-4" size={48} />
                    <p className="text-gray-400">
                      {searchQuery ? 'No submissions found matching your search' : 'No submissions yet'}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-white/10">
                      <tr>
                        <th className="text-left px-6 py-4 text-sm text-gray-400">Email</th>
                        <th className="text-left px-6 py-4 text-sm text-gray-400">Role</th>
                        <th className="text-left px-6 py-4 text-sm text-gray-400">Message</th>
                        <th className="text-left px-6 py-4 text-sm text-gray-400">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredSubmissions.map((submission, index) => (
                        <tr key={index} className="hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <span className="text-gray-200">{submission.email}</span>
                              <button
                                onClick={() => copyEmail(submission.email)}
                                className="p-1 hover:bg-white/10 rounded transition-colors"
                                title="Copy email"
                              >
                                {copiedEmail === submission.email ? (
                                  <Check size={14} className="text-green-400" />
                                ) : (
                                  <Copy size={14} className="text-gray-400" />
                                )}
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex px-3 py-1 rounded-lg text-sm border bg-gradient-to-br ${getRoleBadgeColor(
                                submission.role
                              )}`}
                            >
                              {submission.role}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-gray-300 max-w-md truncate">
                              {submission.message || <span className="text-gray-500 italic">No message</span>}
                            </p>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                              <Calendar size={14} />
                              {formatDate(submission.timestamp)}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Showing {filteredSubmissions.length} of {submissions.length} submissions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
