import {resend} from '@/lib/resend'
import VerificationEmail from '../../email/varificationEmial'

import { ApiResponse } from '@/types/ApiResponse'

export async function sendVarificationEmial(
    email:string,
    username:string,
    verifyCode:string
):Promise<ApiResponse>{
    try {

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Varification Code',
            react: VerificationEmail({ username, otp:verifyCode }),
          });
        return {success:false,message:'Failed to send verification email.'}
    } catch (error) {
        console.error("error in email sending", error);
        return {success:false,message:'Failed to send verification email.'}
    }
}