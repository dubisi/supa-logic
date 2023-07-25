import { Injectable } from '@angular/core';
import { PostWord, Word } from './data-interface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private Http: HttpClient) {}
  baseUrl: string = "https://supalogic.azurewebsites.net/";

  getWord() {
    return this.Http.post<Word>(`${this.baseUrl}api/v1/supalogic/world-soccer`, undefined);
  }

  getAllWordsSoccer() {
    return this.Http.get<Word[]>(`${this.baseUrl}api/v1/supalogic/world-soccer`);
  }

  postWordsSoccer(word: PostWord) {
    return this.Http.post<PostWord>(`${this.baseUrl}api/v1/supalogic/worldsoccer`, word);
  }

  getWordKnowledge() {
    return this.Http.post<Word>(`${this.baseUrl}api/v1/supalogic/world-knowledge`, undefined);
  }

  getAllWordKnowledge() {
    return this.Http.get<Word[]>(`${this.baseUrl}api/v1/supalogic/world-knowledge`);
  }

  postWordKnowledge(word: PostWord) {
    return this.Http.post<PostWord>(`${this.baseUrl}api/v1/supalogic/worldknowledge`, word);
  }

  getWordAmerican() {
    return this.Http.post<Word>(`${this.baseUrl}api/v1/supalogic/world-american`, undefined);
  }

  getAllWordsAmerican() {
    return this.Http.get<Word[]>(`${this.baseUrl}api/v1/supalogic/world-american`);
  }

  postWordAmerican(word: PostWord) {
    return this.Http.post<PostWord>(`${this.baseUrl}api/v1/supalogic/worldamerican`, word);
  }

  clearWorldSoccerTable() {
    return this.Http.delete(`${this.baseUrl}api/v1/supalogic/worldsoccer`);
  }

  clearWorldKnowledgeTable() {
    return this.Http.delete(`${this.baseUrl}api/v1/supalogic/worldknowledge`);
  }
  clearWorldAmericanTable() {
    return this.Http.delete(`${this.baseUrl}api/v1/supalogic/worldamerican`);
  }
}
