# Dev_Lounge

**Dev_Lounge** is a real-time collaboration platform built entirely around the developer workflow. It eliminates friction by integrating communication, coding, and artificial intelligence into one seamless environment. Designed for teams who need to brainstorm, write code, and iterate rapidly without ever leaving their workspace.

Frontend deployed link - 
`https://dev-lounge-ashy.vercel.app/`

## 🚀 Major Features

- **AI-Powered Pair Programming & Diff View:** An integrated AI assistant that understands your codebase. It doesn't just return text snippets; it suggests context-aware modifications and presents them in a beautiful, side-by-side **Monaco Diff Editor** right next to your chat.
- **Dedicated Code Editor Per Room:** Every chat room is paired with its own fully-featured code editor (powered by Monaco). Chat about logic on the left and write actual code on the right, simultaneously.
- **Real-Time, Fluid Chat Hub:** Instant, low-latency messaging with dynamic room creation for instant collaboration.
- **Integrated File Management:** Securely share and access project files and assets directly within your code editor for each room.
- **Seamless Google Authentication:** Frictionless and secure onboarding using Google Auth, complete with robust user profile management.
- **Developer-Centric Aesthetics:** A stunning, modern UI featuring a subtle, mathematical tile-shimmer background animation designed to maintain focus and reduce eye strain during long coding sessions.

## ✨ How It Works Seamlessly (With Examples)

Dev_Lounge is designed to keep you in the flow state. Here's how the features interact to create a unified experience:

### Example Scenario: Debugging and Fixing a Bug Together

1. **Creating the Space:** 
   User_A and User_B encounter a bug in their latest deployment. User_A logs in via **Google Auth**, creates a new room named `Bug-Fix-Auth`, and invites User_B.
   <img width="1919" height="1014" alt="image" src="https://github.com/user-attachments/assets/42e20acb-d7b0-450d-b747-2928b3058206" />
   
2. **Context Sharing & File Uploads:**
   User_B drags and drops the code file straight into the code editor via **Integrated File Management**. User_A instantly receives them and views the code without switching tabs.
   <img width="1918" height="1030" alt="image" src="https://github.com/user-attachments/assets/102945c7-3c51-46df-bf4d-e2501b5e4d85" />

3. **Coding & Discussing in Real-Time:**
   User_A opens the room's **Dedicated Code Editor** and pastes the problematic authentication middleware code. As she scrolls through the code, User_B messages her in the adjacent chat window:
   <img width="1916" height="1039" alt="image" src="https://github.com/user-attachments/assets/c307e682-3f32-4c84-b85b-7320b1d8dc27" />
   
   
4. **Invoking the AI Assistant:**
   Instead of opening Gemini in a new window, User_B opens the **AI Assistant** sidebar directly beside the chat, asking: *"Make the code more robust."*
   <img width="1919" height="1031" alt="image" src="https://github.com/user-attachments/assets/772566c6-cc83-4232-a9cf-55c1ea3f3d84" />


5. **Reviewing the Diff:**
   The AI analyzes the code in the editor and proposes a fix. Instead of a messy text block in the chat, the AI triggers the **Diff View**. A side-by-side Monaco Diff Editor directly appears, clearly highlighting the removed faulty logic in red and the new, secure validation in green.
   <img width="1919" height="1023" alt="image" src="https://github.com/user-attachments/assets/954255ce-d0f9-4cd9-a708-6a184a164b4a" />


6. **Applying the Changes:**
   User_A and User_B review the diff visually. It looks perfect. User_A clicks the **"Accept"** button on the AI's suggestion. The room's main code editor instantly updates with the new code. They are now ready to commit their changes.
   <img width="1918" height="1024" alt="image" src="https://github.com/user-attachments/assets/2a985355-dd4d-4378-9b95-d65d1b13b6d7" />


---

## 🛠️ Tech Stack Overview

- **Frontend:** React.js, Monaco Editor (for rich code editing & diff views)
- **Backend:** Node.js, Express.js
- **Services:** Real-time WebSockets integration, AI Service integrations, Google OAuth
- **Styling:** Custom CSS with modern, dark-mode developer aesthetics

## ⚙️ Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation & Running Locally

1. Install dependencies for both the frontend and the backend.
2. Configure your environment variables in the `server` folder (e.g., Google Client ID/Secret, AI API keys).
3. Start the application:
   ```bash
   # Terminal 1: Start the frontend
   npm install
   npm run dev

   # Terminal 2: Start the backend server
   cd server
   node server.js
   ```
