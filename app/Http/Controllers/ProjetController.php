<?php

namespace App\Http\Controllers;

use App\Models\Projet;
use App\Http\Requests\StoreProjetRequest;
use App\Http\Requests\UpdateProjetRequest;
use App\Http\Resources\ProjetResource;

class ProjetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Projet::query();

        $sortField = request("sort_field", 'created_at'); 
        $sortDirection = request("sort_direction", "desc"); 

        if(request("name")){
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if(request("status")){
            $query->where("status", request("status"));
        }

        $projets = $query->orderBy($sortField, $sortDirection)
        ->paginate(10)
        ->onEachSide(1);
        
        return inertia("Projet/Index", [ 
            "projets" => ProjetResource::collection($projets),
            'queryParams' => request()->query() ?: null,
            ] );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjetRequest $request)
    {
        // 
    }

    /**
     * Display the specified resource.
     */
    public function show(Projet $projet)
    {
        return inertia('Projet/Show', [
            'projet' => new ProjetResource($projet),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Projet $projet)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjetRequest $request, Projet $projet)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Projet $projet)
    {
        //
    }
}
