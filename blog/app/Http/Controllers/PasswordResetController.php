<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Mail;
use App\Mail\ResetPasswordMail;
class PasswordResetController extends Controller
{
    public function sendEmail(Request $request){
        if(!$this->validateEmail($request->email)){

            return $this->faildResponse();
        }
        $this->send($request->email);
        return $this->successResponse();

    }

    public function send($email){
        Mail::to($email)->send(new ResetPasswordMail);

    }

    public function validateEmail($email){
        return !!User::where('email',$email)->first();
    }

    public function faildResponse(){

        return response()->json([
            'error' => 'Email not exist in our records!'
        ],Response::HTTP_NOT_FOUND);
    }

    public function successResponse(){
        return response()->json([
            'data' => 'Password Reset Link sent to your email'
        ],Response::HTTP_OK);
    }


}
