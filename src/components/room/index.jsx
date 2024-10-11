import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomId } = useParams();
  const myMeeting = async (element) => {

    const appID = Number(process.env.REACT_APP_API_KEY);
    const serverSecret = process.env.REACT_APP_API_SERVER;
    

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      " "
    );
    console.log('kitToken:', kitToken); 

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    console.log('zc instance:', zc);

    if (!zc) {
      console.error('Failed to create ZegoUIKitPrebuilt instance');
      return;
    }
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `http://localhost:3000/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
    });
  };
  return (
    <div >
      <div ref={myMeeting} />
    </div>
  );
};
export default Room;
