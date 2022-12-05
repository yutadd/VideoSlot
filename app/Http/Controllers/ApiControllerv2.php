<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
class ApiControllerv2 extends Controller
{
    public function getBoard(Request $request){
        $user = $request->user();
        $userDetail=User::find($user->id);
        $userDetail->money=$userDetail->money-100;
        $userDetail->save();
        $board=array();
        for($i=3;$i>=0;$i--){
            for($a=0;$a<5;$a++){
                $board[$i][$a]=rand(0,6);
            }
        }
        return json_encode($board);
    }
    public function getAdditional(){
        //重力があるため下から取得していくべき
    }


}
