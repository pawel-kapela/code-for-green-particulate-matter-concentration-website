<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

use App\Measurement;

class MeasurementsController extends Controller
{
    public function index()
    {
        $data = Cache::remember(
            'measurements',
            now()->addDays(3),
            function () {
                return Measurement::all();
            }
        );

        return $data->toJson();
    }

    public function show(Request $request)
    {
        $validatedInput = $request->validate([
            'from' => 'date',
            'to' => 'date'
        ]);

        $data = Measurement::whereBetween('datetime', [$validatedInput['from'], $validatedInput['to']])->get();

        return $data->toJson();
    }
}
