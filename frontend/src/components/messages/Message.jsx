function Message() {
  const profilePic = `https://avatar.iran.liara.run/public/boy?username=John`;
  return (
    <div className="chat chat-end">
      <div className="chat-image avavtar">
        <div className="w-10 rounded-fill">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      {/* <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div> */}
      <div className={`chat-bubble text-white bg-blue-500 pb-2`}>Hello</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:42
      </div>
    </div>
  );
}

export default Message;
