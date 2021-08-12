import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Livro } from 'src/Models/livro.model';
import { LivroService } from 'src/Services/livro.service';

@Controller('livros')
export class LivrosController {
    constructor(private livroService: LivroService) {

    }

    @Get()
    async getAll(): Promise<Livro[]> {
        return this.livroService.getAll();
    }    
    
    @Get(':id')
    async getLivro(@Param() {id}): Promise<Livro> {
        return this.livroService.getLivro(id);
    }    
    
    @Post()
    async create(@Body() livro: Livro) {
        this.livroService.create(livro);
    }

    @Put(':id')
    async update(@Body() livro: Livro): Promise<[number, Livro[]]> {
        return this.livroService.update(livro);
    }

    @Delete(':id')
    async delete(@Param() {id}) {
        this.livroService.delete(id);
    }
}
