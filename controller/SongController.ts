import { Song } from '../models/Song';
import { SongBusiness } from '../business/SongBusiness';

export const SongController = {
  adicionarProduto(
  nome: string,
  onSucesso: (lista: Song[]) => void,
  onErro: (mensagem: string) => void
  ) {
  try {
    SongBusiness.adicionarSong(nome);
    onSucesso(SongBusiness.listar());
    } catch (e: any) {
    onErro(e.message);
  }
 },
 carregarSongs(): Song[] {
  return SongBusiness.listar();
 },
};
