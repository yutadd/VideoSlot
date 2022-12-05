<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ApiTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testApi()
    {
        // エラー
        $this->patchJson('/api/getBoard', [])->assertStatus(200);
    }
}