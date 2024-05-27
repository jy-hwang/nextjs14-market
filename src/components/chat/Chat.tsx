import { TConversation, TUserWithChat } from '@/types'
import React from 'react'
import Input from './Input';
import ChatHeader from './ChatHeader';
import { User } from '@prisma/client';

interface ChatProps {
    currentUser: TUserWithChat;
    receiver: {
        receiverId: string,
        receiverName: string,
        receiverImage: string,
    },
    setLayout: (layout: boolean) => void;
}

const Chat = ({
    currentUser,
    receiver,
    setLayout
}: ChatProps) => {

    if (!receiver.receiverName || !currentUser) {
        return <div className='w-full h-full'></div>
    }

    const conversation =
        currentUser?.conversations.find((conversation: TConversation) =>
            conversation.users.find((user: User) => user.id === receiver.receiverId)
        );

    const lastMessageTime = conversation?.messages
        .filter((message) => message.receiverId === currentUser.id)
        .slice(-1)[0]?.createdAt;

    return (
        <div className='w-full'>
            <div>
                <ChatHeader
                    setLayout={setLayout}
                    receiverName={receiver.receiverName}
                    receiverImage={receiver.receiverImage}
                    lastMessageTime={lastMessageTime}
                />
            </div>
            <div className='flex flex-col gap-8 p-4 overflow-hidden h-[calc(100vh_-_60px_-_70px_-_80px)]'>
                {/* chat message */}
            </div>
            <div>
                <Input
                    receiverId={receiver?.receiverId}
                    currentUserId={currentUser?.id}
                />
            </div>
        </div>
    )
}

export default Chat
