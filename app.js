import { describe, it, expect, vi, beforeEach } from 'vitest';
import { api } from './api';

describe('api.obterDados()', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('deve retornar os dados corretamente em caso de sucesso', async () => {
    vi.spyOn(api, 'obterDados').mockResolvedValue({ status: 200, payload: [] });

    const resultado = await api.obterDados();
    
    expect(resultado.status).toBe(200);
    expect(resultado.payload).toBeDefined();
  });

  it('deve lançar exceção quando a API falhar', async () => {
    vi.spyOn(api, 'obterDados').mockRejectedValue(new Error('Falha de conexão'));

    await expect(api.obterDados()).rejects.toThrow('Falha de conexão');
  });
});
