<?php
 
namespace Database\Seeders;

use App\Models\Projet;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        User::factory()->create([
            'name' => 'Achraf',
            'email' => 'achraf@example.com',
            'password' => bcrypt('123.321B'),
            'email_verified_at' => time()
        ]);

        Projet::factory()
            ->count(30)
            ->hasTasks(30)
            ->create();
    }
}
