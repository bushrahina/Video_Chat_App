# Video Chat Application

This is a browser-based video chat application that supports real-time video and voice communication, screen sharing, in-app chat, and link-sharing. The app enables both one-on-one and group video calls. It also includes user authentication, with registration and login features using bcryptjs for password hashing.

## Features

- **User Authentication**: Users must register and log in before accessing the video chat features. Registration requires name, email, and password, and login requires email and password. Passwords are securely hashed using `bcryptjs`.
  
- **One-on-One Video Call**: Users can make one-on-one video calls with other users.

- **Group Video Call**: Supports group video calls with multiple participants.

- **Voice Call**: Users can initiate voice-only calls.

- **Screen Sharing**: Users can share their entire screen, a specific Chrome tab, or a selected window during video calls. Audio from the shared tab can also be shared.

- **In-App Chat**: Includes a chat feature where users can send messages during the call.

- **Link Sharing**: Users can generate and share a video call link with friends and family to invite them to join.

## Technologies Used

- **Frontend**: React, React Router for routing, Tailwind CSS for styling.
- **Real-Time Communication**: Integrated with [ZegoCloud SDK](https://www.zegocloud.com/) to handle video, voice, and chat functionality.
- **Password Hashing**: `bcryptjs` is used to hash user passwords for secure storage.
  
## How It Works

### Registration and Login

1. **Registration**: Users need to provide their name, email, and password to register. The password is securely hashed using `bcryptjs`.
2. **Login**: Registered users can log in with their email and password to access the application.

### Video Chat Features

- Once logged in, users can initiate a one-on-one or group video call by sharing the generated link.
- During the video call, users can:
  - Share their screen (a specific Chrome tab, a window, or the entire screen). They can also choose to share the audio from the selected tab.
  - Use the in-app chat feature to send messages.
  - Invite others to join the call by sharing a link.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/bushrahina/Video_Chat_App.git
