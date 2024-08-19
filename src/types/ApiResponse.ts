import { Message } from '@/models/User'

export interface ApiResponse{
    success:Boolean,
    message:String,
    isAcceptingMessage?:Boolean,
    messages?:Array<Message>
}