import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

let liveblocksAuthToken = null;
export const setLiveblocksAuthToken = (token) => {
    liveblocksAuthToken = token;
};

const client = createClient({
    authEndpoint: async (room) => {
        const res = await fetch(`${import.meta.env.VITE_API_BASE}/liveblocks/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: liveblocksAuthToken ? `Bearer ${liveblocksAuthToken}` : '',
            },
            body: JSON.stringify({ room }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Liveblocks auth failed');
        return data;
    }
});

// Presence represents the properties that will be kept in sync for each person in the room.
// In Monaco, we'll sync the cursor position.
export const {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useOthers,
    useOthersMapped,
    useOthersConnectionIds,
    useStorage,
    useMutation,
    useSelf,
} = createRoomContext(client);
