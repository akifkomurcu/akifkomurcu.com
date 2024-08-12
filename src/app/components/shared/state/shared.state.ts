import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { SharedStateModel } from './shared.model';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { LoadAllArticles } from './shared.actions';
import { DocumentsLoaderService } from '../services/documents-loader.service';

@State<SharedStateModel>({
  name: 'shared',
  defaults: {
    articles: []
  }
})
//
@Injectable()
export class SharedState {

  constructor(
    private readonly documentsLoaderService: DocumentsLoaderService
  ) {}

  @Selector()
  public static getState(state: SharedStateModel) {
    return state;
  }

  @Action(LoadAllArticles)
  setArticlesName(
    { getState, patchState }: StateContext<SharedStateModel>) {
    return this.documentsLoaderService.loadAllDocumentsName()
      .pipe(
        tap((value: any) => {
          patchState({
            articles: value,
          });
        }),
        catchError((err) => {
          return throwError(err);
        }),
      );
  }
}
