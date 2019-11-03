<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Mail;
use App\Mail\ResetPasswordMail;
use Carbon\Carbon;
use App\Http\Requests\ChangePasswordRequest;
use Illuminate\Support\Facades\DB;
class changePasswordController extends Controller
{
    public function process(ChangePasswordRequest $request){
        
      return $this->getPasswordResetTableRow($request)->count()>0 ? $this->changePassword($request) : $this->tokenNotFoundResponse();
    }

    public function getPasswordResetTableRow($request){

        return DB::table('password_resets')->where(['email'=>$request->email,'token'=>$request->resetToken])->get();
    }

    private function tokenNotFoundResponse(){
        return response()->json(
            [
                'error'=>'Email or token is incorrect'
            ],Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    private function changePassword($request){
        $user = User::whereEmail($request->email)->first();
        $user->update(['password'=>$request->password]);
        // deleting the row from password_reset table
        DB::table('password_resets')->where(['email'=>$request->email,'token'=>$request->resetToken])->delete(); 
        return response()->json([
            'data'=>'Your Credential Successfully Changed'
        ],Response::HTTP_CREATED);
    }
}
