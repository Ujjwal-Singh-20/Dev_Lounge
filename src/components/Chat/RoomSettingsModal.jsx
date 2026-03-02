import React, { useState, useEffect } from 'react';
import { useChat } from '../../context/ChatContext';
import { X, Trash2, Users, Save, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const RoomSettingsModal = ({ onClose }) => {
    const { currentRoom, updateRoomAccess, deleteRoom } = useChat();
    const [emails, setEmails] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    useEffect(() => {
        if (currentRoom?.allowedEmails) {
            // Filter out creator to suggest they don't need to be added manually
            const others = currentRoom.allowedEmails.filter(e => e !== currentRoom.creatorEmail);
            setEmails(others.join(', '));
        }
    }, [currentRoom]);

    const handleUpdateAccess = async () => {
        setError('');
        setLoading(true);
        try {
            const allowedEmails = emails.split(',').map(e => e.trim()).filter(Boolean);
            await updateRoomAccess(currentRoom.id, allowedEmails);
            onClose();
        } catch (err) {
            setError(err.message || 'Failed to update access');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteRoom = async () => {
        setError('');
        setLoading(true);
        try {
            await deleteRoom(currentRoom.id);
            onClose();
        } catch (err) {
            setError(err.message || 'Failed to delete room');
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={e => e.stopPropagation()}
                className="w-full max-w-md bg-white dark:bg-chat-sidebar border dark:border-white/10 border-gray-200 rounded-2xl shadow-2xl overflow-hidden"
            >
                <div className="flex items-center justify-between p-5 border-b dark:border-white/5 border-gray-100">
                    <div className="flex items-center gap-2">
                        <Users size={18} className="text-brand-primary" />
                        <h2 className="text-sm font-bold">Room Settings — {currentRoom?.name}</h2>
                    </div>
                    <button onClick={onClose} className="p-1.5 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg">
                        <X size={15} />
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    {/* Access Management */}
                    <div className="space-y-3">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                            Manage Access <span className="font-normal normal-case opacity-60">(Emails)</span>
                        </label>
                        <div className="relative">
                            <textarea
                                value={emails}
                                onChange={e => setEmails(e.target.value)}
                                placeholder="alice@example.com, bob@example.com"
                                className="w-full px-4 py-3 rounded-xl border dark:border-white/10 border-gray-200 bg-gray-50 dark:bg-white/5 text-sm font-medium focus:outline-none focus:ring-2 ring-brand-primary/30 transition-all min-h-[100px] resize-none"
                            />
                        </div>
                        <p className="text-[10px] text-gray-400">
                            Separate multiple emails with commas. The creator ({currentRoom?.creatorEmail}) always has access.
                        </p>
                    </div>

                    {error && (
                        <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-medium">
                            <AlertCircle size={14} />
                            {error}
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex flex-col gap-3 pt-2">
                        <button
                            onClick={handleUpdateAccess}
                            disabled={loading}
                            className="w-full py-3 rounded-xl bg-brand-primary text-white text-sm font-bold shadow-lg shadow-brand-primary/20 hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            <Save size={16} />
                            {loading ? 'Saving…' : 'Save Changes'}
                        </button>

                        {!showDeleteConfirm ? (
                            <button
                                onClick={() => setShowDeleteConfirm(true)}
                                className="w-full py-3 rounded-xl border border-red-500/30 text-red-500 text-sm font-bold hover:bg-red-500/10 transition-all flex items-center justify-center gap-2"
                            >
                                <Trash2 size={16} />
                                Delete Room
                            </button>
                        ) : (
                            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 space-y-3">
                                <p className="text-xs text-red-500 font-bold text-center">Are you absolutely sure? This cannot be undone.</p>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setShowDeleteConfirm(false)}
                                        className="flex-1 py-2 rounded-lg bg-gray-200 dark:bg-white/10 text-xs font-bold"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleDeleteRoom}
                                        disabled={loading}
                                        className="flex-1 py-2 rounded-lg bg-red-500 text-white text-xs font-bold shadow-lg shadow-red-500/20"
                                    >
                                        {loading ? 'Deleting…' : 'Confirm Delete'}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default RoomSettingsModal;
