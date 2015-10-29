<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Product;

class ProductsController extends Controller
{
    public function index()
    {
        $products = Product::all();

        return response()->json($products);
    }
}
