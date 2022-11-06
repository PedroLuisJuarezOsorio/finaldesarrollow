<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserController extends Controller
{
    public function register(Request $request){
        $user = User::create($request->all());
        return response()->json([
            'message' => "User saved successfully!",
            'product' => $user
        ], 200);
    }
    }
