<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class marcaje extends Model
{
    use HasFactory;
    protected $fillable =[
        'id',
        'fecha',
        'entrada',
        'users'
    ];

    public function user()
{
return $this->BelongsTo(User::class);

}
    public function valida(){
        return $this->BelongsTo(User::class, 'foreign_key', 'other_key');
    }

}