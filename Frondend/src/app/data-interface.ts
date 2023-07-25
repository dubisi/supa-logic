export interface Results {
  color: string;
  letter: string;
}

export interface Word {
  id: number;
  wordClue: string;
  word: string;
}

export interface PostWord {
  wordClue: string | null;
  word: string | null;
}

export interface User{
  name: string | null;
  password: string | null;
}